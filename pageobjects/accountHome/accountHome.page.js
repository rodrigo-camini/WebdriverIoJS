import Actions from "../../helpers/actions"

export default class AccountHomePage {
    get accountName() { return $(`.header-login-welcome-name`) }
    get btnMyDemand() { return $(`//p[contains(text(),'Meus Pedidos')]`) }
    get btnMyFavorites() { return $(`//p[contains(text(),'Meus Favoritos')]`) }
    get btnCancelExchangeOrReturn() { return $(`//p[contains(text(),'Cancelar, Trocar ou Devolver')]`) }
    get btnAccountInformation() { return $(`//p[contains(text(),'Informações de Conta')]`) }
    get btnMyAddresses() { return $(`//p[contains(text(),'Meus Endereços')]`) }
    get btnCardsAndCoupons() { return $(`//p[contains(text(),'Cartões e Vales')]`) }

    async getAccountName() {
        await (await this.accountName).waitForDisplayed()
        return (await this.accountName).getText()
    }

    async isVisibleBtnMyDemand() {
        await Actions.scrollIntoViewElement(this.btnMyDemand)
        return (await this.btnMyDemand).isDisplayed()
    }

    async isVisibleBtnMyFavorites() {
        return (await this.btnMyFavorites).isDisplayed()
    }

    async isVisibleBtnCancelExchangeOrReturn() {
        return (await this.btnCancelExchangeOrReturn).isDisplayed()
    }

    async isVisibleBtnAccountInformation() {
        return (await this.btnAccountInformation).isDisplayed()
    }

    async isVisibleBtnMyAddresses() {
        return (await this.btnMyAddresses).isDisplayed()
    }

    async isVisibleBtnCardsAndCoupons() {
        return (await this.btnCardsAndCoupons).isDisplayed()
    }
}