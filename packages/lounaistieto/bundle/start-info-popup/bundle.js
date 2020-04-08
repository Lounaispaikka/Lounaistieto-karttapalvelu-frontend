/**
 * @class Oskari.lounaistieto.bundle.StartInfoPopupBundleInstance
 *
 * Definition for bundle. See source for details.
 */
Oskari.clazz.define("Oskari.lounaistieto.bundle.StartInfoPopupBundle",
/**
 * @method create called automatically on construction
 * @static
 */
function() {

}, {
    "create" : function() {
        var me = this;
        var inst = Oskari.clazz.create("Oskari.lounaistieto.bundle.StartInfoPopupBundleInstance");
        return inst;

    },
    "update" : function(manager, bundle, bi, info) {

    }
}, {

    "protocol" : ["Oskari.bundle.Bundle", "Oskari.mapframework.bundle.extension.ExtensionBundle"],
    "source" : {

        "scripts" : [{
            "type" : "text/javascript",
            "src" : "../../../../bundles/lounaistieto/start-info-popup/instance.js"
        }],

        "locales" : [{
            "lang" : "fi",
            "type" : "text/javascript",
            "src" : "../../../../bundles/lounaistieto/start-info-popup/resources/locale/fi.js"
        }]
    },
    "bundle" : {
        "manifest" : {
            "Bundle-Identifier" : "start-info-popup",
            "Bundle-Name" : "start-info-popup",
            "Bundle-Author" : [{
                "Name" : "mk",
                "Organisation" : "Dimenteq Oy",
                "Temporal" : {
                    "Start" : "2018",
                    "End" : "2018"
                },
                "Copyleft" : {
                    "License" : {
                        "License-Name" : "EUPL",
                        "License-Online-Resource" : "http://www.paikkatietoikkuna.fi/license"
                    }
                }
            }],
            "Bundle-Version" : "1.0.0",
            "Import-Namespace" : ["Oskari"],
            "Import-Bundle" : {}

        }
    }
});

Oskari.bundle_manager.installBundleClass("start-info-popup", "Oskari.lounaistieto.bundle.StartInfoPopupBundle");
