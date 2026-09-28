class SwipePage {
    get menuSwipe() { return $('~Swipe') }

    async abrirMenuSwipe() {
        await this.menuSwipe.click()
    }

    async swipeEsquerda(elemento) {
        const size = await elemento.getSize()
        const location = await elemento.getLocation()

        const startX = location.x + size.width - 1
        const startY = location.y + size.height / 2
        const endX = location.x + 1
        const endY = startY

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', x: startX, y: startY, duration: 0 },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', x: endX, y: endY, duration: 1000 },
                { type: 'pointerUp', button: 0 }
            ]
        }])

        await driver.releaseActions()
    }

    async swipeDireita(elemento) {
        const size = await elemento.getSize()
        const location = await elemento.getLocation()

        const startX = location.x + 1
        const startY = location.y + size.height / 2
        const endX = location.x + size.width - 1
        const endY = startY

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', x: startX, y: startY, duration: 0 },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', x: endX, y: endY, duration: 1000 },
                { type: 'pointerUp', button: 0 }
            ]
        }])

        await driver.releaseActions()
    }

    async swipeParaCima(elemento) {
        const size = await elemento.getSize()
        const location = await elemento.getLocation()

        const startX = location.x + size.width / 2
        const startY = location.y + size.height - 1
        const endX = startX
        
        const endY = location.y - (size.height * 0.8)

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', x: startX, y: startY, duration: 0 },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', x: endX, y: endY, duration: 1200 },
                { type: 'pointerUp', button: 0 }
            ]
        }])

        await driver.releaseActions()
    }
}

export default new SwipePage()
