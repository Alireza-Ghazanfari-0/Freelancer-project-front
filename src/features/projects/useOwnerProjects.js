import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getOwnerProjects } from "../../services/projectServices";

export default function useOwnerProjects() {
  const { data, isLoading, error, isError } = useQuery({
    queryFn: getOwnerProjects,
    queryKey: ["owner-projects"],
    retry: false,
    // staleTime: 1000 * 60 * 5, // جلوگیری از لود مجدد تا ۵ دقیقه
    // cacheTime: 1000 * 60 * 10,
  });

  const { projects } = data || {};
  return { isLoading, projects, error, isError };
}
