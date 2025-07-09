import http from "./httpServices";

export function getOwnerProjects() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function toggleProjectStatus({ id, data }) {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
}

export function deleteProject(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}

export function addNewProjectApi(data) {
  return http.post("/project/add", data).then(({ data }) => data.data);
}

export function editProjectApi({ id, data }) {
  return http
    .patch(`/project/update/${id}`, data)
    .then(({ data }) => data.data);
}

export function getSingleProject(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}

// اگر چیزی ورودی ندهیم در زیر و در جایی ک تابع فراخوانی نیز نشود چیزی ورودی ب تابع ندهیم، لیست کلی را می اورد. اما اینجوری بر حسب ورودی ک query string هست فیلتر می کند
export function getAllProjectsApi(queryStringSearch) {
  return http
    .get(`project/list${queryStringSearch}`)
    .then(({ data }) => data.data);
}
