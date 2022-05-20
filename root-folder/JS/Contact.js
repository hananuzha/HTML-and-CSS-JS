
const fs = require('fs')

const form =document.getElementById("form-contact")
let messages=[]


form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();
    const username =document.getElementById("username").value
    const email =document.getElementById("email").value
    const subject =document.getElementById("subject").value
    const messageContent =document.getElementById("message").value
    
    let message={}
    message.username=username
    message.email=email
    message.subject=subject
    message.messageContent=messageContent

    messages.unshift(message)
    console.log(messages)

    localStorage.setItem("username",username)
    localStorage.setItem("email",email)
    let name = localStorage.getItem("username")

    // myLeads = JSON.stringify(myLeads)

  

    const a = document.createElement('a');
    const blob = new Blob([JSON.stringify(messages)]);
    a.href = URL.createObjectURL(blob);
    a.download = 'new.txt';                     //filename to download
    a.click();
	alert("we will reach you as sooon as possible "+username );
    //location.reload();
	
});
