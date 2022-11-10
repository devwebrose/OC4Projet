fetch("http://localhost:3000/api/products")
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }

    })


    .then(function (article) {
        console.log(article);
        let sectionKanap = document.getElementById("items");
        for (let i in article) {
            sectionKanap.innerHTML +=
                `<a href="./product.html?id=${article[i]._id}">
                <article><img src="${article[i].imageUrl}" alt="${article[i].altTxt}">
                <h3 class="productName">${article[i].name}</h3><p class="productDescription">${article[i].description}</p></article></a >`
        }
    })



    .catch(function (err) {
    });
