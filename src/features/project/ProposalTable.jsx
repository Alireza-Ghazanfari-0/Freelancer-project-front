import React, { useState } from "react";
import { TbMoodEmpty } from "react-icons/tb";
import textSummarizer from "../../utilities/textSummarizer";
import currencyInterfaceChanger from "../../utilities/currencyInterfaceChanger";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import ChangeProposalStatus from "./ChangeProposalStatus";
import Modal from "../../ui/Modal";

function ProposalTable({ project }) {
  const { proposals } = project;
  if (!proposals.length)
    return (
      <div className=" text-error font-extrabold mt-5 text-xl flex items-center justify-center gap-x-2">
        <span>پروپوزالی وجود ندارد ! </span>
        <TbMoodEmpty className="size-6" />
      </div>
    );
  return (
    <div className="rounded-xl h-full overflow-y-auto">
      <table className="w-full">
        <thead className="table-header whitespace-nowrap z-9 sticky top-0 ">
          <tr className="">
            <th>#</th>
            <th>فریلنسر </th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="">
          {proposals.map((item, index) => (
            <TableProposalRow key={item._id} proposal={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TableProposalRow = function ({ proposal, index }) {
  const [openStatus, setOpenStatus] = useState(false);

  // console.log(proposal);

  return (
    <tr className="table-row hover:bg-sidebar">
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>{textSummarizer(proposal.description, 50)}</td>
      <td>{proposal.duration} روز</td>
      <td>
        {currencyInterfaceChanger(proposal.price, proposal.budgetCurrency)}
      </td>
      <td>
        <ProposalStatus proposal={proposal} />
      </td>
      <td>
        <Operation
          proposal={proposal}
          openStatus={openStatus}
          setOpenStatus={setOpenStatus}
        />
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
const Operation = function ({ proposal, openStatus, setOpenStatus }) {
  return (
    <div className=" flex  items-center justify-center">
      <span className="">
        <MdOutlinePublishedWithChanges
          className="size-6 cursor-pointer"
          onClick={() => setOpenStatus(true)}
        />
      </span>
      <Modal
        title="تغییر وضعیت درخواست پروپوزال"
        openWindow={openStatus}
        setOpenWindow={setOpenStatus}
      >
        <ChangeProposalStatus
          setOpenWindow={setOpenStatus}
          proposal={proposal}
        />
      </Modal>
    </div>
  );
};

export default ProposalTable;
