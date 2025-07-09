import React from "react";
import AllProjectsTable from "../features/freelancer/projects/AllProjectsTable";

import AllProjectsHeader from "../features/freelancer/projects/AllProjectsHeader";

function FreelancerProjects() {
  return (
    <div className="w-full h-full flex flex-col space-y-7 ">
      <AllProjectsHeader />
      <div className="max-h-[65%]">
        <AllProjectsTable />
      </div>
    </div>
  );
}

export default FreelancerProjects;
