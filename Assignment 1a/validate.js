
function validateForm() {
  let x = document.getElementsByTagName("input");
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
    var author = document.getElementById("uname");
    var email = document.getElementById("eml");
    var JSONOBJ = {Name: author, Email:email};
    console.log(JSONOBJ);
}
