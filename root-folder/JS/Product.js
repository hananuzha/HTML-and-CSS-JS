
let cards=[{
    "card title":"BMW X5",
    "card details":"The 2022 BMW X5 is a versatile player in the mid-size luxury-SUV segment, combining a well-appointed interior and a pleasurable driving experience in one handsome package. Even the entry-level models are richly outfitted with modern technology and convenience features, not to mention a silky-smooth inline-six cylinder engine. Upgrading to the plug-in hybrid model gives the X5 the ability to drive solely on electric power for short trips while the optional twin-turbo V-8 engine delivers seriously punchy acceleration"
},{
    "card title":"GLE",
    "card details":"The new Mercedes-Benz GLE is an attractive luxury SUV that’s fit for growing Newport Beach families and Irvine commuters looking for more cabin space. When you upgrade to a 2022 GLE at Fletcher Jones Motorcars, you’ll choose from five trims levels: GLE 350, GLE 350 4MATIC®, GLE 450 4MATIC®, GLE 580 4MATIC®, and the AMG® GLE 53. Each trim has something unique to offer, so whether you need optimal traction on Costa Mesa streets or you desire next-level performance, you’ll find the upgrade of a lifetime at our dealership."
},
{
    "card title":"AUDI Q7",
    "card details":"ike the rest of the Audi lineup, the 2022 Q7 SUV combines a handsome design, a technology-rich cabin, and a fun-loving chassis—it just does so with room for  the whole family thanks to its standard three rows of seats. The entry-level engine is a 248-hp turbocharged four-cylinder, but those seeking more towing capacity or increased performance should opt for the 335-hp turbocharged V-6; all-wheel drive is standard with  both engines. The Q7 can be outfitted with an adjustable air suspension and four-wheel  steering for even greater comfort and agility."
}
]
let gleTilte = document.querySelector("#gle h4")
let gleDetails = document.querySelector("#gle p")

gleTilte.textContent=cards[1]["card title"]
gleDetails.textContent=cards[1]["card details"]



function renderPrice(brandName) {

    if (brandName === "audi") {
        let cardId = document.getElementById("card-bottom3")
        let footer = document.getElementById("footer3")
        footer.style.display = 'block'
        cardId.innerText = 'price is 80.000$'

    }
    else if (brandName === "marcedas") {
        let cardId = document.getElementById("card-bottom2")
        let footer = document.querySelector("#footer2")//select depend on class or id or the selector itself 
        footer.style.display = 'block'
        cardId.innerText = 'price is 75.000$'
    }

    else if (brandName === "bmw") {
        let cardId = document.getElementById("card-bottom1")
        let footer = document.getElementById("footer1")
        footer.style.display = 'block'
        cardId.innerText = 'price is 70.000$'
        window.location.href = "https://www.w3schools.com/bootstrap5/bootstrap_cards.php";
    }
}