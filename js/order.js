document.addEventListener('DOMContentLoaded', function () {

    var invoiceSection = document.querySelector('#invoiceData');
    var invoiceChk = document.querySelector('#invoice');
    // hide element
    invoiceSection.style.display = 'none';

    // launch function at checkbox click
    invoiceChk.addEventListener('change', function () {
        // verifiyng checked
        if (this.checked) {
            // if is checked display the section
            invoiceSection.style.display = 'block';
        } else {
            // if not then hide the section 
            invoiceSection.style.display = 'none';
        }
    });

});