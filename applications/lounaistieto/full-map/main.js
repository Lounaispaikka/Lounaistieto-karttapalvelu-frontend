import './index.js';

// These framework bundles have to be imported first
import 'oskari-loader!oskari-frontend/packages/framework/bundle/mapfull/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/oskariui/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/divmanazer/bundle.js';

// Then import mapmodule and rest of the application
import 'oskari-loader!oskari-frontend/packages/mapping/ol/mapmodule/bundle.js';

import 'oskari-loader!oskari-frontend/packages/mapping/ol/wfsvector/bundle.js';

import 'oskari-loader!../../../packages/lounaistieto/bundle/lounaistieto-lang-overrides/bundle.js';

import 'oskari-loader!oskari-frontend/packages/mapping/ol/mapmyplaces/bundle.js';
import 'oskari-loader!oskari-frontend/packages/mapping/ol/maparcgis/bundle.js';

//Poistettu
//import 'oskari-loader!oskari-frontend/packages/framework/bundle/mapstats/bundle.js';
import 'oskari-loader!oskari-frontend/packages/mapping/ol/mapuserlayers/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/ui-components/bundle.js';
import 'oskari-loader!oskari-frontend-contrib/packages/analysis/ol/analyse/bundle.js';
import 'oskari-loader!oskari-frontend/packages/mapping/ol/mapwmts/bundle.js';

import 'oskari-loader!oskari-frontend/packages/mapping/ol/toolbar/bundle.js';

import 'oskari-loader!oskari-frontend/packages/mapping/ol/infobox/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/statehandler/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/search/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/layerselector2/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/layerselection2/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/coordinatetool/bundle.js';

import 'oskari-loader!oskari-frontend/packages/catalogue/bundle/metadataflyout/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/featuredata2/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/publisher2/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/personaldata/bundle.js';

import 'oskari-loader!oskari-frontend/packages/catalogue/metadatacatalogue/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/maplegend/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/userguide/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/guidedtour/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/backendstatus/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/printout/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/postprocessor/bundle.js';

import 'oskari-loader!oskari-frontend/packages/integration/bundle/admin-layerselector/bundle.js';

import 'oskari-loader!oskari-frontend/packages/integration/bundle/bb/bundle.js';

//removed, replacement is geometrycutter
//import 'oskari-loader!oskari-frontend/packages/framework/bundle/geometryeditor/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/admin-layerrights/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/myplacesimport/bundle.js';

import 'oskari-loader!oskari-frontend/packages/admin/bundle/admin/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/admin-users/bundle.js';

import 'oskari-loader!oskari-frontend-contrib/packages/tampere/bundle/admin-wfs-search-channel/bundle.js';

import 'oskari-loader!oskari-frontend-contrib/packages/tampere/bundle/search-from-channels/bundle.js';

import 'oskari-loader!oskari-frontend/packages/mapping/ol/heatmap/bundle.js';

import 'oskari-loader!oskari-frontend/packages/statistics/statsgrid/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/routingService/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/rpc/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/statehandler/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/coordinatedisplay/bundle.js';

//removed
//import 'oskari-loader!oskari-frontend/packages/paikkatietoikkuna/bundle/routesearch/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/bundle/findbycoordinates/bundle.js';

import './css/overwritten.css';
