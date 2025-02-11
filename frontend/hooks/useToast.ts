import { useRef } from 'react';
import {Toast} from "primereact/toast";

export const useToast = () => {
  const toastRef = useRef<Toast>(null);

  // Method to show success messages
  const showSuccess = (message: string) => {
    if (toastRef.current) {
      toastRef.current.show({
        severity: 'success',
        summary: 'Success',
        detail: message,
        life: 3000, // Auto-hide after 3 seconds
      });
    }
  };

  // Method to show error messages
  const showError = (message: string) => {
    if (toastRef.current) {
      toastRef.current.show({
        severity: 'error',
        summary: 'Error',
        detail: message,
        life: 3000, // Auto-hide after 3 seconds
      });
    }
  };

  return {
    toastRef,
    showSuccess,
    showError,
  };
};