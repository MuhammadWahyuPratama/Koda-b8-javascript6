// Then - catch

fetch("https://jsonplaceholder.typicode.com/users")

    .then(function (response) {
        return response.json()
    })

    .then(function (hasil) {
        const hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const hurufKecil = "abcdefghijklmnopqrstuvwxyz"

        let dataBaru = []

        for (let i = 0; i < hasil.length; i++) {

            let emailBaru = ""

            for (let j = 0; j < hasil[i].email.length; j++) {

                let huruf = hasil[i].email[j]

                let ditemukan = false

                for (let k = 0; k < hurufBesar.length; k++) {

                    if (huruf === hurufBesar[k]) {

                        emailBaru += hurufKecil[k]

                        ditemukan = true

                    }

                }

                if (ditemukan === false) {

                    emailBaru += huruf

                }

            }

            dataBaru.push({
                ...hasil[i],
                email: emailBaru
            })

        }

        console.log(dataBaru)

    })

    .catch(function (error) {

        console.log("Error :", error)

    })


// async - await

async function ambilData() {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const hasil = await response.json()

        const hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const hurufKecil = "abcdefghijklmnopqrstuvwxyz"

        let dataBaru = []

        for (let i = 0; i < hasil.length; i++) {

            let emailBaru = ""

            for (let j = 0; j < hasil[i].email.length; j++) {

                let huruf = hasil[i].email[j]

                let ditemukan = false

                for (let x = 0; x < hurufBesar.length; x++) {

                    if (huruf === hurufBesar[x]) {

                        emailBaru += hurufKecil[x]

                        ditemukan = true

                    }

                }

                if (ditemukan === false) {

                    emailBaru += huruf

                }

            }

            dataBaru.push({
                ...hasil[i],
                email: emailBaru
            })

        }

        console.log(dataBaru)

    } catch (error) {

        console.log("Error :", error)

    }

}

ambilData()