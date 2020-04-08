/**
 * @class Oskari.sample.bundle.myfirstbundle.SimpleHelloWorldBundleInstance
 *
 * This bundle demonstrates a simplest possible bundle
 * that will just alert a Hello World message on startup.
 *
 * Add this to startupsequence to get this bundle started
 {
            title : 'start-info-popup',

            bundlename : 'start-info-popup',
            bundleinstancename : 'start-info-popup',
            metadata : {
                "Import-Bundle" : {
                    "start-info-popup" : {
                        bundlePath : '/../../packages/lounaistieto/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }
 */
Oskari.clazz.define("Oskari.lounaistieto.bundle.StartInfoPopupBundleInstance",
    /**
     * @method create called automatically on construction
     * @static
     */

    function () {}, {

        /**
         * @static
         * @property __name
         */
        __name : 'StartInfoPopup',
        /**
         * @method getName
         * Module protocol method
         */
        getName : function() {
            return this.__name;
        },
        /**
         * @method start
         * BundleInstance protocol method
         */
        start: function () {
            var me = this;

            var conf = me.conf ;
            var sandboxName = ( conf ? conf.sandbox : null ) || 'sandbox' ;
            var sandbox = Oskari.getSandbox(sandboxName);
            this.sandbox = sandbox;

            // register to sandbox as a module
            sandbox.register(me);
            var dialog = Oskari.clazz.create('Oskari.userinterface.component.Popup');
            dialog.show(me.getLocalization('title'), me.getLocalization('message'));
            dialog.fadeout(4500);
        },

        /**
         * @method stop
         * BundleInstance protocol method
         */
        stop: function () {},
        /**
         * @method update
         * BundleInstance protocol method
         */
        update: function () {},
        /**
         * @method init
         * Module protocol method
         */
        init : function() {
            // headless module so nothing to return
            return null;
        },
        /**
         * @method getLocalization
         * Convenience method to call from Tile and Flyout
         * Returns JSON presentation of bundles localization data for current language.
         * If key-parameter is not given, returns the whole localization data.
         *
         * @param {String} key (optional) if given, returns the value for key
         * @return {String/Object} returns single localization string or
         *      JSON object for complete data depending on localization
         *      structure and if parameter key is given
         */
        getLocalization : function(key) {
            if(!this._localization) {
                this._localization = Oskari.getLocalization(this.getName());
            }
            if(key) {
                return this._localization[key];
            }
            return this._localization;
        }
    }, {
        protocol: ['Oskari.bundle.BundleInstance']
    });
