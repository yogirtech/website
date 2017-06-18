describe('MobileAutomate', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <my-mobile-automation>', function () {
    var home = element(by.css('my-app my-mobile-automation'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("mobile-automation Works!");
  });

});
