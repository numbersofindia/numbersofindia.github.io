function choropleth2(data, states, svg, path){

    var projection = d3.geoMercator().scale(1100).translate([-1310,780]);

        // var minDomain = 1097206;
        // var maxDoimain = 199812341;
        // var unit = 'population'
        // var colorScale = d3.scaleSequential(d3.interpolateReds);
        // var title = 'Population'
        // var subtitle = '';

        var minDomain = 1.6;
        var maxDoimain = 3;
        var unit = 'p2011_p1971'
        var colorScale = d3.scaleSequential(d3.interpolateMagma);
        var title = 'Population Multiplier'
        var subtitle = '[2011 Census / 1971 Census]';


        // var minDomain = 0;
        // var maxDoimain = 1200;
        // var unit = 'density'
        // var colorScale = d3.scaleSequential(d3.interpolateBlues);
        // var title = 'Population Density'
        // var subtitle = '[People per square KM]';


        // var minDomain = 1.2;
        // var maxDoimain = 3.3;
        // var unit = 'frate'
        // var colorScale = d3.scaleSequential(d3.interpolatePurples);
        // var title = 'Fertility Rate'
        // var subtitle = '[Births per Woman]'

        var minRange = 0.2;
        var maxRange = 1;

        var scale = d3.scaleLinear().domain([minDomain,maxDoimain]).range([minRange,maxRange]);
                
                
        

        svg.append("g").selectAll(".states-fill")
            .data(data.features)
            .enter()
            .append("path")
            .attr("class", "states-fill")
            .attr("id",function(d,i){
                // console.log(d.properties.st_name);
                return d.properties.st_name.replace(" & ",'-').replace(" ",'-');
            })
            .attr("d", path)
            .style("fill", function(d){
                const state_name = d.properties.st_name.replace(" & ",'-').replace(" ",'-');
                const state = states.filter(f=>state_name===f.state)[0];
                // console.log(scale(state[unit].split(',').join('')), state.state);
                
                
                return colorScale(scale(state[unit].split(',').join('')));
                // return d3.interpolateBlues(scale(state[unit].split(',').join('')));
            })
            .style("stroke", "#000")
            .style("stroke-width", "0.15px");

            var legendG = svg.append('g').style('transform','translate(300px,150px)');
            var legend = legendG.append("defs")
                .append("svg:linearGradient")
                .attr("id", "gradient")
                .attr("x1", "0%")
                .attr("y1", "100%")
                .attr("x2", "100%")
                .attr("y2", "100%")
                .attr("spreadMethod", "pad");

                legend.append("stop")
                .attr("offset", "0%")
                .attr("stop-color", colorScale(0))
                .attr("stop-opacity", 1);

                legend.append("stop")
                .attr("offset", "33%")
                .attr("stop-color", colorScale(0.33))
                .attr("stop-opacity", 1);

                legend.append("stop")
                .attr("offset", "66%")
                .attr("stop-color", colorScale(0.66))
                .attr("stop-opacity", 1);

                legend.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", colorScale(1))
                .attr("stop-opacity", 1);

                legendG.append("rect")
                .attr("width", 200)
                .attr("height", 10)
                .style("fill", "url(#gradient)")
                .attr('stroke','#eee')

                legendG.selectAll('.legend-vals').data([0,0.33,0.66,1]).enter().append('text').attr('x',function(d){
                    return 200*d;
                }).attr('y',30).attr('text-anchor','middle').attr('fill','#333').text(function(d){
                    return ((minDomain + d*(maxDoimain-minDomain))).toFixed(1) + 'x';
                })
                svg.append('text').attr('x',410).attr('y',75).attr('fill','#333').attr('class','plot-title').attr('text-anchor','middle').text(title);
                svg.append('text').attr('x',410).attr('y',110).attr('fill','#333').attr('class','plot-title').attr('text-anchor','middle').text(subtitle);


}



function choropleth(data, states, svg, path, radius, xdelta, ydelta,w,h ){

   
        var title = 'If India was made of'
        var subtitle = '100 people';

        svg.append("g").selectAll(".states-fill")
            .data(data.features)
            .enter()
            .append("path")
            .attr("class", "states-fill")
            .attr("id",function(d,i){
                // console.log(d.properties.st_name);
                return d.properties.st_name.replace(" & ",'-').replace(" ",'-');
            })
            .attr("d", path)
            .style("fill", '#333')
            .style("stroke", "#777")
            .style("stroke-width", "0.1px");

                svg.append('text').attr('x',w*2/3).attr('y',h/5).attr('fill','#333').attr('class','plot-title').attr('text-anchor','middle').text(title);
                svg.append('text').attr('x',w*2/3).attr('y',h/5+35).attr('fill','#c0392b').attr('class','plot-title').attr('text-anchor','middle').text(subtitle);

                data.features.forEach(function(k){
                    // console.log(k.properties.st_name.replace(" & ",'-').replace(" ",'-'), d);
                    
                    var centroids = []
                    const id_temp = k.properties.st_name.replace(" & ",'-').replace(" ",'-');
                    const entry_temp = popu_100[id_temp];
                    entry_temp.ids.forEach(function(z){
                        const mm = data.features.filter(function(d){
                        return d.properties.st_name.replace(" & ",'-').replace(" ",'-') ===z;
                        })
    
                    // console.log('mm',mm);
                    
                    mm.forEach(function(l){
                        centroids.push(path.centroid(l));
                    })
                    })
    
                    var svg_peeps = svg.append('g');
    
                    const cent_fin = [centroids.reduce(function(a,b){
                        return parseFloat(a)+parseFloat(b[0])},0)/centroids.length,centroids.reduce(function(a,b){
                            return parseFloat(a)+parseFloat(b[1])},0)/centroids.length]
                        // console.log(cent_fin);
                    
                        // svg.append('g').append('circle').attr('cx',cent_fin[0]).attr('cy',cent_fin[1]).attr('r',10)
                        // .attr('stroke','#fff').attr('stroke-width',2).attr('fill','#333').style('pointer-events','none');
                        
                        clusterPopulation(svg_peeps,cent_fin[0]-10,cent_fin[1]-10,entry_temp.values,xdelta,ydelta);
    
                })
                var tooltipDiv = d3.select("#tooltip2");
    
                d3.selectAll('.states-fill')
                .on('mouseover',function(d){
                    const id_temp = $(this).attr('id');
                    // console.log(id_temp);
                    const entry_temp = popu_100[id_temp]; 
                    // console.log(entry_temp);
                    entry_temp.ids.forEach(function(d){
                        d3.selectAll('#'+ d)
                        .style('fill','#fff');
                    })
                    tooltipDiv.transition()		
                                .duration(200)		
                                .style("opacity", .9);		
                            tooltipDiv.html("<span class='tooltip-title'>"+ entry_temp.ids.join(',') +"</span><br><span class='tooltip-body'>"+entry_temp.values + " people</span>")	
                                .style("left", (d3.event.pageX) + "px")		
                                .style("top", (d3.event.pageY - 28) + "px"); 
                })
                .on('mouseout',function(d){
                    const id_temp = $(this).attr('id');
                    const entry_temp = popu_100[id_temp]; 
                    // console.log(entry_temp);
                    entry_temp.ids.forEach(function(d){
                        d3.selectAll('#'+ d)
                        .style('fill','#333');
                    })
                    tooltipDiv.transition()		
                                .duration(500)		
                                .style("opacity", 0);
                   
                })


                appear({
                    init: function init(){
                      console.log('dom is ready');
                    },
                    elements: function elements(){
                      // work with all elements with the class "track"
                      return [document.getElementById('d3-map')];
                    //   return document.getElementsByClassName('d3-states-1');
                    },
                    appear: function appear(el){
                        d3.selectAll('.perc-map-circles').transition().delay(200).duration(2000).attr("r", radius);
            
            
                    },
                    disappear: function disappear(el){
                        d3.selectAll('.perc-map-circles').transition().delay(200).duration(2000).attr("r", 0);
                    },
                    bounds: 200,
                    reappear: true
                  });
    
}




function clusterPopulation(svg_temp, x,y,value,xdelta,ydelta){
    const cols = 4;
    const rows= Math.ceil(value/cols); 
    const topLeftX = x-(16*cols/2) +16;
    const topLeftY = y-(16*rows/2) + 16;
    
    for(var m=0;m<value;m++){
        
        if ((rows*cols - m -1 <cols)&&(value%cols!=0)){
            var localX = topLeftX + (m%cols * xdelta) + ((cols-(value%cols))*xdelta/2);
            var localY = topLeftY + (parseInt(m/cols) * ydelta);                
        }
        else {
            var localX = topLeftX + (m%cols * xdelta);
            var localY = topLeftY + (parseInt(m/cols) * ydelta);
        }

        svg_temp.append('g').append('circle').attr('cx',localX).attr('cy',localY).attr('r',0).attr('class','perc-map-circles')
                    .attr('fill','#c0392b').style('pointer-events','none');
        
        // var svg_peeps_temp = svg_temp.append('g').attr('fill','#f39c12').style('transform','translate('+(localX)+'px,'+(localY)+'px) scale(0.03)');

        //             svg_peeps_temp.append('path').attr('d',"M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2zM164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z");

        //             svg_peeps_temp.append('path').attr('d',"M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3C447,415.5,446.9,388.8,446.8,383.6z")

    }
    
}

function section2(){
    Promise.all([d3.json('./res/india.geojson'),d3.csv('./res/states.csv')]).then(function(data) {
        var states= data[1];
        data = data[0];
        
            
                if(window.innerWidth<500){
                    var projection = d3.geoMercator().scale(600).translate([-700,430]);
                var path = d3.geoPath()
                .projection(projection);
                    var svg = d3.select('#d3-map').append('svg').attr('width',350).attr('height',350);
                    

            choropleth(data, states, svg, path, 3,10,11,350,350);
                }
                else{
                    var projection = d3.geoMercator().scale(1100).translate([-1310,780]);
                var path = d3.geoPath()
                .projection(projection);
                    var svg = d3.select('#d3-map').append('svg').attr('width',600).attr('height',650);
                    
                    choropleth(data, states, svg, path, 5,15,16,600,650);
            
                }
            

            
            





        })
        
        


       
        
}
    