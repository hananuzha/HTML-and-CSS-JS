let services = [{
    title: "MEETINGS AND GROUPS   ",
    details: ""
},
{
    title: "MOTORCOACHES    ",
    details: ""
},
{
    title: "AIRPORT GREETINGS",
    details: ""
},
{
    title: "RETURN TO WORK SHUTTLE ",
    details: ""
}

];
let divService = document.querySelector("#services")


for (let i = 0; i < services.length; i++) {
addServiceToHTML(services[i])  
}

let title = document.getElementById("title")
let details = document.getElementById("details")
console.log(details)

function addService() {
    if (title.value.length !== 0 && details.value.length !== "") {
        let service = {
            title: "",
            details: ""
        }
        service.details = details.value
        service.title = title.value
        services.push(service)
        console.log(services)


        //add elemnt to html
       addServiceToHTML(service)

    }
}
function removeService() {
    services.pop();
    let remove = document.querySelector("#services #hana")
    if (remove != null)
        remove.remove()
    else
        alert("nothing to remove")


}
function addServiceToHTML(service){
     var div = document.createElement("div");
        div.setAttribute('id', 'hana');
        div.classList.add('col-md-12');
        var elemnt = document.createElement("div");
        elemnt.classList.add('row', 'mb-5')
        var span = document.createElement("span");
        span.classList.add('border', 'border-1')
        span.textContent = service.title + " " + service.details
        elemnt.appendChild(span)
        div.appendChild(elemnt)
        divService.appendChild(div)
}


