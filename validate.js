let count = 0;
function addData() {
  const tablebody = document.getElementById("tablebody");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  var del = document.createElement("button");
  del.classList.add("delButton");
  del.innerText = "REMOVE";
  del.style.backgroundColor = "red";

  var firstname = document.getElementById("fname").value;

  var lastname = document.getElementById("lname").value;

  if (firstname === "") {
    document.getElementById("firstname").innerHTML =
      "***Please Enter The First Name";
    document.getElementById("fname").style.border = "2px solid red";
    return false;
  }
  if (firstname.length <= 2 || firstname.length > 20) {
    document.getElementById("firstname").innerHTML =
      "***charactors should be between 3 to 20";
    document.getElementById("fname").style.border = "2px solid red";
    return false;
  }
  if (!isNaN(firstname)) {
    document.getElementById("firstname").innerHTML =
      "***please fill valid name";
    document.getElementById("fname").style.border = "2px solid red";
    return false;
  }
  if (lastname === "") {
    document.getElementById("lastname").innerHTML =
      "***Please Enter The Last Name";
    document.getElementById("lname").style.border = " 2px solid red";
    return false;
  }
  if (lastname.length <= 2 || lastname.length > 20) {
    document.getElementById("lastname").innerHTML =
      "***charactors should be between 3 to 20";
    document.getElementById("lname").style.border = "2px solid red";
    return false;
  }
  if (!isNaN(lastname)) {
    document.getElementById("lastname").innerHTML =
      "***please fill valid surname";
    document.getElementById("lname").style.border = "2px solid red";
    return false;
  }

  count++;
  let key1 = "firstname" + count;
  let key2 = "lastname" + count;
  localStorage.setItem(key1, firstname);
  localStorage.setItem(key2, lastname);

  tablebody.appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  td3.appendChild(del);
  td1.innerHTML = firstname;
  td2.innerHTML = lastname;

  del.addEventListener("click", function () {
    tr.remove();
    localStorage.removeItem(key1);
    localStorage.removeItem(key2);
  });
}
