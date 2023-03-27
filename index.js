const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

const registrace = document.querySelector("#registration")
const emailInput = document.querySelector(".emailInput")
const passwordInput = document.querySelector(".passwordInput")
const nadpis = document.querySelector(".nadpis")

const overit = (event) => {
    event.preventDefault()
    if (passwordInput.value === user.password && emailInput.value === user.email) {
        registration.textContent = `Přihlášený uživatel: ${user.name}`
    } else {
        nadpis.textContent = "Špatné jméno nebo heslo."
        nadpis.style.color = "red"
        passwordInput.value = ""
    }
}

registrace.addEventListener("submit", overit)
