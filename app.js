const btn = document.querySelector('.talk');
const content = document.querySelector('.conteent');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
	console.log('Voice is Activated');
};

recognition.onresult = function(event) {
	const current = event.resultIndex;
	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
};

//Add the Listener to button
btn.addEventListener('click', () => {
	recognition.start();
});
