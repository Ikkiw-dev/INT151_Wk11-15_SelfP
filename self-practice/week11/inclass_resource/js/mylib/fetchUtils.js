//GET
async function getItems(url) {
    try {
        const res = await fetch(url) //response object
        console.log(res)
        const data = await res.json() //convert json string to JS object
        console.log(data)
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export { getItems }
//POST
//PUT
//DELETE
async function deleteItem(url, id) {
    try {
      const res = await fetch(`${url}/${id}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Fail to delete item")
      return id
    } catch (error) {
      throw new Error(error.message)
    }
  }