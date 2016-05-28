window.addEventListener("load", () =>
{
	const {remote} = require("electron");
	let currentWindow = remote.getCurrentWindow();
	
	//Button Close
	const btnClose = document.getElementById("button-close");
	
	btnClose.addEventListener("tap", (e) =>
	{
		currentWindow.close();
	});

	//Button Maximize
	
	const restore_icon = "flip-to-front";
	const maximize_icon = "check-box-outline-blank";

	const btnMaximize = document.getElementById("button-maximize");
	const btnMaximize_icon = document.getElementById("button-maximize-icon");
	
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

	//Change titlebar maximize button's icon related to window state.
	currentWindow.on("resize", () =>
	{
		btnMaximize_icon.icon = currentWindow.isMaximized() ? restore_icon : maximize_icon;
	});

	//Button Minimize
	const btnMinimize = document.getElementById("button-minimize");
	
	btnMinimize.addEventListener("tap", (e) =>
	{
		currentWindow.minimize();
	});
});