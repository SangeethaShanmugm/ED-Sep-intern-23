
function calc(option) {
    let a = document.getElementById("first").value
    let b = document.getElementById("second").value
    let output;
    if (option == 'add') {
        output = `Sum of ${a} and ${b} is ${Number(a) + Number(b)}`
    } else {
        output = `Sub of ${a} and ${b} is ${Number(a) - Number(b)}`
    }
    document.getElementsByClassName("out")[0].innerText = output
}


// function add() {
//     let a = document.getElementById("first").value
//     let b = document.getElementById("second").value
//     let output = Number(a) + Number(b)
//     document.getElementsByClassName("out")[0].innerText = `Sum of ${a} and ${b} is ${output}`

// }


// function sub() {
//     let a = document.getElementById("first").value
//     let b = document.getElementById("second").value
//     let output = Number(a) - Number(b)
//     document.getElementsByClassName("out")[0].innerText = `Sum of ${a} and ${b} is ${output}`

// }