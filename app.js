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

const weather = [
	'weather is fine',
	'you need a tan',
	'Its nice out!',
	"It's hot, humid, and totally miserable",
	'Sunny, some clouds, relatively cool.'
];

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
	const name = 'Ozy';
	const ozy =
		"I am a virtual assistant that can't use voice queries and a natural-language user interface to answer questions, make recommendations, and perform actions by delegating requests to a set of Internet services. But I can tell you my name and answer questions about the weather. Leave me alone, ok? I am only a week old";

	// How are you questions
	if (message.includes('how are you')) {
		const finalText = greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = finalText;
	}

	// Weather related questions
	if (message.includes('weather')) {
		const finalText = weather[Math.floor(Math.random() * weather.length)];
		speech.text = finalText;
	}

	// What is your name
	if (message.includes('name')) {
		const finalText = name;
		speech.text = finalText;
	}

	// Tell me about yourself
	if (message.includes('yourself')) {
		const finalText = ozy;
		speech.text = finalText;
	}

	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
}
