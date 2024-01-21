const inputEl = document.getElementById("input");

const errorEl = document.getElementById("error");

const resultEl = document.getElementById("result");

let errorTime; // not to make the error go away

function updateResults() {

    if (inputEl.value <= 0 || isNaN(inputEl.value)) {

        errorEl.innerText = "Please enter a valid number!";

        clearTimeout(errorTime);//to make error go away

        errorTime = setTimeout(() => {

            errorEl.innerText = "";

            inputEl.value = "";

        }, 1000 ) // sets time for displaying error

    }else {

        resultEl.innerText = (inputEl.value / 2.2).toFixed(2);

        setTimeout(function() {

          resultEl.innerText = ""

          inputEl.value = ""

        }, 1000);

    }



}

inputEl.addEventListener("input", updateResults)

 
