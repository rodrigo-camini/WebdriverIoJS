import { userData, userDataPJ } from "../../data/form.data"
import Actions from "../../helpers/actions"


export default class FormPage {

    get checkboxPF() { return $(`#RegistrationForm_customer_personality_0`) }
    get checkboxPJ() { return $(`#RegistrationForm_customer_personality_1`) }
    get btnSignUp() { return $('[for="account-form-new-customer"] .account-form-title') }
    get inputName() { return $('#RegistrationForm_first_name') }
    get inputLastName() { return $('#RegistrationForm_last_name') }
    get inputEmail() { return $('#RegistrationForm_email') }
    get dropdownGender() { return $('#RegistrationForm_gender') }
    get inputCpf() { return $('#RegistrationForm_tax_identification') }
    set selectGender(genderOfUser) { this.gender = $(`option[value='${genderOfUser}']`) }
    get selectGender() { return this.gender }
    set selectYear(option) { this.optionSelected = $(`.selectbox.year option[value='${option}']`) }
    get selectYear() { return this.optionSelected }
    set selectMonth(option) { this.optionSelected = $(`.selectbox.month option[value='${option}']`) }
    get selectMonth() { return this.optionSelected }
    set selectDay(option) { this.optionSelected = $(`.selectbox.day option[value='${option}']`) }
    get selectDay() { return this.optionSelected }
    get inputPasswordForm() { return $('#form-customer-account-password') }
    get inputPassword2Form() { return $('#RegistrationForm_password2') }
    get btnCreateAccount() { return $('#customer-account-create') }
    get inputNameOrCompanyName() { return $(`#RegistrationForm_first_name`) }
    get checkboxNewsletterSubscribed() { return $(`#RegistrationForm_is_newsletter_subscribed`) }

    async clickBtnSignUp() {
        await (await this.btnSignUp).click()
    }

    async clickBtnCreateAccount() {
        await (await Actions.scrollIntoViewElement(this.btnCreateAccount))
        await (await this.btnCreateAccount).waitForDisplayed()
        await (await this.btnCreateAccount).click()
    }

    async setName(name) {
        await (await this.inputName).waitForDisplayed()
        await (await this.inputName).setValue(name)
    }

    async setLastName(lastName) {
        await (await this.inputLastName).waitForDisplayed()
        await (await this.inputLastName).setValue(lastName)
    }

    async setEmail(email) {
        await (await this.inputEmail).waitForDisplayed({ timeoutMsg: `O campo para preencher o email não foi exibido!` })
        await (await this.inputEmail).setValue(email)
    }

    async setUserGender(userGender) {
        this.selectGender = userGender
        await (await this.selectGender).click()
    }

    async setCpfOrCnpj(registerUserDatapf) {
        let cpfOrCnpj = registerUserDatapf.typeOfPerson === 0 ? Actions.generateCPF() : Actions.generateCNPJ()
        await (await this.inputCpf).waitForDisplayed({ timeoutMsg: `O campo para preencher o email não foi exibido!` })
        await (await this.inputCpf).setValue(cpfOrCnpj)
    }

    setBirthUser(birthUser) {
        this.setDay(birthUser.birth.day)
        this.setMonth(birthUser.birth.month)
        this.setYear(birthUser.birth.year)
    }

    async setDay(day) {
        this.selectDay = day
        await (await this.selectDay).click()
    }

    async setMonth(month) {
        this.selectMonth = month
        await (await this.selectMonth).click()
    }

    async setYear(year) {
        this.selectYear = year
        await (await this.selectYear).click()
    }

    async setPasswordForm(passowrdForm) {
        await (await this.inputPasswordForm).waitForDisplayed({ timeoutMsg: `O campo para preencher o email não foi exibido!` })
        await (await this.inputPasswordForm).setValue(passowrdForm)
    }

    async setPasswordForm2(passowrdForm2) {
        await (await this.inputPassword2Form).waitForDisplayed({ timeoutMsg: `O campo para preencher o email não foi exibido!` })
        await (await this.inputPassword2Form).setValue(passowrdForm2)
    }

    async clickCheckboxExempt() {
        await (await this.checkboxExempt).waitForDisplayed()
        await (await this.checkboxExempt).click()
    }

    async setInputNameOrCompanyName(name) {
        await (await this.inputNameOrCompanyName).waitForDisplayed()
        await (await this.inputNameOrCompanyName).setValue(name)
    }

    async isSelectedCheckboxNewsletterSubscribed() {
        return this.checkboxNewsletterSubscribed.getAttribute("checked") === "checked" ? true : false
    }

    async setUserData(registerUserData) {
        await this.clickBtnSignUp()
        await this.setName(registerUserData.name)
        await this.setLastName(registerUserData.lastName)
        await this.setEmail(registerUserData.email)
        await this.setUserGender(registerUserData.genderUser)
        await this.setCpfOrCnpj(registerUserData)
        await this.setBirthUser(registerUserData)
        await this.setPasswordForm(registerUserData.password)
        await this.setPasswordForm2(registerUserData.confirmPassword)
        await this.clickBtnCreateAccount()
    }

    async setUserPJData(registerPJUserData) {
        await this.clickBtnSignUp()
        await registerPJUserData.typeOfPerson === 0 ? (await this.checkboxPF).click() : (await this.checkboxPJ).click()
        await this.setInputNameOrCompanyName(registerPJUserData.companyName)
        if (registerPJUserData.isExempt === true)
            this.clickCheckboxExempt()
        await this.setEmail(registerPJUserData.email)
        await this.setCpfOrCnpj(registerPJUserData)
        await this.setBirthUser(registerPJUserData)
        await this.setPasswordForm(registerPJUserData.password)
        await this.setPasswordForm2(registerPJUserData.confirmPassword)
        await this.clickBtnCreateAccount()
        if (this.isSelectedCheckboxNewsletterSubscribed() === true && registerPJUserData.newsletterSubscribed != true)
            this.clickNewsletterSubscribed()
    }

    async registerPFUser(registerUserData = userData) {
        await this.setUserData(registerUserData)
    }

    async registerPJUser(registerPJUserData = userDataPJ) {
        await this.setUserPJData(registerPJUserData)
    }
}