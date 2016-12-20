$(document).ready(function() {
	$("#frase1").click(frase1);
	$("#frase2").click(frase2);
});
function frase1() {
	$("div").load("frase1.txt",onCarga);
}
function frase2() {
	$("div").load("frase2.txt");
}
function onCarga (respuesta, estado, xhr) {
	if(estado=="success"){
		alert("La carga ha sido exitosa");
	}
	if(estado=="errror"){
		alert("Fallo en la carga "+xhr.status+", "+xhr.statusText);
	}
}