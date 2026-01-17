import { Browser, expect, Page } from '@playwright/test';

import { page } from '../hooks'

export class Agenticace_login_POM {
    private page: Page;


    constructor(page: Page) {
        this.page = page;
    }


    //locators

    private usernameInput = '//input[@data-testid="login-username"]';
    private passworInput = '//input[@data-testid="login-password"]';
    private loginbuton = '//button[@data-testid="login-button"]';
    private Expectedinvalidlogincredentialsmessage = '//div[text()="Invalid credentials"]';

    async navigatetologinpage() {
        await this.page.goto('https://prod-ui.agenticace.pharmaace.ai/login');
    }

    async validlogin(loginusername: string, loginpassword: string) {
        await this.page.fill(this.usernameInput, loginusername);
        await this.page.fill(this.passworInput, loginpassword);
    }

    async validloginbutton() {
        await this.page.click(this.loginbuton);
        const Expectedhomeurl = 'https://prod-ui.agenticace.pharmaace.ai/mra-psoriasis';
        await expect(this.page).toHaveURL(Expectedhomeurl);




    }

    async invalidloginagenticaace() {
        await this.page.click(this.loginbuton);
        const invalidloginmessage = await this.page.locator(this.Expectedinvalidlogincredentialsmessage);

        await expect(invalidloginmessage).toBeVisible();

    }


}