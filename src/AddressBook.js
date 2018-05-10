function AddressBook() {
	this.storage = [];
}

//add contact obj into the storage array
AddressBook.prototype.addContact = function(obj) {
	this.storage.push(obj);
};


//return the first element in the storage array
AddressBook.prototype.getContact = function() {
	return this.storage[0];
};