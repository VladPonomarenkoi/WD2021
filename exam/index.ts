const burgerMenu = document.querySelector(".mobile i");
const menuList: HTMLElement | null = document.querySelector(".mobileList");

const showDropMenu = (): void => {
  if (burgerMenu && menuList) {
    menuList.style.display = "block";
    burgerMenu.removeEventListener("click", showDropMenu);
    burgerMenu.addEventListener("click", hideDropMenu);
  }
};

const hideDropMenu = (): void => {
  if (burgerMenu && menuList) {
    menuList.style.display = "none";
    burgerMenu.removeEventListener("click", hideDropMenu);
    burgerMenu.addEventListener("click", showDropMenu);
  }
};

if (burgerMenu) {
  burgerMenu.addEventListener("click", showDropMenu);
}

function sendForm(): void {
  const tel: HTMLInputElement | null = document.querySelector("#phone");
  const name: HTMLInputElement | null = document.querySelector("#name");
  const result: Element | null = document.querySelector(".resulttask2");
  if (result) {
    result.innerHTML = `
    phone: ${tel?.value};
    name: ${name?.value};
  `;
  }
}

function showAllText(id: string): void {
  const p: HTMLParagraphElement | null = document.querySelector(`#${id}`);
  if (p) {
    console.log(p.style.overflow);

    p.style.whiteSpace = "normal";
  }
}

interface INewsItem {
  id: number;
  title: string;
  imgURL: string;
  desc: string;
}

let news: INewsItem[] = [
  {
    id: 1,
    title: "Dicounts 50% today only!!!",
    imgURL: "images/laptop1.png",
    desc: `sdsfnkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddnkl'dasnl`,
  },
  {
    id: 2,
    title: "Dicounts 50% today only!!!",
    imgURL: "images/laptop1.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
  officia doloribus, dolorem incidunt cumque quibusdam maiores beatae
  quis reprehenderit eum omnis modi facere, ea vel maxime. Officiis,
  veniam labore, explicabo expedita dolorem natus molestiae dolorum ex
  iusto perspiciatis eum quam magni asperiores architecto illum
  laborum cumque fugit incidunt eveniet nulla. Deserunt odio natus
  totam atque illum nulla voluptate. Necessitatibus ea, omnis quod
  quas non aut? Omnis tenetur quibusdam, sint quisquam dolores
  provident magni eligendi laudantium sed nostrum vel ratione fuga.`,
  },
  {
    id: 3,
    title: "Dicounts 50% today only!!!",
    imgURL: "images/laptop1.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
  officia doloribus, dolorem incidunt cumque quibusdam maiores beatae
  quis reprehenderit eum omnis modi facere, ea vel maxime. Officiis,
  veniam labore, explicabo expedita dolorem natus molestiae dolorum ex
  iusto perspiciatis eum quam magni asperiores architecto illum
  laborum cumque fugit incidunt eveniet nulla. Deserunt odio natus
  totam atque illum nulla voluptate. Necessitatibus ea, omnis quod
  quas non aut? Omnis tenetur quibusdam, sint quisquam dolores
  provident magni eligendi laudantium sed nostrum vel ratione fuga.`,
  },
];

const newsItems = document.querySelector(".newsItems");
const renderNews = () => {
  if (newsItems) {
    newsItems.innerHTML = "";
    for (let i = 0; i < news.length; i++) {
      newsItems.innerHTML += `
      <div class="newsItem" id="block${news[i].id}">
      <h3>${news[i].title}</h3>
      <img src="${news[i].imgURL}" alt="news"  onclick="changeNewsPoryadok('block${news[i].id}')"/>
      <p id="text${news[i].id}">${news[i].desc}
      </p>
      <button onclick="showAllText('text${news[i].id}')">Read more...</button>
      </div>
      `;
    }
  }
};
renderNews();

const changeNewsPoryadok = (id: string) => {
  const removed = news.find((item) => item.id === +id);
  news = news.filter((item) => item.id !== +id);
  if (removed) {
    news.unshift(removed);
  }
  renderNews();
};
