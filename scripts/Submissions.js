export const SubmissionList = async () => {
    // Get the submissions from your API
        const response = await fetch("http://localhost:8088/Subissions")
        const submissions = await response.json()
    // Iterate the submissions and create some <section> representations
        let submissionHTML = ""

        for (const submission of submissions) {
            submissionHTML += ` <section>
                        <div>Owns Jeans? ${submission.ownsBlueJeans} <div>
                        <div>Owns Jeans? ${submission.socioLocationId} <div>
            <section> 
            `
            
        }
    // Return the HTML string
    return submissionHTML
}