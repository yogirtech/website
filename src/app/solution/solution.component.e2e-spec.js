describe('Solution', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <my-solution>', function () {
    var solution = element(by.css('my-app my-solution'));
    expect(solution.isPresent()).toEqual(true);
    expect(solution.getText()).toEqual("Solution Works!");
  });

});
