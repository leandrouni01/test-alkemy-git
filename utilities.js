function firstToUpperCase(string) {
  return typeof string == 'string'
    ? string.charAt(0).toUpperCase() + string.slice(0)
    : '';
}

function showAlert() {
  alert('Hello world!');
}

function showAlert2() {
  alert('Hello world 2!');
}
