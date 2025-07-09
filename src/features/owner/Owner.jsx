import React from "react";
import RightPanel from "../../ui/RightPanel";
import Layout from "../../ui/Layout";
import { RxDashboard } from "react-icons/rx";
import { RiListCheck3 } from "react-icons/ri";
import RightPanelNavLink from "../../ui/RightPanelNavLink";

function Owner() {
  return (
    <Layout>
      <RightPanel>
        <RightPanelNavLink
          to="dashboard"
          label="داشبورد"
          icon={<RxDashboard className="w-6 h-6" />}
        />
        <RightPanelNavLink
          to="projects"
          label="پروژه ها "
          icon={<RiListCheck3 className="w-6 h-6" />}
        />
      </RightPanel>
    </Layout>
  );
}

export default Owner;
