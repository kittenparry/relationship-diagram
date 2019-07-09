set_everything = () => {
	// button events for collapsing divs
	document.getElementById('btn_toggle_left').addEventListener('click',
		e => {
			toggle_general('collapsible_left');
		});
	document.getElementById('btn_toggle_right').addEventListener('click', e => {
		toggle_general('collapsible_right');
	});
	document.getElementById('btn_collapse_all').addEventListener('click', e => {
		collapse_all();
	});
	document.getElementById('btn_display_all').addEventListener('click', e => {
		collapse_all(false);
	});
};

set_everything();
