import React from "react";

const ErrorMessage = ({ fieldName, errors }) => {
  return (
    <>
      {errors?.[fieldName] && (
        <p className="text-red-500">{errors?.[fieldName]?.message}</p>
      )}
    </>
  );
};

export default ErrorMessage;
