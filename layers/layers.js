var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_municipios_de_nicaragua_1 = new ol.format.GeoJSON();
var features_municipios_de_nicaragua_1 = format_municipios_de_nicaragua_1.readFeatures(json_municipios_de_nicaragua_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_de_nicaragua_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_de_nicaragua_1.addFeatures(features_municipios_de_nicaragua_1);
var lyr_municipios_de_nicaragua_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipios_de_nicaragua_1, 
                style: style_municipios_de_nicaragua_1,
                popuplayertitle: 'municipios_de_nicaragua',
                interactive: true,
                title: '<img src="styles/legend/municipios_de_nicaragua_1.png" /> municipios_de_nicaragua'
            });
var group_Municipios = new ol.layer.Group({
                                layers: [lyr_municipios_de_nicaragua_1,],
                                fold: 'open',
                                title: 'Municipios'});

lyr_GoogleMaps_0.setVisible(true);lyr_municipios_de_nicaragua_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,group_Municipios];
lyr_municipios_de_nicaragua_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '@id': '@id', 'admin_leve': 'admin_leve', 'boundary': 'boundary', 'is_in_coun': 'is_in_coun', 'is_in_stat': 'is_in_stat', 'official_n': 'official_n', 'population': 'population', 'postal_cod': 'postal_cod', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'alt_name': 'alt_name', 'reg_name': 'reg_name', 'short_name': 'short_name', 'name_1': 'name_1', 'name_2': 'name_2', 'name_3': 'name_3', 'ufi': 'ufi', 'old_name': 'old_name', 'alt_name_2': 'alt_name_2', 'alt_name_3': 'alt_name_3', 'place': 'place', 'alt_name_1': 'alt_name_1', 'alt_name_4': 'alt_name_4', 'old_name_1': 'old_name_1', 'old_name_2': 'old_name_2', 'offical_na': 'offical_na', 'alt_name_5': 'alt_name_5', 'alt_name_6': 'alt_name_6', 'alt_name_7': 'alt_name_7', 'alt_name_8': 'alt_name_8', 'alt_name_9': 'alt_name_9', 'alt_name10': 'alt_name10', 'alt_name11': 'alt_name11', 'alt_name12': 'alt_name12', 'alt_name13': 'alt_name13', 'sorting_na': 'sorting_na', 'website': 'website', 'capital': 'capital', 'name_4': 'name_4', 'loc_name': 'loc_name', 'official': 'official', 'is_in': 'is_in', 'is_in_isla': 'is_in_isla', 'name_en': 'name_en', 'alt_name14': 'alt_name14', 'alt_name_e': 'alt_name_e', '@relations': '@relations', 'source': 'source', 'is_in_regi': 'is_in_regi', 'name_es': 'name_es', 'Departamen': 'Departamen', });
lyr_municipios_de_nicaragua_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', '@id': 'TextEdit', 'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'is_in_coun': 'TextEdit', 'is_in_stat': 'TextEdit', 'official_n': 'TextEdit', 'population': 'TextEdit', 'postal_cod': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'alt_name': 'TextEdit', 'reg_name': 'TextEdit', 'short_name': 'TextEdit', 'name_1': 'TextEdit', 'name_2': 'TextEdit', 'name_3': 'TextEdit', 'ufi': 'TextEdit', 'old_name': 'TextEdit', 'alt_name_2': 'TextEdit', 'alt_name_3': 'TextEdit', 'place': 'TextEdit', 'alt_name_1': 'TextEdit', 'alt_name_4': 'TextEdit', 'old_name_1': 'TextEdit', 'old_name_2': 'TextEdit', 'offical_na': 'TextEdit', 'alt_name_5': 'TextEdit', 'alt_name_6': 'TextEdit', 'alt_name_7': 'TextEdit', 'alt_name_8': 'TextEdit', 'alt_name_9': 'TextEdit', 'alt_name10': 'TextEdit', 'alt_name11': 'TextEdit', 'alt_name12': 'TextEdit', 'alt_name13': 'TextEdit', 'sorting_na': 'TextEdit', 'website': 'TextEdit', 'capital': 'TextEdit', 'name_4': 'TextEdit', 'loc_name': 'TextEdit', 'official': 'TextEdit', 'is_in': 'TextEdit', 'is_in_isla': 'TextEdit', 'name_en': 'TextEdit', 'alt_name14': 'TextEdit', 'alt_name_e': 'TextEdit', '@relations': 'TextEdit', 'source': 'TextEdit', 'is_in_regi': 'TextEdit', 'name_es': 'TextEdit', 'Departamen': 'TextEdit', });
lyr_municipios_de_nicaragua_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', '@id': 'no label', 'admin_leve': 'no label', 'boundary': 'no label', 'is_in_coun': 'no label', 'is_in_stat': 'no label', 'official_n': 'no label', 'population': 'no label', 'postal_cod': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', 'alt_name': 'no label', 'reg_name': 'no label', 'short_name': 'no label', 'name_1': 'no label', 'name_2': 'no label', 'name_3': 'no label', 'ufi': 'no label', 'old_name': 'inline label - always visible', 'alt_name_2': 'no label', 'alt_name_3': 'no label', 'place': 'no label', 'alt_name_1': 'no label', 'alt_name_4': 'no label', 'old_name_1': 'no label', 'old_name_2': 'no label', 'offical_na': 'no label', 'alt_name_5': 'no label', 'alt_name_6': 'no label', 'alt_name_7': 'no label', 'alt_name_8': 'no label', 'alt_name_9': 'no label', 'alt_name10': 'no label', 'alt_name11': 'no label', 'alt_name12': 'no label', 'alt_name13': 'no label', 'sorting_na': 'no label', 'website': 'no label', 'capital': 'no label', 'name_4': 'no label', 'loc_name': 'no label', 'official': 'no label', 'is_in': 'no label', 'is_in_isla': 'no label', 'name_en': 'no label', 'alt_name14': 'no label', 'alt_name_e': 'no label', '@relations': 'no label', 'source': 'no label', 'is_in_regi': 'no label', 'name_es': 'no label', 'Departamen': 'no label', });
lyr_municipios_de_nicaragua_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});