ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([164531.212958, 2692119.292414, 203459.923797, 2718558.623590]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_4_utf8_1 = new ol.format.GeoJSON();
var features_4_utf8_1 = format_4_utf8_1.readFeatures(json_4_utf8_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_4_utf8_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_utf8_1.addFeatures(features_4_utf8_1);
var lyr_4_utf8_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4_utf8_1, 
                style: style_4_utf8_1,
                interactive: true,
                title: '<img src="styles/legend/4_utf8_1.png" /> 集水區4_utf8'
            });
var lyr_1975_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "後浦1975",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_2.png",
    attributions: ' ',
                                projection: 'EPSG:3825',
                                alwaysInRange: true,
                                imageExtent: [180034.877242, 2702633.827561, 181628.833190, 2703656.104246]
                            })
                        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 后浦建築物'
            });
var format_43_utf8_4 = new ol.format.GeoJSON();
var features_43_utf8_4 = format_43_utf8_4.readFeatures(json_43_utf8_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_43_utf8_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_43_utf8_4.addFeatures(features_43_utf8_4);
var lyr_43_utf8_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_43_utf8_4, 
                style: style_43_utf8_4,
                interactive: true,
                title: '<img src="styles/legend/43_utf8_4.png" /> 聚落43_utf8'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_4_utf8_1.setVisible(true);lyr_1975_2.setVisible(true);lyr__3.setVisible(true);lyr_43_utf8_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_4_utf8_1,lyr_1975_2,lyr__3,lyr_43_utf8_4];
lyr_4_utf8_1.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', });
lyr__3.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_43_utf8_4.set('fieldAliases', {'分區簡': '分區簡', });
lyr_4_utf8_1.set('fieldImages', {'ID': '', 'VALUE': '', 'NAME': '', });
lyr__3.set('fieldImages', {'Build_STR': '', 'Build_NO': '', });
lyr_43_utf8_4.set('fieldImages', {'分區簡': 'TextEdit', });
lyr_4_utf8_1.set('fieldLabels', {'ID': 'header label', 'VALUE': 'header label', 'NAME': 'header label', });
lyr__3.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr_43_utf8_4.set('fieldLabels', {'分區簡': 'header label', });
lyr_43_utf8_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});