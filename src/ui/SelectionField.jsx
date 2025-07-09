import React from "react";

function SelectionField({
  name,
  label,
  register,
  errors,
  validationCondition = {},
  classParameter = "",
  options = [],
}) {
  // console.log(options);

  return (
    <div className={classParameter}>
      <label
        htmlFor={name}
        className="block mb-2 text-modal-text font-semibold"
      >
        {label}
      </label>
      <select
        name={name}
        id={name}
        {...register(name, validationCondition)}
        className="input-field w-full text-center"
      >
        {options.map((item) => (
          <option key={item.value || item._id} value={item.value || item._id}>
            {item.title}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <p className="text-error bg-white mt-1 rounded inline-block px-1 text-sm">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
}

export default SelectionField;
