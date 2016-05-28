window.addEventListener("load", () =>
{
	const restore_icon = "flip-to-front";
	const maximize_icon = "check-box-outline-blank";

	const id_button = "button-maximize";
	const id_icon = "button-maximize-icon";
	
	const btnMaximize = document.getElementById(id_button);
	const btnMaximize_icon = document.getElementById(id_icon);

	const {remote} = require("electron");
	let currentWindow = remote.getCurrentWindow();
	
	btnMaximize.addEventListener("tap", (e) =>
	{
		if (currentWindow.isMaximized())
		{
			currentWindow.restore();
		}
		else
		{
			currentWindow.maximize();
		}
	});

	currentWindow.on("resize", () =>
	{
		btnMaximize_icon.icon = currentWindow.isMaximized() ? restore_icon : maximize_icon;
	});

});