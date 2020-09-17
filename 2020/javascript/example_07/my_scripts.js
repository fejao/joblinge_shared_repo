

function show_london(){
    document.getElementById('articleID').innerHTML = "<object  data=\"london.html\" class=\"article\" ></object>";
}

function show_paris(){
    document.getElementById('articleID').innerHTML = "<object  data=\"paris.html\"></object>";
}

function show_tokyo(){
    document.getElementById('articleID').innerHTML = "<object  data=\"tokyo.html\"></object>";
}

function show_error(){
  alert("ERROR :(");
}

// ######################

var summe = 0;
var myColor = "black";
console.log(summe);

function change_color() {
    if (summe % 2 != 0) {
        myColor = "white";
    } else {
        myColor = "black";
    }
    document.getElementById("header").style.backgroundColor = myColor;
    summe = summe + 1;
    console.log(summe);
}

var summeFooter = 0;
var myFooterColor = "gray";
console.log(summeFooter);

function change_color_footer() {
    if (summeFooter % 2 != 0) {
        myFooterColor = "white";
    } else {
        myFooterColor = "gray";
    }
    document.getElementById("footer").style.backgroundColor = myFooterColor;
    summeFooter = summeFooter + 1;
    console.log(summeFooter);
}
