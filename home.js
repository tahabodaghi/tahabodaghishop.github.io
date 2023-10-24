function sarasary1() {
  function clickedonli() {
    document.getElementsByClassName("divli1")[1].style.display = "block";
  }
  clickedonli();
  document.getElementById("ul1").style.transition = "all 2s";
  function hide1() {
    document.querySelectorAll(".lihidden1").style.display = "none";
  }
  document.getElementById('nemonekars').style.display='block'
}

function moon_or_sun() {
  document.getElementById("body").style.backgroundColor = "black";
  document.getElementsByTagName("p").style.color = "white";
}
function btnva1() {
  var hidden = document.getElementsByClassName("lihidden1");
  for (var object = 0; object < hidden.length; object++) {
    hidden[object].style.display = "block";
    document.getElementsByClassName("div11")[0].style.display = "none";
    document.getElementsByClassName("div12")[0].style.display = "block";
  }
}
function hiddenbtn1() {
  var see1 = document.getElementsByClassName("lihidden1");
  for (var object = 0; object < see1.length; object++) {
    see1[object].style.display = "none";
    document.getElementsByClassName("div11")[0].style.display = "block";
    document.getElementsByClassName("div12")[0].style.display = "none";
  }
}
function clickonspan1(){
  let spanclick1 = document.getElementsByClassName("lihidden2");
  for(var i=0;i<spanclick1.length;i++){
    spanclick1[i].style.display = "block";
  }
  let spanclick2 = document.getElementsByClassName("lihidden3");
  for(var i=0;i<spanclick2.length;i++){
    spanclick2[i].style.display = "none";
  }
}
function clickonspan2(){
  let spanclick1 = document.getElementsByClassName("lihidden3");
  for(var i=0;i<spanclick1.length;i++){
    spanclick1[i].style.display = "block";
  }
  let spanclick2 = document.getElementsByClassName("lihidden2");
  for(var i=0;i<spanclick2.length;i++){
    spanclick2[i].style.display = "none";
  }
}
function left() {
  document.getElementById('div21').scrollLeft +=565;
};
function right() {
  document.getElementById('div21').scrollLeft -= 565;
};