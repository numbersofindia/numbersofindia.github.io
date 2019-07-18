// const sampleLayers = [
//     new TileLayer({
//         opacity: 0.1,
//         minZoom: 0,
//         maxZoom: 19,
//         renderSubLayers: (props) => {
//             // console.log(props);
//             const { x, y, z, bbox } = props.tile;
//             const { west, south, east, north } = bbox;   

//             return new BitmapLayer(props, {
//                 // image: `${"https://abcd.basemaps.cartocdn.com/dark_nolabels"}/${z}/${x}/${y}.png`, //Carto BW with labels
//                 image: `${"https://abcd.basemaps.cartocdn.com/light_nolabels"}/${z}/${x}/${y}.png`, //Carto BW with labels
//                 // image: `${"https://stamen-tiles-c.a.ssl.fastly.net/toner-lines"}/${z}/${x}/${y}@2x.png`, //Carto BW with labels
//                 // image: `${"https://stamen-tiles-abcd.a.ssl.fastly.net/toner-background"}/${z}/${x}/${y}@2x.png`, //Stamen BW with labels
//                 // image: `${"https://abcd.basemaps.cartocdn.com/rastertiles/voyager_nolabels"}/${z}/${x}/${y}.png`, //Voyager no labels  with labels
//                 // image: `${"https://abcd.basemaps.cartocdn.com/light_nolabels/"}/${z}/${x}/${y}.png`, //ESRI physical no labels  with labels
//                 bounds: [west, south, east, north]
//             })
//         },
//     }),
//     new GeoJsonLayer({
//         data: INDIA_GEOJSON,
//         stroked: true,
//         filled: true,
//         lineWidthMinPixels: 0.4,
//         opacity: 0.3,
//         getLineColor: [0,0,0, 255],
//         getFillColor: [250, 250, 250,255]
//         // getFillColor: [24, 42, 60,255]
//         // getFillColor: [22, 168, 175, 255]
//         // getFillColor: [192, 57, 43, 255]
//         // getFillColor: [243, 158, 18, 255]
//     }),
//     new ColumnLayer({
//         data: INDIA_GEOJSON,
//         id: 'column-layer',
//         radius: 5000,
//         extruded: true,
//         stroked: true,
//         filled: true,
//         pickable: true,
//         dataTransform: d => d.features.filter(f => f.properties.electors_2019 > 0),
//         getPosition: f => f.properties.centroid,
//         getColor: f =>{
//             if(f.properties.electors_2019<1500000)return [22, 160, 133,255];
//             else if(f.properties.electors_2019<1800000)return [73,227,206,255];
//             else if(f.properties.electors_2019<2100000)return [254, 173, 84,255];
//             else return [209, 55, 78,255];
//         },
//         getLineColor: [0, 0, 0],
//         getElevation: f=>f.properties.electors_2019/10
//       })
//     new GeoJsonLayer({
//         data: INDIA_GEOJSON,
//         stroked: true,
//         filled: true,
//         extruded: true,
//         lineWidthMinPixels: 0.4,
//         opacity: 1,
//         getLineColor: [0,0,0, 255],
//         getFillColor: f =>{
//                     if(f.properties.electors_2019<1500000)return [1, 152, 189,255];
//                     else if(f.properties.electors_2019<1800000)return [73,227,206,255];
//                     else if(f.properties.electors_2019<2100000)return [254, 173, 84,255];
//                     else return [209, 55, 78,255];
//                 },
//         getElevation: f=>f.properties.electors_2019/10

        
//     }),

//     new GeoJsonLayer({
//         data: INDIA_GEOJSON,
//         stroked: true,
//         filled: true,
//         extruded: extrude,
//         // lineWidthMinPixels: 0.4,
//         opacity: 1,
//         wireframe: true,
//         getLineColor: [0,0,0, 255],
//         stroked: true,
//         pickable: true,
//         getLineWidth: 1000,
//         transitions: {
//             getElevation: {
//               duration: 1000,
//               easing: d3.easeCubicInOut,
//               enter: f=>f.properties.electors_2019/(f.properties.area+0.00000001)/500,
//             }
//         },
//         getFillColor: f =>{
//                     var te = f.properties.electors_2019/f.properties.area;
//                     if(te<2000000)return [1, 152, 189,255];
//                     else if(te<3000000)return [73,227,206,255];
//                     else if(te<4000000)return [216, 254, 181,255];
//                     else if(te<8000000)return [254, 237, 177,255];
//                     else if(te<25000000)return [254, 173, 84,255];
//                     else return [209, 55, 78,255];
//                 },
//         onHover: ({object, x, y}) => {
//             // console.log(object, x,y);
//             setTooltip(object, x, y);
//         },
//         getElevation: f=>f.properties.electors_2019/(f.properties.area+0.00000001)/500,
//         material: {
//             ambient: 0.5,
//             diffuse: 0.9,
//             shininess: 255,
//             specularColor: [0,0,0]
//           }
        
//     }),
    
// ];


function section1() {
    const INDIA_GEOJSON = 'res/india.geojson'; //eslint-disable-line

    const INITIAL_VIEW_STATE = {
        latitude: 20,
        longitude: 82,
        zoom: 4,
        bearing: 5,
        pitch: 60
    };

    const deck = new Deck({
        canvas: 'deck-canvas',
        // width: '60%',
        height: '700px',
        initialViewState: INITIAL_VIEW_STATE,
        controller: true,
        layers: [            
        ]
    });

    function redraw(extrude, datatype){
        var layers =[];
        if (datatype==='POPULATION') {
            layers = [
                new GeoJsonLayer({
                    data: INDIA_GEOJSON,
                    stroked: true,
                    filled: true,
                    extruded: extrude,
                    // lineWidthMinPixels: 0.4,
                    opacity: 1,
                    wireframe: true,
                    getLineColor: [0,0,0, 255],
                    stroked: true,
                    pickable: true,
                    getLineWidth: 1000,
                    transitions: {
                        getElevation: {
                          duration: 1000,
                          easing: d3.easeCubicInOut,
                          enter: f=>f.properties.electors_2019/10
                    }},
                    getFillColor: f =>{
                        
                            if(f.properties.electors_2019<1500000)return [1, 152, 189,255];
                    else if(f.properties.electors_2019<1800000)return [73,227,206,255];
                    else if(f.properties.electors_2019<2100000)return [254, 173, 84,255];
                    else return [209, 55, 78,255]},
                    onHover: ({object, x, y}) => {
                        // console.log(object, x,y);
                        setTooltip(object, x, y);
                    },
                    getElevation:  f=>f.properties.electors_2019/10,
                    material: {
                        ambient: 0.5,
                        diffuse: 0.9,
                        shininess: 255,
                        specularColor: [0,0,0]
                      }
                    
                })
                
            ]
        
        }
        else if (datatype==='DENSITY') {
            layers = [
                new GeoJsonLayer({
                    data: INDIA_GEOJSON,
                    stroked: true,
                    filled: true,
                    extruded: extrude,
                    // lineWidthMinPixels: 0.4,
                    opacity: 1,
                    wireframe: true,
                    getLineColor: [0,0,0, 255],
                    stroked: true,
                    pickable: true,
                    getLineWidth: 1000,
                    transitions: {
                        getElevation: {
                          duration: 1000,
                          easing: d3.easeCubicInOut,
                          enter: f=>f.properties.electors_2019/(f.properties.area+0.00000001)/500
                        }
                    },
                    getFillColor: f =>{
                            var te = f.properties.electors_2019/f.properties.area;
                                if(te<2000000)return [1, 152, 189,255];
                                else if(te<3000000)return [73,227,206,255];
                                else if(te<4000000)return [216, 254, 181,255];
                                else if(te<8000000)return [254, 237, 177,255];
                                else if(te<25000000)return [254, 173, 84,255];
                                else return [209, 55, 78,255];
                        },
                    onHover: ({object, x, y}) => {
                        // console.log(object, x,y);
                        setTooltip(object, x, y);
                    },
                    getElevation:  f=>f.properties.electors_2019/(f.properties.area+0.00000001)/500,
                    material: {
                        ambient: 0.5,
                        diffuse: 0.9,
                        shininess: 255,
                        specularColor: [0,0,0]
                      }
                    
                }),
                
            ]
        
        }
            
        deck.setProps({layers});

    }

    
    function arcMap(mapid, states){

        function haversineDistance(coords1, coords2) {
            function toRad(x) {
              return x * Math.PI / 180;
            }
          
            var lon1 = coords1[0];
            var lat1 = coords1[1];
          
            var lon2 = coords2[0];
            var lat2 = coords2[1];
          
            var R = 6371; // km
          
            var x1 = lat2 - lat1;
            var dLat = toRad(x1);
            var x2 = lon2 - lon1;
            var dLon = toRad(x2)
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return d;
        }

        const INDIA_GEOJSON = 'res/india.geojson'; //eslint-disable-line
        
        const INITIAL_VIEW_STATE = {
            latitude: 20,
            longitude: 78,
            zoom: 4,
            bearing: 0,
            pitch: 40
        };
    
        const deck = new Deck({
            canvas: mapid,
            // width: '60%',
            height: '700px',
            initialViewState: INITIAL_VIEW_STATE,
            controller: true,
            layers: [
                new GeoJsonLayer({
                    id: 'geo-layer',
                    data: INDIA_GEOJSON,
                    stroked: true,
                    filled: true,
                    extruded: false,
                    opacity: 1,
                    wireframe: true,
                    getLineColor: [220,220,220, 50],
                    stroked: true,
                    pickable: true,
                    getLineWidth: 1000,
                    getFillColor: d=>{
                        var state = states.filter(k=>{return d.properties.st_name.replace(' & ','-').replace(' ','-')===k.state});
                        // var blues = d3.scaleOrdinal(d3.schemeBlues[10]);
                        // console.log(blues);
                        var col = 50+state[0].rank*4;
                        return [col,col,col,255];
                    },             
                }),
                new ArcLayer({
                    id: 'arc-layer',
                    data: INDIA_GEOJSON,
                    opacity: 0.5,
                    dataTransform:  d=>d.features.filter(f => f.properties.electors_2019 > 0),
                    getSourcePosition: f=>f.properties.centroid,
                    // getSourcePosition: d => d.properties.centroid,
                    getTargetPosition: f=>{
                        // console.log('ff',f.properties.st_name.replace(' & ','-').replace(' ','-'));
                        var state = states.filter(k=>{return f.properties.st_name.replace(' & ','-').replace(' ','-')===k.state});
                        return [state[0].lng, state[0].lat];
                    },
                    getSourceColor: f =>{
                        var state = states.filter(k=>{return f.properties.st_name.replace(' & ','-').replace(' ','-')===k.state});
                        var te = haversineDistance(f.properties.centroid,[state[0].lng, state[0].lat]);
                        if(te<50)return [1, 152, 189,255];
                        else if(te<150)return [73,227,206,255];
                        else if(te<250)return [216, 254, 181,255];
                        else if(te<350)return [254, 237, 177,255];
                        else if(te<450)return [254, 173, 84,255];
                        else return [209, 55, 78,255];
                    },
                    getTargetColor: f =>{
                        var state = states.filter(k=>{return f.properties.st_name.replace(' & ','-').replace(' ','-')===k.state});
                        var te = haversineDistance(f.properties.centroid,[state[0].lng, state[0].lat]);
                        if(te<100)return [1, 152, 189,255];
                        else if(te<200)return [73,227,206,255];
                        else if(te<300)return [216, 254, 181,255];
                        else if(te<400)return [254, 237, 177,255];
                        else if(te<500)return [254, 173, 84,255];
                        else return [209, 55, 78,255];
                    },
                    getWidth: 3
                  })      
            ]
        });
       
    }
    

    redraw(true,'DENSITY');
    Promise.all([d3.csv('./res/states.csv')]).then(function(data) {    
        // arcMap('deck-canvas-2', data[0])
    });

    var datatype = 'DENSITY';

    $('#threedify').click(function(){
        redraw($('#threedify')[0].checked, datatype);
    })
    $('#den-radio').click(function(){
        console.log('den radio clicked');
        datatype = 'DENSITY';
        redraw(!($('#threedify')[0].checked), datatype);
        redraw($('#threedify')[0].checked, datatype);
    })

    $('#popu-radio').click(function(){

        console.log('popu radio clicked');
        datatype = 'POPULATION';

        redraw(!($('#threedify')[0].checked), datatype);
        redraw($('#threedify')[0].checked, datatype);
    })


    appear({
        init: function init(){
          console.log('dom is ready');
        },
        elements: function elements(){
          // work with all elements with the class "track"
          return [document.getElementById('deck-map')];
        //   return document.getElementsByClassName('d3-states-1');
        },
        appear: function appear(el){
            // d3.select('#line1').transition().delay(200).duration(500).attr("d", line1);
            // d3.select('#line2').transition().delay(200).duration(500).attr("d", line2);
            redraw($('#threedify')[0].checked, datatype);

        },
        disappear: function disappear(el){

            // d3.select('#line1').transition().duration(1000).attr("d", line1_before);
            // d3.select('#line2').transition().duration(1000).attr("d", line1_before);
            redraw(!($('#threedify')[0].checked), datatype);
        },
        bounds: 200,
        reappear: true
      });

    function setTooltip(object, x, y) {
        // console.log(object,x,y);
        const el = document.getElementById('tooltip');
        if (object) {
          el.innerHTML = '<p><span style="font-weight:800; letter-spacing: 3px; text-transform: uppercase">'+object.properties.st_name.toLocaleString() +'</span><br>'+object.properties.pc_name.toLocaleString() + ' : ' + object.properties.electors_2019.toLocaleString()+'</p>';
          el.style.display = 'block';
          el.style.left = x + 'px';
          el.style.top = y + 'px';
        } else {
          el.style.display = 'none';
        }
    }


    console.log(deck);
}
