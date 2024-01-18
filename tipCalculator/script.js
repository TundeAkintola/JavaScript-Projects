const btnEl = document.getElementById("calculate")



const billInput = document.getElementById("bill");



const tipInput = document.getElementById("tip");



const totalSpan = document.getElementById("total")



function tipCalculator() {

    const billValue = billInput.value;

    const tipValue = tipInput.value;



    if (billValue === "" || tipValue === "") {

        alert("Enter Bill Amount and Tip Percentage")

    }

    else {



        const totalValue = billValue * (1 + tipValue / 100)

        totalSpan.innerText = totalValue.toFixed(2);

    }

}



btnEl.addEventListener("click", tipCalculator)



 
