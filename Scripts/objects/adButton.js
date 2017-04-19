/*Author Name= Rajvinder Singh Yogi
Student Number=200353207
Website= Mini-portfolio
File Name= adButton
This file includes constructor which allow us to use image in this ad. Morever in this file I have included the effects on mouse Hover.

-----------------------------------------------------------------------------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    /**
     *
     *
     * @export
     * @class Button
     * @extends {createjs.Bitmap}
     */
    var Button = (function (_super) {
        __extends(Button, _super);
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
        function Button(_imagePath, _centered, _width, _height, x, y) {
            var _this = _super.call(this, _imagePath) || this;
            _this._imagePath = _imagePath;
            _this._centered = _centered;
            _this._width = _width;
            _this._height = _height;
            if (_centered) {
                _this.regX = _this._width * 0.5;
                _this.regY = _this._height * 0.5;
            }
            _this.x = x;
            _this.y = y;
            _this.on("mouseover", _this._mouseOver);
            _this.on("mouseout", _this._mouseOut);
            return _this;
        }
        /**
         *
         *
         * @private
         * @param {createjs.MouseEvent} event
         *
         * @memberOf Button
         */
        Button.prototype._mouseOver = function (event) {
            this.alpha = 0.8;
            this.scaleX = 1.2;
            this.scaleY = 1.2;
        };
        /**
         *
         *
         * @private
         * @param {createjs.MouseEvent} event
         *
         * @memberOf Button
         */
        Button.prototype._mouseOut = function (event) {
            this.alpha = 1;
            this.scaleX = 1.0;
            this.scaleY = 1.0;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=adButton.js.map