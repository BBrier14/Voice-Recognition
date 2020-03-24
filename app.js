const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//----- Responses -----//
const greetings = [
	'I am good',
	'I am doing good, man',
	'leave me alone',
	'All the better now that you asked.',
	'Much better now that you are with me.',
	'At minding my own business? Better than most people',
	'I’ve been going through some crests and troughs in my life. Is everything stable at your end?',
	'Cant complain',
	'Living a dream'
];

const weather = [ 'weather is fine', 'you need a tan' ];

//----- Opening and listening -----//
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
	console.log('Voice is Activated');
};

recognition.onresult = function(event) {
	const current = event.resultIndex;
	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutLoud(transcript);
};

//Add the Listener to button
btn.addEventListener('click', () => {
	recognition.start();
});

//----- Responding to Questions -----//
function readOutLoud(message) {
	const speech = new SpeechSynthesisUtterance();

	speech.text = 'I dont know what you said';

	if (message.includes('how are you')) {
		const finalText = greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = finalText;
	}

	if (message.includes('weather')) {
		const finalText = weather[Math.floor(Math.random() * weather.length)];
		speech.text = finalText;
	}

	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
}
