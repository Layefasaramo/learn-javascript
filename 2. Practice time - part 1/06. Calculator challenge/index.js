
num1= document.getElementById("num1-el");
num2= document.getElementById("num2-el");
result= document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
function store(){
    result.textContent = "";
    num1 = document.getElementById("num1-el").value;
    num2 = document.getElementById("num2-el").value;
}
function addfunc() {    
    store();
    let result = parseFloat(num1) + parseFloat(num2);
    document.getElementById("sum-el").textContent = "Result: " + result;
}

function minusfunc() {    
    store();
    let result = parseFloat(num1) - parseFloat(num2);
    document.getElementById("sum-el").textContent = "Result: " + result;
}

function timesfunc() {    
    store();
    let result = parseFloat(num1) * parseFloat(num2);
    document.getElementById("sum-el").textContent = "Result: " + result;
}
function dividefunc(tes)
{    store();
    result.textContent = "";
    tes = parseFloat(num1) / parseFloat(num2) + "";
    
    console.log(tes);
    result.textContent = "Result: " + tes;
}

