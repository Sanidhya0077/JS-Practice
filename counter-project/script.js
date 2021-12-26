let counter = document.querySelector('.counter');
let followers = document.querySelector('.followers');
let number = 1
setInterval(() => {
    if (number < 1000) {
        number++; counter.innerHTML = number
    }
    else if (number === 1000)
    {
        followers.innerHTML = " Followers"+" Congrats for hitting 1K"
        }
 }, 1);