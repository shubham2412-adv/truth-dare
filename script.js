let questionCount = 0;
let currentPlayer = 'Anonymous';

const truthQuestions = [
    "What's your biggest secret?",
    "Have you ever lied to your best friend?",
    "What is one thing you would never want your parents to know?",
    "What was your most embarrassing moment?",
    "Who is your secret crush?"
];

const dareQuestions = [
    'Do a silly dance for 30 seconds',
    'Sing a song out loud',
    'Do 10 jumping jacks',
    'Talk in a funny voice until your next turn',
    'Act like your favorite animal for 20 seconds'
];

const onlineChallenges = [
    'Send a funny GIF to the group chat',
    'Share an embarrassing story',
    'Do a quick emoji-only message to the next player',
    'Name three things you love about the person to your right',
    'Take a selfie with a silly face and show it to the group'
];

function getRandomQuestion(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function displayQuestion(type, question) {
    const box = document.getElementById('questionBox');
    box.innerHTML = `
        <div class="question-type">${type}</div>
        <div class="question-text">${question}</div>
        <div class="player-name">for ${currentPlayer}</div>
    `;
    updateCounter();
}

function getTruth() {
    const question = getRandomQuestion(truthQuestions);
    displayQuestion('TRUTH', question);
    questionCount++;
}

function getDare() {
    const question = getRandomQuestion(dareQuestions);
    displayQuestion('DARE', question);
    questionCount++;
}

function getChallenge() {
    const question = getRandomQuestion(onlineChallenges);
    displayQuestion('ONLINE CHALLENGE', question);
    questionCount++;
}

function getVirtualDare() {
    const question = 'Pretend you are a famous entertainer and perform a short act.';
    displayQuestion('VIRTUAL DARE', question);
    questionCount++;
}

function getScreenChallenge() {
    const question = 'Share your screen and show the group one thing that makes you happy.';
    displayQuestion('SCREEN CHALLENGE', question);
    questionCount++;
}

function setPlayer() {
    const nameInput = document.getElementById('playerName');
    const name = nameInput.value.trim();
    if (name) {
        currentPlayer = name;
        document.getElementById('currentPlayer').innerText = 'Player: ' + currentPlayer;
        nameInput.value = '';
    }
}

function updateCounter() {
    document.getElementById('counter').innerText = questionCount;
}

function resetGame() {
    questionCount = 0;
    updateCounter();
    const box = document.getElementById('questionBox');
    box.innerHTML = '<p>Click Truth or Dare to get started!</p>';
}
