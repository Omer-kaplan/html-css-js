const headere = document.querySelectorAll("p")
const newe = document.querySelector(".new")

const alertfunc= (e) => {
    // window.alert("hello world");
    let div = document.createElement("li");
    div.innerText="asfdfsdfsdfsdfsdfsdfsdfsdf";
    newe.appendChild(div)
}
headere.forEach(item=>{
    item.addEventListener("click", alertfunc);
})