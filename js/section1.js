function section1() {
    const INDIA_GEOJSON = 'res/india_pc_2019_simplified.geojson'; //eslint-disable-line

    const INITIAL_VIEW_STATE = {
        latitude: 20,
        longitude: 78,
        zoom: 4,
        bearing: 0,
        pitch: 60
    };

    const deck = new Deck({
        canvas: 'deck-canvas',
        width: '100%',
        height: '700px',
        initialViewState: INITIAL_VIEW_STATE,
        controller: true,
        layers: [
            new TileLayer({
                opacity: 0.1,
                minZoom: 0,
                maxZoom: 19,
                renderSubLayers: (props) => {
                    // console.log(props);
                    const { x, y, z, bbox } = props.tile;
                    const { west, south, east, north } = bbox;

                    return new BitmapLayer(props, {
                        // image: `${"https://abcd.basemaps.cartocdn.com/dark_nolabels"}/${z}/${x}/${y}.png`, //Carto BW with labels
                        image: `${"https://abcd.basemaps.cartocdn.com/light_nolabels"}/${z}/${x}/${y}.png`, //Carto BW with labels
                        // image: `${"https://stamen-tiles-c.a.ssl.fastly.net/toner-lines"}/${z}/${x}/${y}@2x.png`, //Carto BW with labels
                        // image: `${"https://stamen-tiles-abcd.a.ssl.fastly.net/toner-background"}/${z}/${x}/${y}@2x.png`, //Stamen BW with labels
                        // image: `${"https://abcd.basemaps.cartocdn.com/rastertiles/voyager_nolabels"}/${z}/${x}/${y}.png`, //Voyager no labels  with labels
                        // image: `${"https://abcd.basemaps.cartocdn.com/light_nolabels/"}/${z}/${x}/${y}.png`, //ESRI physical no labels  with labels
                        bounds: [west, south, east, north]
                    })
                },
                // getTileData: ({x, y, z}) => {
                //     const mapSource = `https://abcd.basemaps.cartocdn.com/dark_nolabels/${z}/${x}/${y}.vector.pbf`;
                //     return fetch(mapSource)
                //       .then(response => response.arrayBuffer())
                //       .then(buffer => {
                //         const tile = new VectorTile(new Pbf(buffer));
                //         const features = [];
                //         for (const layerName in tile.layers) {
                //           const vectorTileLayer = tile.layers[layerName];
                //           for (let i = 0; i < vectorTileLayer.length; i++) {
                //             const vectorTileFeature = vectorTileLayer.feature(i);
                //             const feature = vectorTileFeature.toGeoJSON(x, y, z);
                //             features.push(feature);
                //           }
                //         }
                //         return features;
                //       });
                // }
            }),
            new GeoJsonLayer({
                data: INDIA_GEOJSON,
                stroked: true,
                filled: true,
                lineWidthMinPixels: 0.4,
                opacity: 0.6,
                getLineColor: [255, 255, 255],
                // getFillColor: [22, 168, 175, 255]
                // getFillColor: [192, 57, 43, 255]
                getFillColor: [243, 158, 18, 255]
            }),
            
        ]
    });

}
