import { When, Then } from '@cucumber/cucumber';
import { page } from '../hooks'
import { Agenticace_login_POM } from '../POM/Agenticace_login_POM';




let oblogin: Agenticace_login_POM;




When('user login with {string} and {string} for AgenticAce', async function (username: string, password: string) {


   oblogin = new Agenticace_login_POM(page);
   await oblogin.navigatetologinpage();
   await oblogin.validlogin(username, password);




});



Then('user should be logged into application by clicking login button', async function () {
   await oblogin.validloginbutton();

});

//invalid credentials 


Then('user should click loginbutton', async function () {
   await oblogin.invalidloginagenticaace()
});
