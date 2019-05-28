document.addEventListener('DOMContentLoaded', () => {

    console.log('Hello');

    function calculateTip() {
        var total_bill = parseInt(document.getElementById('total_bill').value,10),
        tipPercentage = document.getElementById('tipPercentage').value,
        total_people = parseInt(document.getElementById('total_people').value, 10),
        tip_amount;

        tip_amount = (total_bill * tipPercentage / total_people).toFixed(2);
        
        var result = document.getElementById('result');

        result.innerHTML = tip_amount;
    }

    document.getElementById('calculate').onclick = function()
    {
        event.preventDefault();
        calculateTip();
    }
});
