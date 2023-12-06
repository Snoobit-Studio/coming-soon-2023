const subscribeInput = document.getElementById('subscribe-form-email');
const subscribeButton = document.getElementById('subscribe-form-submit');

subscribeButton.addEventListener("click", () => { 
    const subscribe = subscribeInput.value;

    const url = `https://docs.google.com/forms/d/e/1FAIpQLSdvr7AbHbSg5y33pUE-rZEUblTE8fg1Gvos5bSnsr2bUxIdJA/viewform?usp=pp_url&entry.254369060=${subscribe}`;

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

    const url = `https://docs.google.com/forms/d/e/1FAIpQLSfYLDwMkUYmfYsf-r22NfQxPMiJXaoZr08E5Dgfm2IdalD_CA/viewform?usp=pp_url&entry.2005620554=${name}&entry.1045781291=${email}&entry.839337160=${message}`;

    window.open(url, '_blank').focus();
});


