import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUsersApi } from "../../services/authenticationService";

export default function useUsers() {
  const { isLoading, data, isError, error } = useQuery({
    queryFn: getAllUsersApi,
    queryKey: ["all-users"],
  });
  const { users } = data || {};
  return { isLoading, users, isError, error };
}
