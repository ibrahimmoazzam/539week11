// Color of the day: Coral

// Using Hooks
// function challenge1() {
//   if (document.getElementById("subscribe").checked == true) {
//     document.querySelector("#emailDiv").style.display = "block";
//   } else {
//     document.querySelector("#emailDiv").style.display = "none";
//   }
// }

// Using an Event Listener
// let varCheckbox = document.getElementById("subscribe");
// // document.getElementById("subscribe").addEventListener("click", myFunction); <- Write myFunction separately
// varCheckbox.addEventListener("click", function () {
//   if (varCheckbox.checked) {
//     document.getElementById("emailDiv").style.display = "block";
//   } else {
//     document.getElementById("emailDiv").style.display = "none";
//   }
// });

// function challenge2(element) {
//   if (element.checked == true) {
//     document.getElementById("home").value =
//       document.getElementById("bill").value;
//     document.getElementById("home").disabled = true;
//   } else {
//     document.getElementById("home").value = "";
//     document.getElementById("home").disabled = false;
//   }
// }

// Using an Event Listener
// let varCheckbox1 = document.getElementById("sameAddress");
// varCheckbox1.addEventListener("click", function () {
//   if (varCheckbox1.checked == true) {
//     document.getElementById("home").value =
//       document.getElementById("bill").value;
//     document.getElementById("home").disabled = true;
//   } else {
//     document.getElementById("home").value = "";
//     document.getElementById("home").disabled = false;
//   }
// });

// Challenge 3
let standingCheckbox = document.getElementsByName("standing");
let gradDateCheckbox = document.getElementsByName("gradDate");
console.log(standingCheckbox);
let varForm = document.getElementById("ch3form");
varForm.addEventListener("submit", function () {
  let standingChecked = false;
  let gradDateChecked = false;

  for (i = 0; i < standingCheckbox.length; i++) {
    if (standingCheckbox[i].checked) {
      standingChecked = true;
    }
  }
  for (i = 0; i < gradDateCheckbox.length; i++) {
    if (gradDateCheckbox[i].checked) {
      gradDateChecked = true;
    }
  }

  if (standingChecked && gradDateChecked) {
    console.log("All good!");
  } else {
    alert(
      "Please select an option in both sections before submitting the form!"
    );
    return false;
  }
});
