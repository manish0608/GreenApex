function addRow() {
  const tablebody = document.getElementById("tablebody");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");
  const td6 = document.createElement("td");
  const td7 = document.createElement("td");
  var edit = document.createElement("button");
  edit.innerText = "EDIT";
  edit.classList.add("editButton");
  var del = document.createElement("button");
  del.classList.add("delButton");
  del.innerText = "DELETE";

  tablebody.appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  td7.appendChild(edit);
  td7.appendChild(del);

  var name = document.getElementById("name").value;

  var phone = document.getElementById("phone").value;

  var email = document.getElementById("email").value;

  var city = document.getElementById("city").value;

  var gender = document.getElementsByName("gender");

  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) td5.innerHTML = gender[i].value;
  }
  var arr = [];
  var techskill = document.getElementsByName("techskill");
  for (var i = 0; i < techskill.length; i++) {
    if (techskill[i].checked) arr.push(techskill[i].value);
    td6.innerHTML = arr;
  }

  td1.innerHTML = name;
  td2.innerHTML = phone;
  td3.innerHTML = email;
  td4.innerHTML = city;

  del.addEventListener("click", function () {
    tr.remove();
  });

  edit.addEventListener("click", function () {
    // tr.edit();
    document.getElementById("name").value = td1.innerHTML;
    document.getElementById("phone").value = td2.innerHTML;
    document.getElementById("email").value = td3.innerHTML;
    document.getElementById("city").value = td4.innerHTML;
  });
}
