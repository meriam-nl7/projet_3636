var wms_layers = [];


        var lyr_GooGle_0 = new ol.layer.Tile({
            'title': 'GooGle',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_projet_3636_Routeline_1 = new ol.format.GeoJSON();
var features_projet_3636_Routeline_1 = format_projet_3636_Routeline_1.readFeatures(json_projet_3636_Routeline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_projet_3636_Routeline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_projet_3636_Routeline_1.addFeatures(features_projet_3636_Routeline_1);
var lyr_projet_3636_Routeline_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_projet_3636_Routeline_1, 
                style: style_projet_3636_Routeline_1,
                interactive: true,
                title: '<img src="styles/legend/projet_3636_Routeline_1.png" /> projet_3636_Route-line'
            });
var format_data_3636_2 = new ol.format.GeoJSON();
var features_data_3636_2 = format_data_3636_2.readFeatures(json_data_3636_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_data_3636_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_data_3636_2.addFeatures(features_data_3636_2);
var lyr_data_3636_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_data_3636_2, 
                style: style_data_3636_2,
                interactive: true,
                title: '<img src="styles/legend/data_3636_2.png" /> data_3636'
            });
var format_medenineshp_3 = new ol.format.GeoJSON();
var features_medenineshp_3 = format_medenineshp_3.readFeatures(json_medenineshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_medenineshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_medenineshp_3.addFeatures(features_medenineshp_3);
var lyr_medenineshp_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_medenineshp_3, 
                style: style_medenineshp_3,
                interactive: true,
                title: '<img src="styles/legend/medenineshp_3.png" /> medenineshp'
            });

lyr_GooGle_0.setVisible(true);lyr_projet_3636_Routeline_1.setVisible(true);lyr_data_3636_2.setVisible(true);lyr_medenineshp_3.setVisible(true);
var layersList = [lyr_GooGle_0,lyr_projet_3636_Routeline_1,lyr_data_3636_2,lyr_medenineshp_3];
lyr_projet_3636_Routeline_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'tessellate': 'tessellate', });
lyr_data_3636_2.set('fieldAliases', {'identdata': 'identdata', 'identdscpt': 'identdscpt', 'nom': 'nom', 'easting': 'easting', 'northing': 'northing', 'zonel': 'zonel', 'x_stt': 'x_stt', 'y_stt': 'y_stt', 'xign': 'xign', 'yign': 'yign', 'x_ntt': 'x_ntt', 'y_ntt': 'y_ntt', 'xwgs84': 'xwgs84', 'yggs84': 'yggs84', 'nmf': 'nmf', 'nom_feuille': 'nom_feuille', 'etat': 'etat', 'ville': 'ville', });
lyr_medenineshp_3.set('fieldAliases', {'id': 'id', 'id_1': 'id_1', 'name_1': 'name_1', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_projet_3636_Routeline_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'tessellate': 'Range', });
lyr_data_3636_2.set('fieldImages', {'identdata': 'Range', 'identdscpt': 'Range', 'nom': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', 'zonel': 'TextEdit', 'x_stt': 'TextEdit', 'y_stt': 'TextEdit', 'xign': 'TextEdit', 'yign': 'TextEdit', 'x_ntt': 'TextEdit', 'y_ntt': 'TextEdit', 'xwgs84': 'TextEdit', 'yggs84': 'TextEdit', 'nmf': 'Range', 'nom_feuille': 'TextEdit', 'etat': 'TextEdit', 'ville': 'TextEdit', });
lyr_medenineshp_3.set('fieldImages', {'id': 'TextEdit', 'id_1': 'TextEdit', 'name_1': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_projet_3636_Routeline_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'tessellate': 'no label', });
lyr_data_3636_2.set('fieldLabels', {'identdata': 'no label', 'identdscpt': 'no label', 'nom': 'no label', 'easting': 'no label', 'northing': 'no label', 'zonel': 'no label', 'x_stt': 'no label', 'y_stt': 'no label', 'xign': 'no label', 'yign': 'no label', 'x_ntt': 'no label', 'y_ntt': 'no label', 'xwgs84': 'no label', 'yggs84': 'no label', 'nmf': 'no label', 'nom_feuille': 'no label', 'etat': 'no label', 'ville': 'no label', });
lyr_medenineshp_3.set('fieldLabels', {'id': 'no label', 'id_1': 'no label', 'name_1': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_medenineshp_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});