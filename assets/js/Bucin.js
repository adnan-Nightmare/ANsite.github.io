let notip = document.getElementById("nyala");
let para = document.getElementById("para");

let k = document.getElementById("kosong");
let k1 = document.getElementById("kosong1");
let k2 = document.getElementById("kosong2");
let k3 = document.getElementById("kosong3");
let k4 = document.getElementById("kosong4");
let k5 = document.getElementById("kosong5");

let iyabtn = document.getElementById("iya");
let enggabtn = document.getElementById("engga");
let checking = 0;
let data = [];

function engga() {
  notip.style.display = "block";
}

function iya() {
  checking++;
  console.log(checking);
  if (checking == 1) {
    k.style.display = "none";
    k1.style.display = "block";
  } else if (checking == 2) {
    const input = document.getElementById("tebak").value;
    data.push(input);
    k2.style.display = "block";
    k1.style.display = "none";
  } else if (checking == 3) {
    const input2 = document.getElementById("tebak2").value;
    data.push(input2);
    console.log(data);
    k2.style.display = "none";
    k3.style.display = "block";
  } else if (checking == 4) {
    para.innerHTML = `${data[1]} itu bos aku, pantesan aku kek pernah denger, ada sii ${data[1]} bilang ke aku bahwa kmu suka mam ${data[0]}, dia katanya kangen ama kmu tapi kmu`;

    k4.style.display = "block";
    k3.style.display = "none";
  } else if (checking == 5) {
    k5.style.display = "block";
    k4.style.display = "none";

    iyabtn.style.display = 'none'
    enggabtn.style.display = 'none'
  }
}
