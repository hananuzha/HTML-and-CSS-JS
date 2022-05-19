
let cars=[{
    "carTitle":"BMW X5",
    "price":70000,
    "isAvailable":true,
    "picture":["../img/download.jpeg","../img/bmw2.jpeg","../root-folder/img/bmw inside.jpeg"],
    "carDetails":"The 2022 BMW X5 is a versatile player in the mid-size luxury-SUV segment, combining a well-appointed interior and a pleasurable driving experience in one handsome package. Even the entry-level models are richly outfitted with modern technology and convenience features, not to mention a silky-smooth inline-six cylinder engine. Upgrading to the plug-in hybrid model gives the X5 the ability to drive solely on electric power for short trips while the optional twin-turbo V-8 engine delivers seriously punchy acceleration"
},{
    "carTitle":"GLE",
    "price":85000,
    "isAvailable":true,
    "picture":["http://127.0.0.1:5500/root-folder/img/GLE.png"],
    "carDetails":"The new Mercedes-Benz GLE is an attractive luxury SUV that’s fit for growing Newport Beach families and Irvine commuters looking for more cabin space. When you upgrade to a 2022 GLE at Fletcher Jones Motorcars, you’ll choose from five trims levels: GLE 350, GLE 350 4MATIC®, GLE 450 4MATIC®, GLE 580 4MATIC®, and the AMG® GLE 53. Each trim has something unique to offer, so whether you need optimal traction on Costa Mesa streets or you desire next-level performance, you’ll find the upgrade of a lifetime at our dealership."
},
{
    "carTitle":"AUDI Q7",
    "price":79000,
    "isAvailable":false,
    "picture":["http://127.0.0.1:5500/root-folder/img/Q7.jpeg"],
    "carDetails":"ike the rest of the Audi lineup, the 2022 Q7 SUV combines a handsome design, a technology-rich cabin, and a fun-loving chassis—it just does so with room for  the whole family thanks to its standard three rows of seats. The entry-level engine is a 248-hp turbocharged four-cylinder, but those seeking more towing capacity or increased performance should opt for the 335-hp turbocharged V-6; all-wheel drive is standard with  both engines. The Q7 can be outfitted with an adjustable air suspension and four-wheel  steering for even greater comfort and agility."
}
]
const gleTilte = document.querySelector("#body h4")
const gleDetails = document.querySelector("#body p")
const img = document.querySelector("#GLE img")
let gle=cars.find(({ carTitle }) => carTitle === 'GLE')

img.src=gle.picture[0]

gleTilte.textContent=cars[1].carTitle
gleDetails.textContent=cars[1].carDetails

let car=cars.find(({ carTitle }) => carTitle === 'AUDI Q7')
const cardId = document.getElementById("audi")
cardId.innerText = car.carDetails



//render the carousel items from js 
// const carouselItems = document.getElementById("carousel-items")
// for (let i = 0; i < cars[0].picture.length; i++) {
//     var div = document.createElement("div");
//     div.classList.add('carousel-item');
//     let image="<img src= " +cars[0].picture[i] +"  class=d-block"+">"
//     div.innerHTML=image
//     carouselItems.appendChild(div)
//     console.log(carouselItems.innerHTML)

// }




function renderPrice(brandName) {

    if (brandName === "audi") {
        const cardId = document.getElementById("card-bottom3")
        const footer = document.getElementById("footer3")
        footer.style.display = 'block'
        let car=cars.find(({ carTitle }) => carTitle === 'AUDI Q7')
        cardId.innerText = car.price

    }
    else if (brandName === "marcedas") {
        const cardId = document.getElementById("card-bottom2")
        const footer = document.querySelector("#footer2")//select depend on class or id or the selector itself 
        footer.style.display = 'block'
        let car=cars.find(({ carTitle }) => carTitle === 'GLE')
        cardId.innerText = car.price
    }

    else if (brandName === "bmw") {
        const cardId = document.getElementById("card-bottom1")
        const footer = document.getElementById("footer1")
        footer.style.display = 'block'
        let car=cars.find(({ carTitle }) => carTitle === 'BMW X5')
        cardId.innerText = car.price
        //window.location.href = "https://www.w3schools.com/bootstrap5/bootstrap_cards.php";
    }
}