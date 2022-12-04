const inputSelector = document.querySelector("body > div > div > div.qnty-select-container > div > input")
const priceDisplay = document.querySelector("#price");
const purchaseButton = document.querySelector("body > div.purchase-container > div > div.purchase-button-container > button")
const connectButton = document.querySelector("body > header > div > button")
var account = undefined;
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


async function getAccount(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];
    connectButton.innerText = account.slice(0,Math.round(account.length/4)) + "..."
}
connectButton.addEventListener("click",getAccount)


purchaseButton.addEventListener("click",async function(){
    if (typeof window.ethereum !== 'undefined') {
        const value = "0x" + (total * (Math.pow(10,18))).toString(16)
        ethereum
        .request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: account,
              to: '0x4e9f73539bB4820BA4087663B363837Ddb4d4E87',
              value: value
            },
          ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
    }
})
