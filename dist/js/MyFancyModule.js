System.register("MyFancyModule", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MyFancyClass;
    return {
        setters:[],
        execute: function() {
            MyFancyClass = (function () {
                function MyFancyClass(text) {
                    this.text = text;
                }
                return MyFancyClass;
            }());
            exports_1("MyFancyClass", MyFancyClass);
        }
    }
});
