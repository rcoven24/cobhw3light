
var buyP = document.getElementById("buybutton1");
var maxGold = document.getElementById("buybutton2");
var moreGold = document.getElementById("buybutton3");
var lilGold = document.getElementById("buybutton4");
var clicks = document.getElementById("buybutton5");
var walletG = 10;
var isBoost = new Boolean(false);



buyP.addEventListener("click", ()=>{
  if(walletG === 10)
  {
    walletG -= 10;
    document.getElementById("wG").innerHTML = walletG;
    alert("SUCCESS!")
  }
  else
  {
    alert("You can't afford this!")
  }

})

maxGold.addEventListener("click", ()=>{
    alert("GOLD GET!")
    walletG += 10;
    document.getElementById("wG").innerHTML = walletG;
})

moreGold.addEventListener("click", ()=>{
    alert("GOLD GET!")
    walletG += 5;
    document.getElementById("wG").innerHTML = walletG;
})

lilGold.addEventListener("click", ()=>{
    alert("GOLD GET!")
    walletG += 1;
    document.getElementById("wG").innerHTML = walletG;
})

clicks.addEventListener("click", ()=>{
    if(walletG === 10)
    {
        walletG -= 10;
        document.getElementById("wG").innerHTML = walletG;
        isBoost = true;
        alert("SUCCESS!")


    }

})



