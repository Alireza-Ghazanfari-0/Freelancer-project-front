import React from "react";
import Loader from "../../ui/Loader";
import useProposals from "./useProposals";
import textSummarizer from "../../utilities/textSummarizer";
import currencyInterfaceChanger from "../../utilities/currencyInterfaceChanger";
import { PiEmptyBold } from "react-icons/pi";
import { TbMoodEmpty } from "react-icons/tb";
import toast from "react-hot-toast";

function ProposalsTable() {
  const { isLoading, proposals, isError, error } = useProposals();

  if (isError) {
    toast.error(error?.response?.data?.message);
    return;
  }
  if (isLoading) return <Loader />;
  // console.log(projects);

  if (!proposals.length)
    return (
      <div className=" flex items-center justify-center gap-x-2">
        <PiEmptyBold className="size-6" />
        <span className="text-xl">پروپوزالی وجود ندارد!</span>
        <TbMoodEmpty className="size-6" />
      </div>
    );

  return (
    <div className="rounded-xl h-full overflow-y-auto">
      <table className="w-full">
        <thead className="table-header whitespace-nowrap z-9 sticky top-0 ">
          <tr className="">
            <th>#</th>
            <th>توضیحات</th>
            <th>مدت زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((item, index) => (
            <TableRow key={item._id} proposal={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProposalsTable;

const TableRow = function ({ proposal, index }) {
  return (
    <tr className="table-row hover:bg-sidebar">
      <td>{index + 1}</td>
      <td>{textSummarizer(proposal.description, 50)}</td>
      <td>{proposal.duration} روز</td>
      <td>
        {currencyInterfaceChanger(proposal.price, proposal.budgetCurrency)}
      </td>

      <td>
        <ProposalStatus proposal={proposal} />
      </td>
    </tr>
  );
};

const ProposalStatus = function ({ proposal }) {
  const statusArray = [
    { statusCode: "رد شده", statusColor: "bg-error" },
    { statusCode: "در انتظار تایید", statusColor: "bg-warning" },
    { statusCode: "تایید شده", statusColor: "bg-success" },
  ];
  return (
    <div
      className={`text-black rounded-2xl inline-block px-2 py-1 ${
        statusArray[proposal.status].statusColor
      }`}
    >
      {statusArray[proposal.status].statusCode}
    </div>
  );
};
