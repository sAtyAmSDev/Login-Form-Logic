var UserEmail = document.getElementById("Email");
var UserNumber = document.getElementById("UserNumber");
var UserAge = document.getElementById("Age");
var UserPassword = document.getElementById("Password");
var ConformPassword = document.getElementById("ConformPassword");
var Submit = document.getElementById("Submit");
var LoginDetails = document.getElementById("LoginDetails");

var DetailsEmail = document.querySelectorAll("#DetailsEmail p");
var DetailsNumber = document.querySelectorAll("#DetailsNumber p");
var DetailsAge = document.querySelectorAll("#DetailsAge p");
var DetailsPassword = document.querySelectorAll("#DetailsPassword p");

UserEmail.addEventListener("change", (params) => {
  DetailsEmail[0].innerHTML = UserEmail.value;
});

UserNumber.addEventListener("change", (params) => {
  if (UserNumber.value === 10) {
    alert("enter your correct Number ");
  } else if (UserNumber.value <= 999999999h ) {
    alert("enter your correct Number 1");
  } else if (UserNumber.value >= 100000000000) {
    alert("enter your correct Number 2");
  } else {
    DetailsNumber[0].innerHTML = UserNumber.value;
  }
});

UserAge.addEventListener("change", (params) => {
  if (UserAge.value == 0) {
    alert("enter your correct age ");
  } else if (UserAge.value <= 0) {
    alert("enter your correct age ");
  } else if (UserAge.value >= 100) {
    alert("enter your correct age ");
  } else {
    DetailsAge[0].innerHTML = UserAge.value;
  }
});

UserPassword.addEventListener("change", (params) => {
  DetailsPassword[0].innerHTML = UserPassword.value;
});

Submit.addEventListener("click", () => {
  if (UserPassword.value == ConformPassword.value) {
    LoginDetails.style.opacity = 1;
  } else {
    alert("enter your correct password  ");
  }
});
