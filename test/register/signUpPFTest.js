import { formPage, loginPage, homePage, accountHomePage } from '../../constants.js'
import { userDataPF } from '../../data/form.data.js'
import { assert } from 'chai'

describe('My register application', async () => {
    it('should register a new user PF', async () => {
        await (await loginPage).open()
        await (await homePage).clickBtnEnter()
        await formPage.registerPFUser(userDataPF)
        await assert.equal(await accountHomePage.getAccountName(), userDataPF.name, `O nome do usuário não foi exibido.`)
        await assert.isTrue(await accountHomePage.isVisibleBtnMyDemand(), `Botão 'Meus pedidos' não foi exibido na tela.`)
        await assert.isTrue(await accountHomePage.isVisibleBtnMyFavorites(), `Botão 'Meus favoritos' não foi exibido na tela.`)
        await assert.isTrue(await accountHomePage.isVisibleBtnCancelExchangeOrReturn(), `Botão 'Cancelar, Trocar ou Devolver' não foi exibido na tela.`)
        await assert.isTrue(await accountHomePage.isVisibleBtnAccountInformation(), `Botão 'Informações de Conta' não foi exibido na tela.`)
        await assert.isTrue(await accountHomePage.isVisibleBtnMyAddresses(), `Botão 'Meus Endereços' não foi exibido na tela.`)
        await assert.isTrue(await accountHomePage.isVisibleBtnCardsAndCoupons(), `Botão 'Cartões e Vales' não foi exibido na tela.`)
    })
})
