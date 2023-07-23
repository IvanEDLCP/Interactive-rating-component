const ratingState = document.querySelector('#rating-state');
const ratingLevels = document.querySelectorAll('.rating-level');
const thankYouState = document.querySelector('#thank-you-state');
const primaryBtn = document.querySelector('#primary-btn');
const selectedNumber = document.querySelector('#selected-number');

let number;


// RATING STATE

// Assigning an event listener to each rating level
for (let i = 0; i < ratingLevels.length; i++) {
    ratingLevels[i].addEventListener('click', () => {
        verificateStatus(ratingLevels[i]);
    });
}

// Function that verifies the status of a rating level.
function verificateStatus(ratingLevel) {
    let status = ratingLevel.classList.contains('rating-active');

    if (!status) {
        cleanRatingLevels();
        activateRatingLevel(ratingLevel);
    } else {
        deactiveRatingLevel(ratingLevel);
    }
}

// Function that deactivates all active levels
function cleanRatingLevels() {
    ratingLevels.forEach(ratingLevel => {
        if (ratingLevel.classList.contains('rating-active')) {
            deactiveRatingLevel(ratingLevel);
        }
    });
}

// Function that activates a rating level
function activateRatingLevel(ratingLevel) {
    ratingLevel.classList.add('rating-active');
    number = ratingLevel.textContent;
}

// Function that disables a rating level
function deactiveRatingLevel(ratingLevel) {
    ratingLevel.classList.remove('rating-active');
    number = null;
}


// THANK YOU STATE

// Assign event listener to sumbit button
primaryBtn.addEventListener('click', verificateRating);

// Function that validates that a number has been selected.
function verificateRating() {
    if (number > 0) {
        showThankYouState();
    } else {
    }
}

// Function that displays the thank you state
function showThankYouState() {
    ratingState.classList.add('inactive');
    thankYouState.classList.remove('inactive');
    selectedNumber.innerText = number;
}