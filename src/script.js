let URL1 = "https://api.openweathermap.org/data/2.5/weather?q=Nizhyn,%20UA&APPID=6ed55aaa6af55f24b71d529588503993"

const t0 = document.getElementById("w1")
const t1 = document.getElementById("w2")
const t2 = document.getElementById("w3")
const t3 = document.getElementById("w4")
const t4 = document.getElementById("w5")

let res1;

function func1() {
    fetch(URL1)
        .then(response => response.json())
        .then(r => {
            res1 = r;
            func(res1)

        })

        .catch(err => console.log(err))

}
const func = (response) => {
    t0.textContent = `${Math.round(res1.main.temp - 272.15)} °`;
    t1.textContent = `${Math.round(res1.main.temp_min - 272.15)} °`;
    t2.textContent = `${Math.round(res1.main.temp_max - 272.15)} °`;
    t3.textContent = `${Math.round(res1.main.feels_like - 272.15)} °`;
    t4.textContent = `${res1.weather[0].description}`;

}

func1()

const btn = document.querySelector('.button');
btn.addEventListener('click', function () {

    const n = document.querySelector('.text').value
    URL1 = "https://api.openweathermap.org/data/2.5/weather?q=" + n + "&APPID=6ed55aaa6af55f24b71d529588503993"
    func1()
})


const n1 = document.getElementById("name1");
const to1 = document.getElementById("email1");
const n2 = document.getElementById("name2");
const to2 = document.getElementById("email2");
const n3 = document.getElementById("name3");
const to3 = document.getElementById("email3");

const Placeholder = "https://jsonplaceholder.typicode.com/users"
let res2;

fetch(Placeholder)
    .then(response => response.json())
    .then(r => {
        res2 = r;
        console.log(res2)
        n1.innerHTML = `<b>Name:</b> ${res2[2].name}`
        to1.innerHTML = `<b>email:</b> ${res2[3].email}`
        n2.innerHTML = `<b>Name:</b> ${res2[5].name}`
        to2.innerHTML = `<b>email:</b> ${res2[3].email}`
        n3.innerHTML = `<b>Name:</b> ${res2[2].name}`
        to3.innerHTML = `<b>email:</b> ${res2[1].email}`
    })



