// Toggle navigation links on menu icon click
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbz-L6YA93nzJKBO1Z8y1fqRTTODBUCn-821X4lq-vocBOQxd1AqazIF9zInQjAeG9D28A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        msg.innerHTML = "message send sucessfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
        .catch(error => console.error('Error!', error.message))
})