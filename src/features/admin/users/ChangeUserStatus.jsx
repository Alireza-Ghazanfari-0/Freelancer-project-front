import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { changeUserStatusApi } from "../../../services/authenticationService";
import Loader from "../../../ui/Loader";
import toast from "react-hot-toast";

function ChangeUserStatus({ user, setOpenWindow }) {
  const queryClient = useQueryClient();
  const [optionValue, setOptionValue] = useState(user.status);
  // console.log(optionValue);
  const { isPending, mutateAsync: changeUserStatusFunction } = useMutation({
    mutationFn: changeUserStatusApi,
  });

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      const res = await changeUserStatusFunction({
        id: user._id,
        data: { status: optionValue },
      });
      toast.success(res.message);
      // console.log(res);

      queryClient.invalidateQueries({ queryKey: ["all-users"] });
      // console.log(res);
      setOpenWindow(false);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form
      className="flex flex-col items-center space-y-4 "
      onSubmit={handleSubmit}
    >
      <label className="text-xl text-modal-text" htmlFor="statusId">
        تغییر وضعیت
      </label>
      <select
        name="statusOption"
        id="statusId"
        className="input-field w-full rounded p-2 text-center font-semibold "
        value={optionValue}
        onChange={(e) => setOptionValue(e.target.value)}
      >
        <option value="0">رد شده</option>
        <option value="1">در انتظار تایید</option>
        <option value="2">تایید شده</option>
      </select>
      {isPending ? (
        <Loader />
      ) : (
        <button className="btn--confirm" type="submit">
          تایید
        </button>
      )}
    </form>
  );
}

export default ChangeUserStatus;
