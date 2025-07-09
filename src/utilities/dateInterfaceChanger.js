export function dateInterfaceChangerIran(date) {
  return new Date(date).toLocaleDateString("fa-IR", {});
}

export function dateInterfaceChangerUS(date) {
  return new Date(date).toLocaleDateString("en-US", {});
}
