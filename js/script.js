let container = document.querySelector('div.card div.form')
let input = document.querySelector('div.card div.form input')
let btn = document.querySelector('div.card div.form a')
let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
btn.addEventListener('click', function(event){
	event.preventDefault()
	let email = input.value
	document.querySelectorAll('.erro').forEach(el => el.remove())
	if(regexEmail.test(email) !== true){
		criarElementoErro()
	} else {
		window.location.reload()
	}
})

function criarElementoErro(){
	let msgErro = document.createElement('span')
	msgErro.innerText = 'Please enter a valid email address'
	msgErro.className = 'erro'
	container.appendChild(msgErro)
}