const btn = document.querySelector('.talk');
const content = document.querySelector('.conteent');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
	console.log('Voice is Activated');
};

recognition.onresult = function(event) {
	console.log(event);
};

//Add the Listener to button
btn.addEventListener('click', () => {
	recognition.start();
});
