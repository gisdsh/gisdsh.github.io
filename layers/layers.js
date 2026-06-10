ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-7022198.022683, -3465160.618080, -6822158.073159, -3043728.073011]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Establecimientos_1 = new ol.format.GeoJSON();
var features_Establecimientos_1 = format_Establecimientos_1.readFeatures(json_Establecimientos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Establecimientos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Establecimientos_1.addFeatures(features_Establecimientos_1);
var lyr_Establecimientos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Establecimientos_1, 
                style: style_Establecimientos_1,
                popuplayertitle: 'Establecimientos',
                interactive: true,
    title: 'Establecimientos<br />\
    <img src="styles/legend/Establecimientos_1_0.png" /> ADECO AGROPECUARIA<br />\
    <img src="styles/legend/Establecimientos_1_1.png" /> ADELQUIVIGNOLO<br />\
    <img src="styles/legend/Establecimientos_1_2.png" /> AED<br />\
    <img src="styles/legend/Establecimientos_1_3.png" /> Agropecuaria Don David SA<br />\
    <img src="styles/legend/Establecimientos_1_4.png" /> Grupo Linke<br />\
    <img src="styles/legend/Establecimientos_1_5.png" /> MAXI VARELA MSU<br />\
    <img src="styles/legend/Establecimientos_1_6.png" /> Walter Hauch<br />' });
var group_Base = new ol.layer.Group({
                                layers: [lyr_GoogleHybrid_0,],
                                fold: 'open',
                                title: 'Base'});

lyr_GoogleHybrid_0.setVisible(true);lyr_Establecimientos_1.setVisible(true);
var layersList = [group_Base,lyr_Establecimientos_1];
lyr_Establecimientos_1.set('fieldAliases', {'fid': 'fid', 'CLIENT_NAM': 'CLIENT_NAM', 'FARM_NAME': 'FARM_NAME', 'ORG_NAME': 'ORG_NAME', 'ORG_ID': 'ORG_ID', });
lyr_Establecimientos_1.set('fieldImages', {'fid': 'TextEdit', 'CLIENT_NAM': 'TextEdit', 'FARM_NAME': 'TextEdit', 'ORG_NAME': 'TextEdit', 'ORG_ID': 'TextEdit', });
lyr_Establecimientos_1.set('fieldLabels', {'fid': 'no label', 'CLIENT_NAM': 'inline label - visible with data', 'FARM_NAME': 'inline label - visible with data', 'ORG_NAME': 'inline label - visible with data', 'ORG_ID': 'inline label - visible with data', });
lyr_Establecimientos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});