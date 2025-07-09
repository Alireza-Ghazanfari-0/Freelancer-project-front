import React from "react";

function TextInputField({
  name,
  type,
  label,
  register,
  errors,
  validationCondition = {},
  classParameter = "",
}) {
  return (
    <div className={classParameter}>
      <label
        htmlFor={name}
        className="block mb-2 text-modal-text font-semibold"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...register(name, validationCondition)}
        className="input-field w-full text-center"
      />
      {errors && errors[name] && (
        <p className="text-error bg-white mt-1 rounded inline-block px-1 text-sm">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
}
export default TextInputField;
