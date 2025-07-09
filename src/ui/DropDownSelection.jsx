import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function DropDownSelection({ optionList = [], searchItem }) {
  //   console.log(optionList);

  const [searchParams, setSearchParams] = useSearchParams();
  //   console.log(optionList[0].value);
  const parameterValue = searchParams.get(searchItem) || "";

  useEffect(() => {
    if (!searchParams.get(searchItem) && optionList.length > 0) {
      searchParams.set(searchItem, optionList[0].value);
      setSearchParams(searchParams);
    }
  }, [searchItem, optionList, searchParams, setSearchParams]);

  const handleChange = function (e) {
    e.preventDefault();
    searchParams.set(searchItem, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <select
      className="btn flex items-center text-sm max-w-[14rem] md:max-w-[20rem]"
      value={parameterValue}
      onChange={handleChange}
    >
      {optionList.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default DropDownSelection;

// DropDownSelection <IoMdArrowDropdown />
