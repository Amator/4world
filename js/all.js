//siteSearch
function siteSearch(){
	var sitesearch = document.getElementById('search'); 
	sitesearch.value = '';
}
//

//menu 
function menuButton(){
	var menubutton = document.getElementById('l-menu-hide');
	if(menubutton.style.display =='none'){
		menubutton.style.display ='block';
	}
	else{
		menubutton.style.display ='none';
	}
}

//

//swap stylesheet
function swapStyleSheet(sheet){
	document.getElementById ('swapstyle').setAttribute('href', sheet);
}

//Alert custom
function CustomAlert(){
	this.render = function(dialog){
		var winW = window.innerWidth;
		var winH = window.innerHeight;
		var dialogoverlay = document.getElementById('dialogoverlay');
		var dialogbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
		dialogoverlay.style.height = winH+"px";
		dialogbox.style.left = (winW/2) - (550 * .5)+"px";
		dialogbox.style.top = "100px";
		dialogbox.style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = "Warning message";
		document.getElementById('dialogboxbody').innerHTML = dialog;
		document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
	}
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();
//

//download timer
function dbtn (secs,elem){
	var element = document.getElementById(elem);
	element.innerHTML = "Please wait for "+secs+" seconds";
	if(secs < 1){
		clearTimeout(timer);
		element.innerHTML = '<h2></h2>';
		element.innerHTML += '<a href="#"> Click here now </a>';
	} 
	secs--;
	var timer = setTimeout('dbtn('+secs+',"'+elem+'" )',1000);
}

//

//fadeIn fadeOut
var fade_in_from = 0;
var fade_out_from = 10;
function fadeIn(idName){
	var target = document.getElementById(idName);
	target.style.display = "block";
	var newSetting = fade_in_from / 10;
	target.style.opacity = newSetting;
	fade_in_from++;
	if(fade_in_from == 10){
		target.style.opacity = 1;
		clearTimeout(loopTimer);
		fade_in_from = 0;
		return false;
	}
	var loopTimer = setTimeout('fadeIn(\''+idName+'\')',50);
}

function fadeOut(idName){
	var target = document.getElementById(idName);
	var newSetting = fade_out_from / 10;
	target.style.opacity = newSetting;
	fade_out_from--;
	if(fade_out_from == 0){
		target.style.opacity = 0;
		target.style.display = "none";
		clearTimeout(loopTimer);
		fade_out_from = 10;
		return false;
	}
	var loopTimer = setTimeout('fadeOut(\''+idName+'\')',50);
}

//

