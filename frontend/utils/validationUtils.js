// Validation Utility Functions
export const validateEmail = (email) => {
  if (!email) return 'Email is required';
  if (!/\S+@\S+\.\S+/.test(email)) return 'Email is invalid';
  return '';
};

export const validatePassword = (password) => {
  if (!password) return 'Password is required';
  if (
    password.length < 8 ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password)
  ) {
    return 'Password must be at least 8 characters long and include lowercase, uppercase, and numeric characters.';
  }
  return '';
};

// Combined Validation Function
export const validateForm = (formData) => {
  const errors = {};
  // Validate Email
  errors.email = validateEmail(formData.email);
  // Validate Password
  errors.password = validatePassword(formData.password);
  // Check if there are any errors
  const isValid = Object.values(errors).every((error) => !error);
  return { errors, isValid };
};