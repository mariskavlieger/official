filterSelection("all")
function filterSelection(c) {
  	var x
    var i;
  	x = document.getElementsByClassName("column");
    console.log( x)
  if (c == "all") {c = ""};
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {w3AddClass(x[i], "show")};
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i]}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

changeColorActive ("showAllButton"); filterSelection("all");

function changeColorActive(id){ 
	document.getElementById("showAllButton").style.color = "#777"
	document.getElementById("showAllButton").style.backgroundColor = "white"
	document.getElementById("showOtherButton").style.color = "#777"
	document.getElementById("showOtherButton").style.backgroundColor = "white"
	document.getElementById("showDesignButton").style.color = "#777"
	document.getElementById("showDesignButton").style.backgroundColor = "white"
	document.getElementById("showArtButton").style.color = "#777"
	document.getElementById("showArtButton").style.backgroundColor = "white"
	document.getElementById(id).style.color = "white"
	document.getElementById(id).style.backgroundColor = "rgb(0, 0, 0)"	
	}

	document.getElementById("showAllButton").onclick = function(){changeColorActive ("showAllButton"); filterSelection("all")} 
	document.getElementById("showOtherButton").onclick = function(){changeColorActive("showOtherButton"); filterSelection("other")};
	document.getElementById("showDesignButton").onclick = function() {changeColorActive("showDesignButton"); filterSelection("design")};
	document.getElementById("showArtButton").onclick = function(){changeColorActive("showArtButton"); filterSelection("art")};
	filterSelection("all");

