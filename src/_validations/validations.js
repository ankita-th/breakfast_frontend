// export const requiredValidation = (fieldName = "This field") => {
//   return { required: `${fieldName} is required` };
// };
export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const INVALID_EMAIL_MESSAGE = "Please enter a valid email";
export const requiredValidation = {
  first_name: {
    required: "First Name is required",
  },
  last_name: {
    required: "Last Name is required",
  },
  email : {
    required: "Email is required",
    pattern: {
      value: EMAIL_REGEX,
      message: INVALID_EMAIL_MESSAGE,
    },
  },
  phone_no: {
    required: "Phone no is required",
    pattern: {
      value: /^(?:46|0)[\d\s\-]{7,13}$/,
      message: "Please enter a valid Swedish phone number",
    },
  },
  
  password: {
    required: "Password is required",
  },
  confirm_password:{
    required: "Confirm Password is required"
  },
 
};
