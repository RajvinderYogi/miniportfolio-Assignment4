module objects{
    /**
     * 
     * 
     * @export
     * @class adText
     * @extends {createjs.Text}
     */
    export class adText extends createjs.Text{
        /**
         * Creates an instance of adText.
         * @param {string} textString 
         * @param {string} fontSize 
         * @param {string} fontType 
         * @param {string} fontColor 
         * @param {number} x 
         * @param {number} y 
         * @param {boolean} isCentered 
         * 
         * @memberOf adText
         */
        constructor(private textString:string, 
                    private fontSize:string,
                    private fontType:string,
                    private fontColor:string,
                    x:number,
                    y:number,
                    private isCentered: boolean) {
            super(textString, fontSize + " "+fontType, fontColor);

            if(this.isCentered){
                this.regX= this. getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
            this.x = x;
            this.y = y;
        }
    }
}