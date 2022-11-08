fetch("http://localhost:3000/api/products")
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }

    })
    .then(function (articles) {
        console.log(articles);
        let sectionKanap = document.getElementById("items");
        for (let i in articles) {
            sectionKanap.innerHTML +=
            '<a href="./product.html?id='+articles[i]._id+'">' +
            '<article><img src="' + articles[i].imageUrl + '" alt="' + articles[i].altTxt + '">' +
            '<h3 class="productName">' + articles[i].name + '</h3><p class="productDescription">' + articles[i].description + '</p></article></a >'
        }

    })
    .catch(function (err) {
    });
