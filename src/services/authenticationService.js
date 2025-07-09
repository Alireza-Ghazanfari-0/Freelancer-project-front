import http from "./httpServices";

export function getOTP(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function checkOTP(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export function completeProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export function logOutApi() {
  return http.post("/user/logout").then(({ data }) => data.data);
}

export function getAllUsersApi() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

export function changeUserStatusApi({ id, data }) {
  return http
    .patch(`/admin/user/verify/${id}`, data)
    .then(({ data }) => data.data);
}
