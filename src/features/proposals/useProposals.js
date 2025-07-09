import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProposalsApi } from "../../services/proposalServices";

export default function useProposals() {
  const { isLoading, data, isError, error } = useQuery({
    queryFn: getProposalsApi,
    queryKey: ["freelancer-proposal-list"],
  });
  const { proposals } = data || {};

  return { isLoading, proposals, isError, error };
}
