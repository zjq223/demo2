!function(){
     var infoWindow, map, level = 16,
       center = {lng: 116.097615, lat: 39.668291},
       features = [];
 
     function loadFeatures(){
       for(var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++){
         data = features[i];
         switch(data.type){
           case "Marker":
             feature = new AMap.Marker({ map: map, position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
               zIndex: 3, extData: data, offset: new AMap.Pixel(data.offset.x, data.offset.y), title: data.name,
               content: '<div class="icon icon-' + data.icon + ' icon-'+ data.icon +'-' + data.color +'"></div>' });
             break;
           case "Polyline":
            for(j = 0, jl = data.path.length, path = []; j < jl; j++){
							path.push(new AMap.LngLat(data.path[j].lng, data.path[j].lat));
						}
             feature = new AMap.Polyline({ map: map, path: path, extData: data, zIndex: 2,
               strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity });
             break;
           case "Polygon":
             for(j = 0, jl = data.path.length, path = []; j < jl; j++){
               path.push(new AMap.LngLat(data.path[j].lng, data.path[j].lat));
             }
             feature = new AMap.Polygon({ map: map, path: path, extData: data, zIndex: 1,
               strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity,
               fillColor: data.fillColor, fillOpacity: data.fillOpacity });
             break;
           default: feature = null;
         }
         if(feature){ AMap.event.addListener(feature, "click", mapFeatureClick); }
       }
     }
 
     function mapFeatureClick(e){
       if(!infoWindow){ infoWindow = new AMap.InfoWindow({autoMove: true,isCustom: false}); }
       var extData = e.target.getExtData();
       infoWindow.setContent("<div class='myinfowindow'><h5>" + extData.name + "</h5><div>" + extData.desc + "</div></div>");
       infoWindow.open(map, e.lnglat);
     }
 
     map = new AMap.Map("mapContainer", {center: new AMap.LngLat(center.lng, center.lat), level: level, doubleClickZoom:false});
     
     loadFeatures();	}();