var deleteLine = document.getElementById('c');
var openBracket = document.getElementById('openBracket');
var closeBracket = document.getElementById('closeBracket');
var divide = document.getElementById('divide');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var multiply = document.getElementById('multiply');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var minus = document.getElementById('minus');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var plus = document.getElementById('plus');
var zero = document.getElementById('long-block');
var dot = document.getElementById('dot');
var equals = document.getElementById('equals');
var windowu = document.getElementsByClassName('wrapper-of-window');
var newLi


deleteLine.onclick = function () {
  var i = document.getElementsByClassName('lis')
  var fu = i.length - 1;
  i[fu].remove();
}

openBracket.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '('
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

closeBracket.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = ')';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

divide.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '/';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

seven.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '7';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

eight.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '8';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

nine.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '9';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

multiply.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '*';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

four.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '4';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

five.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '5';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

six.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '6';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

minus.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = ' - ';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

one.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '1';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

two.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '2';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

three.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '3';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

plus.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '+';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

zero.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '0';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

dot.onclick = function () {
	newLi = document.createElement('p');
  newLi.innerHTML = '.';
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
}

equals.onclick = function () {
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;

	

	 var i = document.getElementsByClassName('lis');
	 var e = i.length * 1;
	 for (var q = 0; q < e; q++) {
	 		 i[0].remove();
	 }

	var total = eval(totalPrimer)
	newLi = document.createElement('p');
  newLi.innerHTML = total;
  newLi.className = "lis";
	windowu[0].appendChild(newLi);
	var totalPrimer = document.getElementsByClassName('wrapper-of-window')[0].textContent;
	
}