try{
var webdriver = require('selenium-webdriver'), 
    By = webdriver.By,
    until = webdriver.until;


var driver;
var chai = require('chai');
var expect = require('chai').expect;
var should = chai.should();
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe("library app scenarios", function() {
      this.timeout(500000);
      beforeEach(function() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get("https://library-app.firebaseapp.com/");
        console.log("before");

      });

      afterEach(function() {
        console.log("after");
        driver.quit();
      });
      
      it('changes button opacity when email is valid', function(done) {
                
        driver.findElement(By.css('input')).sendKeys('user@mail.com');
        
        
        driver.findElement(By.css('.btn-lg')).then(function(result) {
            
            
            return result.getCssValue('opacity').should.eventually.equal('1').notify(done);
            
                                                 // .then(function (el){
            //   // if (el == 1){
            //   //   return done();
            //   // } else {
            //   //   return done("comparision failed");
            //   // };
            //   // assert.equal(el, 1,  "opacity equal to 1");              
            //   // return done();
            //   el.should.eventually.equal('1');
            //   console.log("after assert");
              
            //   done();
            //   // return done();

            // });

          });          
          
      });


      it('get text from success', function(done) {
            console.log("ALERTA TEST");
            
            driver.findElement(By.css('input')).sendKeys('user@gmail.com');
            console.log("mando gmail");
            driver.findElement(By.css(".btn-lg")).click();
            
            driver.wait(until.elementLocated(By.css('.alert-success')), 20000).then(function(el) {
              console.log("entro en el primer then");
              
              el.getText().should.eventually.include("Thank you").notify(done);
            });
      });

      //         it('nav test', function() {
      //           driver.findElement(By.css('nav')).getText().then(function(txt) {
      //             console.log(txt);
      //           });

      //         });

});
  } catch (error){
    console.log(error);
  }

