let URL1 = "https://api.openweathermap.org/data/2.5/weather?q=Nizhyn,%20UA&APPID=6ed55aaa6af55f24b71d529588503993"

const t0 = document.getElementById("p1")
const t1 = document.getElementById("p2")
const t2 = document.getElementById("p3")
const t3 = document.getElementById("p4")
const t4 = document.getElementById("p5")

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

const btn = document.querySelector('.butt');
btn.addEventListener('click', function () {

    const n = document.querySelector('.text').value
    URL1 = "https://api.openweathermap.org/data/2.5/weather?q=" + n + "&APPID=6ed55aaa6af55f24b71d529588503993"
    func1()
})


const n1 = document.getElementById("n1");
const to1 = document.getElementById("to1");
const n2 = document.getElementById("n2");
const to2 = document.getElementById("to2");
const n3 = document.getElementById("n3");
const to3 = document.getElementById("to3");

const Placeholder = "https://jsonplaceholder.typicode.com/users"
let res2;

fetch(Placeholder)
    .then(response => response.json())
    .then(r => {
        res2 = r;
        console.log(res2)
        n1.innerHTML = `<b>Name:</b> ${res2[1].name}`
        to1.innerHTML = `<b>City:</b> ${res2[1].address.city}`
        n2.innerHTML = `<b>Name:</b> ${res2[2].name}`
        to2.innerHTML = `<b>City:</b> ${res2[2].address.city}`
        n3.innerHTML = `<b>Name:</b> ${res2[3].name}`
        to3.innerHTML = `<b>City:</b> ${res2[3].address.city}`
    })
    .catch(err => console.log(err))



    const my = "data.json";
    let res3;
    const ph1 = document.getElementById("ph1");
    const ph2 = document.getElementById("ph2");
    const ph3 = document.getElementById("ph3");
    const ph4 = document.getElementById("ph4");
    fetch(my)
    .then(response => response.json())
    .then(r => {
        res3 = r; 
        ph1.innerHTML = `<b>Product:</b> ${res3[0].phone.name}`;
        ph2.innerHTML = `<b>Amount:</b> ${res3[0].phone.amount}`;
        ph3.innerHTML = `<b>Product:</b> ${res3[1].phone.name}`;
        ph4.innerHTML = `<b>Amount:</b> ${res3[1].phone.amount}`;
        })
    .catch(err => console.log(err)) 
