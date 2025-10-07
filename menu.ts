enum MenuState {
    //% block="Closed"
    Closed,
    //% block="Open"
    Open
}
/**
 * Menu
 */
//% weight=100 color=#efbc11 icon=""
namespace menu {
    

    const MenuKind = SpriteKind.create()
    let menuBg: Sprite = null
    let menuBgColor = 0
    let menuTitleColor = 15
    let menuTitleHeight = 14
    let menuTitlePositionY = 8
    menuBgColor = 6

    /**
     * Show the menu
     * @param title Title of the menu, eg: "Menu"
     */
    //% block
    export function show(title: string): void {
        menuBg = sprites.create(image.create(scene.screenWidth(), scene.screenHeight()), MenuKind)
        menuBg.image.fill(menuBgColor)

        const titleImg = image.create(scene.screenWidth(), menuTitleHeight)
        titleImg.printCenter(title, 0, menuTitleColor)
        const titleSprite = sprites.create(titleImg, MenuKind)
        titleSprite.setPosition(scene.screenWidth() / 2, menuTitlePositionY)
    }
}
