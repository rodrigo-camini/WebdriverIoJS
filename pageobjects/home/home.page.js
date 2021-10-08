export default class HomePage {

    get btnEnter() { return $(`.header-login .header-login-link`) }

    async clickBtnEnter() {
        await (await this.btnEnter).waitForDisplayed()
        await (await this.btnEnter).click()
    }
}