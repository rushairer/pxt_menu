enum MenuState {
    //% block="Closed"
    Closed,
    //% block="Open"
    Open
}
/**
 * AdvancedMenu
 */
//% weight=100 color=#efbc11 icon=""
namespace advancedmenu {
    const MenuKind = SpriteKind.create()

    //% block="create menu"
    //% blockSetVariable=menu
    export function createMenuSprite(): MenuSprite {
        return new MenuSprite();
    }

    export class MenuSprite {
        _menuBg: Sprite;
        _title: string;
        _menuBgColor: color;
        _menuTitleColor: color;
        _menuTitleHeight: number;
        _menuTitlePositionY: number;

        constructor(){
            this._title = "Menu Title"
            this._menuBgColor = 6
            this._menuTitleColor = 15
            this._menuTitleHeight = 14
            this._menuTitlePositionY = 8
        }

        //% blockCombine
        set menuBgColor(c: color) {
            this._menuBgColor = c
        }
        //% blockCombine
        set menuTitleColor(c: color) {
            this._menuTitleColor = c
        }
        //%blockCombine
        set title(v: string) {
            this._title = v
        }
        
        //% block
        public show() {
            this._menuBg = sprites.create(image.create(scene.screenWidth(), scene.screenHeight()), MenuKind)
            this._menuBg.image.fill(this._menuBgColor)

            const titleImg = image.create(scene.screenWidth(), this._menuTitleHeight)
            titleImg.printCenter(this._title, 0, this._menuTitleColor)
            const titleSprite = sprites.create(titleImg, MenuKind)
            titleSprite.setPosition(scene.screenWidth() / 2, this._menuTitlePositionY)
        }
    }
}