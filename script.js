let ratingState = document.querySelector('#rating-state');
let thankYouState = document.querySelector('#thank-you-state');
let ratingLevels = document.querySelectorAll('.rating-level');

let number;

for (let i = 0; i < ratingLevels.length; i++) {
    ratingLevels[i].addEventListener('click', () => {
        verificateStatus(ratingLevels[i]);
    });
}

function verificateStatus(ratingLevel) {
    let status = ratingLevel.classList.contains('rating-active');

    if (!status) {
        activateRatingBtn(ratingLevel);
    } else {
        deactiveRatingBtn();
    }
}

function activateRatingBtn(ratingLevel) {
    ratingLevel.classList.add('rating-active');
    number = ratingLevel.textContent;
    console.log(number);
}

function deactiveRatingBtn() {
    ratingLevels.forEach(ratingLevel => {
        ratingLevel.classList.remove('rating-active');
    });
}