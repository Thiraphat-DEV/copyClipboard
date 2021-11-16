const copyText = document.querySelector('textarea[name=copyText]')
const lastText = document.querySelector('textarea[name=lastText]')
const moveBtn = document.querySelector('.moveBtn')
const copyBtn = document.querySelector('.copyBtn')

const display = document.querySelector('.display')

moveBtn.addEventListener('click', () => {
	let tmp = copyText.value
	lastText.value = tmp
	copyText.value = "";
})
const copyClipboard = (stringText) => {
	const textarea = document.createElement('textarea')
	textarea.value = stringText;
	document.body.appendChild(textarea)
	textarea.select()
	document.execCommand('copy')
	document.body.removeChild(textarea)
	display.innerHTML = `<h2>Hey Thiraphat ${textarea.value}</h2>`

}

copyBtn.addEventListener('click', () => {
	let tmp  = copyText.value
	copyClipboard(tmp)


})


