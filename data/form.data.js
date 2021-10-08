import Actions from '../helpers/actions'

export const userDataPF = {
    typeOfPerson: 0,
    name: `RODRIGO`,
    lastName: `GFT`,
    email: `${Actions.getRandomNumber()}@gft.com.br`,
    genderUser: 'male',
    birth: {
        day: '10',
        month: '06',
        year: '1987'
    },
    password: 'Gft@teste1234@',
    confirmPassword: 'Gft@teste1234@',
    newsletterSubscribed: false
}

export const userDataPJ = {
    typeOfPerson: 1,
    name: 'RODRIGO PJ',
    companyName: 'GFT',
    isExempt: true,
    email: `${Actions.getRandomNumber()}@gftttest.com.br`,
    genderUser: 'female',
    birth: {
        day: '15',
        month: '03',
        year: '1996'
    },
    password: 'Test@1234#@',
    confirmPassword: 'Test@1234#@',
    newsletterSubscribed: true
}
