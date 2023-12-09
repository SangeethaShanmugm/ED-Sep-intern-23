const fs = require("fs")

const quote = "Make everyday a little less ordinarily"

//write something into file
// fs.writeFile("cool.pdf", quote, () => {
//     console.log("Completed writing file")
// })

// fs.readFile("./fun.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error❌", err)
//     }
//     console.log("The content of the file is =>", data)
// })

const quote2 = "\nDream is not that you see in sleep, dream is something that does not let you sleep😀"

// fs.appendFile("./fun.txt", quote2, (err) => {
//     if (err) throw err;
//     console.log("Completed appending")
// })



fs.unlink("./toRemove.txt", (err) => {
    if (err) throw err;
    console.log("Deleted Successfully")
})

// fs.writeFileSync, fs.readFileSync, fs.appendFileSync, fs.unlinkSync