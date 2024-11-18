export const requiredValidation = (fieldName = "This field") => {
  return { required: `${fieldName} is required` };
};
