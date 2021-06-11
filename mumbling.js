// mumbling adalah ketika orang kebanyakan minum alkohol dan mengakibatkan bicara yg kurang jelas..
// buatlah program untuk memprediksi mumbling seseorang ketika dia mabuk berat
// contoh str = "saya".. maka menjadi "S-Aa-Yyy-Aaaa" sesuai dengan urutan dan jumlah nya 
// penjelasan : 
// karena s pertama maka s dianggap posisi 1 dan tidak perlu di ulang tapi setiap huruf pertama 
// dari mumbling hrus menjadi huruf kapital
//  huruf a kedua menjadi Aa.. karena ada di posisi kedua,, dan yg pertama menjadi kapital
// ingat bahwa setiap huruf harus dtambah "-" sebagai penghubung


let word = "ricky";
let result = "";

// for (let i = 0; i < word.length; i++) {
//     if (i === 0) {
//         result += word[i].toUpperCase();
//     } else {
//         result += word[i].toUpperCase();
//         result += word[i].repeat(i);
//     }

//     if (i < word.length - 1) {
//         result += "-"
//     }
// }

// for (let i = 0; i < word.length; i++) {
//     for (let j = 0; j < i + 1; j++) {
//         if(j == 0){
//             result += word[i].toUpperCase()
//         }else{
//             result += word[i]
//         }
//     }
//     if(i != word.length - 1){
//         result += '-'
//     }
// }

// let i = 0;
// while (i < word.length) {
//     let j = 0;
//     while (j <= i) {
//         if (j == 0) {
//             result += word[i].toUpperCase();
//         } else {
//             result += word[i];
//         }
//         j++;
//     }
//     if (i !== word.length - 1) {
//         result += "-";
//     }

//     i++;
// }

// for (let i = 0; i < word.length; i++) {
//     let j = 0;
//     while (j <= i) {
//         if (j === 0) {
//             result += word[i].toUpperCase();
//         } else {
//             result += word[i];
//         }
//         j++;
//     }

//     if (i !== word.length - 1) {
//         result += "-";
//     }
// }

let i = 0;
while (i < word.length) {
    for (let j = 0; j <= i; j++) {
        if (j === 0) {
            result += word[i].toUpperCase();
        } else {
            result += word[i];
        }
    }
    if (i !== word.length - 1) {
        result += "-";
    }

    i++;
}

console.log(result);