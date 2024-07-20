const expenseForm = document.getElementById("expenseform")
const expenseList = document.getElementById("expenseList")

expenseForm.addEventListener('submit', function(event){
    event.preventDefault()  //this will prevent page to get reload when clicking submit button

    const description = document.getElementById("description").value;

    const category = document.getElementById("category").value;
    const  amount = document.getElementById("amount").value;

    if(description && category && !isNaN(amount)){
        const newRow = document.createElement('tr')

        newRow.innerHTML = `<td>${description}</td>
                            <td>${category}</td>
                            <td>${amount}</td>`

        expenseList.appendChild(newRow)
    
    description = ''
    category = ''
    amount = ''
    }
    else {
        alert("Please fill out all fields with valid data")
    }

})