let x, game, buttons, test

function myFunction() {
     x = document.getElementById("number").value
     game = Math.floor(Math.random() * x)
     buttons = document.getElementsByTagName("div")[0]

    for (let i = 0; i < x; ++i) {
        test = document.createElement("button")
        test.innerHTML = 'An button'
        test.style.color = "red"
        test.style.padding = "12px 20px"
        test.style.backgroundColor = "blue"
        buttons.appendChild(test);
        if(i === game) {
            test.addEventListener ("click", function() {
            alert("Hmm, good luck to you today.")
            history.go(0)})
        }
        else {
            test.addEventListener ("click", function() {
            alert("Keep trying")})
        }
    }
}

function notTry() {
    alert("Guess the button, then try your luck at another game")
}
