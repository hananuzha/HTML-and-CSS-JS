const form =document.getElementById("form-contact")

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();
    let username =document.getElementById("username").value
	alert("we will reach you as sooon as possible "+username );
    location.reload();
	
});
