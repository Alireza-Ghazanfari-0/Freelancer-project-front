import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOutApi } from "../../services/authenticationService";
import { replace, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending: isLoggingOut, mutate: logoutFunc } = useMutation({
    mutationFn: logOutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
      //   console.log("از اکانت خارج شدید");
      toast.success("با موفقیت خارج شدی ");
    },
    onError: (error) => {
      console.log("Logout failed:", error);
      toast.error("خطا در خروج از حساب کاربری");
    },
  });
  return { isLoggingOut, logoutFunc };
}
