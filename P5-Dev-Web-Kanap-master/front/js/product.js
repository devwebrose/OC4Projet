//récupération de l'id dans l'url :
const queryString_url_id = window.location.search;

const urlSearchParams = new URLSearchParams(queryString_url_id);

const _id = urlSearchParams.get("id");
console.log(_id);


fetch(`http://localhost:3000/api/products/${_id}`)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }

  })


  .then(function (product) {
    const sectionImage = document.getElementsByClassName("item__img")[0];
    sectionImage.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;

    const sectionTitlePrice = document.getElementsByClassName("item__content__titlePrice")[0];
    sectionTitlePrice.innerHTML = `<h1 id="title">${product.name}</h1> <p>Prix : <span id="price">${product.price}</span>€</p>`;

    const sectionDescription = document.getElementById("description");
    sectionDescription.innerHTML = `<p id="description">${product.description}</p>`;

    const sectionColors = document.getElementById("colors");
    for (let i in product){
      sectionColors.innerHTML +=
      `<option value="vert">${product[i].colors}</option>`
    }
    
  })



  .catch(function (err) {
  });







// //structure HTML pour l'affichage du produit selected :
// const productStructure = `
// <section class="item">
// <article>
//   <div class="item__img">
//     <img src="${idProductSelected.imageUrl}" alt="${idProductSelected.altTxt}">
//   </div>
//   <div class="item__content">

//     <div class="item__content__titlePrice">
//       <h1 id="title">${idProductSelected.name}</h1>
//       <p>Prix : <span id="price">${idProductSelected.price}</span>€</p>
//     </div>

//     <div class="item__content__description">
//       <p class="item__content__description__title">Description :</p>
//       <p id="description">${idProductSelected.description}</p>
//     </div>

//     <div class="item__content__settings">
//       <div class="item__content__settings__color">
//         <label for="color-select">Choisir une couleur :</label>
//         <select name="color-select" id="colors">
//             <option value="">--SVP, choisissez une couleur --</option>
//             <option value="vert">${idProductSelected.colors[0]}</option>
//             <option value="blanc">${idProductSelected.colors[1]}</option>
//         </select>
//       </div>

//       <div class="item__content__settings__quantity">
//       <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
//       <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
//     </div>
//   </div>

//   <div class="item__content__addButton">
//     <button id="addToCart">Ajouter au panier</button>
//   </div>

// </div>
// </article>
// </section>
// `
// if (products.colors < 3) {
//  console.log(idProductSelected.colors[0]);
//  console.log(idProductSelected.colors[1]);}

//  else if (idProductSelected.colors = [3]){
//   console.log(idProductSelected.colors[0]);
//   console.log(idProductSelected.colors[1]);
//   console.log(idProductSelected.colors[2]);}

//   else if (idProductSelected.colors > [3]){
//     console.log(idProductSelected.colors[0]);
//     console.log(idProductSelected.colors[1]);
//     console.log(idProductSelected.colors[2]);
//     console.log(idProductSelected.colors[3]);}

//     rajouter dans le HTML ??
;

// //innerHTML dans la page Produit :
// classSelected.innerHTML = productStructure;







