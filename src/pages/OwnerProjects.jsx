import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CgFileDocument } from "react-icons/cg";
import TextSummarizer from "../utilities/textSummarizer";
import ProjectsTable from "../features/projects/ProjectsTable";
import Modal from "../ui/Modal";
import AddNewProject from "../features/projects/AddNewProject";

function OwnerProjects() {
  const [addProjectOpen, setAddProjectOpen] = useState(false);
  return (
    <div className="h-full w-full flex flex-col">
      <div className="mt-10 mb-8 ms-5 flex gap-x-20">
        <span className="flex items-center gap-x-1 text-title">
          <h1 className="text-2xl"> پروژه های شما</h1>
          <CgFileDocument className="size-7" />
        </span>
        {/* مدال باید اضافه کرد */}
        <button
          className="btn flex items-center gap-x-1"
          onClick={() => setAddProjectOpen(true)}
        >
          <IoMdAddCircleOutline className="size-6" />
          <span>افزودن پروژه جدید</span>
        </button>
        <Modal
          openWindow={addProjectOpen}
          setOpenWindow={setAddProjectOpen}
          title="افزودن پروژه جدید"
        >
          <AddNewProject setOpenWindow={setAddProjectOpen} />
        </Modal>
      </div>
      <div className="max-h-[70%]">
        <ProjectsTable />
      </div>
    </div>
  );
}

export default OwnerProjects;
