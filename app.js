let contacts = [];

function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name && phone && email) {
        const contact = { name, phone, email };
        contacts.push(contact);
        saveContacts();
        displayContacts();
        clearForm();
    } else {
        alert("Please fill all fields");
    }
}

function displayContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${contact.name} - ${contact.phone} - ${contact.email}
            <button onclick="editContact(${index})">Edit</button>
            <button onclick="deleteContact(${index})">Delete</button>
        `;
        contactList.appendChild(listItem);
    });
}

function editContact(index) {
    const contact = contacts[index];
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;
    deleteContact(index);
}

function deleteContact(index) {
    contacts.splice(index, 1);
    saveContacts();
    displayContacts();
}

function saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function loadContacts() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
        contacts = JSON.parse(savedContacts);
        displayContacts();
    }
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
}

window.onload = loadContacts;