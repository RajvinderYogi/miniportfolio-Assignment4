module objects {
    /**
     * 
     * 
     * @export
     * @class Button
     * @extends {createjs.Bitmap}
     */
    export class Button extends createjs.Bitmap {

    /**
     * Creates an instance of Button.
     * @param {string} _imagePath 
     * @param {boolean} _centered 
     * @param {number} _width 
     * @param {number} _height 
     * @param {number} x 
     * @param {number} y 
     * 
     * @memberOf Button
     */

     constructor(private _imagePath: string,
                private _centered: boolean,
                private _width: number,
                private _height: number,
                x: number,
                y: number) {
                super(_imagePath)
                if (_centered) {
                this.regX = this._width * 0.5;
                this.regY = this._height * 0.5;
                }
            this.x = x;
            this.y = y;

            this.on("mouseover", this._mouseOver);
            this.on("mouseout", this._mouseOut);

        }


        /**
         * 
         * 
         * @private
         * @param {createjs.MouseEvent} event 
         * 
         * @memberOf Button
         */

        private _mouseOver(event: createjs.MouseEvent) {
            this.alpha = 0.8;
            this.scaleX = 1.2;
            this.scaleY = 1.2;
        }

        /**
         * 
         * 
         * @private
         * @param {createjs.MouseEvent} event 
         * 
         * @memberOf Button
         */
        private _mouseOut(event: createjs.MouseEvent) {
            this.alpha = 1;
            this.scaleX = 1.0;
            this.scaleY = 1.0;
        }
    }
}