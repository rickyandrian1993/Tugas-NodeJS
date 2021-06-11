/*
    Buatlah nama yg ada pada variable menjadi nama singkatan dan harus berubah menjadi huruf besar
    contoh : 
    Sam Harris maka akan menjadi SH
*/ 
let name = "Ricky Andrian"
let result = "";

for (let i = 0; i < name.length; i++) {
    if (i === 0 || name[i - 1] === " ") {
        result += name[i];
    }
}

console.log(result);