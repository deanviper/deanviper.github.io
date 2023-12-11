function toggleRibbon() {
    var friendBoxContainer = document.getElementById('friend-box-container');
    friendBoxContainer.style.display = friendBoxContainer.style.display === 'none' ? 'block' : 'none';
}

function openLetter(friendName) {
    var letterContent = getLetterContent(friendName);

    document.getElementById('friend-box-container').style.display = 'none';
    document.getElementById('letter-container').style.display = 'block';
    document.getElementById('letter-container').innerHTML = letterContent;
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
