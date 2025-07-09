import React from "react";
import UsersTable from "../features/admin/users/usersTable";

function AdminUsers() {
  return (
    <div className="h-full w-full flex flex-col gap-y-10">
      <div className="text-title font-bold text-2xl mt-15 text-start ps-10">
        لیست کاربران
      </div>
      <div className="max-h-[70%]">
        <UsersTable />
      </div>
    </div>
  );
}

export default AdminUsers;
