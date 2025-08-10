import { ToastShowParams } from "react-native-toast-message";
import Toast from "react-native-toast-message";

export const showToastMessage = (params: ToastShowParams) => {
  Toast.show(params);
};
