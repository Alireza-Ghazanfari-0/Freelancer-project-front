import React, { useState } from "react";
import useUsers from "../useUsers";
import Loader from "../../../ui/Loader";
import { MdOutlineEditNote } from "react-icons/md";
import Modal from "../../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStatus";
import toast from "react-hot-toast";

function UsersTable() {
  const { isLoading, users, isError, error } = useUsers();
  if (isError) {
    toast.error(error?.response?.data?.message);
    return;
  }
  if (isLoading) return <Loader />;
  if (!users.length)
    return (
      <div className=" flex items-center justify-center gap-x-2">
        <PiEmptyBold className="size-6" />
        <span className="text-xl">کاربری وجود ندارد!</span>
        <TbMoodEmpty className="size-6" />
      </div>
    );
  return (
    <div className="rounded-xl h-full overflow-y-auto">
      <table className="w-full">
        <thead className="table-header whitespace-nowrap z-9 sticky top-0 ">
          <tr className="">
            <th>#</th>
            <th>نام</th>
            <th>ایمل</th>
            <th>شماره تماس</th>
            <th>نقش</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="">
          {users.map((item, index) => (
            <TableRow key={item._id} user={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;

const TableRow = function ({ user, index }) {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <tr className="table-row hover:bg-sidebar">
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>
        <UserRole role={user.role} />
      </td>
      <td>
        <UserStatus status={user.status} />
      </td>
      <td>
        <Operation user={user} openEdit={openEdit} setOpenEdit={setOpenEdit} />
      </td>
    </tr>
  );
};

const UserRole = function ({ role }) {
  const roleArray = [
    { english: "ADMIN", persian: "ادمین" },
    { english: "OWNER", persian: "کارفرما" },
    { english: "FREELANCER", persian: "فریلنسر" },
  ];
  // در زیر از fild میشه استفاده کرد و دگ لازم نیس selected داخل براکت باشه
  const [selected] = roleArray.filter((item) => item.english === role);
  return <div>{selected.persian}</div>;
};
const UserStatus = function ({ status }) {
  const statusArray = [
    { statusCode: "رد شده", statusColor: "bg-error" },
    { statusCode: "در انتظار تایید", statusColor: "bg-warning" },
    { statusCode: "تایید شده", statusColor: "bg-success" },
  ];
  return (
    <div
      className={`text-black rounded-2xl inline-block px-2 py-1 ${statusArray[status].statusColor}`}
    >
      {statusArray[status].statusCode}
    </div>
  );
};

const Operation = function ({ user, openEdit, setOpenEdit }) {
  return (
    <div className=" flex justify-center">
      <span>
        <MdOutlineEditNote
          className="size-6 cursor-pointer text-green-700"
          onClick={() => setOpenEdit(true)}
        />
      </span>
      <Modal
        title={`تغییر وضعیت کاربر ${user.name}`}
        openWindow={openEdit}
        setOpenWindow={setOpenEdit}
      >
        <ChangeUserStatus setOpenWindow={setOpenEdit} user={user} />
      </Modal>
    </div>
  );
};
