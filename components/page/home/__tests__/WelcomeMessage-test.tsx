// WelcomeMessage.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react-native";
import { WelcomeMessage } from "../WelcomeMessage";

// Mock the useFetch hook
jest.mock("@/hooks/useFetch", () => ({
  useFetch: jest.fn(),
}));

import { useFetch } from "@/hooks/useFetch";

describe("<WelcomeMessage />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state", () => {
    (useFetch as jest.Mock).mockReturnValue({
      isFetching: true,
      data: null,
      error: null,
    });

    render(<WelcomeMessage />);

    expect(screen.getByText("Fetching ...")).toBeTruthy();
  });

  it("renders error state", () => {
    (useFetch as jest.Mock).mockReturnValue({
      isFetching: false,
      data: null,
      error: "Network error",
    });

    render(<WelcomeMessage />);

    expect(screen.getByText("Network error")).toBeTruthy();
  });

  it("renders data when fetched successfully", () => {
    const mockData = "Welcome to the Adapptor App!";

    (useFetch as jest.Mock).mockReturnValue({
      isFetching: false,
      data: mockData,
      error: null,
    });

    const { getByText } = render(<WelcomeMessage />);

    const textElement = getByText(mockData);
    expect(textElement).toBeTruthy();
  });
});
