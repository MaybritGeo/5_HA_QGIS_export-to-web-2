var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_5_Export_HA_1 = new ol.format.GeoJSON();
var features_5_Export_HA_1 = format_5_Export_HA_1.readFeatures(json_5_Export_HA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5_Export_HA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5_Export_HA_1.addFeatures(features_5_Export_HA_1);cluster_5_Export_HA_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_5_Export_HA_1
});
var lyr_5_Export_HA_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_5_Export_HA_1, 
                style: style_5_Export_HA_1,
                interactive: true,
                title: '<img src="styles/legend/5_Export_HA_1.png" /> 5_Export_HA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_5_Export_HA_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_5_Export_HA_1];
lyr_5_Export_HA_1.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'standort': 'Standort', 'anzahl_ladepunkte': 'Anzahl Ladepunkte', 'ladesaeule_status': 'ladesaeule_status', 'adresse': 'Adresse', 'koordinaten': 'koordinaten', 'typ': 'typ', 'ladepunkt': 'ladepunkt', 'stecker': 'stecker', 'status': 'status', 'authmethod_1': 'authmethod_1', 'authmethod_2': 'authmethod_2', 'aggregated_fids': 'aggregated_fids', 'aggregation_fids_2': 'aggregation_fids_2', 'aggregation_stecker': 'Stecker-Typen', 'aggregation_ladepunkte': 'Anzahl Ladepunkte', });
lyr_5_Export_HA_1.set('fieldImages', {'fid': 'Hidden', 'gml_id': 'Hidden', 'standort': 'TextEdit', 'anzahl_ladepunkte': 'Hidden', 'ladesaeule_status': 'Hidden', 'adresse': 'TextEdit', 'koordinaten': 'Hidden', 'typ': 'Hidden', 'ladepunkt': 'Hidden', 'stecker': 'Hidden', 'status': 'Hidden', 'authmethod_1': 'Hidden', 'authmethod_2': 'Hidden', 'aggregated_fids': 'Hidden', 'aggregation_fids_2': 'Hidden', 'aggregation_stecker': 'TextEdit', 'aggregation_ladepunkte': 'Range', });
lyr_5_Export_HA_1.set('fieldLabels', {'standort': 'inline label', 'adresse': 'inline label', 'aggregation_stecker': 'inline label', 'aggregation_ladepunkte': 'inline label', });
lyr_5_Export_HA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});