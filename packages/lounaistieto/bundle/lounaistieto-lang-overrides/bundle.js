/**
 * Definition for bundle. See source for details.
 *
 * @class Oskari.lounaistieto.lang.overrides.Bundle
 */
Oskari.clazz.define("Oskari.lounaistieto.lang.overrides.Bundle", function() {

}, {
    "create" : function() {
        return this;
    },
    "update" : function(manager, bundle, bi, info) {
    },
    "start": function() {},
    "stop": function() {}
}, {
    "protocol" : [
        "Oskari.bundle.Bundle",
        "Oskari.mapframework.bundle.extension.ExtensionBundle"
    ],
    "source" : {
        "scripts" : [
        ],
        "locales" : [
            {
                "lang": "fi",
                "type": "text/javascript",
                "src": "../../../../bundles/lounaistieto/lounaistieto-lang-overrides/resources/locale/fi.js"
            },
            {
                "lang": "sv",
                "type": "text/javascript",
                "src": "../../../../bundles/lounaistieto/lounaistieto-lang-overrides/resources/locale/sv.js"
            },
            {
                "lang": "en",
                "type": "text/javascript",
                "src": "../../../../bundles/lounaistieto/lounaistieto-lang-overrides/resources/locale/en.js"
            }
        ]
    },
    "bundle" : {
        "manifest" : {
            "Bundle-Identifier" : "lounaistieto-lang-overrides",
            "Bundle-Name" : "lounaistieto-lang-overrides",
            "Bundle-Author" : [{
                "Name" : "TR",
                "Organisation" : "nls.fi",
                "Temporal" : {
                    "Start" : "2015"
                },
                "Copyleft" : {
                    "License" : {
                        "License-Name" : "EUPL",
                        "License-Online-Resource" : "http://www.oskari.org/documentation/development/license"
                    }
                }
            }],
            "Bundle-Name-Locale" : {
                "fi" : {
                    "Name" : "lang-overrides",
                    "Title" : "lang-overrides"
                },
                "en" : {}
            },
            "Bundle-Version" : "1.0.0",
            "Import-Namespace" : ["Oskari", "jquery"],
            "Import-Bundle" : {}
        }
    },
    /**
     * @static
     * @property dependencies
     */
    "dependencies" : ["jquery"]

});

Oskari.bundle_manager.installBundleClass("lounaistieto-lang-overrides",
    "Oskari.lounaistieto.lang.overrides.Bundle");