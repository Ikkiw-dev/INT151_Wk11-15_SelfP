function dosomething(hasProb) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => hasProb? reject('Fail Working'):resolve('Fully Complete')),5000
    })
}

//Manipulate function
// 1 .then()
// console.log("starting...")
// dosomething(true).then((workstate) => {
//     console.log(workstate)
//     console.log('ending...')
// })
// .catch((errorMessage) => {
//     console.log(errorMessage)
// })

//2 async() - await()
// async function runWorking() {
//     const workstate = await dosomething(true)
//     console.log(workstate)
//     console.log("ending...")
// }
// runWorking()

console.log("starting...")
async function runWorking() {
    try {
        const workstate = await dosomething(true)
        console.log(workstate)
        console.log('ending...')
    }
    catch (error) {
        console.log(error)
    }
}

