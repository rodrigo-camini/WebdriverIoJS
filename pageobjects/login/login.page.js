export default class LoginPage {

    get btnEnterMain() { return $(`.header-login .header-login-link`) }
    get inputUser() { return $('#LoginForm_email') }
    get inputPassword() { return $('#LoginForm_password') }
    get btnLogin() { return $('#customer-account-login') }
    get btnEnterLogin() { return $('//div[@id="wrapper"]/div[3]/div/div[2]/ul/li[2]/label/h2') }
    get lblErrorMessageLogin() { return $('.errorMessage') }

    async clickBtnEnterMain() {
        await (await this.btnEnterMain).waitForDisplayed({ timeoutMsg: `O botão 'Enter' não foi exibido na pagina principal!` })
        await (await this.btnEnterMain).click()
    }

    async setUser(userName) {
        await (await this.inputUser).waitForDisplayed({ timeoutMsg: `O campo para preencher o usuário não foi exibido!` })
        await (await this.inputUser).setValue(userName)
    }

    async setPassowrd(password) {
        await (await this.inputPassword).waitForDisplayed({ timeoutMsg: `O campo para preencher a senha não foi exibido!` })
        await (await this.inputPassword).setValue(password)
    }

    async clickBtnLogin() {
        await (await this.btnLogin).waitForDisplayed({ timeoutMsg: `O botão 'Enter' não foi exibido na pagina principal!` })
        await (await this.btnLogin).click()
    }

    async login(invalidLoginData) {
        await this.setUser(invalidLoginData.user)
        await this.setPassowrd(invalidLoginData.password)
        await this.clickBtnLogin()
    }

    open() {
        this.openUrl(browser.config.baseUrl)
        browser.maximizeWindow()
    }

    async getLblInvalidLogin() {
        await (await this.lblErrorMessageLogin).waitForDisplayed({ timeoutMsg: `Mensagem de login inválido não exibida` })
        return (await this.lblErrorMessageLogin).getText()
    }

    openUrl(path) {
        browser.url(path)
    }
}
