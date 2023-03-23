const justFood = (pocetLudi) => {
    return `catering od Just Food pre ${pocetLudi} ľudí za ${Math.round(
        pocetLudi * 85
    )} Kč`
}
const yourMama = (pocetLudi) => {
    return `catering od Your Mama pre ${pocetLudi} ľudí za ${Math.round(
        pocetLudi * 499
    )} Kč`
}
const flavourHaven = (pocetLudi) => {
    return `catering od Flavour Haven pre ${pocetLudi} ľudí za ${Math.round(
        pocetLudi * 3000
    )} Kč`
}

const createEvent = (nazovUdalosti, pocetLudi, catering) => {
    return `Udalosť ${nazovUdalosti} s ${catering(pocetLudi)}`
}

document.body.innerHTML += createEvent(
    'Inaugurácia prezidenta',
    100,
    flavourHaven
)