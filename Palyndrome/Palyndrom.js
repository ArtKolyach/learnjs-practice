let text = prompt('Введи слово:', '');

alertPolynd(checkPolynd(formText(text)), text);

/////////////////////////////////////////функции
function checkPolynd(text) {
    let firstLetter = 0; //0
    let secondLetter = text.length - 1; //4
    let lastLetter = text.length; //5
    let isPolynd = false;

    for (
        firstLetter;
        firstLetter !== lastLetter &&
        text.charAt(firstLetter) === text.charAt(secondLetter);
        firstLetter++
    ) {
        console.log(
            text.charAt(firstLetter) + ' = ' + text.charAt(secondLetter)
        );
        isPolynd = true;
        secondLetter--;
    }
    return isPolynd;
}

function alertPolynd(isPolynd, text) {
    if (isPolynd) {
        console.log('"' + text + '" — палиндром');
        alert('"' + text + '" — палиндром');
    }
    else console.log('"' + text + '" — не палиндром');
}

function formText(text) {
    text = text.replaceAll(/[^a-zа-яё]/gi, '');
    text = text.toUpperCase();
    console.log(text);
    return text;
}