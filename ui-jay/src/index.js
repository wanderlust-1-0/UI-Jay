import './index.scss'

const alinks = document.querySelectorAll('a')

alinks.forEach(link => {
	link.addEventListener('mouseover', function(event) {
		event.target.style.color = 'yellow'
		event.target.style.border = '1px dashed black'
	})
})

document.getElementById('jumbo-btn').style.color = '1px dashed yellow'

console.log(alinks)

//maybe add functionality to pictures of team below
