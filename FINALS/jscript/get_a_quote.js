const form = document.getElementById('quoteForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const model = document.getElementById('model').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dealership = document.getElementById('dealership').value;

    if (model && firstName && lastName && email && phone && dealership) {
        alert('Form submitted successfully!'); 
        form.reset();
    } else {
        alert('Please fill out all required fields!'); 
    }
});
