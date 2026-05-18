function wait(second, name) {
    function iye(resolve, reject) {
        if (typeof second !== "number") {
            switch (typeof second) {
                case "undefined": {
                    reject("Parameter second harus diisi ")
                    break
                }
                case "string": {
                    reject("parameter harus di isi dengan number")
                    break
                }
                default: {
                    reject("parameter error")
                }
            }
        }
        setTimeout(() => {
            resolve(name)
        }, second * 1000)
    }
    return new Promise(iye)
}

wait(1.5, "John").then((output) => {
    console.log(output)
    wait(2, "Ed").then((y) => {
        console.log(y)
        wait(0.5, "Jane").then((x) => {
            console.log(x)
        })
    })
}).catch((Errormessage) => {
    console.log(`error : ${Errormessage}`)
})
