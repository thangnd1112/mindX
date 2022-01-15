function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

let counter = 0;

const increase = () => {
    counter++;
}

const decrease = () => {
    counter--;
}

let gBody = document.getElementsByTagName("body")
let gStatus = document.getElementById("status")
let gBtnChangeColor = document.getElementById("btnChangeColor");
let gBtnDefautColor = document.getElementById("btnDefautColor");
let gBtnPlus = document.getElementById("plus");
let gBtnMinus = document.getElementById("minus");
let gBtnReset = document.getElementById("reset");
let gBtnDarkMode = document.getElementById("darkMode");
let gBtnLightMode = document.getElementById("lightMode");
let gBtnMode = document.getElementById("mode");

gBtnChangeColor.onclick = () => {
    gBody[0].style.backgroundColor = randomColor();
    gStatus.innerHTML = `Background color changed to: ${randomColor()}`
}
gBtnDefautColor.onclick = () => {
    gBody[0].style.backgroundColor = "#fff";
    gStatus.innerHTML = `Background color changed to defaut!`
}
gBtnPlus.onclick = () => {
    gBody[0].style.backgroundColor = "#fff";
    increase();
    gStatus.innerHTML = counter;
}
gBtnMinus.onclick = () => {
    gBody[0].style.backgroundColor = "#fff";
    decrease();
    gStatus.innerHTML = counter;
}

gBtnReset.onclick = () => {
    gBody[0].style.backgroundColor = "#fff";
    counter = 0;
    gStatus.innerHTML = counter;
}

gBtnDarkMode.onclick = () => {
    gBody[0].style.backgroundColor = "#333";
    gBody[0].style.color = "#fff";
    gBtnMode.style.background = "#333";
    gStatus.innerHTML = `Dark Mode`
}

gBtnLightMode.onclick = () => {
    gBody[0].style.backgroundColor = "#fff";
    gBody[0].style.color = "#333";
    gBtnMode.style.background = "#eff0f4";
    gStatus.innerHTML = `Light Mode`
}