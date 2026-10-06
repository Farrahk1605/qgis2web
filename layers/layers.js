var wms_layers = [];

var format_qgis2web_0 = new ol.format.GeoJSON();
var features_qgis2web_0 = format_qgis2web_0.readFeatures(json_qgis2web_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qgis2web_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qgis2web_0.addFeatures(features_qgis2web_0);
var lyr_qgis2web_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qgis2web_0, 
                style: style_qgis2web_0,
                popuplayertitle: 'qgis2web',
                interactive: true,
    title: 'qgis2web<br />\
    <img src="styles/legend/qgis2web_0_0.png" /> 356 - 439<br />\
    <img src="styles/legend/qgis2web_0_1.png" /> 439 - 680<br />\
    <img src="styles/legend/qgis2web_0_2.png" /> 680 - 743<br />\
    <img src="styles/legend/qgis2web_0_3.png" /> 743 - 877<br />\
    <img src="styles/legend/qgis2web_0_4.png" /> 877 - 1375<br />' });

lyr_qgis2web_0.setVisible(true);
var layersList = [lyr_qgis2web_0];
lyr_qgis2web_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'kepadatan': 'kepadatan', 'Pria': 'Pria', 'Wanita': 'Wanita', 'Total': 'Total', 'Luas': 'Luas', });
lyr_qgis2web_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'kepadatan': 'TextEdit', 'Pria': 'TextEdit', 'Wanita': 'TextEdit', 'Total': 'TextEdit', 'Luas': 'TextEdit', });
lyr_qgis2web_0.set('fieldLabels', {'Kecamatan': 'header label - visible with data', 'kepadatan': 'inline label - always visible', 'Pria': 'inline label - visible with data', 'Wanita': 'inline label - always visible', 'Total': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_qgis2web_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});