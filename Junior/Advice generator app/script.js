// Selecting elements

const adviceIdElement = document.querySelector('.advice-id_number');
const adviceTextElement = document.querySelector('.advice-content');

const diceBtn = document.getElementById('btn')

async function generateAdvice() {

    try {

        // Fetch advice data from the API
        const res = await fetch('https://api.adviceslip.com/advice')

        if (!res.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await res.json()

        // Extract and display advice
        const { id, advice } = data.slip

        adviceIdElement.textContent = id;

        adviceTextElement.textContent = advice;

    } catch (error) {
        // showing error messages
        console.error("Error fetching advice:", error);
        adviceTextElement.textContent = "An error occurred. Please try again later.";
    }

}


// Event handlers
diceBtn.addEventListener('click', generateAdvice)

generateAdvice()