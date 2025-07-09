import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getSingleProject } from "../../services/projectServices";
import { useParams } from "react-router-dom";

export default function useProject() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => getSingleProject(id),
    queryKey: ["single-project", id],
    retry: false,
  });
  const { project } = data || {};
  return { isLoading, project, isError, error };
}
