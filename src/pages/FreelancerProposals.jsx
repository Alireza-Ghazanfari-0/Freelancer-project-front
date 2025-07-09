import React from "react";
import useProposals from "../features/proposals/useProposals";
import ProposalsTable from "../features/proposals/ProposalsTable";

function FreelancerProposals() {
  const { isLoading, proposals } = useProposals();
  return (
    <div className="w-full h-full flex flex-col space-y-7 ">
      <div className="text-title text-xl font-bold text-start  mt-15 ps-10">
        {" "}
        پروپوزال های درخواستی شما
      </div>
      <div className="max-h-[70%]">
        <ProposalsTable />
      </div>
    </div>
  );
}

export default FreelancerProposals;
