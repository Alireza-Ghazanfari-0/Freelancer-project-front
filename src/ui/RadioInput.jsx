import React from "react";

function RadioInput({
  label,
  name,
  register,
  value,
  errors,
  validationCondition,
  selectedValue,
}) {
  const isSelected = selectedValue === value;
  return (
    <div className="space-x-1">
      <input
        className="hidden"
        type="radio"
        id={value}
        {...register(name, validationCondition)}
        value={value}
      />
      <label
        htmlFor={value}
        className={`cursor-pointer px-4 py-2 font-semibold rounded-xl border text-sm transition-all
        ${
          isSelected
            ? "bg-[#F06292] text-white border-primary"
            : "bg-white border-gray-300 text-gray-700"
        }
      `}
      >
        {label}
      </label>
    </div>
  );
}

export default RadioInput;
