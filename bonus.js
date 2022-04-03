var chk1 = document.getElementById("chk1");
var chk2 = document.getElementById("chk2");
var submit = document.getElementById("sbmtBtn");
var p = document.getElementById("pB");
var message = document.getElementById("bMessage");
var pic = document.getElementById("grammy");
var buy = document.getElementById("buybutton1");
var score = 0;
var brass = 0;
var walletG = 10;



var tId;
$(function() {
  tId = setInterval(function() {
    var progress = localStorage.getItem("progress");
    $('#pB').val(progress);
  }, 1);
});


$(function() {
  $(submit).click(function() {
    var progress = "7";
    localStorage.setItem("progress", progress)
    window.location = "game.html";
    
  });
});

function checkProgress()
{
  if(p.value = "7")
  {
    message.innerHTML = "Dark Mode Unlocked! Visit the Store to grab it now!";
  }
}

pic.addEventListener('click', ()=>{
  

  score +=1;
  

  document.getElementById("count").innerHTML = score;


})







checkProgress();
