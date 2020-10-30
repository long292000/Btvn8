// const container = document.getElementById("list");
// for (let i = 0;i<3;i++){
// container.insertAdjacentHTML('beforeend', `<li>${i} </li>`)
// };
// 1.d
// 2.a
// 3.c
// 4.b

// const time = setInterval(myTime, 10000);
// function myTime() {
//   alert("aloooooooo");
// }
// clearInterval(myTime,alert("Ket thuc"),15000);


// Let là block scope nên khi ra ngoài hàm được khai báo sẽ không dùng được
// var là globally scope nên khi khai báo trong hàm ra ngoài hàm giá trị vẫn giữ nguyên

// function myFunction() {
//     var x = document.getElementsByTagName("LI");
//     document.getElementById("demo").innerHTML = x[1].innerHTML;
//   }


// function Bai8(Long , health){
//     console.log("My name is Long, i wish i have gồ health");
// }



// function bai9(name, wish){
//     alert(`My name is ${name}, i wish ${wish}`);
// bai9("Long", "health");
// }


// function bai10(name, wish){
//     if(wish == undefined){
//         console.log("Nothing");
//     }else{
//         alert(`My name is ${name}, i wish ${wish}`);
//     }
// }