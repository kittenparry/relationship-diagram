toggle_general = (id) => {
	let el = document.getElementById(id);
	let display = get_display(el);
	console.log(display);
	if (display == 'block') {
		el.style.display = 'none';
	} else if (display == 'none') {
		el.style.display = 'block';
	}
};

get_display = (el) => {
	return el.currentStyle ? el.currentStyle.display :
		getComputedStyle(el, null).display;
}

collapse_all = (collapse = true) => {
	let els = ['collapsible_left', 'collapsible_right'];
	if (collapse) {
		els.forEach(el => {
			document.getElementById(el).style.display = 'none';
		});
	} else {
		els.forEach(el => {
			document.getElementById(el).style.display = 'block';
		});
	}
};
