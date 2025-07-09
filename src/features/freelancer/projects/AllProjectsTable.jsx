import React, { useState } from "react";
import useAllProjects from "../../../hooks/useAllProjects";
import Loader from "../../../ui/Loader";
import { TbMoodEmpty } from "react-icons/tb";
import { PiEmptyBold } from "react-icons/pi";
import toast from "react-hot-toast";
import textSummarizer from "../../../utilities/textSummarizer";
import {
  dateInterfaceChangerIran,
  dateInterfaceChangerUS,
} from "../../../utilities/dateInterfaceChanger";
import currencyInterfaceChanger from "../../../utilities/currencyInterfaceChanger";
import { MdOutlineEditNote } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import Modal from "../../../ui/Modal";
import AddNewProposal from "../../proposals/AddNewProposal";

function AllProjectsTable() {
  useAllProjects();

  const { isLoading, projects, isError, error } = useAllProjects();
  if (isError) {
    toast.error(error?.response?.data?.message);
    return;
  }
  if (isLoading) return <Loader />;
  // console.log(projects);
  if (!projects.length)
    return (
      <div className=" flex items-center justify-center gap-x-2">
        <PiEmptyBold className="size-6" />
        <span className="text-xl">پروژه ای وجود ندارد!</span>
        <TbMoodEmpty className="size-6" />
      </div>
    );
  return (
    <div className="rounded-xl h-full overflow-y-auto">
      <table className="w-full text-table-text">
        <thead className="table-header whitespace-nowrap z-9 sticky top-0 ">
          <tr className="">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((item, index) => (
            <TableRow key={item._id} project={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllProjectsTable;

const TableRow = function ({ project, index }) {
  const [openOperation, setOpenOperation] = useState(false);

  return (
    <tr className="table-row hover:bg-sidebar">
      <td>{index + 1}</td>
      <td>{textSummarizer(project.title, "40")}</td>
      <td>
        {currencyInterfaceChanger(project.budget, project.budgetCurrency)}
      </td>
      <td>
        {dateInterfaceChangerIran(project.deadline)}{" "}
        {dateInterfaceChangerUS(project.deadline)}
      </td>
      <td>
        <ProjectStatus status={project.status} />
      </td>
      <td>
        <Operation
          project={project}
          openOperation={openOperation}
          setOpenOperation={setOpenOperation}
        />
      </td>
    </tr>
  );
};

const Operation = function ({ project, openOperation, setOpenOperation }) {
  return (
    <div className="flex justify-center">
      <span>
        <MdOutlineEditNote
          className="size-6 cursor-pointer text-green-700"
          onClick={() => setOpenOperation(true)}
        />
      </span>
      <Modal
        title={`درخواست ثبت پروپوزال برای پروژه ${project.title}`}
        openWindow={openOperation}
        setOpenWindow={setOpenOperation}
      >
        <AddNewProposal setOpenWindow={setOpenOperation} project={project} />
      </Modal>
    </div>
  );
};

const ProjectStatus = function ({ status }) {
  const selectedStatus =
    status === "OPEN"
      ? { statusCode: "باز", statusColor: "bg-success" }
      : { statusCode: "بسته", statusColor: "bg-warning" };
  return (
    <div
      className={`text-black rounded-2xl inline-block px-2 py-1 ${selectedStatus.statusColor}`}
    >
      {selectedStatus.statusCode}
    </div>
  );
};
