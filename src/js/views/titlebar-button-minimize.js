window.addEventListener("load", () =>
{
	const id_button = "button-minimize"; 
	const btnMinimize = document.getElementById(id_button);

	const {remote} = require("electron");
	let currentWindow = remote.getCurrentWindow();
	
	btnMinimize.addEventListener("tap", (e) =>
	{
		currentWindow.minimize();
	});
});