
//var contacts = [];

// var findContacts = contacts.forEach(function(contact){
//       $("ul.output").append("<li>" + contact + "</li>")
//     });


// Business logic for AddressBook
function AddressBook() {
  //debugger;
  this.contacts = [];
}

// AddressBook.prototype.addContact = function(contact) {
//   debugger;
//   this.contacts.push(contact)
// }


// Business logic for contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// UI Logic?
$(document).ready(function(){
  debugger;

  $("form#form").submit(function(event) {
    debugger;
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var phoneNumber = $("input#phone").val();

    var newContact = new Contact(firstName, lastName, phoneNumber);

    return AddressBook
    //$("#output").show(newContact);
    //AddressBook.addContact(newContact);
    //addressBook();
    //findContacts();
    event.preventDefault();
    });
});
