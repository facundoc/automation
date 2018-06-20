// try{
var webdriver = require('selenium-webdriver'), 
  // {
  //   describe,
  //   it,
  //   after,
  //   before
  // } = require('selenium-webdriver/testing');
By = webdriver.By,
  until = webdriver.until;
  var driver;

describe("library app scenarios", function() {
      this.timeout(500000);
      beforeEach(function() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get("https://library-app.firebaseapp.com/");
        // driver.wait(until.elementLocated(By.css(".page-footer")), 20000);
        console.log("before");

      });
      afterEach(function() {
        console.log("after");
        driver.quit();
      });
      it.only('changes button opacity when email is valid', function(done) {
        console.log("empezamos");
        var isVisible;
        // var submitBtn = driver.findElement(By.css('.btn-lg'));
        console.log("variable creada");
        
        driver.findElement(By.css('input')).sendKeys('user@mail.com');
        console.log("buscado el input");
  
        driver.findElement(By.css('.btn-lg')).then(function(result) {
            
          console.log("entramos en el then");
            return result.getCssValue('opacity').then(function (el){
              isVisible = el == "1";
              console.log("variable ", isVisible); 
              if (isVisible){
                return done()} 
              else {
                return done("el elemento no es visible")
              };
              
            });

          });
        
          console.log("despues de opacity");
          
          
      });


      // it('works with mocha', function() {
      //       driver.findElement(By.css('input')).sendKeys('usergmail.com');
      //       driver.wait(until.elementLocated(By.css('.alert-success')), 20000).then(function(el) {
      //         el.getText().then(function(txt) {
      //           console.log(txt);
      //         });
      //       });
      // });

      //         it('nav test', function() {
      //           driver.findElement(By.css('nav')).getText().then(function(txt) {
      //             console.log(txt);
      //           });

      //         });

});
  // } catch (error){
  //   console.log(error);
  // }




            // // var driver = new webdriver.Builder().forBrowser('chrome').build();
            // // // var st = "test string";
            // // // console.log("0");
            // // driver.get("https://library-app.firebaseapp.com/");
            // // driver.manage().timeouts().implicitlyWait(20000);
            // // console.log("1");
            // driver.findElement(By.css('input')).sendKeys('user@gmail.com');
            // // console.log("2");
            // // driver.findElement(By.css('.btn-lg')).click();
            // // console.log("3");
            // driver.wait(function(){
            //
            // })
            // driver.wait(until.elementLocated(By.css('.alert-success')), 20000).then(function(el){
            //    el.getText().then(function (txt) {
            //         console.log(txt);
            //     });
            // } );
