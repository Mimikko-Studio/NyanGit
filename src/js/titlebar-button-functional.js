window.onload = () =>
{
	const {remote} = require("electron");
	let currentWindow = remote.getCurrentWindow();

	//Button Close
	const btnClose = document.getElementById("btnClose");
	btnClose.onclick = (e) =>
	{
		currentWindow.close();
	};

	//Button Maximize
	const btnMaximize = document.getElementById("btnMaximize");
	const btnMaximize_icon = document.getElementById("btnMaximize-icon");
	const maximize_icon = "check-box-outline-blank";
	const restore_icon = "flip-to-front";
	btnMaximize.onclick = (e) =>
	{
		if (currentWindow.isMaximized())
		{
			currentWindow.restore();
		}
		else
		{
			currentWindow.maximize();
		}
	};

	//Change titlebar maximize button's icon related to window state.
	currentWindow.on("resize", () =>
	{
		btnMaximize_icon.icon = currentWindow.isMaximized() ? restore_icon : maximize_icon;
	});

	//Button Minimize
	const btnMinimize = document.getElementById("btnMinimize");
	btnMinimize.onclick = (e) =>
	{
		currentWindow.minimize();
	};
}