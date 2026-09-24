import formPage from '../pageobjects/forms.page'

describe('Funcionalidade: Tela de formulário', () => {

    beforeEach(async () => {
        formPage.abrirMenuForm()
    });

    it('Deve validar se o texto foi preenchido corretamente', async () => {
        await formPage.preencherTexto('Teste Appium')
        expect(await formPage.validarTexto()).toEqual('Teste Appium')  
    });

    it('Validar a seleção do dropdow', async () => {
       await formPage.selecionarOpcao('This app is awesome')
       expect(await formPage.validarOpcao()).toEqual('This app is awesome')
    });

    it('Deve trocar o botão de on para off', async() => {
        const botaoOnOff = await driver.$("~switch");
        await botaoOnOff.click();
        await browser.swipe({
        direction: 'left',                  // Swipe from right to left
        duration: 2000,                     // Last for 5 seconds
        percent: 0.1,                       // Swipe 50% of the scrollableElement
        scrollableElement: botaoOnOff,  // The element to swipe within
    })

    });

});