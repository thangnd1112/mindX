// Fn xu ly May tinh - Cách 1 dùng if...else
function calculatorUseIf() {
    // biến lưu trữ phép tính
    const operator = prompt("Nhập phép tính ( +, -, * hoặc / ): ");
    // biến lưu trữ tính hợp lệ của phép tính
    let isValid = true;
    // 2 số cần tính
    let a = parseFloat(prompt("Nhập số thứ nhất: "));
    let b = parseFloat(prompt("Nhập số thứ hai: "));

    // biến lưu trữ kết quả

    let result = 0;

    // Dùng if để xử lý phep tinh

    if (operator == "+") {
        result = a + b;
    } else if (operator == "-") {
        result = a - b;
    } else if (operator == "*") {
        result = a - b;
    } else if (operator == "/") {
        result = a / b;
    } else {
        result = "Bạn nhập phép tính không hợp lệ!"
        isValid = false;
    }

    // kiểm tra tính hợp lệ của phép tính

    if (isValid) {
        alert(`${a} ${operator} ${b} = ${result}`)
    } else {
        alert(result)
    }
}

// Fn xu ly May tinh - Cách 2 dùng switch

function calculatorUseSwitch() {
    // biến lưu trữ phép tính
    const operator = prompt("Nhập phép tính ( +, -, * hoặc / ): ");
    // biến lưu trữ tính hợp lệ của phép tính
    let isValid = true;
    // 2 số cần tính
    let a = parseFloat(prompt("Nhập số thứ nhất: "));
    let b = parseFloat(prompt("Nhập số thứ hai: "));

    // biến lưu trữ kết quả

    let result = 0;

    // Dùng switch để xử lý phep tinh

    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            result = "Bạn nhập phép tính không hợp lệ!"
            isValid = false;
    }
    // kiểm tra tính hợp lệ của phép tính
    if (isValid) {
        alert(`${a} ${operator} ${b} = ${result}`)
    } else {
        alert(result)
    }
}

// Fn tìm số nguyên tố

function findPrime() {
    // nhập số  cần tìm
    const number = parseInt(prompt("Nhập vào một số : "));
    let isPrime = true;
    let result = "";
    // kiểm tra số nguyên tố theo định nghĩa:
    // số nguyên tố là số  chỉ chia hết cho 1 và chính nó
    if (number < 2) {
        isPrime = false;
    } else {
        for (let i = 2 ; i < number ; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    if (isPrime) {
        alert(`${number} là số nguyên tố`);
    } else {
        alert(`${number} không phải là số nguyên tố `);
    }
}
