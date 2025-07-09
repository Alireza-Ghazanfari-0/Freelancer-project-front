import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

function Modal({ title, openWindow, setOpenWindow, children }) {
  const ref = useRef();
  useEffect(() => {
    // console.log(openWindow);

    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenWindow(false);
      }
    }
    // true در زیر ب فاز بابلینگ و کپچرینگ برمیگردد . اگر نباشد درست اجرا نمیشود
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [openWindow]);

  return (
    openWindow && (
      <div className="flex items-center justify-center h-screen w-screen backdrop-blur z-10 absolute top-0 right-0">
        <div
          ref={ref}
          className="flex flex-col z-20 bg-modal-bg rounded p-2 space-y-2 min-w-lg max-w-screen-xl max-h-[80%] overflow-y-auto"
        >
          <div className="flex justify-between bg-modal-header rounded">
            <span className=" text-title text-lg font-semibold ps-2">
              {title}
            </span>
            <span>
              <IoClose
                className="size-6 text-error cursor-pointer"
                onClick={() => setOpenWindow(false)}
              />
            </span>
          </div>
          <hr />
          <div className="mt-1 container">{children}</div>
        </div>
      </div>
    )
  );
}

export default Modal;
