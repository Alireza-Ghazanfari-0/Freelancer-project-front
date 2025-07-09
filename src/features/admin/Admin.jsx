import React from "react";
import Layout from "../../ui/Layout";
import RightPanel from "../../ui/RightPanel";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { RiListCheck3 } from "react-icons/ri";
import { PiProjectorScreenLight } from "react-icons/pi";
import { MdOutlineCategory } from "react-icons/md";
import RightPanelNavLink from "../../ui/RightPanelNavLink";

function Admin() {
  return (
    <Layout>
      <RightPanel>
        <RightPanelNavLink
          to="dashboard"
          label="داشبورد"
          icon={<RxDashboard className="w-6 h-6" />}
        />
        <RightPanelNavLink
          to="users"
          label="کاربران"
          icon={<FaUsers className="w-6 h-6" />}
        />
        <RightPanelNavLink
          to="projects"
          label="پروژه ها"
          icon={<RiListCheck3 className="w-6 h-6" />}
        />
        <RightPanelNavLink
          to="proposals"
          label="پروپوزال ها"
          icon={<PiProjectorScreenLight className="w-6 h-6" />}
        />
        <RightPanelNavLink
          to="Categories"
          label="دسته بندی ها"
          icon={<MdOutlineCategory className="w-6 h-6" />}
        />
      </RightPanel>
    </Layout>
  );
}

export default Admin;
