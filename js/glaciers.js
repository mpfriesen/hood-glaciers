	
	// instantiate the scrollama
	const scroller = scrollama();
	  // .onStepEnter((response) => {
		// // { element, index, direction }
	  // })
	  // .onStepExit((response) => {
		// // { element, index, direction }
	  // });

	mapboxgl.accessToken = 'pk.eyJ1IjoibWZyaWVzZW53aXNjIiwiYSI6ImNqenhjcjAzYjBlc3QzbmtpODI1YXZxNmgifQ.Zz-z-Ykof8NbNaQOdR6ouQ';
	const map = new mapboxgl.Map({
		container: 'map',
		zoom: 13.6,
		center: [-121.72317526723423,45.35724290454331],
		pitch: 71.5,
		bearing: 48,
		style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y'
	});
	
	const storymap = new mapboxgl.Map({
		container: 'storymap',
		center: [-121.69572, 45.37342],
		zoom: 13.49,
		pitch: 0.00,
		bearing: 0.00,
		interactive: false,
		style: 'mapbox://styles/mfriesenwisc/cl2dymc4900rc14o91n0f4xsq'
	});
	

	const glac56 = {
			type: 'geojson',
			data: 'json/hood_rgi.geojson'
		},
		glac21 = {
			type: 'geojson',
			data: 'json/hood_glac21.geojson'
		},
		dem = {
			'type': 'raster-dem',
			'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
			'tileSize': 512,
			'maxzoom': 14
		},
		zigzag56 = {
			type: 'geojson',
			data: 'json/zigzag_56.geojson'
		},
		zigzag21 = {
			type: 'geojson',
			data: 'json/zigzag_21.geojson'
		},
		sky = {
			'id': 'sky',
			'type': 'sky',
			'paint': {
				'sky-type': 'atmosphere',
				'sky-atmosphere-sun': [0.0, 0.0],
				'sky-atmosphere-sun-intensity': 15
			}
		},
		fog = {
			"range": [1.0, 12.0],
			"color": 'white',
			"horizon-blend": 0.1
		};
		
		
		
		
		
		
	
	
	storymap.on('load', () => {
		storymap.scrollZoom.disable();
		map.addSource('mapbox-dem', dem);
		storymap.addSource('mapbox-dem', dem);
		map.addSource('glaciers', glac56);
		storymap.addSource('glaciers', glac56);
		
		map.addSource('glaciers_new', glac21);
		storymap.addSource('glaciers_new', glac21);
		map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1 });
		storymap.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1 });
		map.scrollZoom.disable();
		map.addControl(new mapboxgl.NavigationControl({"padding-top": 30 }));
		map.addControl(new mapboxgl.FullscreenControl());
		// add a sky layer that will show when the map is highly pitched
		map.addLayer(sky);
		map.addLayer({
			'id': 'glac_56',
			type: 'line',
			source: 'glaciers',
			layout: {'line-join': 'round'},
			"paint": {
				"line-color": "#2188aa",
				"line-opacity": 1,
				"line-opacity-transition": {
					duration: 500
				}
			}
		});
		map.addLayer({
			'id': 'glac_56_fill',
			type: 'fill',
			source: 'glaciers',
			layout: {'visibility': 'visible'},
			"paint": {
				"fill-color": "#2188aa",
				"fill-opacity": .5,
				"fill-opacity-transition": {
					duration: 500
				}
			}
		});
		storymap.addLayer({
			'id': 'glac_56',
			type: 'line',
			source: 'glaciers',
			layout: {'line-join': 'round'},
			"paint": {
				"line-color": "#990000",
				"line-opacity": 0,
				'line-width': 3
			}
		});
		storymap.addLayer({
			'id': 'glac_56_fill',
			type: 'fill',
			source: 'glaciers',
			layout: {'visibility': 'visible'},
			"paint": {
				"fill-color": "#2188aa",
				"fill-opacity": 0
			}
		});
		
		map.addLayer({
			'id': 'glac_21',
			type: 'line',
			source: 'glaciers_new',
			layout: { 'line-join': 'round', 'visibility': 'none'},
			"paint": {
				"line-color": "#900",
				"line-opacity": 0,
				"line-opacity-transition": {
					duration: 500
				}
			}
		});
		map.addLayer({
			'id': 'glac_21_fill',
			type: 'fill',
			source: 'glaciers_new',
			layout: { 'visibility': 'none'},
			"paint": {
				"fill-color": "#900",
				"fill-opacity": 0,
				"fill-opacity-transition": {
					duration: 500
				}
			}
		});
		
		storymap.addLayer({
			'id': 'glac_21',
			type: 'line',
			source: 'glaciers_new',
			layout: { 'line-join': 'round' },
			"paint": {
				"line-color": "#900",
				"line-opacity": 0
			}
		});
		storymap.addLayer({
			'id': 'glac_21_fill',
			type: 'fill',
			source: 'glaciers_new',
			"paint": {
				"fill-color": "#900",
				"fill-opacity": 0
			}
		});
		
		map.setFog(fog);
		storymap
			.setFog(fog)
			// .setPaintProperty('zigzag-56_fill', 'fill-color', '#2188aa')
			// .setPaintProperty('zigzag-56_fill', 'fill-opacity', .3)
			;
		
		const layerIds = ['glac_56','glac_21'];
		
		
		function clearAll() {
			for (const id of layerIds) {
				map.setLayoutProperty(id, 'visibility', 'none');
				map.setPaintProperty(id+"_fill", 'fill-opacity', 0);
				map.setPaintProperty(id, 'line-opacity', 0);
				map.setLayoutProperty(id+"_fill", 'visibility', 'none');
			}
		}
		function addMLayer(id) {
			map.setLayoutProperty(id, 'visibility', 'visible');
			map.setPaintProperty(id, 'line-opacity', 1);
			map.setLayoutProperty(id+"_fill", 'visibility', 'visible');
			map.setPaintProperty(id+"_fill", 'fill-opacity', .5);
		}
		
			
		$(".map_button").on("click",function(e) {
			const clickedLayer = this.id;
			e.stopPropagation();
			e.preventDefault();
			
			$(".map_button").removeClass("active");
			$(this).addClass("active");
			
			if (clickedLayer=="glac_all") {
				for (const id of layerIds) {
					addMLayer(id);
				}
			} else {
				clearAll();
				addMLayer(clickedLayer);
			}
		})
		
		var layerTypes = {
			'fill': ['fill-opacity'],
			'line': ['line-opacity'],
			'raster': ['raster-opacity']
		}
		
		function getLayerPaintType(layer) {
			var layerType = storymap.getLayer(layer).type;
			return layerTypes[layerType];
		}
		
		function setLayerOpacity(layer) {
			var paintProps = getLayerPaintType(layer.layer);
			paintProps.forEach(function(prop) {
				// var options = {};
				// if (layer.duration) {
				// 	var transitionProp = prop + "-transition";
				// 	options = { "duration": layer.duration };
				// 	storymap.setPaintProperty(layer.layer, transitionProp, options);
				// }
				storymap.setPaintProperty(layer.layer, prop, layer.opacity);
			});
		}

		
		
		// setup the instance, pass callback functions
		scroller
		  .setup({
			step: ".step",
			progress: true,
			offset: 0.75
		  })
		 .onStepEnter(response => {
			  var chapter = config.chapters.find(chap => chap.id === response.element.id);
			  // response.element.classList.add('active');
			  if (chapter.location) {
				storymap['flyTo'](chapter.location);
			  }
			  if (chapter.onChapterEnter) {
				  chapter.onChapterEnter.forEach(function(layer) {
					  var paintProps = getLayerPaintType(layer.layer);
					  paintProps.forEach(function(prop) {
						storymap.setPaintProperty(layer.layer, prop, layer.opacity);  
					  });
					})
				  }
		})

		 .onStepProgress(response => {
			var p = response.progress;
			var chapter = config.chapters.find(chap => chap.id === response.element.id);
			if (chapter.location) {
				storymap['flyTo'](chapter.location);
			  }
			if (chapter.onChapterProgress) {
				chapter.onChapterProgress.forEach(function(layer) {
					var paintProps = getLayerPaintType(layer.layer);
					if (chapter.location) {
						storymap['flyTo'](chapter.location);
					}

					paintProps.forEach(function(prop) {
						var opac = p
						if (p>=layer.opacity) { opac = layer.opacity }
						if (prop=="line-opacity") { 
							opac = opac*3;
						}
						storymap.setPaintProperty(layer.layer, prop, constrainIt(opac));
						var layerType = storymap.getLayer(layer.layer).type;
						if (layer.color) {
							storymap.setPaintProperty(layer.layer, layerType+'-color', layer.color);
						}
						if (layer.lwidth) {
							storymap.setPaintProperty(layer.layer, layerType+'-width', layer.lwidth);
						}
					})
				})
			}
		 })
		 
		 .onStepExit(response => {
			 var chapter = config.chapters.find(chap => chap.id === response.element.id);
			 if (chapter.onChapterExit) {
				 chapter.onChapterExit.forEach(setLayerOpacity);
			 }
		 });
		 
	});


	function constrainIt(num) {
		if (num>1) {
			num = 1;
		} else if (num<0) {
			num = 0;
		}
		return num;
	}



