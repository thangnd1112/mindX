let gExercise = document.querySelectorAll(".exercise");

for (let i = 0; i < gExercise.length; i++) {
    gExercise[i].addEventListener("click", () => {
        gExercise[i].classList.toggle("active");

        let vContent = gExercise[i].nextElementSibling;

        if (vContent.style.maxHeight) {
            vContent.style.maxHeight = null;
        } else {
            vContent.style.maxHeight = vContent.scrollHeight + "px";
        }
    })
}

// Bai 1
let person = {
    name: 'Bob',
    occupation: 'web developer',
    hobbies: 'painting',
};

let gRadioBtn = document.querySelectorAll(".radio");
let gResult = document.querySelector("#result");

for (let i = 0; i < gRadioBtn.length; i++) {
    gRadioBtn[i].addEventListener("click", function () {
        let vResult = "";
        console.log(this.id);
        switch (this.id) {
            case "ps-nam-c1":
                gResult.innerHTML = `${person.name}`;
                break;
            case "ps-occ-c1":
                gResult.innerHTML = `${person.occupation}`;
                break;
            case "ps-hob-c1":
                gResult.innerHTML = `${person.hobbies}`;
                break;
            case "ps-nam-c2":
                gResult.innerHTML = `${person["name"]}`;
                break;
            case "ps-occ-c2":
                gResult.innerHTML = `${person["occupation"]}`;
                break;
            case "ps-hob-c2":
                gResult.innerHTML = `${person["hobbies"]}`;
                break;
            case "ps-nam-c3":
                const {name} = person;
                gResult.innerHTML = `${name}`;
                break;
            case "ps-occ-c3":
                const {occupation} = person;
                gResult.innerHTML = `${occupation}`;
                break;
            case "ps-hob-c3":
                const {hobbies} = person;
                gResult.innerHTML = `${hobbies}`;
                break;
        }
    })
}

// Bai 2
let obj = {
    b: 2,
    a: 1,
    c: 3,
};

let arrKeyOfObject = Object.keys(obj);

let beforeArr = document.querySelector("#before-arr");
let afterArr = document.querySelector("#after-arr");

beforeArr.innerHTML = `- Mảng thu được sau khi dùng method Object.keys: ${JSON.stringify(arrKeyOfObject)}`;

// Cach 1: dung vong lap
// for ( index in arrKeyOfObject) {
//     arrKeyOfObject[index] = arrKeyOfObject[index].toUpperCase();
// }

// Cach 2: dung method forEach cua array
arrKeyOfObject.forEach(function(element,index) {
    arrKeyOfObject[index] = element.toUpperCase();
})

// console.log(arrKeyOfObject);
afterArr.innerHTML = `- Mảng thu được sau khi dùng method toUpperCase: ${JSON.stringify(arrKeyOfObject)}`;

// Bai 3

let gResultB3 = document.querySelector("#result-b3");

let myFamily = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
    location: "Vietnam",
};

function Family(quantity,member,location) {
    this.quantity = quantity,
    this.member = member,
    this.location = location
}


let newFamily = new Family(myFamily.quantity, myFamily.member, myFamily.location);

gResultB3.innerHTML = `Biến newFamily được tạo từ hàm tạo Family: ${JSON.stringify(newFamily)}`;

// Bai 4

let objB4 = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
};

// C1
// objB4.bar[3].xyz = 606;

// C2
Object.assign(objB4.bar[3],{xyz:606});

console.log("Bài 4, obj sau khi thay 6 bằng 606",objB4);
