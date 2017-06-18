describe('Software Support', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <my-software-support>', function () {
    var software = element(by.css('my-app my-software-support'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("software-support Works!");
  });

});
