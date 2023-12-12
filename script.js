function toggleRibbon() {
    var friendBoxContainer = document.getElementById('friend-box-container');
    friendBoxContainer.style.display = friendBoxContainer.style.display === 'none' ? 'block' : 'none';
}

function openLetter(friendName) {
    var letterContent = getLetterContent(friendName);

    document.getElementById('friend-box-container').style.display = 'none';
    var letterContainer = document.getElementById('letter-container');
    letterContainer.style.display = 'block';
    letterContainer.innerHTML = letterContent;
    letterContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; /* Translucent black background */
}

function exitLetter() {
    document.getElementById('letter-container').style.display = 'none';
    document.getElementById('friend-box-container').style.display = 'block';
}

function getLetterContent(friendName) {
    return `<div class="letter">
                <h2>${friendName}'s Letter</h2>
                <img src="${friendName}.jpg" alt="${friendName}'s Letter">
                <p>This is a letter from ${friendName}...</p>
                <div class="exit-button" onclick="exitLetter()">Exit</div>
            </div>`;
}

function getRandomPosition() {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var position = {
        top: Math.floor(Math.random() * windowHeight),
        left: Math.floor(Math.random() * windowWidth),
    };
    return position;
}

function createFadedWords(words) {
    var fadedWordsContainer = document.createElement('div');
    fadedWordsContainer.classList.add('faded-words');

    words.forEach(function (word) {
        var wordElement = document.createElement('div');
        wordElement.classList.add('faded-word');
        wordElement.textContent = word;
        var position = getRandomPosition();
        wordElement.style.top = position.top + 'px';
        wordElement.style.left = position.left + 'px';
        fadedWordsContainer.appendChild(wordElement);
    });

    // Repeat the words for more scattering
    words.forEach(function (word) {
        var wordElement = document.createElement('div');
        wordElement.classList.add('faded-word');
        wordElement.textContent = word;
        var position = getRandomPosition();
        wordElement.style.top = position.top + 'px';
        wordElement.style.left = position.left + 'px';
        fadedWordsContainer.appendChild(wordElement);
    });

    // Repeat the words again for more scattering
    words.forEach(function (word) {
        var wordElement = document.createElement('div');
        wordElement.classList.add('faded-word');
        wordElement.textContent = word;
        var position = getRandomPosition();
        wordElement.style.top = position.top + 'px';
        wordElement.style.left = position.left + 'px';
        fadedWordsContainer.appendChild(wordElement);
    });

    document.body.appendChild(fadedWordsContainer);
}

var words = [
    "Joan Rustia", "Winona Resurreccion", "Rejeena Rosillon", "Sarah Salazar", "Gertrude Mendoza",
    "Rachelle Salvador", "Arar Tuscano", "Nina Silerio", "Dee Raposa", "Mama Mitch", "Papa Toto"
];

createFadedWords(words);
