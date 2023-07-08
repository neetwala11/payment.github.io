// Payment form submission
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Fetch form values
    const receiptId = document.getElementById('receipt-id').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const address = document.getElementById('address').value;

    // Store form values in local storage
    localStorage.setItem('receiptId', receiptId);
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('amount', amount);
    localStorage.setItem('address', address);

    // Redirect to receipt detail page
    window.location.href = 'receipt.html';
});

// Populate receipt detail
document.addEventListener('DOMContentLoaded', function() {
    const receiptIdElement = document.getElementById('receipt-id');
    const nameElement = document.getElementById('name');
    const phoneElement = document.getElementById('phone');
    const emailElement = document.getElementById('email');
    const amountElement = document.getElementById('amount');
    const addressElement = document.getElementById('address');

    receiptIdElement.textContent = localStorage.getItem('receiptId');
    nameElement.textContent = localStorage.getItem('name');
    phoneElement.textContent = localStorage.getItem('phone');
    emailElement.textContent = localStorage.getItem('email');
    amountElement.textContent = localStorage.getItem('amount');
    addressElement.textContent = localStorage.getItem('address');
});

// Print receipt
function printReceipt() {
    window.print();
}

function changeTab(tabIndex) {
    // Get all tab items and tab panes
    const tabItems = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Remove 'active' class from all tab items and tab panes
    tabItems.forEach((item) => {
        item.classList.remove('active');
    });
    tabPanes.forEach((pane) => {
        pane.classList.remove('active');
    });

    // Add 'active' class to the selected tab item and tab pane
    tabItems[tabIndex].classList.add('active');
    tabPanes[tabIndex].classList.add('active');
}

// Default to the first tab
changeTab(0);

