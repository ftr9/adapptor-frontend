// PerformApiAction.test.tsx
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { PerformApiAction } from "../PerformApiAction";

jest.mock("@/services/api", () => ({
  BASE_API: {
    post: jest.fn(),
  },
}));

jest.mock("@/utils/showToastMessage", () => ({
  showToastMessage: jest.fn(),
}));

import { BASE_API } from "@/services/api";
import { showToastMessage } from "@/utils/showToastMessage";

describe("<PerformApiAction />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows loading state while API request is ongoing", async () => {
    // Make POST promise not resolve immediately to test loading
    let resolvePromise: () => void;
    const postPromise = new Promise<void>((resolve) => {
      resolvePromise = resolve;
    });

    (BASE_API.post as jest.Mock).mockReturnValue(postPromise);

    const { getByTestId, getByText } = render(<PerformApiAction />);

    const button = getByTestId("performActionBtn");

    fireEvent.press(button);

    // Button should show loading state
    const loadingIndicator = getByTestId("activity-indicator");
    expect(loadingIndicator).toBeVisible();

    // Resolve promise so loading ends
    resolvePromise!();

    // Wait for component state update
    await waitFor(() => {
      getByText("Perform Api Action");
    });
  });

  it("calls showToastMessage with success on successful API call", async () => {
    (BASE_API.post as jest.Mock).mockResolvedValue({});

    const { getByTestId } = render(<PerformApiAction />);

    fireEvent.press(getByTestId("performActionBtn"));

    await waitFor(() => {
      expect(showToastMessage).toHaveBeenCalledWith({
        type: "success",
        text1: "success",
        text2: "Successfully proccessed json body",
      });
    });
  });

  it("calls showToastMessage with error message on API error", async () => {
    // Mock AxiosError shape
    const errorResponse = {
      response: { data: { message: "Error from server" } },
      isAxiosError: true,
    };

    (BASE_API.post as jest.Mock).mockRejectedValue(errorResponse);

    const { getByTestId } = render(<PerformApiAction />);

    fireEvent.press(getByTestId("performActionBtn"));

    await waitFor(() => {
      expect(showToastMessage).toHaveBeenCalledWith({
        type: "error",
        text1: "Failed",
        text2: "something went wrong",
      });
    });
  });

  it("calls showToastMessage with generic error on unknown error", async () => {
    (BASE_API.post as jest.Mock).mockRejectedValue(new Error("Unknown error"));

    const { getByTestId } = render(<PerformApiAction />);

    fireEvent.press(getByTestId("performActionBtn"));

    await waitFor(() => {
      expect(showToastMessage).toHaveBeenCalledWith({
        type: "error",
        text1: "Failed",
        text2: "something went wrong",
      });
    });
  });
});
