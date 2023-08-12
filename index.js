followersClick();
JobsClick();
ReviewsClick();
activeCard();

function followersClick() {
    const followers = document.getElementById("followers");
    animateValue(followers,0,53,2000);
}
function JobsClick() {
    const jobs = document.getElementById("Jobs");
    animateValue(Jobs,0,1,2000);
}
function ReviewsClick() {
    const Reviews = document.getElementById("Reviews");
    animateValue(Reviews,0,42,2000);
}
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end-start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}
function favorite() {

    const heartred = document.querySelector(".heart > i.red");
    // Found "Red"=> Remove "Red"
    if(heartred) {
        heartred.classList.remove("red");
    }
    else {
        const heart = document.querySelector(".heart > i");
        heart.classList.add("red");
    }
}
function activeCard() {
    const profileCardActive = document.querySelector(".Profile-card.active");

    // Found "active" => Remove "active"

    if (profileCardActive) {
        profileCardActive.classList.remove("active")
    }
    else {
        const profileCard = document.getElementsByClassName("Profile-card");
        profileCard[0].classList.add("active");
    }

}