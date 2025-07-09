import React from "react";
import useProposals from "../features/proposals/useProposals";
import { PiProjectorScreenLight } from "react-icons/pi";
import { FcAcceptDatabase } from "react-icons/fc";
import { MdOutlineAttachMoney } from "react-icons/md";
import Loader from "../ui/Loader";

function FreelancerDashboard() {
  const { isLoading, proposals, isError, error } = useProposals();

  if (isError) {
    toast.error(error?.response?.data?.message);
    return;
  }

  if (isLoading) return <Loader />;
  // console.log(projects);

  const acceptedProposals = proposals.filter((p) => p.status === 2);
  // console.log(proposals);

  const balanceDolar = acceptedProposals
    .filter((proposals) => proposals.budgetCurrency === "dolar")
    .reduce((acc, curr) => acc + curr.price, 0);
  // console.log(balanceDolar);

  const balanceRial = acceptedProposals
    .filter((proposals) => proposals.budgetCurrency !== "dolar")
    .reduce((acc, curr) => acc + curr.price, 0);
  // console.log(balanceRial);

  // const balanceTotal = balance1.reduce((acc, curr) => acc + curr, 0) + "دلار" + balance2.reduce((acc, curr) => acc + curr, 0) + "ریال";
  // .reduce((acc, curr) => acc + curr, 0);
  // console.log(sumRial);
  // const sumDolar=
  return (
    <div className=" flex flex-col h-full w-full space-y-7 ">
      <div className=" text-title font-bold text-2xl mt-15 text-start ps-10">
        آمار کلی
      </div>
      <div className="gap-4 flex justify-center flex-wrap ">
        <div className="bg-stat-card w-[18rem] h-[12rem] flex items-center ps-5 gap-x-8 rounded">
          <span className="rounded-full bg-white p-5">
            <PiProjectorScreenLight size="80" />
          </span>
          <span className="space-y-2 text-start">
            <div className="text-xl text-stat-title">پروپوزال ها</div>
            <div className=" text-2xl font-bold text-stat-value">
              {proposals.length}
            </div>
          </span>
        </div>
        <div className="bg-stat-card w-[18rem] h-[12rem] flex items-center ps-5 gap-x-8 rounded">
          <span className="rounded-full bg-white p-5">
            <FcAcceptDatabase size="80" />
          </span>
          <span className="space-y-2 text-start">
            <div className="text-xl text-stat-title">
              پروپوزال های پذیرفته شده
            </div>
            <div className=" text-2xl font-bold text-stat-value">
              {acceptedProposals.length}
            </div>
          </span>
        </div>
        <div className="bg-stat-card w-[18rem] h-[12rem] flex items-center ps-5 gap-x-8 rounded">
          <span className="rounded-full bg-white p-5">
            <MdOutlineAttachMoney size="80" />
          </span>
          <span className="space-y-2 text-start">
            <div className="text-xl text-stat-title">کیف پول</div>
            <div className="  font-bold text-stat-value ">
              {balanceDolar > 0 && `${balanceDolar.toLocaleString()} دلار`}
              <br />
              {balanceRial > 0 && `${balanceRial.toLocaleString()} ریال`}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FreelancerDashboard;
