import { setOwnBlueJeans } from "./TransientState.js"

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnBlueJeans(convertedToBoolean)
    }
}


export const OwnJeanChoices = () => {

    document.addEventListener("change", handleOwnershipChange)

    let choicesHTML = "<h1>Do you own jeans?</h1>"
    choicesHTML += "<input type='radio' name='owns' value=true /> Yes"
    choicesHTML += "<input type='radio' name='owns' value=false /> No"

    return choicesHTML
}