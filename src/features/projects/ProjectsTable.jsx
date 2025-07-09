import React, { useState } from "react";
import useOwnerProjects from "./useOwnerProjects";
import Loader from "../../ui/Loader";
import { TbMoodEmpty } from "react-icons/tb";
import { PiEmptyBold } from "react-icons/pi";
import toast from "react-hot-toast";
import textSummarizer from "../../utilities/textSummarizer";
import {
  dateInterfaceChangerIran,
  dateInterfaceChangerUS,
} from "../../utilities/dateInterfaceChanger";
import currencyInterfaceChanger from "../../utilities/currencyInterfaceChanger";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { MdOutlineEditNote } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import Modal from "../../ui/Modal";
import DeleteProject from "../../ui/DeleteProject";
import AddNewProject from "../projects/AddNewProject";
import { Link, useLocation } from "react-router-dom";

function ProjectsTable() {
  // const a = useLocation();
  // console.log(a);

  const { isLoading, projects, error, isError } = useOwnerProjects();

  if (isError) {
    toast.error(error?.response?.data?.message);
    return;
  }
  if (isLoading) return <Loader />;
  // console.log(projects);

  if (!projects.length)
    return (
      <div className=" flex items-center justify-center gap-x-2">
        <PiEmptyBold className="size-6 text-error" />
        <span className="text-xl text-text">پروژه ای وجود ندارد!</span>
        <TbMoodEmpty className="size-6 text-error" />
      </div>
    );

  return (
    <div className="rounded-xl h-full overflow-y-auto">
      <table className="w-full">
        <thead className="table-header whitespace-nowrap z-9 sticky top-0 ">
          <tr className="">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
            <th>درخواستها </th>
          </tr>
        </thead>
        <tbody className="">
          {projects.map((item, index) => (
            <TableRow key={item._id} project={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsTable;

const TableRow = function ({ project, index }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <tr className="table-row hover:bg-sidebar">
      <td>{index + 1}</td>
      <td>{textSummarizer(project.title, "25")}</td>
      <td>{project.category?.title || "-"}</td>
      <td>
        {currencyInterfaceChanger(project.budget, project.budgetCurrency)}
      </td>
      <td>
        {dateInterfaceChangerIran(project.deadline)}{" "}
        {dateInterfaceChangerUS(project.deadline)}
      </td>
      <td>
        {project.tags.map((item, index) => (
          <div
            key={index}
            className="rounded-xl inline-block whitespace-nowrap px-1 m-1 bg-sidebar text-otp-input-text"
          >
            {item}
          </div>
        ))}
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <Operation
          project={project}
          openDelete={openDelete}
          setOpenDelete={setOpenDelete}
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
        />
      </td>
      <td>
        <Requests project={project} />
      </td>
    </tr>
  );
};

const Operation = function ({
  project,
  openDelete,
  setOpenDelete,
  openEdit,
  setOpenEdit,
}) {
  return (
    <div className=" flex gap-x-2">
      <span>
        <MdOutlineEditNote
          className="size-6 cursor-pointer text-green-700"
          onClick={() => setOpenEdit(true)}
        />
      </span>
      <Modal
        title={`ادیت پروژه ${project.title}`}
        openWindow={openEdit}
        setOpenWindow={setOpenEdit}
      >
        <AddNewProject setOpenWindow={setOpenEdit} project={project} />
      </Modal>

      <span>
        <MdDeleteForever
          className="size-6 cursor-pointer text-error"
          onClick={() => setOpenDelete(true)}
        />
      </span>
      <Modal
        title={`حذف پروژه ${project.title}`}
        openWindow={openDelete}
        setOpenWindow={setOpenDelete}
      >
        <DeleteProject projectId={project._id} setOpenWindow={setOpenDelete} />
      </Modal>
    </div>
  );
};

const Requests = function ({ project }) {
  return (
    <Link className="flex justify-center" to={project._id}>
      <IoMdEye className="size-6 text-primary cursor-pointer" />
    </Link>
  );
};
