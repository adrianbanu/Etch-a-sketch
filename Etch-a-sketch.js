
const numarDiv = document.createElement("BUTTON");
numarDiv.innerHTML = "Number of squares";
numarDiv.id = 'numar-div';
document.body.appendChild(numarDiv); 

const clearDiv = document.createElement("BUTTON");
clearDiv.innerHTML = "Clear div";
clearDiv.id = 'clear-div';
clearDiv.style.marginLeft = "10px";
document.body.appendChild(clearDiv); 

const colorDiv = document.createElement("INPUT");
colorDiv.setAttribute("type", "checkbox");
colorDiv.id = 'color-div';
colorDiv.value = 'culoare';
colorDiv.style.marginLeft = "110px";
document.body.appendChild(colorDiv); 

var x = document.createElement("LABEL");
var t = document.createTextNode("Colorful (redraw squares)"); //ar merge tot un buton ca functionalitate dar imi place cum am atasat label la checkbox
x.setAttribute("for", "culoare");
x.appendChild(t);
  
document.body.appendChild(x); 

const content = document.createElement('div');
content.id = 'container2';
content.classList.add('container');
content.style.border = '1px solid black';
content.style.width = '500px';
content.style.height = '500px';
content.style.marginTop = '10px';
content.style.display = 'grid';
document.body.appendChild(content);

document.getElementById("numar-div").addEventListener("click", squareNumbers);
document.getElementById("clear-div").addEventListener("click", cleanContainer);

function createDivs(divNumber){
	for( let i = 0; i < divNumber * divNumber; i++){
		const xxx = document.createElement('div');
		xxx.classList.add('toFill');
		xxx.id = i;
		xxx.style.border = '1px solid black';
		xxx.style.backgroundColor = 'white';
		content.appendChild(xxx);
		
		if(document.getElementById("color-div").checked == true){
			document.getElementById(i).addEventListener("mouseover", function(){
				document.getElementById(i).style.backgroundColor = getRandomColor(); //pot sa bag o functie de randomizare culoare
			});	
		}
		else{
			document.getElementById(i).addEventListener("mouseover", function(){
				document.getElementById(i).style.backgroundColor = "black";
			});
		}
		document.getElementById(i).addEventListener("mousedown", function(){
			document.getElementById(i).style.backgroundColor = "white";
		});						
	}	
}

function squareNumbers (){
	let numar = prompt("Choose number of squares");	
	if(Number.isInteger(Number(numar))){
		resetContainer();
		content.style.gridTemplateColumns = `repeat(${numar}, auto)`;
		createDivs(numar);
	}
	else{
		alert("You must choose a number!");
	}
}

function cleanContainer(){
	x = document.querySelectorAll(".toFill");
	for (i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = "white";	
	}
}

function resetContainer(){
	let list = document.getElementById("container2");
	while (list.hasChildNodes()) {  
	  list.removeChild(list.firstChild);
	}
}

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

createDivs(16);
content.style.gridTemplateColumns = "repeat(16, auto)";