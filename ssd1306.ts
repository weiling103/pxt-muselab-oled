//% icon="\uf26c"
//% color="#F59E20" weight="100"
namespace MuseOLED {

    /**
     * initialises the i2c OLED display
     * @param height height (in pixels)
     * @param width width (in pixels)
     */
    //% blockId=oled_init_terminal
    //% block="initialize OLED with height %height|width %width"
    //% icon="\uf1ec" 
    //% shim=OLED::init_terminal
	//% weight=100	
	//% blockGap=8
    export function init(height: number, width: number): void {
        return;
    }

    /**
     * clears the screen.
     */
    //% blockId=oled_clear_screen
    //% block="clear OLED display"
    //% icon="\uf1ec" 
    //% shim=OLED::clearDisplay
    export function clear(): void {
        return;
    }

    /**
     * prints a string on the OLED display
     * @param text text to display
     */
    //% weight=87
    //% block="show OLED string %text" 
    //% async
    //% blockId=oled_print_string
    //% icon="\uf1ec"
    //% shim=OLED::showString
	//% weight=96	
    export function showString(text: string): void {
        console.log("display: " + text);
        return;
    }

    /**
     * prints a number on the OLED display
     * @param number number to display
     */
    //% weight=90
    //% blockId=oled_print_number
    //% block="show OLED number %number" blockGap=8
    //% async 
    //% shim=OLED::showNumber
    export function showNumber(number: number): void {
        console.log("display: " + number);
        return;
    }
}
