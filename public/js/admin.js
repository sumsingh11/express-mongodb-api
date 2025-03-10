document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const confirmation = confirm('Are you sure you want to delete this item?');
            if (!confirmation) {
                event.preventDefault();
            }
        });
    });

    const addUserForm = document.getElementById('addUserForm');
    if (addUserForm) {
        addUserForm.addEventListener('submit', function(event) {
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;

            if (!name || !email) {
                alert('Please fill in all fields.');
                event.preventDefault();
            }
        });
    }

    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(event) {
            const title = document.getElementById('productTitle').value;
            const price = document.getElementById('productPrice').value;

            if (!title || !price) {
                alert('Please fill in all fields.');
                event.preventDefault();
            }
        });
    }
});