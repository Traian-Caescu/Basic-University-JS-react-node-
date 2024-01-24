// This example shows how user defined exceptions can be thrown but using a built-in object Error
// Most system errors have a name and message property which can be handy rather than just a string
// The error object has a number of properties if you want to use them
// If you want to catch ojects to access those properties, use, err.name and err.message in catch
// for a user defined one, use new Error("Your message") or new Error(Your object)
// There is a non-standard .stack as well which can be handy if you want to see where the error is 
// but not stop the app
// If you can't or don't want to handle an error, you can re-throw it to the next level

const numArr = ["      999     ", 999, "  9", "1000", "nine hundred and ninety nine", ""]
const SHOW_STACK = false;  // Supress verbose stack messages until neededF

for (let i = 0; i < numArr.length; i++) {
    try {
        try {
            console.log(`\nTest val: ${numArr[i]}`)
            if (numArr[i].trim() == "") throw new Error("String is empty")  // trim removes space from either end then returns the resulant string. Will thow system error if not a string
            if (isNaN(numArr[i])) throw { name: 'Tony Error', message:'Not a number', extra: 'This is value add ...'}

            let num = Number(numArr[i])

            if (num >= 1000) throw new Error("Too big")

            console.log(`The number is: ${num}`)

        } catch (err) {
            if (err.name == "TypeError") throw (err) // If for some reason I don't or can't handle here so re-throw to next level. Finally is still called first
            console.log(`Exception name: ${err.name}, Exception msg: ${err.message}`)
            if (SHOW_STACK) console.log(`Stack: ${err.stack}`)
        } finally {
            console.log("This is executed regardless of success or failure if needed.")
        }

    } catch (err) {
        console.log(`Outer catch name: ${err.name}, Outer catch msg: ${err.message}`)
        if (SHOW_STACK) console.log(`Outer catch stack: ${err.stack}`)
        //throw(err) // This will kill the app as the next level is beyond my control so will be seen as a fatal uncaught excetion
    }
}