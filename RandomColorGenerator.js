let ref = document.querySelector("#img-ref");
let copy = document.querySelector("#img-copy");
let clrscr = document.querySelector(".color-screen");
let clrname = document.querySelector(".name");

ref.addEventListener('click', () => {
    randomValue();
});


function randomValue() {
    let code = '';
    for (var i = 1; i <= 6; i++) {
        let rf = Math.floor(Math.random() * 16);
        let rvalue = 'abcdef0123456789';
        for (let y of rvalue[rf]) {
            code = code + y;
        }
    }
    let colorCode = (`#${code}`);
    clrscr.style.backgroundColor = colorCode;
    clrname.innerText = colorCode;
}
copy.addEventListener('click', () => {
    copyCode()
});
function copyCode() {
    let code = document.querySelector('.name').innerHTML;
    let getcode = navigator.clipboard.writeText(code);
    alert("code copied");
    pasteDiv.style.display = "block";
}

/************************copy-set-backgroundColor**************************/
let pasteDiv = document.querySelector(".img-paste");
let txtDiv = document.querySelector(".txt");
let imgButtonDiv = document.querySelector(".imgbutton");
let imgbtn = document.querySelector(".imgbtn");
let paste = document.querySelector(".paste");
let intputTxtColor = document.querySelector(".codepaste");
let containerBg = document.querySelector(".container");

imgbtn.addEventListener('click',()=>{
    setBackground();
});


function pasteHover() {
    pasteDiv.style.transform = 'translateX(0px)';
    pasteDiv.style.transition = '0.5s';
    txtDiv.style.transform = 'translateX(0px)';
    txtDiv.style.transition = '0.5s';
    imgButtonDiv.style.transform = 'translateX(0px)';
    imgButtonDiv.style.transition = '0.5s';
}
function setBackground() {
    let colorSetBg = intputTxtColor.value;
    containerBg.style.backgroundColor = colorSetBg;

}