import { loginPage, homePage } from '../../constants.js'
import { invalidLoginData } from '../../data/login.data.js'
import { assert } from 'chai'

describe('My register application', async () => {
    it('should validate a invalid login', async () => {
        await (await loginPage).open()
        await (await homePage).clickBtnEnter()
        await (await loginPage).login(invalidLoginData)
        await assert.equal(await loginPage.getLblInvalidLogin(), invalidLoginData.errorMessage, `A mensagem de usuário inválido não foi exibida ou é diferente do esperado`)

    })
})
