var assert = require("assert");
web_vehiculos = require(__dirname+"/../app.js");

describe('web_vehiculos', function(){
    describe('Intentando arrancar el servicio...', function(){
        it('Service working!', function(){
            assert(web_vehiculos, "service stop!");
        });
    });
});
