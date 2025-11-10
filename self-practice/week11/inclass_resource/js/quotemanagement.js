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
export { loadQuotes }