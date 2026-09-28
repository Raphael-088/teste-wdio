import swipePage from "../pageobjects/swipe.page"

describe("Teste na tela Swipe", () => {
    beforeEach(async () => {
        await swipePage.abrirMenuSwipe()

    })

    it("Deve realizar o swipe para esquerda", async () => {
        const elemento = await $('~Carousel')
        await swipePage.swipeEsquerda(elemento)

        const proximoItem = await $('android=new UiSelector().textContains("JS.FOUNDATION")')
        await expect(proximoItem).toBeDisplayed()
    })

    it("Deve realizar o swipe para direita", async () => {
        const elemento = await $('~Carousel')
        await swipePage.swipeDireita(elemento)

        const itemAnterior = await $('android=new UiSelector().textContains("FULLY OPEN SOURCE")')
        await expect(itemAnterior).toBeDisplayed()
    })

    it("Deve realizar o swipe para cima", async () => {
        const elemento = await $('~Swipe-screen')
        await swipePage.swipeParaCima(elemento)

        const mensagem = await $('android=new UiSelector().textContains("You found me")')
        await expect(mensagem).toBeDisplayed()
    })
})
