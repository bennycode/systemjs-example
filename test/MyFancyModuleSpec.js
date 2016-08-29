describe('MyFancyModule', function() {

  var MyFancyModule = undefined;

  beforeAll(function(done) {
    SystemJS.config({
      map: {
        MyFancyModule: 'base/dist/js/MyFancyModule.js'
      }
    });

    SystemJS.import('MyFancyModule').then(function(module) {
      console.log('Retrieved: ' + JSON.stringify(module));
      MyFancyModule = module;
      done();
    });
  });

  describe('MyFancyClass', function() {
    it('instantiates a class', function() {
      var myFancyInstance = new MyFancyModule.MyFancyClass('Test');
      expect(myFancyInstance).toBeDefined();
      expect(myFancyInstance.text).toBe('Test');
    });
  });
});
