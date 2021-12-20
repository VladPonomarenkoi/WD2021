var burgerMenu = document.querySelector(".mobile i");
var menuList = document.querySelector(".mobileList");
var showDropMenu = function () {
    if (burgerMenu && menuList) {
        menuList.style.display = "block";
        burgerMenu.removeEventListener("click", showDropMenu);
        burgerMenu.addEventListener("click", hideDropMenu);
    }
};
var hideDropMenu = function () {
    if (burgerMenu && menuList) {
        menuList.style.display = "none";
        burgerMenu.removeEventListener("click", hideDropMenu);
        burgerMenu.addEventListener("click", showDropMenu);
    }
};
if (burgerMenu) {
    burgerMenu.addEventListener("click", showDropMenu);
}
function sendForm() {
    var tel = document.querySelector("#phone");
    var name = document.querySelector("#name");
    var result = document.querySelector(".resulttask2");
    if (result) {
        result.innerHTML = "\n    phone: ".concat(tel === null || tel === void 0 ? void 0 : tel.value, ";\n    name: ").concat(name === null || name === void 0 ? void 0 : name.value, ";\n  ");
    }
}
function showAllText(id) {
    var p = document.querySelector("#".concat(id));
    if (p) {
        console.log(p.style.overflow);
        p.style.whiteSpace = "normal";
    }
}
var news = [
    {
        id: 1,
        title: "Dicounts 50% today only!!!",
        imgURL: "images/laptop1.png",
        desc: "sdsfnkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddnkl'dasnl"
    },
    {
        id: 2,
        title: "Dicounts 50% today only!!!",
        imgURL: "images/laptop1.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente\n  officia doloribus, dolorem incidunt cumque quibusdam maiores beatae\n  quis reprehenderit eum omnis modi facere, ea vel maxime. Officiis,\n  veniam labore, explicabo expedita dolorem natus molestiae dolorum ex\n  iusto perspiciatis eum quam magni asperiores architecto illum\n  laborum cumque fugit incidunt eveniet nulla. Deserunt odio natus\n  totam atque illum nulla voluptate. Necessitatibus ea, omnis quod\n  quas non aut? Omnis tenetur quibusdam, sint quisquam dolores\n  provident magni eligendi laudantium sed nostrum vel ratione fuga."
    },
    {
        id: 3,
        title: "Dicounts 50% today only!!!",
        imgURL: "images/laptop1.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente\n  officia doloribus, dolorem incidunt cumque quibusdam maiores beatae\n  quis reprehenderit eum omnis modi facere, ea vel maxime. Officiis,\n  veniam labore, explicabo expedita dolorem natus molestiae dolorum ex\n  iusto perspiciatis eum quam magni asperiores architecto illum\n  laborum cumque fugit incidunt eveniet nulla. Deserunt odio natus\n  totam atque illum nulla voluptate. Necessitatibus ea, omnis quod\n  quas non aut? Omnis tenetur quibusdam, sint quisquam dolores\n  provident magni eligendi laudantium sed nostrum vel ratione fuga."
    },
];
var newsItems = document.querySelector(".newsItems");
var renderNews = function () {
    if (newsItems) {
        newsItems.innerHTML = "";
        for (var i = 0; i < news.length; i++) {
            newsItems.innerHTML += "\n      <div class=\"newsItem\" id=\"block".concat(news[i].id, "\">\n      <h3>").concat(news[i].title, "</h3>\n      <img src=\"").concat(news[i].imgURL, "\" alt=\"news\"  onclick=\"changeNewsPoryadok('block").concat(news[i].id, "')\"/>\n      <p id=\"text").concat(news[i].id, "\">").concat(news[i].desc, "\n      </p>\n      <button onclick=\"showAllText('text").concat(news[i].id, "')\">Read more...</button>\n      </div>\n      ");
        }
    }
};
renderNews();
var changeNewsPoryadok = function (id) {
    var removed = news.find(function (item) { return item.id === +id; });
    news = news.filter(function (item) { return item.id !== +id; });
    if (removed) {
        news.unshift(removed);
    }
    renderNews();
};
