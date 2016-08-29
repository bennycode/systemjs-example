describe('MyFancyModule', function() {

  var MyFancyModule = undefined;

  beforeAll(function(done) {
    SystemJS.import('MyFancyModule').then(function(module) {
      console.log('Loaded module', module);
      MyFancyModule = module;
      done();
    });
  });

  describe('MyFancyClass', function() {
    it('instantiates a class', function() {
      var text = 'Module loaded successfully.';
      var myFancyInstance = new MyFancyModule.MyFancyClass(text);
      expect(myFancyInstance).toBeDefined();
      expect(myFancyInstance.text).toBe(text);
    });
  });
});
