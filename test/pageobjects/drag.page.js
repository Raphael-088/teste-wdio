class DragPage {
    get menuDrag() { return $('~Drag') }

    async abrirMenuDrag() {
        await this.menuDrag.click()
    }

    async arrastarPeca(origemSelector, destinoSelector) {
        const origem = await $(origemSelector)
        const destino = await $(destinoSelector)

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', origin: origem, x: 0, y: 0, duration: 0 },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', origin: destino, x: 0, y: 0, duration: 500 },
                { type: 'pointerUp', button: 0 }
            ]
        }])

        await driver.releaseActions()
    }

    async montarQuebraCabecaCompleto() {
        const pecas = [
            { origem: '~drag-l1', destino: '~drop-l1' },
            { origem: '~drag-c1', destino: '~drop-c1' },
            { origem: '~drag-r1', destino: '~drop-r1' },
            { origem: '~drag-l2', destino: '~drop-l2' },
            { origem: '~drag-c2', destino: '~drop-c2' },
            { origem: '~drag-r2', destino: '~drop-r2' },
            { origem: '~drag-l3', destino: '~drop-l3' },
            { origem: '~drag-c3', destino: '~drop-c3' },
            { origem: '~drag-r3', destino: '~drop-r3' },
        ]

        for (const { origem, destino } of pecas) {
            await this.arrastarPeca(origem, destino)
            await driver.pause(500)
        }
    }

    async validarMensagemFinal() {
        const mensagem = await $('android=new UiSelector().text("Congratulations")')
        return mensagem
    }
}

export default new DragPage()
