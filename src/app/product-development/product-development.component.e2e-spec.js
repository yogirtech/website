describe('product-development', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <my-product-development>', function () {
    var home = element(by.css('my-app my-product-development'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("ProductDevelopment Works!");
  });

});
