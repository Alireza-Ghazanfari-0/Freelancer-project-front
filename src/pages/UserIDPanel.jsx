import React from "react";
import useUser from "../features/authentication/useUser";
import {
  dateInterfaceChangerIran,
  dateInterfaceChangerUS,
} from "../utilities/dateInterfaceChanger";
import Loader from "../ui/Loader";

function UserIDPanel() {
  const { isLoading, user } = useUser();

  if (isLoading) return <Loader />;
  const statusArray = [
    { statusCode: "رد شده", statusColor: "text-error" },
    { statusCode: "در انتظار تایید", statusColor: "text-warning" },
    { statusCode: "تایید شده", statusColor: "text-success" },
  ];

  return (
    <table className=" rounded-lg bg-sidebar-hover text-text ">
      <tbody className="font-bold">
        <tr className="">
          <td>نام: </td>
          <td>{user.name}</td>
        </tr>
        <tr>
          <td>ایمیل:</td>
          <td>{user.email}</td>
        </tr>
        <tr>
          <td>شماره تماس:</td>
          <td>{user.phoneNumber}</td>
        </tr>
        <tr>
          <td>نقش:</td>
          <td>
            <UserRole role={user.role} />
          </td>
        </tr>
        <tr>
          <td>وضعیت اکانت:</td>
          <td className={statusArray[user.status].statusColor}>
            {statusArray[user.status].statusCode}
          </td>
        </tr>
        <tr>
          <td>تاریخ ایجاد اکانت:</td>
          <td>
            {dateInterfaceChangerIran(user.createdAt)}
            <br />
            {dateInterfaceChangerUS(user.createdAt)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

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

export default UserIDPanel;
