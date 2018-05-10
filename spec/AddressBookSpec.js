describe('Address Book', function() {
	it('should be able to add a contact', function() {
		let addressBook = new AddressBook();
		let thisContact = new Contact();

		// function addContact(obj) {
		// 	this.storage.push(obj);
		// }

		// function getContact() {
		// 	return this.storage[0];
		// }
		addressBook.addContact(thisContact);

		expect(addressBook.getContact(0)).toBe(thisContact);
	});
});