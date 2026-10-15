let para = document.getElementById("H");
para.innerHTML = "Hello World!";

let img = new Image();
img.src = "product.jpg";
img.onload = () => {
    let a = document.createElement("a");
    a.href = "https://hbsp09.github.io/hobbyspiken/mom";
    para.innerHTML = "It finished loading!";
    img.width=300;
    img.height=300;
    a.appendChild(img);
    document.body.appendChild(a);
};
