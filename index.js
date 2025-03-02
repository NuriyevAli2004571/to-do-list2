// <!-- YA ALLAH YA MUXAMMED YA ALI -->
//  <!-- LA ILAHƏ İLLƏ ƏNTƏ SUPANƏKƏ İNNİ KUNTİMİNƏ ZALİMİN -->
"use strict";
const evry = document.getElementById("evry");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
document.getElementById("btn").addEventListener("click", function () {
  let productname = input1.value;
  let productprice = input2.value;
  if (productname !== "" && productprice !== "") {
    const product = document.createElement("p");
    product.innerHTML = ` <span>${productname} - ${productprice}</span> Azn`;
    product.classList.add("product");
    evry.appendChild(product);
    let delet = document.createElement("div");
    delet.classList.add("productdelet");
    product.appendChild(delet);
    delet.innerHTML = "sil";
    let mission = document.createElement("p");
    mission.classList.add("mission");
    mission.innerHTML = "mission";
    product.appendChild(mission);
    input1.value = "";
    input2.value = "";
    delet.addEventListener("click", function () {
      evry.removeChild(product);
    });

    mission.addEventListener("click", function () {
      product.classList.toggle("okey");
    });
  } else {
    alert("sertleri doldur");
  }
});
