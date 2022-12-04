const inputSelector = document.querySelector("body > div > div > div.qnty-select-container > div > input")
const priceDisplay = document.querySelector("#price");
const purchaseButton = document.querySelector("body > div.purchase-container > div > div.purchase-button-container > button")
const price = .1;
var total = .1;


function quantityController(element){
    if(element.id == "decrement"){
        if (!(parseInt(inputSelector.value) > 1)) return;
        inputSelector.value = parseInt(inputSelector.value) - 1
    } else{
        if (!(parseInt(inputSelector.value) < 5)) return;
        inputSelector.value = parseInt(inputSelector.value) + 1;
    }
    calculatePrice()
}

function calculatePrice(){
    total = parseInt(inputSelector.value) * price
    priceDisplay.innerText = (Math.round(total * 10)/10);
}

purchaseButton.addEventListener("click",function(){
    ethereum.request({ method: 'eth_requestAccounts' });
})
