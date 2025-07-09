import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProjectsApi } from "../services/projectServices";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useAllProjects() {
  const { search } = useLocation();
  // console.log(search);
  const queryObject = queryString.parse(search);
  // console.log(queryObject);

  const { isLoading, data, isError, error } = useQuery({
    queryFn: () => getAllProjectsApi(search),
    // بخاطر اینکه با تغییر فیلترها نیز صفحه مجدد لود شود query object را میدهیم ب key
    // فیلترها در بک اند هندل شده
    queryKey: ["all-projects", queryObject],
    retry: false,
  });
  const { projects } = data || {};

  return { isLoading, projects, isError, error };
}
