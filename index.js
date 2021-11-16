// require get Element from html
const copyText = document.querySelector("textarea[name=copyText]");
const lastText = document.querySelector("textarea[name=lastText]");
const moveBtn = document.querySelector(".moveBtn");
const copyBtn = document.querySelector(".copyBtn");

const display = document.querySelector(".display");

//apply function move text
moveBtn.addEventListener("click", () => {
  let tmp = copyText.value; //ดึงค่า text ทีมีการใส่เข้ามาในtextarea class copyText เก็บไว้ในตัวเเปร tmp
  lastText.value = tmp; //ดึงค่าที่อยู่ในตัวเเปร tmp มาเเสดงใน textarea class lastText
  copyText.value = ""; //เมื่อมีการกด moveText ไปเเล้วจะทำให้่ค่าที่มีการใส่เข้า เซ็ดเป็นค่าว่าง
});
const copyClipboard = (stringText) => {
  const textarea = document.createElement("textarea"); //สร้าง textarea
  textarea.value = stringText; // ให้ค่าargument ที่มีการใส่เข้ามา เเสดงที่ new textarea
  document.body.appendChild(textarea); //จากนั้นให้นำ new textarea ที่มีการรับ argument เข้ามา เเสดวที่หน้า page
  textarea.select(); // เมืี่อเเสดง textarea เเล้ว ให้มีการ focus ที่ textarea เเละ เลื่อก text ทั้งหมด
  document.execCommand("copy"); //ctrl + c
  document.body.removeChild(textarea); //remove textarea โดยจะเเสดง เเค่ text content ด้านล่าง
  display.innerHTML = `<h2>Hey Thiraphat ${textarea.value}</h2>`; //show text with template String
};

copyBtn.addEventListener("click", () => {
  let tmp = copyText.value; //ดึงค่า text ทีมีการใส่เข้ามาในtextarea class copyText เก็บไว้ในตัวเเปร tmp
  copyClipboard(tmp); //apply function copyClipboard ✌️
});
