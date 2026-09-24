import dragPage from "../pageobjects/drag.page"

describe("Teste na tela DragDrop", () => {
    beforeEach(async () => {
        await dragPage.abrirMenuDrag()
        await driver.pause(1000)
    })

    it("Deve montar o quebra-cabeça completo", async () => {
        await dragPage.montarQuebraCabecaCompleto()

        const mensagem = await dragPage.validarMensagemFinal()
        await expect(mensagem).toBeDisplayed()

        // Pausa para visualizar a mensagem na tela
        await driver.pause(5000)
    })
})
