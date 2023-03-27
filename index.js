const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

const registrace = document.querySelector("#registration")
const emailInput = document.querySelector(".emailInput")
const passwordInput = document.querySelector(".passwordInput")

const overit = (event) => {
    event.preventDefault()
    if (passwordInput.value === user.password && emailInput.value === user.email) {
        registration.textContent = "Přihlášený uživatel: Bartoloměj"
    } else {
        registration.textContent = "Špatné jméno nebo heslo."
    }
}

registrace.addEventListener("submit", overit)
