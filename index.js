function validate() {
	const form = document.getElementById('form');
	const inputGroup = document.getElementsByClassName('input-group');
	const inputs = form.querySelectorAll('input');
	const hidden = document.getElementsByClassName('invalid-message');

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		if (!validateEmail(inputs[0].value)) {
			inputGroup[0].classList.add('error');
			hidden[0].classList.add('error');
			return;
		}

		inputGroup[0].classList.remove('error');
	});
}

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

validate();
