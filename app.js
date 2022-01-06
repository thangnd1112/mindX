/* Bai 1 */

function bai1() {
    let number = prompt("Nhập vào một số");
    let result = Math.sqrt(number);
    alert(`Căn bậc hai của ${number} là ${result}`);
}

/* Bai 2 */

function bai2() {
    let height = prompt("Nhập chiều cao của tam giác");
    let base = prompt("Nhập cạnh đáy của tam giác");
    let area = (height * base) / 2;
    alert(`Diện tích tam giác là ${area}`);
}
/* Bai 3 */

function bai3() {
    let f_temp = prompt("Nhập vào độ F");
    let c_temp = (f_temp - 32) * 5 / 9;
    alert(`${f_temp}\u00B0F = ${c_temp}\u00B0C`);
}

/* Bai 4 */

function bai4() {
    let km = prompt("Nhập vào số km");
    let m = km * 1000;
    alert(`${km}km = ${m}m`);
}
