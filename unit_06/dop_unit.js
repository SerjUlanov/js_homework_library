const out_1 = document.querySelector(".out-1");
const b_1 = document.querySelector(".b-1");
const out_2 = document.querySelector(".out-2");
const b_2 = document.querySelector(".b-2");
const out_4 = document.querySelector(".out-4");
const b_4 = document.querySelector(".b-4");
const out_5 = document.querySelector(".out-5");
const b_5 = document.querySelector(".b-5");
const out_6 = document.querySelector(".out-6");
const b_6 = document.querySelector(".b-6");
const out_7 = document.querySelector(".out-7");
const b_7 = document.querySelector(".b-7");
const out_8 = document.querySelector(".out-8");
const b_8 = document.querySelector(".b-8");
const out_9 = document.querySelector(".out-9");
const b_9 = document.querySelector(".b-9");
const out_10 = document.querySelector(".out-10");
const b_10 = document.querySelector(".b-10");
const out_11 = document.querySelector(".out-11");
const b_11 = document.querySelector(".b-11");
const out_12 = document.querySelector(".out-12");
const b_12 = document.querySelector(".b-12");
const out_13 = document.querySelector(".out-13");
const b_13 = document.querySelector(".b-13");
const out_14 = document.querySelector(".out-14");
const b_14 = document.querySelector(".b-14");

function t1() {

   if (out_1.style.display !== "block") {
      out_1.style.display = "block";
      b_1.style.border = "solid 3px red";
   } else {
      out_1.style.display = "none";
      b_1.style.border = "solid 3px black";
   }

   let out_f = "";
   for (let i = 1; i < 10; i++) {
      for (let k = 1; k < 10; k++) {
         out_f += `${i}*${k}=${i * k}<br>`
      }
      out_f += "<hr>"
   }
   out_1.innerHTML = out_f
}
b_1.onclick = t1;

function t2() {

   if (out_2.style.display !== "block") {
      out_2.style.display = "block";
      b_2.style.border = "solid 3px red";
   } else {
      out_2.style.display = "none";
      b_2.style.border = "solid 3px black";
   }
   let out_f = "";
   for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 6; k++) {
         out_f += '*'
      }
      out_f += '<br>'
   }
   out_2.innerHTML = out_f
}
b_2.onclick = t2;

function t4() {

   if (out_4.style.display !== "block") {
      out_4.style.display = "block";
      b_4.style.border = "solid 3px red";
   } else {
      out_4.style.display = "none";
      b_4.style.border = "solid 3px black";
   }

   let out_f = "";
   for (let i = 5; i > 0; i--) {
      for (let k = 0; k < i; k++) {
         out_f += '*'
      }
      out_f += '<br>'
   }
   out_4.innerHTML = out_f
}
b_4.onclick = t4;

function t5() {

   if (out_5.style.display !== "block") {
      out_5.style.display = "block";
      b_5.style.border = "solid 3px red";
   } else {
      out_5.style.display = "none";
      b_5.style.border = "solid 3px black";
   }

   let out_f = "";
   for (let i = 3; i > 0; i--) {
      if (i === 3) {
         out_f += "&nbsp;" + "&nbsp;"
         for (let k = 0; k < 5; k++) {
            out_f += '*';
         }
         out_f += '<br>'
      } else if (i === 2) {
         out_f += "&nbsp;";
         for (let k = 0; k < 5; k++) {
            out_f += '*';
         }
         out_f += '<br>';
      } else {
         for (let k = 0; k < 5; k++) {
            out_f += '*';
         }
         out_f += '<br>';
      }

   }
   out_5.innerHTML = out_f
}
b_5.onclick = t5;

function t6() {

   if (out_6.style.display !== "block") {
      out_6.style.display = "block";
      b_6.style.border = "solid 3px red";
   } else {
      out_6.style.display = "none";
      b_6.style.border = "solid 3px black";
   }


   let out_f = "";
   for (let i = 5; i > 0; i--) {
      if (i >= 4) {
         for (let k1 = 5; k1 >= i; k1--) {
            out_f += '*'
         }
         out_f += '<br>'
      } else {
         for (let k2 = 0; k2 < i; k2++) {
            out_f += '*'
         }
         out_f += '<br>'
      }

   }
   out_6.innerHTML = out_f
}
b_6.onclick = t6;

function t7() {

   if (out_7.style.display !== "block") {
      out_7.style.display = "block";
      b_7.style.border = "solid 3px red";
   } else {
      out_7.style.display = "none";
      b_7.style.border = "solid 3px black";
   }
   let out_f = "";
   for (let i = 0; i < 1; i++) {
      out_f = "*****"
      for (let k = 0; k < 3; k++) {
         out_f += '<pre>*       *<pre>'
      }
      out_f += "*****"
   }
   out_7.innerHTML = out_f
}
b_7.onclick = t7;

function t8() {

   if (out_8.style.display !== "block") {
      out_8.style.display = "block";
      b_8.style.border = "solid 3px red";
   } else {
      out_8.style.display = "none";
      b_8.style.border = "solid 3px black";
   }

   let out_f = "";
   for (let i = 5; i > 0; i--) {
      for (let k = 0; k < i; k++) {
         out_f += `${i - k}`;
      }
      out_f += '<br>'
   }
   out_8.innerHTML = out_f
}
b_8.onclick = t8;

function t9() {

   if (out_9.style.display !== "block") {
      out_9.style.display = "block";
      b_9.style.border = "solid 3px red";
   } else {
      out_9.style.display = "none";
      b_9.style.border = "solid 3px black";
   }
   let out_f = "";
   let h = 4;

   for (let i = 1; i < 6; i++) {
      for (let g = 0; g < h; g++) {
         out_f += "&nbsp;"
      }
      for (let k = i; k > 0; k--) {
         out_f += `${k}`;
      }
      h--
      out_f += '<br>'
   }
   out_9.innerHTML = out_f
}
b_9.onclick = t9;

function t10() {

   if (out_10.style.display !== "block") {
      out_10.style.display = "block";
      b_10.style.border = "solid 3px red";
   } else {
      out_10.style.display = "none";
      b_10.style.border = "solid 3px black";
   }
   let out_f = "";
   let h = 4;

   for (let i = 1; i < 6; i++) {
      for (let g = 0; g < h; g++) {
         out_f += "X"
      }
      for (let k = i; k > 0; k--) {
         out_f += `${k}`;
      }
      h--
      out_f += '<br>'
   }
   out_10.innerHTML = out_f
}
b_10.onclick = t10;

function t11() {

   if (out_11.style.display !== "block") {
      out_11.style.display = "block";
      b_11.style.border = "solid 3px red";
   } else {
      out_11.style.display = "none";
      b_11.style.border = "solid 3px black";
   }
   let out_f = "";

   for (let i = 1; i < 6; i++) {

      for (let k = i; k > 0; k--) {
         out_f += `${i}`;
      }
      out_f += '<br>'
   }
   out_11.innerHTML = out_f
}
b_11.onclick = t11;

function t12() {

   if (out_12.style.display !== "block") {
      out_12.style.display = "block";
      b_12.style.border = "solid 3px red";
   } else {
      out_12.style.display = "none";
      b_12.style.border = "solid 3px black";
   }
   let out_f = "";
   let h = 1;
   for (let i = 5; i > 0; i--) {
      if (i % 2 === 0) {
         for (let k = 0; k < h; k++) {
            out_f += `X`;
         }
         out_f += '<br>'
         h++;
      } else {
         for (let k = 0; k < h; k++) {
            out_f += `${i}`;
         }
         out_f += '<br>'
         h++;
      }
   }
   out_12.innerHTML = out_f
}
b_12.onclick = t12;

function t13() {

   if (out_13.style.display !== "block") {
      out_13.style.display = "block";
      b_13.style.border = "solid 3px red";
   } else {
      out_13.style.display = "none";
      b_13.style.border = "solid 3px black";
   }
   let out_f = "";
   let h = 5;
   for (let i = 1; i < 10; i++) {
      for (let g = 0; g < h; g++) {
         out_f += "&nbsp;"
      }
      for (let k = 1; k <= i; k++) {
         out_f += `*`;
      }
      out_f += '<br>'
      h--;
   }
   out_13.innerHTML = out_f
}
b_13.onclick = t13;
//пирамидка вверх
// let out_f = "";
// for (let i = 1; i < 10; i++) {
//    for (let g = 0; g < 10 - i; g++) {
//       out_f += "&nbsp;"
//    }
//    for (let k = 1; k <= i; k++) {
//       out_f += `${k}`;
//    }
//    out_f += '<br>'
// }

//пирамидка вниз
// let out_f = "";
// for (let i = 1; i < 6; i++) {
//    for (let g = 0; g < i; g++) {
//       out_f += "&nbsp;"
//    }
//    for (let k = 5; k >= i; k--) {
//       out_f += `${k - i}`;
//    }
//    out_f += '<br>'
// }
// out_9.innerHTML = out_f