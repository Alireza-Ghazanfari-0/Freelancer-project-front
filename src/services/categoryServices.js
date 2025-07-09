import React from "react";
import http from "./httpServices";

export function getCategory() {
  return http.get("/category/list").then(({ data }) => data.data);
}

export function deleteCategoryApi(id) {
  return http
    .delete(`/admin/category/remove/${id}`)
    .then(({ data }) => data.data);
}
export function addNewCategoryApi(data) {
  return http.post("/admin/category/add", data).then(({ data }) => data.data);
}
