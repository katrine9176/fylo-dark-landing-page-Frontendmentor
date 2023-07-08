const input = document.querySelector('.input')
const btn = document.querySelector('.email-btn')
const error = document.querySelector('.error')
const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const emailValidation = () => {
	if (re.test(input.value)) {
		error.classList.remove('show')
	} else {
		error.classList.add('show')
	}
}

btn.addEventListener('click', emailValidation)
