import React from 'react';
import { Toast } from 'primereact/toast';
import { useToast } from '../hooks/useToast';

type PositionType = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
interface ToastProps {
  position?: PositionType; // Optional position prop (default: 'top-right')
}

export const Toaster = ({ position = 'top-right' }: ToastProps) => {
  const { toastRef } = useToast();

  return <Toast ref={toastRef} position={position} />;
};