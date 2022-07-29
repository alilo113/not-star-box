const Arabica = document.getElementById("Arabica");
const whiteArabica = document.getElementById("whiteArabica");
const blackCoffe = document.getElementById("blackCoffe");
const h1 = document.querySelector("h1");

Arabica.addEventListener('click',arab);
whiteArabica.addEventListener("click",white);
blackCoffe.addEventListener("click",black);

function arab(){
    Arabica.remove();
    whiteArabica.remove();
    blackCoffe.remove();

    h1.innerHTML = "your order is done";

    let btn = document.createElement("button");
    btn.innerText = "cancel";
    document.body.appendChild(btn);
    btn.addEventListener("click", cancelBtn)
}

function white(){
    Arabica.remove();
    whiteArabica.remove();
    blackCoffe.remove();

    h1.innerHTML = "your order is done";

    let btn = document.createElement("button");
    btn.innerText = "cancel";
    document.body.appendChild(btn);
    btn.addEventListener("click", cancelBtn);
}

function black(){
    Arabica.remove();
    whiteArabica.remove();
    blackCoffe.remove();
    
    h1.innerHTML = "your order is done";

    let btn = document.createElement("button");
    btn.innerText = "cancel";
    document.body.appendChild(btn);
    btn.addEventListener("click", cancelBtn);
}

function cancelBtn(){
    alert("this is a coffe order not amazon order");
}