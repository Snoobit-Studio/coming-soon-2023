const subscribeInput = document.getElementById('subscribe-form-email');
const subscribeButton = document.getElementById('subscribe-form-submit');

subscribeButton.addEventListener("click", () => { 
    const subscribe = subscribeInput.value;

    const url = `https://www.google.com`;

    window.open(url, '_blank').focus();
});


const nameInput = document.getElementById('contact-form-name');
const emailInput = document.getElementById('contact-form-email');
const messageInput = document.getElementById('contact-form-message');
const contactButton = document.getElementById('contact-form-submit');

contactButton.addEventListener("click", () => { 
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    const url = `https://www.google.com`;

    window.open(url, '_blank').focus();
});


