(function () {

		document.querySelector("head").insertAdjacentHTML('afterbegin', 
		'<link rel="manifest" href="manifest.json" crossorigin="use-credentials">' +
		// Standard Light
		'<link rel="shortcut icon" href="favicon.ico">' +
		'<link rel="icon" href="favicon.ico">' +
		'<link rel="favicon" href="favicon.ico">' +
		// Standard Dark
		'<link rel="shortcut icon" href="favicon_dark.ico" media="(prefers-color-scheme:dark)">' +
		'<link rel="icon" href="favicon_dark.ico" media="(prefers-color-scheme:dark)">' +
		'<link rel="favicon" href="favicon_dark.ico" media="(prefers-color-scheme:dark)">' +
		// High Contrast Light
		'<link rel="shortcut icon" href="favicon_hc.ico" media="(forced-colors:active)">' +
		'<link rel="icon" href="favicon_hc.ico" media="(forced-colors:active)">' +
		'<link rel="favicon" href="favicon_hc.ico" media="(forced-colors:active)">' +
		// High Contrast Dark
		'<link rel="shortcut icon" href="favicon_hcDark.ico" media="(forced-colors:active) and (prefers-color-scheme:dark)">' +
		'<link rel="icon" href="favicon_hcDark.ico" media="(forced-colors:active) and (prefers-color-scheme:dark)">' +
		'<link rel="favicon" href="favicon_hcDark.ico" media="(forced-colors:active) and (prefers-color-scheme:dark)">' 
		);

		/* Active Theme */
		document.getElementById("AppTheme" + ['01','02','03','04'][ ['auto','auto-dark','light','dark'].indexOf(getKey('color-scheme')) ]).checked=true;
		/* Default Page */
		$('body').attr("page",  "home");

})();



/* Section Changing Functions */

function Tab0() {
		$('body').attr("page", "buttons");
}

function Tab1() {
		$('body').attr("page", "buttongroups");
}

function Tab2() {
		$('body').attr("page", "dropdowns");
}

function Tab3() {
		$('body').attr("page", "textboxes");
}

function Tab4() {
		$('body').attr("page", "cpetabs");
}

function Tab5() {
		$('body').attr("page", "floatingbuttons");
}

function Tab6() {
		$('body').attr("page", "banners");
}

function Tab7() {
		$('body').attr("page", "toggleinputs");
}

function Tab8() {
		$('body').attr("page", "settings");
}

function Tab9() {
		$('body').attr("page", "home");
}

function TabA() {
		$('body').attr("page", "tables");
}
