const getData = () => {
  let products;
  let productName = document.getElementById("product").value;

  let productTitle = document.getElementById("title").value;

  if(productTitle.length>30){
    document.getElementById("error").innerHTML="***Title can not be more than 30 characters*****"
    document.getElementById("title").style.border = "2px solid red";
    return false;
  }
  let description = document.getElementById("desc").value;
  
  if(productTitle.length>30){
    document.getElementById("error").innerHTML="***Title can not be more than 30 characters*****"
    document.getElementById("desc").style.border = "2px solid red";
    return false;
  }
  let productPrice = document.getElementById("Price").value;

  let imgUrl = document.getElementById("url").value;
  
  let availability;
  if (document.getElementById("instock").checked) {
    availability = document.getElementById("instock").value;
  } else {
    availability = document.getElementById("nostock").value;
  }
  
  let location = document.getElementById("location").value;

  let object = {};

  object.name = productName;
  object.title = productTitle;
  object.price = productPrice;
  object.image = imgUrl;
  object.stock = availability;
  object.description = description;
  object.location = location;
  object.isTrash = false;
  

  if (localStorage.getItem("products") == null) {
    products = [];
  } else {
    products = JSON.parse(localStorage.getItem("products"));
  }

  products.push(object);

  localStorage.setItem("products", JSON.stringify(products));
};

let productArray = JSON.parse(localStorage.getItem("products"));

for (let i = 0; i < productArray.length; i++) {
  
  const items = productArray[i];
  if(items["isTrash"]==false){

  //creating the card elements....

  let mainsection = document.getElementById("card-section"); //taking the card section div from doc
  const div1 = document.createElement("div");

  div1.setAttribute("class", "card");
  div1.setAttribute("style", "width:18rem;");

  const img = document.createElement("img");
  img.setAttribute("class", "card-img-top");

  const div2 = document.createElement("div");
  div2.setAttribute("class", "card-body");

  const h5 = document.createElement("h5");
  h5.setAttribute("class", "card-title");

  const p = document.createElement("p");
  p.setAttribute("class", "card-text");

  const h6 = document.createElement("h6");
  h6.setAttribute("class", "card-text");

  const likebtn = document.createElement("button");
  likebtn.setAttribute("class", "btn btn-primary");
  likebtn.innerText = "Like";

  const delbtn = document.createElement("button");
  delbtn.setAttribute("class", "btn btn-danger ");
  delbtn.innerText = "Remove";

  const editbtn = document.createElement("button");
  editbtn.setAttribute("class", "btn btn-warning ");
  editbtn.innerText = "Edit";

  const viewbtn = document.createElement("button");
  viewbtn.setAttribute("class", "btn btn-success ");
  viewbtn.innerText = " View";

  //appending the elements

  mainsection.appendChild(div1);
  div1.appendChild(img);
  div2.appendChild(h5);
  div2.appendChild(p);
  div2.appendChild(h6);
  div2.appendChild(likebtn);
  div2.appendChild(delbtn);
  div2.appendChild(editbtn);
  div2.appendChild(viewbtn);
  div1.appendChild(div2);
  
  //adding data in card ...

  for (key in items) {
    if (key === "title") {
      h5.innerHTML = items[key];
    }
    if (key === "description") {
      p.innerHTML = items[key];
    }
    if (key === "image") {
      img.setAttribute("src", items[key]);
    }
    if (key === "price") {
      h6.innerHTML = `Price : ${items[key]} /-`;
    }
  }

  //.....removing card into trash....soft deletion

  delbtn.addEventListener("click", function () {
    let retrieve = JSON.parse(localStorage.getItem("products"));
    retrieve[i]["isTrash"] = true;
    localStorage.setItem("products", JSON.stringify(retrieve));
    window.location.reload();
  }); 

  viewbtn.addEventListener("click", function () {
    document.location.href="view.html";
  });

  editbtn.addEventListener("click", function () {
    document.location.href="edit.html";

  });
}
}
  

//.......filtering the card by title name....

const filter = () => {
  let input = document.getElementById("input").value;

  let title = document.getElementsByClassName("card-title");

  for (let i = 0; i < title.length; i++) {
    let textvalue = title[i].textContent;

    if (textvalue.indexOf(input) > -1) {
      title[i].parentNode.parentNode.style.display = "";
    } else {
      title[i].parentNode.parentNode.style.display = "none";
    }
  }

};


