let productArray = JSON.parse(localStorage.getItem("products"));

for (let i = 0; i < productArray.length; i++) {
  const items = productArray[i];

  //creating the card elements....

  let detailsection = document.getElementById("detail-section"); //taking the card section div from doc
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

  const h4 = document.createElement("h4");
  h4.setAttribute("class", "card-text");
  h4.innerText = "Review:";

  const review = document.createElement("p");
  review.setAttribute("class", "card-text");
  review.innerText =
    "I had breakfast there this morning and dinner tonight. All were well beyond my expectations. Everything is so fresh. Breakfast will knock your slippers off.";

  //appending the elements

  detailsection.appendChild(div1);
  div1.appendChild(img);
  div2.appendChild(h5);
  div2.appendChild(p);
  div2.appendChild(h6);
  div2.appendChild(h4);
  div2.appendChild(review);
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
}
