function section1(indiaAgg) {
    const INDIA_GEOJSON = '../../res/india_pc_2020.geojson'; //eslint-disable-line



    const stateLookupFeed2Map = {
        "Odisha": "Orissa",
        "Union Territory of Jammu and Kashmir": "Jammu & Kashmir",
        "Union Territory of Ladakh": "Ladakh",
    }

    const stateLookupMap2Feed = {
        "Orissa": "Odisha",
        "Jammu & Kashmir": "Union Territory of Jammu and Kashmir",
        "Ladakh": "Union Territory of Ladakh"
    }

    const INITIAL_VIEW_STATE = {
        latitude: 23,
        longitude: 80,
        // zoom: 3.3,
        zoom: 2.9,
        bearing: 2,
        // pitch: 45
        pitch : 0
    };


    function setTooltip(st_name, x, y) {
        // try{
            const el = document.getElementById('tooltip');
            const canDiv = $('#deck-map').offset();
        if (st_name!=='none') {
        
            let stateVal = [0,0,0]
            if (feedStates.includes(st_name)) {
                let temp = indiaAgg.data.regional.filter(k => k.loc === st_name)[0];
                stateVal = [temp.confirmedCasesIndian + temp.confirmedCasesForeign, temp.discharged, temp.deaths];
            }
            else if (st_name in stateLookupMap2Feed) {
                let temp = stateLookupMap2Feed[st_name];// console.log(stateLookupMap2Feed[f.properties.st_name],f.properties.st_name,stateLookupMap2Feed);
                temp = indiaAgg.data.regional.filter(k => k.loc === temp)[0];
                stateVal = [temp.confirmedCasesIndian + temp.confirmedCasesForeign, temp.discharged, temp.deaths];
            }



        
        el.innerHTML = '<p><span style="font-weight:800; letter-spacing: 3px; text-transform: uppercase">'+st_name +'</span><br>'+ 
            '<span style="color:#2980b9">Cases</span> : '+stateVal[0]+ '<br>' + 
            '<span style="color:#27ae60">Recovered</span> : '+stateVal[1]+ '<br>' + 
            '<span style="color:#c0392b">Deaths</span> : '+stateVal[2]+ '<br>' + 
            '</p>';
        el.style.display = 'block';
        el.style.left = (x+canDiv.left) + 'px';
        el.style.top = (y+canDiv.top) + 'px';
        } else {
        el.style.display = 'none';
        }
        // }
        
    }


    let xscale = d3.scaleLinear().domain(d3.extent(indiaAgg.data.regional, g => {
        return g.confirmedCasesIndian + g.confirmedCasesForeign
    }
    )).range([0, 1]);


    let feedStates = indiaAgg.data.regional.map(d => d.loc);

    let width = +d3.select('#deck-map').style('width').slice(0, -2);
    let height = +d3.select('#deck-map').style('height').slice(0, -2);
    const deck = new Deck({
        canvas: 'deck-canvas',
        width: width,
        height: height,
        initialViewState: INITIAL_VIEW_STATE,
        controller: { scrollZoom: false },
        touchAction: 'pan-y',
        layers: [
            new GeoJsonLayer({
                data: INDIA_GEOJSON,
                // stroked: true,
                // filled: true,
                // extruded: true,
                // lineWidthMinPixels: 0.4,
                // opacity: 0.4,
                // getLineColor: [255, 255, 255],
                stroked: true,
                filled: true,
                // extruded: true,

                // opacity: 0.5,
                wireframe: true,
                getLineColor: [0, 0, 0,150],
                
                pickable: true,
                getLineWidth: 100,
                lineWidthMinPixels: 0.3,
                // lineWidthMaxPixels: 1,


                getFillColor: f => {
                    let stateVal = 0
                    if (feedStates.includes(f.properties.st_name)) {
                        stateVal = indiaAgg.data.regional.filter(k => k.loc === f.properties.st_name)[0];
                        stateVal = stateVal.confirmedCasesIndian + stateVal.confirmedCasesForeign;
                    }
                    else if (f.properties.st_name in stateLookupMap2Feed) {
                        let temp = stateLookupMap2Feed[f.properties.st_name];// console.log(stateLookupMap2Feed[f.properties.st_name],f.properties.st_name,stateLookupMap2Feed);
                        stateVal = indiaAgg.data.regional.filter(k => k.loc === temp)[0];
                        stateVal = stateVal.confirmedCasesIndian + stateVal.confirmedCasesForeign;
                    }

                    // let c = d3.color(d3.interpolateMagma(xscale(stateVal))).rgb();
                    // let c = d3.color(d3.interpolatePuRd(xscale(stateVal))).rgb();
                    let c = d3.color(d3.interpolateReds(xscale(stateVal))).rgb();
                    return [c.r, c.g, c.b];
                },
                onHover: ({ object, x, y }) => {
                    // console.log(object, x,y);
                    if (object){
                        setTooltip(object.properties.st_name, x, y);
                    }
                    else{
                        setTooltip('none', x, y);
                    }
                    
                },
                // getElevation: f => {
                //     let stateVal = 0
                //     if (feedStates.includes(f.properties.st_name)) {
                //         stateVal = indiaAgg.data.regional.filter(k => k.loc === f.properties.st_name)[0];
                //         stateVal = stateVal.confirmedCasesIndian + stateVal.confirmedCasesForeign;
                //     }
                //     else if (f.properties.st_name in stateLookupMap2Feed) {
                //         let temp = stateLookupMap2Feed[f.properties.st_name];// console.log(stateLookupMap2Feed[f.properties.st_name],f.properties.st_name,stateLookupMap2Feed);
                //         stateVal = indiaAgg.data.regional.filter(k => k.loc === temp)[0];
                //         stateVal = stateVal.confirmedCasesIndian + stateVal.confirmedCasesForeign;
                //     }
                //     console.log(stateVal);
                //     return stateVal * 10000;

                // },
                material: {
                    ambient: 0.5,
                    diffuse: 0.9,
                    shininess: 255,
                    specularColor: [0, 0, 0]
                }
            }),

        ]
    });


}
