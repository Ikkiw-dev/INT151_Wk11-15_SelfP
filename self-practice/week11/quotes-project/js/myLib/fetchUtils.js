//CRUD on any items, file นี้่ตืดต่อ endpoint ทุก operation
//GET
async function getItems(url) {
  //const res = await fetch(`${import.meta.env.VITE_APP_URL}/quotes`)
  const res = await fetch(url) //returns response object
  let message = "";
  try { //การใช้ try(), catch() จะช่วยทำให้ app เรา safety ซึ่งหมายความว่า จะไม่เกิดการหยุดกระทันหัน เพราะมี catch ออกมา handle
    //และช่วยให้เราจัดการ + design error message ได้ดีขึ้น
    const res = await fetch(url); //fetch returns respnse object
    console.log(res);
    if (!res.ok) { //handle กรณีที่ status code ไม่ใช่ 200 OK
      switch (res.status) {
        case 404:
          message = "404 - Item not found";
          break;
        case 409:
          message = "409 - Conflict";
          break;
        default:
          message = "Fail to get item, please try again";
      }
      throw new Error(message);
    }
    //กรณี status เป็น 200 OK
    const data = await res.json(); //json() converts json string to JavaScript object, return promise await เอาไว้
    console.log(data);
    return data;
  } catch (error) { //กรณีที่เกิดเหตุการณ์  error ใดๆ ที่ try จะหยุดทำทันที แล้วมาทำที่ catch
    throw new Error(error.message); //โยน error ขึ้นไปให้คนที่เรียก function นี้ return กลับไปที่ function ที่ handle error นั้น
  }
}

//POST
async function addItem(url, item) {
  try {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    if (res.status !== 201) throw new Error("Fail to add item");
    const addedItem = res.json();
    return addedItem; //return อันนี้เพราะมี id แล้ว : เอา item ใหม่ ที่มี id ไปใช้งาน
  } catch (error) {
    throw new Error(error.message);
  }
}
//PUT
//DELETE
async function deleteItem(url, id) {
  try {
    const res = await fetch(`${url}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Fail to delete item");
    return id;
  } catch (error) {
    throw new Error(error.message);
  }
}
export { getItems, deleteItem, addItem };
