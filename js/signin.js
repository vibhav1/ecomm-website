
function validateForm() {
  var x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("email must be filled out");
    return false;
  }
}
