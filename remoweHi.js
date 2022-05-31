// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"
function remove (string) {
    let x = string.split(" ");
    let y = x.filter((x) => x !== "Hi!" && x !== "!Hi")
             .map((x) => {return x});
    return y.join(" ");
  }
console.log(remove("Hi! Hi!! Hi!"));