import React from "react";
import Loader from "../ui/Loader";
import { GrProjects } from "react-icons/gr";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import useOwnerProjects from "../features/projects/useOwnerProjects";
import toast from "react-hot-toast";

function OwnerDashboard() {
  const { isLoading, projects, error, isError } = useOwnerProjects();
  if (isError) {
    toast.error(error?.response?.data?.message);
    return;
  }
  if (isLoading) return <Loader />;
  // console.log(projects);

  const requestsNumber = projects
    .map((project) => project.proposals.length)
    .reduce((acc, curr) => acc + curr, 0);
  // console.log(requests);

  return (
    <div className=" flex flex-col h-full w-full space-y-7 ">
      <div className=" text-title font-bold text-2xl mt-15 text-start ps-10">
        آمار کلی
      </div>
      <div className="gap-4 flex justify-center flex-wrap ">
        <div className="bg-stat-card w-[18rem] h-[12rem] flex items-center ps-5 gap-x-8 rounded">
          <span className="rounded-full bg-white p-5">
            <GrProjects size="80" />
          </span>
          <span className="space-y-2 text-start">
            <div className="text-xl text-stat-title">پروژه ها</div>
            <div className=" text-2xl font-bold text-stat-value">
              {projects.length}
            </div>
          </span>
        </div>
        <div className="bg-stat-card w-[18rem] h-[12rem] flex items-center ps-5 gap-x-8 rounded">
          <span className="rounded-full bg-white p-5">
            <MdOutlineAssignmentTurnedIn size="80" />
          </span>
          <span className="space-y-2 text-start">
            <div className="text-xl text-stat-title">پروژه های واگذار شده</div>
            <div className=" text-2xl font-bold text-stat-value">
              {projects.filter((p) => p.status === "CLOSED").length}
            </div>
          </span>
        </div>
        <div className="bg-stat-card w-[18rem] h-[12rem] flex items-center ps-5 gap-x-8 rounded">
          <span className="rounded-full bg-white p-5">
            <VscGitPullRequestGoToChanges size="80" />
          </span>
          <span className="space-y-2 text-start">
            <div className="text-xl text-stat-title">درخواست ها</div>
            <div className=" text-2xl font-bold text-stat-value">
              {requestsNumber}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
export default OwnerDashboard;
