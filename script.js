function addAmount(){
    var amount = document.getElementById("amount-added").innerHTML;
    amount = parseInt(amount);
    amount += 1;
    document.getElementById("amount-added").innerHTML = amount;
}
function subAmount(){
    var amount = document.getElementById("amount-added").innerHTML;
    amount = parseInt(amount);
    if(amount > 1){
        amount--;
    }
    document.getElementById("amount-added").innerHTML = amount;
}
function changeImg(img){
    var currentImg = document.getElementById("current-img");
    currentImg.src = img.src;
}
