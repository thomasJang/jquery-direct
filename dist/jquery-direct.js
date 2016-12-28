'use strict';

(function () {
    if (!window.jqueryDirectFunctions) window.jqueryDirectFunctions = {};

    /**
     * @method clickAttr
     * @param _caller
     * @param attr
     * @param fnObj
     */
    var clickAttr = function clickAttr(_caller, attr, fnObj) {
        this.find('[' + attr + ']').click(function () {
            var attrName = this.getAttribute(attr);
            if (attrName in fnObj) {
                fnObj[attrName].call(_caller, this);
            }
        });
        return this;
    };

    jqueryDirectFunctions["clickAttr"] = clickAttr;
})();
/**
 *
 */
jQuery.fn.extend(jqueryDirectFunctions);