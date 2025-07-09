import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../services/proposalServices";
import Loader from "../../ui/Loader";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function ChangeProposalStatus({ proposal, setOpenWindow }) {
  const { id } = useParams();
  const idd = id;
  // console.log(idd);

  const queryClient = useQueryClient();

  const [optionValue, setOptionValue] = useState(proposal.status);
  // console.log(optionValue);
  const { isPending, mutateAsync: changeProposalStatusFunction } = useMutation({
    mutationFn: changeProposalStatusApi,
  });

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      const res = await changeProposalStatusFunction({
        id: proposal._id,
        data: { status: optionValue },
      });
      toast.success(res.message);
      // console.log(res);

      queryClient.invalidateQueries({ queryKey: ["single-project", idd] });
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
      <label className="text-xl" htmlFor="statusId">
        تغییر وضعیت
      </label>
      <select
        name="statusOption"
        id="statusId"
        className="w-full bg-otp-input rounded p-2 text-center font-semibold text-otp-input-text"
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

export default ChangeProposalStatus;
