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
/*Author Name= Rajvinder Singh Yogi
Student Number=200353207
Website= Mini-portfolio
File Name= adTexts
This file includes constructor which creates an instance for content within the ad.
-----------------------------------------------------------------------------------------------------------*/
var objects;
(function (objects) {
    /**
     *
     *
     * @export
     * @class adText
     * @extends {createjs.Text}
     */
    var adText = (function (_super) {
        __extends(adText, _super);
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
        function adText(textString, fontSize, fontType, fontColor, x, y, isCentered) {
            var _this = _super.call(this, textString, fontSize + " " + fontType, fontColor) || this;
            _this.textString = textString;
            _this.fontSize = fontSize;
            _this.fontType = fontType;
            _this.fontColor = fontColor;
            _this.isCentered = isCentered;
            if (_this.isCentered) {
                _this.regX = _this.getMeasuredWidth() * 0.5;
                _this.regY = _this.getMeasuredHeight() * 0.5;
            }
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return adText;
    }(createjs.Text));
    objects.adText = adText;
})(objects || (objects = {}));
//# sourceMappingURL=adTexts.js.map