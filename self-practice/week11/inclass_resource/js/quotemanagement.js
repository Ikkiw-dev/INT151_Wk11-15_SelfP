//CRUD on quotes
import { getItems } from "./mylib/fetchUtils.js"

async function loadQuotes() {
    try {
        await getItems(`${import.meta.env.VITE_APP_URL}/quotes`)
        console.log(quotes)
    } catch (error) {
        alert (error)
    }
}

// delete qoutes
async function deleteQuote() {
    try {
        const removeId = deleteItem(quoteURL, id)
    } catch (error) {
        alert(`Quote: ${error}`)
    }
}
export { loadQuotes, deleteQuote }