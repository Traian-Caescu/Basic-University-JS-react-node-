// This example shows how user defined exceptions can be thrown or, in the case of .trim for 999 a system type error
// is thrown but as we have a catch we can catch it without it killing the app as an unhandled exception

const numArr = ["      999     ", 999, "  9", "1000", "nine hundred and ninety nine", ""]

for (let i = 0; i < numArr.length; i++) {
  try {
    console.log(`\nTest val: ${numArr[i]}`)
    if (numArr[i].trim() == "") throw "Empty String" // trim removes space from either end then returns the resulant string. Will trhow error if not a string
    if (isNaN(numArr[i])) throw "Not a number"

    let num = Number(numArr[i])

    if (num >= 1000) throw "Too big"

    if (num == 9)
      num /= 0         // Should be system divide by zero error but it's converted to infinity so not caught! 
    if (num == Infinity)
      num /= "zeeero"  // This is also acceptible. num is set to NaN rather than raising an exception. Odd. 

    console.log(`The number is: ${num}`)

  } catch (err) {
    console.log(`App Error Str: ${err}`)
  } finally {
    console.log("This is executed regardless of success or failure if needed.")
  }
}