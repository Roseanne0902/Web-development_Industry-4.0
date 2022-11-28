
var divs = document.querySelectorAll("div");
for (var i = 0; i < divs.length; i++) {
    if (divs[i].className == "container") {
        divs[i].className = "container-fluid";
    }
}


var intro = document.getElementsByClassName("intro")
for (var i = 0; i < intro.length; i++) {
    intro[i].style.marginLeft = "50px";
    intro[i].style.marginRight = "50px";
    intro[i].style.fontFamily = "Ariel";
    intro[i].style.fontSize = "15px";
    intro[i].style.color = "white";
    intro[i].style.textAlign = "center";
}


var gapss = document.getElementsByClassName("col-md-12 col-sm-12 col-12")
for (var i = 0; i < gapss.length; i++) {

  
    gapss[i].style.paddingRight = "10px";
    gapss[i].style.paddingLeft = "10px";
    gapss[i].style.minHeight = "850px";
    gapss[i].style.position = "center";
}

var buttons = document.getElementsByClassName("card-header");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', mouseOverSection);
    buttons[i].addEventListener('mouseout', mouseOutSection);
}
buttons[0].addEventListener('mouseover', mouseOverSection);
buttons[0].addEventListener('mouseout', mouseOutSection);

var currentSectionStyle;
function mouseOverSection(obj) {
    currentSectionStyle = obj.target.style;
    obj.target.style = "background: lightgrey; border-style: double;";
}
function mouseOutSection(obj) {
    obj.target.style = currentSectionStyle;
}