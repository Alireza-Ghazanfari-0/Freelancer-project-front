import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUser } from "../../services/authenticationService";

export default function useUser() {
  const { isLoading, data } = useQuery({
    queryFn: getUser,
    queryKey: ["get-user"],
    retry: false,
  });
  const { user } = data || {};
  return { isLoading, user };
}
