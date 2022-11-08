fetch("http://localhost:3000/api/products")
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }

    })
    // .then(function (value) {
    //     console.log(value);
    //     const articles = value[0];
        let sectionProducts = document.getElementsByClassName("item");
        sectionProducts.innerHTML =
            '<a href="' + articles._id + '">' +
        '<article><img src="' + articles.imageUrl + '" alt="' + articles.altTxt + '">' +
            '<h3 class="productName">' + articles.name + '</h3><p class="productDescription">' + articles.description + '</p></article></a >'
    
    .catch(function (err) {
    });






    '<article><div class="item__img"><<img src="' + products.imageUrl + '" alt="' + products.altTxt + '"></div>' +
    '<div class="item__content"><div class="item__content__titlePrice"><h1 id="title"> '+ products.name +'</h1>' +
    '<p>Prix : <span id="price">'+ products.price +'</span>€</p></div>' +

    '<div class="item__content__description"><p class="item__content__description__title">Description :</p><p id="description"> '+ products.description +'</p></div>' +
    '<div class="item__content__settings">




function ShowArticle() {
  fetch("http://localhost:3000/api/products")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      document
        .getElementById("title")
    }





  var str: "http://localhost:3000/api/products";
  var url = new URL(str);
  var products = url.searchParams.get("name");
  console.log(products);


  P5-Dev-Web-Kanap-master/front/html/product.html?id=107fb5b75607497b96722bda5b504926
