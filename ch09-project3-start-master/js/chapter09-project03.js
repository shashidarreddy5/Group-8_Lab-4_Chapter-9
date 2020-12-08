function loadEvent()

{


document.getElementById("highlight").style.display = "block";

document.getElementById("hide").style.display = "none";



document.getElementById("highlight").addEventListener("click", function(){


var elements = document.querySelectorAll("h1, main, div, p, tr, td, caption, th, a, legend, label, fieldset, button");


for (var i = 0; i < elements.length; i++) {

if(elements[i].nodeType == 1)

{

var span = document.createElement('SPAN');

span.className = "hoverNode";

span.innerHTML = elements[i].tagName;

elements[i].appendChild(span);

span.addEventListener("click", function(e){


var parentElement = e.currentTarget.parentElement;

var parentId = parentElement.getAttribute("id");

var tagName = parentElement.tagName;

var className = parentElement.className;

var innerhtml = parentElement.innerHTML;


var alertMsg = parentId + " " + tagName + " " + className + " " + innerhtml;

alert(alertMsg);

});

}

}



document.getElementById("highlight").style.display = "none";

document.getElementById("hide").style.display = "block";

});



}