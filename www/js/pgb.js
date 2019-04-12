unction init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function businessCard() {

	info =  'Jestes Krzysztof' + '\n' +
			'Przybylski' + '\n' +
			'chyba z Krakowa' + '\n';

	navigator.notification.alert(info);
	
}