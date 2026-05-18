function queue(second, name) {
    function wait(resolve, reject) {
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
    return new Promise(wait)
}

async function main() {
    try {
        const result = await queue(2, "John")
        console.log(result)
        const result1 = await queue(1.5, "Ed")
        console.log(result1)
        const result2 = await queue(0.5, "Jane")
        console.log(result2)

    } catch (error) {
        console.log(`error : ${error}`)
    }
}

main()

