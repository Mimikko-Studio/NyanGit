	window.addEventListener("load", () =>
	{
		const history_page_index = 1;
	
		const id_pages = "pages-tabs-content";
		const id_button = "button-tab-history";
	
		const pages = document.getElementById(id_pages);
		const btnTabHistory = document.getElementById(id_button);
	
		btnTabHistory.addEventListener("tap", (e) =>
		{
			pages.selected = history_page_index;
		});
});