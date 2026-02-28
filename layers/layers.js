ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-11877755.883823, 3702889.819198, -11836861.513784, 3735538.886082]);
var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Polgonosindustriales_1 = new ol.format.GeoJSON();
var features_Polgonosindustriales_1 = format_Polgonosindustriales_1.readFeatures(json_Polgonosindustriales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polgonosindustriales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polgonosindustriales_1.addFeatures(features_Polgonosindustriales_1);
var lyr_Polgonosindustriales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polgonosindustriales_1, 
                style: style_Polgonosindustriales_1,
                popuplayertitle: 'Polígonos industriales',
                interactive: true,
    title: 'Polígonos industriales<br />\
    <img src="styles/legend/Polgonosindustriales_1_0.png" /> INDUSTRIA<br />\
    <img src="styles/legend/Polgonosindustriales_1_1.png" /> PARQUE INDUSTRIAL<br />\
    <img src="styles/legend/Polgonosindustriales_1_2.png" /> ZONA INDUSTRIAL<br />' });
var format_JurezBusLineasTroncales_2 = new ol.format.GeoJSON();
var features_JurezBusLineasTroncales_2 = format_JurezBusLineasTroncales_2.readFeatures(json_JurezBusLineasTroncales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JurezBusLineasTroncales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JurezBusLineasTroncales_2.addFeatures(features_JurezBusLineasTroncales_2);
var lyr_JurezBusLineasTroncales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JurezBusLineasTroncales_2, 
                style: style_JurezBusLineasTroncales_2,
                popuplayertitle: 'Juárez Bus — Lineas Troncales',
                interactive: true,
    title: 'Juárez Bus — Lineas Troncales<br />\
    <img src="styles/legend/JurezBusLineasTroncales_2_0.png" /> BRT-1<br />\
    <img src="styles/legend/JurezBusLineasTroncales_2_1.png" /> BRT-2_Parador<br />\
    <img src="styles/legend/JurezBusLineasTroncales_2_2.png" /> Línea Exprés Norte-Sur<br />\
    <img src="styles/legend/JurezBusLineasTroncales_2_3.png" /> Pre-Troncal Goméz Morín<br />' });
var format_EstacionesTroncalGomezMorin_3 = new ol.format.GeoJSON();
var features_EstacionesTroncalGomezMorin_3 = format_EstacionesTroncalGomezMorin_3.readFeatures(json_EstacionesTroncalGomezMorin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacionesTroncalGomezMorin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesTroncalGomezMorin_3.addFeatures(features_EstacionesTroncalGomezMorin_3);
var lyr_EstacionesTroncalGomezMorin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacionesTroncalGomezMorin_3, 
                style: style_EstacionesTroncalGomezMorin_3,
                popuplayertitle: 'Estaciones Troncal Gomez Morin',
                interactive: true,
                title: '<img src="styles/legend/EstacionesTroncalGomezMorin_3.png" /> Estaciones Troncal Gomez Morin'
            });
var format_EstacionesBRT2_4 = new ol.format.GeoJSON();
var features_EstacionesBRT2_4 = format_EstacionesBRT2_4.readFeatures(json_EstacionesBRT2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacionesBRT2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesBRT2_4.addFeatures(features_EstacionesBRT2_4);
var lyr_EstacionesBRT2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacionesBRT2_4, 
                style: style_EstacionesBRT2_4,
                popuplayertitle: 'Estaciones BRT2',
                interactive: true,
                title: '<img src="styles/legend/EstacionesBRT2_4.png" /> Estaciones BRT2'
            });
var format_EstacionesBRT1_5 = new ol.format.GeoJSON();
var features_EstacionesBRT1_5 = format_EstacionesBRT1_5.readFeatures(json_EstacionesBRT1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacionesBRT1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesBRT1_5.addFeatures(features_EstacionesBRT1_5);
var lyr_EstacionesBRT1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacionesBRT1_5, 
                style: style_EstacionesBRT1_5,
                popuplayertitle: 'Estaciones BRT1',
                interactive: true,
                title: '<img src="styles/legend/EstacionesBRT1_5.png" /> Estaciones BRT1'
            });
var format_CicloRutasExistentes_6 = new ol.format.GeoJSON();
var features_CicloRutasExistentes_6 = format_CicloRutasExistentes_6.readFeatures(json_CicloRutasExistentes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CicloRutasExistentes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CicloRutasExistentes_6.addFeatures(features_CicloRutasExistentes_6);
var lyr_CicloRutasExistentes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CicloRutasExistentes_6, 
                style: style_CicloRutasExistentes_6,
                popuplayertitle: 'CicloRutas Existentes',
                interactive: true,
                title: '<img src="styles/legend/CicloRutasExistentes_6.png" /> CicloRutas Existentes'
            });
var group_JurezBusEstaciones = new ol.layer.Group({
                                layers: [lyr_EstacionesTroncalGomezMorin_3,lyr_EstacionesBRT2_4,lyr_EstacionesBRT1_5,],
                                fold: 'open',
                                title: 'Juárez Bus - Estaciones'});

lyr_ESRIGraydark_0.setVisible(true);lyr_Polgonosindustriales_1.setVisible(true);lyr_JurezBusLineasTroncales_2.setVisible(true);lyr_EstacionesTroncalGomezMorin_3.setVisible(true);lyr_EstacionesBRT2_4.setVisible(true);lyr_EstacionesBRT1_5.setVisible(true);lyr_CicloRutasExistentes_6.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_Polgonosindustriales_1,lyr_JurezBusLineasTroncales_2,group_JurezBusEstaciones,lyr_CicloRutasExistentes_6];
lyr_Polgonosindustriales_1.set('fieldAliases', {'ID_COLO': 'ID_COLO', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'ETIQUETA': 'ETIQUETA', 'OBSERVACIO': 'OBSERVACIO', 'ID': 'ID', 'SUP': 'SUP', });
lyr_JurezBusLineasTroncales_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'ID': 'ID', 'MODE': 'MODE', 'HEADWAY': 'HEADWAY', 'SPEED': 'SPEED', 'DESC': 'DESC', });
lyr_EstacionesTroncalGomezMorin_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_EstacionesBRT2_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_EstacionesBRT1_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CicloRutasExistentes_6.set('fieldAliases', {'ID': 'ID', 'CALLE': 'CALLE', 'RUTA': 'RUTA', 'LAYER': 'LAYER', 'Long_Km': 'Long_Km', });
lyr_Polgonosindustriales_1.set('fieldImages', {'ID_COLO': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'ETIQUETA': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ID': 'TextEdit', 'SUP': 'TextEdit', });
lyr_JurezBusLineasTroncales_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'ID': 'TextEdit', 'MODE': 'TextEdit', 'HEADWAY': 'TextEdit', 'SPEED': 'TextEdit', 'DESC': 'TextEdit', });
lyr_EstacionesTroncalGomezMorin_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_EstacionesBRT2_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_EstacionesBRT1_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CicloRutasExistentes_6.set('fieldImages', {'ID': 'TextEdit', 'CALLE': 'TextEdit', 'RUTA': 'TextEdit', 'LAYER': 'TextEdit', 'Long_Km': 'TextEdit', });
lyr_Polgonosindustriales_1.set('fieldLabels', {'ID_COLO': 'hidden field', 'NOMBRE': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'ETIQUETA': 'hidden field', 'OBSERVACIO': 'hidden field', 'ID': 'hidden field', 'SUP': 'hidden field', });
lyr_JurezBusLineasTroncales_2.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'ID': 'hidden field', 'MODE': 'hidden field', 'HEADWAY': 'hidden field', 'SPEED': 'hidden field', 'DESC': 'hidden field', });
lyr_EstacionesTroncalGomezMorin_3.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_EstacionesBRT2_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', });
lyr_EstacionesBRT1_5.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CicloRutasExistentes_6.set('fieldLabels', {'ID': 'hidden field', 'CALLE': 'inline label - always visible', 'RUTA': 'inline label - always visible', 'LAYER': 'hidden field', 'Long_Km': 'inline label - always visible', });
lyr_CicloRutasExistentes_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});