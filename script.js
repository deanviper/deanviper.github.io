function openLetter(friendName) {
    var letterContent = getLetterContent(friendName);

    document.getElementById('letter-container').style.display = 'block';
    document.getElementById('letter-container').innerHTML = letterContent;
}

function getLetterContent(friendName) {
    return `<div class="letter">
                <h2>${friendName}'s Letter</h2>
                <img src="${friendName}.jpg" alt="${friendName}'s Letter">
                <p>This is a letter from ${friendName}...</p>
            </div>`;
}
