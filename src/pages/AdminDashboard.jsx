import React from "react";
import { GrProjects } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { PiProjectorScreenLight } from "react-icons/pi";
import useUsers from "../features/admin/useUsers";
import useAllProjects from "../hooks/useAllProjects";
import useProposals from "../features/proposals/useProposals";
import Loader from "../ui/Loader";

function AdminDashboard() {
  const { users, isLoading: isLoading1 } = useUsers();
  const { projects, isLoading: isLoading2 } = useAllProjects();
  const { proposals, isLoading: isLoading3 } = useProposals();
  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;
  return (
    <div className=" flex flex-col h-full w-full space-y-7 ">
      <div className=" text-title font-bold text-2xl mt-15 text-start ps-10">
        {" "}
        آمار کلی
      </div>
      <div className="gap-4 flex justify-center flex-wrap ">
        <div className="bg-stat-card w-[18rem] h-[12rem] flex items-center ps-5 gap-x-8 rounded">
          <span className="rounded-full bg-white p-5">
            <FaUsers size="80" />
          </span>
          <span className="space-y-2 text-start">
            <div className="text-xl text-stat-title">کاربران</div>
            <div className=" text-2xl font-bold text-stat-value">
              {users.length}
            </div>
          </span>
        </div>
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
            <PiProjectorScreenLight size="80" />
          </span>
          <span className="space-y-2 text-start">
            <div className="text-xl text-stat-title">پروپوزال ها</div>
            <div className=" text-2xl font-bold text-stat-value">
              {proposals.length}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
