// Async - await

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
        return res.json()
    })

async function data() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const hasil = await response.json()
        const dataBaru = hasil.map(function (item) {
            return {
                ...item,
                email: item.email.toLowerCase()
            }
        })
        console.log(dataBaru)
    } catch (error) {
        console.log(`Error : ${error}`)
    }
}

data()


//Then-Catch

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
        return res.json()
    })

    .then(function (hasil) {
        const dataBaru1 = hasil.map(function (item) {
            return {
                ...item,
                email: item.email.toLowerCase()
            }
        })
        console.log(dataBaru1)
    })

    .catch(function (error) {
        console.log(`error : ${error}`)
    })
