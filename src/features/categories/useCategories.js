import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategory } from "../../services/categoryServices";

export default function useCategories() {
  const { isError, error, isLoading, data } = useQuery({
    queryFn: getCategory,
    queryKey: ["categories"],
  });
  //   console.log(data);
  const { categories } = data || {};

  return { categories, isLoading, isError, error };
}
