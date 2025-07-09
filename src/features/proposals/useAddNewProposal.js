import React from "react";
import { useMutation } from "@tanstack/react-query";
import { addNewProposalApi } from "../../services/proposalServices";

export default function useAddNewProposal() {
  const { isPending: isAddingProposal, mutateAsync: addNewProposalFunc } =
    useMutation({
      mutationFn: addNewProposalApi,
    });
  return { isAddingProposal, addNewProposalFunc };
}
