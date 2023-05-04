let productarray = JSON.parse(localStorage.getItem("products"));

for (let i = 0; i < productarray.length; i++) {
  const items = productarray[i];
  if (items["isTrash"] === true) {
    let trash = document.getElementById("trash-section");

    const div1 = document.createElement("div");
    div1.setAttribute("class", "card");
    div1.setAttribute("style", "width:18rem;");

    const img = document.createElement("img");
    img.setAttribute("class", "card-img-top");

    trash.appendChild(div1);

    const div2 = document.createElement("div");
    div2.setAttribute("class", "card-body");

    const h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");

    const p = document.createElement("p");
    p.setAttribute("class", "card-text");

    const h6 = document.createElement("h6");
    h6.setAttribute("class", "card-text");

    const restoreBtn = document.createElement("button");
    restoreBtn.setAttribute("class", "btn btn-warning");
    restoreBtn.innerText = "Restore";

    //restoring the deleted card.....//
    restoreBtn.addEventListener("click", function () {
      let retrieve = JSON.parse(localStorage.getItem("products"));
      retrieve[i]["isTrash"] = false;
      localStorage.setItem("products", JSON.stringify(retrieve));
      window.location.reload();
    });

    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "btn btn-danger");
    removeBtn.innerText = "Remove";

    //....removing card permanently from trash....//

    removeBtn.addEventListener("click", function removeCard(product) {
      let products;
      if (localStorage.getItem("products") === null) {
        products = [];
      } else {
        products = JSON.parse(localStorage.getItem("products"));
      }
      const productIndex = product.innerText;

      products.splice(products.indexOf(productIndex), 1);

      localStorage.setItem("products", JSON.stringify(products));
      div1.remove();
    });
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
    div1.appendChild(img);
    div2.appendChild(h5);
    div2.appendChild(p);
    div2.appendChild(h6);
    div2.appendChild(restoreBtn);
    div2.appendChild(removeBtn);
    div1.appendChild(div2);
  }
}
