const basicPrice = document.getElementById("basic-price");
const proPrice = document.getElementById("pro-price");
const masterPrice = document.getElementById("master-price");
const toggle = document.getElementById("toggle");
const prices = [basicPrice, proPrice, masterPrice];

document.getElementById("toggle").addEventListener("click", () => {
    if(toggle.checked) {
        prices[0].innerHTML = '199.99';
        prices[1].innerHTML = '249.99';
        prices[2].innerHTML = '399.99';
    } else {
        prices[0].innerHTML = '19.99';
        prices[1].innerHTML = '24.99';
        prices[2].innerHTML = '39.99';
    }
});