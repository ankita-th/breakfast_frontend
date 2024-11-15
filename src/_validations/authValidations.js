// regex
export const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{6,}$/g;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const INVALID_EMAIL_MESSAGE = "Please enter a valid email";
export const LoginValidations = {
  email: {
    required: "Email is required",
    pattern: {
      value: EMAIL_REGEX,
      message: INVALID_EMAIL_MESSAGE,
    },
  },
  password: {
    required: "Password is required",
  },
};
