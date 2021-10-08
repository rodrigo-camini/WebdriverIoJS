var CPF = require("cpf_cnpj").CPF
var CNPJ = require("cpf_cnpj").CNPJ

export default class Actions {

    static open(path) { browser.url(path) }

    static getRandomNumber() {
        return Math.random()
    }

    static generateCPF() {
        return CPF.generate(true);
    }

    static generateCNPJ() {
        return CNPJ.generate(true);
    }

    static async scrollIntoViewElement(element) {
        await (await element).scrollIntoView()
    }

}
