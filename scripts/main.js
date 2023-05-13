import { OwnJeanChoices } from "./OwnsJeans.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./UrbanDweller.js"
import { saveSubmission } from "./saveSubmissions.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnerShipHTMl = OwnJeanChoices()
    const locationsHTML =  await LocationTypeChoices()
    const buttonHTML = await saveSubmission()
    const SubmissionListHTML = await SubmissionList()


    container.innerHTML = `
        ${jeanOwnerShipHTMl}
        ${locationsHTML}
        ${buttonHTML}
        ${SubmissionListHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()