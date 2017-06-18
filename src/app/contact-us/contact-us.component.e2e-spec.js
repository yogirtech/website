describe('Contact Us', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <my-contact-us>', function () {
    var contact = element(by.css('my-app my-contact-us'));
    expect(contact.isPresent()).toEqual(true);
    expect(contact.getText()).toEqual("Contact Works!");
  });

});
