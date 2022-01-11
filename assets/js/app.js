/* ======= Function dùng chung ============= */

/* Fn check tuổi */

function checkAge(age) {
    // Sử dụng một toán tử dấu chấm hỏi ?
    // Sử dụng OR ||
    return age <= 18 || typeof age == "undefined" ? false : true;
}

/* Fn tìm min 2 số */

function findMin(a, b) {
    // khởi tạo biến result lưu trữ số nhỏ nhất
    // ban đầu, cho giá trị là "số không hợp lệ"
    result = "Số bạn nhập không hợp lệ";
    // trong khi số nhập vào hợp lệ thì thực hiện tìm min
    while (validateNumber(a, b)) {
        a - b > 0 ? result = b : result = a;
        break;
    }
    return result;
}

/* Kiểm tra a và b có phải là số hay không */

function validateNumber(a, b) {
    return isNaN(a) || isNaN(b) ? false : true;
}

/* check username */

function checkUsername(username) {
    let isUsername = true;

    if (username == "" || username == null) {
        isUsername = false;
        alert("Canceled");
    } else if (username != "Admin") {
        isUsername = false;
        alert("Tôi không biết bạn!")
    }
    return isUsername;
}

function checkPassword(password) {
    if (password == "" || password == null) {
        alert("Đã hủy!");
    } else if (password != "cafedev") {
        alert("Mật khẩu sai!");
    } else {
        alert("Chào mừng!");
    }
}
const idBai1 = document.getElementById("bai-1");
const idBai2 = document.getElementById("bai-2");
const idBai3 = document.getElementById("bai-3");
const idBai4 = document.getElementById("bai-4");

/* ======= Function xử lý sự kiện ============= */

function bai1() {
    idBai1.style.display = "block";
    idBai2.style.display = "none";
    idBai3.style.display = "none";
    idBai4.style.display = "none";

    let vAge = Number(prompt("Nhập tuổi của bạn"));
    checkAge(vAge) ? alert("Bạn trên 18 tuổi!") : confirm(`Bạn chưa đủ tuổi, trên 18 tuổi mới được!`)
}

function bai2() {
    idBai1.style.display = "none";
    idBai2.style.display = "block";
    idBai3.style.display = "none";
    idBai4.style.display = "none";

    let vFirstNumber = Number(prompt("Nhập số thứ nhất"));
    let vSecondNumber = Number(prompt("Nhập số thứ hai"));

    alert(findMin(vFirstNumber, vSecondNumber));
}

function bai3(question, yes, no) {
    idBai1.style.display = "none";
    idBai2.style.display = "none";
    idBai3.style.display = "block";
    idBai4.style.display = "none";

    question = "Do you agree?";

    yes = () => {
        alert("You agreed.")
    }
    no = () => {
        alert("You canceled the execution.")
    }

    if (confirm(question)) yes()
    else no();
}

function bai4() {
    idBai1.style.display = "none";
    idBai2.style.display = "none";
    idBai3.style.display = "none";
    idBai4.style.display = "block";

    let vUserName = prompt("Nhập Username");

    while (checkUsername(vUserName)) {
        let vPassword = prompt("Nhập Password");
        checkPassword(vPassword);
        break;
    }
}