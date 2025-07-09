import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ItemSelection({ optionList, selectItem }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState(searchParams.get(selectItem));

  useEffect(() => {
    if (!searchParams.get(selectItem)) {
      searchParams.set(selectItem, optionList[0].value);
      setSearchParams(searchParams);
    }
  }, [selectItem, optionList, searchParams, setSearchParams]);

  const handleClick = function (e) {
    e.preventDefault();
    searchParams.set(selectItem, e.target.value);
    setSearchParams(searchParams);
    setActive(e.target.value);
  };

  return (
    <div className="flex items-center gap-x-2">
      <span className="text-otp-input-text">وضعیت:</span>
      <div className="h-7 flex sm:flex-row rounded-lg bg-white text-sm gap-y-2">
        {optionList.map((item) => (
          <button
            key={item.value}
            className={`${
              item.value == active && " bg-success rounded-lg"
            } rounded-lg px-2 cursor-pointer w-11`}
            value={item.value}
            onClick={handleClick}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ItemSelection;
