function showDiv1(){
	document.getElementById('Div1').style.display = '';
	document.getElementById('Div2').style.display = 'none';
	document.getElementById('Div3').style.display = 'none';
	document.getElementById('Div4').style.display = 'none';
}

function showDiv2(){
	document.getElementById('Div1').style.display = 'none';
	document.getElementById('Div2').style.display = '';
	document.getElementById('Div3').style.display = 'none';
	document.getElementById('Div4').style.display = 'none';
}
function showDiv3(){
	document.getElementById('Div1').style.display = 'none';
	document.getElementById('Div2').style.display = 'none';
	document.getElementById('Div3').style.display = '';
	document.getElementById('Div4').style.display = 'none';
}
function showDiv4(){
	document.getElementById('Div1').style.display = 'none';
	document.getElementById('Div2').style.display = 'none';
	document.getElementById('Div3').style.display = 'none';
	document.getElementById('Div4').style.display = '';
}
function openPage(url) {
	window.open(url, '_blank'); // Abre la URL en una nueva pestaña del navegador
}
function cargarPaginaInicio() {
	window.location.href = "index.html";
  }
