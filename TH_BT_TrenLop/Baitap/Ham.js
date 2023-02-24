//7. Hàm đảo ngược mảng
//9. Hàm tìm vị trí của một số trong mảng, nếu không tìm thấy trả về -1
//10.Hàm thêm 1 giá trị vào vị trí cuối cùng của mảng (edited) 

//Bài 1 : Hàm tính tổng các giá trị trong mảng
// function sumNumbers() {
// let sum = 0;    
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//        return sum;
// }
// sumNumbers()
// console.log(sum);

//Bài 2 : Hàm hiển thị các số chẵn trong mảng
// C1 function EvenNumber(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 == 0) {
//             console.log(numbers[i]);
//         }
//     }
// }
//  C2 function displayEvenNumbers(numbers) {
//     let i = 0;
//     while(i<numbers.length) {
//         if(numbers[i]%2==0) {
//             console.log(numbers[i]);
//         }
//         i++;
//     }
//  }

//Bài 3 : Hàm hiển thị các số nguyên tố của mảng
// function checkNT() {
//     let count = 0;
//     let countSNT = 0;
//     for (let i = 0; i < numbers.length; i++)
//         for (let j = 2; j < 1000; j++) {
//             if (countSNT < numbers[i]) {
//                 for (let z = 1; z <= j; z++) {
//                     if (j % z == 0) {
//                         count += 1;
//                     }
//                 }
//                 if (count == 2) {
//                     console.log(numbers[i]);
//                     countSNT += 1;
//                 }
//                 count = 0;
//             } else {
//                 break;
//             }
//         }
// }
// checkNT(numbers);

//Bài 4 : Hàm tìm giá trị lớn nhất của mảng.

// function FindNumberInMax(numbers) {
//     let max = numbers[0];
//     for (i = 0; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i]
//         }
//     } return max;
// }
// console.log(FindNumberInMax(numbers));

// //Bài 5 : Hàm tìm giá trị bé nhất của mảng

// function FindNumbersInMin(numbers) {
//     let min = numbers[0];
//     for (i = 10; i < numbers.length; i++) {
//         if (numbers[i] < min)
//         min = numbers[i];
//     } return min;
// }
// console.log(FindNumbersInMin(numbers));

//Bài 6 : Hàm nối 1 mảng khác
// let numbers = [1, 2, 5, 2, 4];
// let numbers1 = [15, 8];

// function connectedArray(arr1, arr2) {
//     for (let i = 0; i < arr2.length; i++) {
//         arr1.push(arr2[i]);
//     }
//     return arr1;
// }
// let arrConnect = connectedArray(numbers, numbers1);
// console.log(arrConnect);

//Bài 8 : Hàm Join các phần tử theo 1 chuỗi kí tự nhập vào

let numbers = [1, 2, 5];
function joinElements(tkt) {
    let str = "";
    for (i = 0; i < numbers.length; i++) {
        str += tkt[i] + '*'
    } return tkt;
}
console.log(joinElements(numbers));











