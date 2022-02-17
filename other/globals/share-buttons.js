const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const emailBtn = document.querySelector(".email-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const redditBtn = document.querySelector(".reddit-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");
const telegramBtn = document.querySelector(".telegram-btn");

function init() {
    let postUrl = encodeURI(document.location.href);

    facebookBtn.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
    twitterBtn.setAttribute(
        "href",
        `https://www.twitter.com/share?url=${postUrl}&text=${postTitle}:&via=arshsaxena02/`
    );
    emailBtn.setAttribute(
        "href",
        `mailto:?subject=${postTitle}%20|%20aEducational%20by%20Arsh&body=${postTitle}:%20${postUrl}`
    );
    linkedinBtn.setAttribute(
        "href",
        `https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}
        `
    );
    redditBtn.setAttribute(
        "href",
        `https://reddit.com/submit?url=${postUrl}&title=${postTitle}`
    );
    whatsappBtn.setAttribute(
        "href",
        `https://api.whatsapp.com/send?text=${postTitle}:%20${postUrl}`
    );
    telegramBtn.setAttribute(
        "href",
        `https://t.me/share/url?url=${postUrl}/&text=${postTitle}`
    );
}
        
init();