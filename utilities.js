function firstToUpperCase(string) {
  return typeof string == "string" ? string.charAt(0).toUpperCase() + string.slice(0) : "";
}