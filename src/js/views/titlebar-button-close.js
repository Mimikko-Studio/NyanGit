window.addEventListener("load", () =>
{
	const id_button = "button-close"; 
	const btnClose = document.getElementById(id_button);

	const {remote} = require("electron");
	let currentWindow = remote.getCurrentWindow();
	
	btnClose.addEventListener("tap", (e) =>
	{
		currentWindow.close();
	});
});