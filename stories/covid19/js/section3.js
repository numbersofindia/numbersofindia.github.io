function initlinePlot(id,id2){

    let w = +d3.select(id).style('width').slice(0, -2);
    let h = Math.max(+d3.select(id).style('height').slice(0, -2), 500);

    var svg = d3.select(id).append('svg').attr('width', w).attr('height', h).attr('id',id2);

    
}

function drawLinePlots(id, id2, world, category, yAxisType) {
    // values.sort();

    let colors = {
        'world' : ['#c0392b','#2980b9','#2c3e50','#27ae60','#f1c40f'],
        'india' : ['#84817a','#ff793f','#b33939','#227093','#2c2c54']
    }

    
    let space = id.split('-')
    space = space[space.length-1];

    colors = colors[space];

    console.log(world);
    let w = +d3.select(id).style('width').slice(0, -2);
    let h = Math.max(+d3.select(id).style('height').slice(0, -2), 500);

    var svg = d3.select(id2);

    // svg.append('rect').attr('x',0).attr('y',0).attr('width',w).attr('height',h).attr('fill','#eee');

    const paddingX = 50;
    const paddingX2 = 50;
    const paddingY = 50;
    var dateParser = d3.timeParse("%Y-%m-%d");
    var dateFormat = d3.timeFormat("%b %d");
    var xScale = d3.scaleTime().domain(d3.extent(world[Object.keys(world)[0]], f => dateParser(f.date))).range([paddingX, w - paddingX2]);

    let values=[]
    for (var country in world) {
        console.log(country)
        world[country].map(d => values.push(d[category]))
    }
        

    // console.log('bb',value, values);


    var yScaleLinear = d3.scaleLinear().domain(d3.extent(values)).range([h - paddingY, paddingY]);
    var yScaleLog = d3.scaleLog().domain([1,100000]).range([h - paddingY, paddingY]);

    // console.log(yScaleLinear.domain(),yScaleLinear.range(),yScaleLog.domain(),yScaleLog.range())
    
    var yScale;
    if (yAxisType==='linear'){
        yScale = yScaleLinear;
    }
    else if (yAxisType==='log'){
        yScale = yScaleLog;
    }

    // console.log(yAxisType, yScale(100),yScaleLinear(100),yScaleLog(100));

    var line1 = d3.line()
        .x(function (d) { return xScale(dateParser(d.date)); }) // set the x values for the line generator
        .y(function (d) { 
            if(yAxisType==='linear') return yScale(d[category]);
            else if(yAxisType==='log') return yScale(d[category]+1); 
        })
        .curve(d3.curveMonotoneX)

    d3.selectAll('#x-axis-'+space).remove();
    d3.selectAll('#y-axis-'+space).remove();

    let tt = 10;
    if(w<600){
        tt=5;
    }

    svg.append("g")
        .attr("class", "x axis")
        .attr("id", "x-axis-"+space)
        .attr("transform", "translate(0," + (h - paddingY) + ")")
        .call(d3.axisBottom(xScale)
            .tickFormat(dateFormat)
            .tickSize(2 * paddingY - h)
            .ticks(tt)
        ); // Create an axis component with d3.axisBottom

    if (yAxisType == 'linear'){
        svg.append("g")
        .attr("class", "y axis")
        .attr("id", "y-axis-"+space)
        .attr("transform", "translate(" + paddingX + ",0)")
        .call(d3.axisLeft(yScale).tickSize(-w + paddingX + paddingX2)
            .tickFormat(function (d) {
                if(space=='world')return d / 1000 + "k";
                else if(space=='india')return d;  
                
            })
            .ticks(8)
        ); // Create an axis component with d3.axisLeft
    }
    else if (yAxisType == 'log'){
        svg.append("g")
        .attr("class", "y axis")
        .attr("id", "y-axis-"+space)
        .attr("transform", "translate(" + paddingX + ",0)")
        .call(d3.axisLeft(yScale).tickSize(-w + paddingX + paddingX2)
            .tickFormat(function (d) { 
                return d / 1000 + "k";
            })
            .ticks(5)
        ); // Create an axis component with d3.axisLeft
    }
    
    const t = svg.transition().duration(750);

        d3.selectAll(".line-"+space).remove();
        d3.selectAll(".circles-"+space).remove();
        d3.selectAll(".text-legend-"+space).remove();
        d3.selectAll(".text-title-plot-"+space).remove();

        let name;
        if(category==='confirmed') name='Cases'
        else if(category==='recovered') name='Recovered'
        else if(category==='deaths') name='Deaths'

        svg.append("text")
            .attr("class", "text-title-plot-"+space)
            .attr("id", "text-title")
            .attr('fill', '#000')
            .attr('x', w/2)
            .attr('y', yScale.range()[0] + 40)
            .attr('text-anchor', 'middle')
            .text("Cumulative " +name+ " vs Time")



        var div = d3.select("#tooltip2");

        let countryID = 0;
        for (var country in world) {
            
            let r = countryID//parseInt(Math.random()*5)
            let col = colors[r]

            // console.log(country,col,r);

            
            svg.append("text")
            .attr("class", "text-legend-"+space) // Assign a class for styling 
            .attr("id", "text-" + country.replace(' ,-')) // Assign a class for styling 
            .attr('fill', col)
            .attr('x', xScale.range()[0] + paddingX2)
            .attr('y', (countryID * 30) + 2*paddingY)
            .attr('text-anchor', 'middle')
            .text(country)

            svg.append("path")
                .datum(world[country]) // 10. Binds data to the line 
                .attr("class", "line line-"+space) // Assign a class for styling 
                .attr("id", "line-" + country.replace(' ,-')) // Assign a class for styling 
                .attr("d", line1)
                .attr('fill', 'none')
                .attr('stroke', col)
                .attr('stroke-width', 2)

            svg.append("g").selectAll('.circle-' + country.replace(' ,-'))
                .data(world[country])
                .join(
                    enter => enter.append('circle')
                        .attr("class", "circles circle-" + country.replace(' ,-') + " circles-"+space)
                        .attr("cx", d => xScale(dateParser(d.date)))
                        .attr('cy', d => {
                            if(yAxisType==='linear') return yScale(d[category]);
                            else if(yAxisType==='log') return yScale(d[category]+1); 
                        })
                        .attr('r', 3.5)
                        .attr('fill', col)
                        .on("mouseover", function(d) {		
                            div.transition()		
                                .duration(200)		
                                .style("display", 'block');		
                            div	.html(()=>{
                                let c = d3.select(this).attr('class').replace('circles ','').replace('circle-','').replace('circles-india','').replace('circles-world','')
                                return '<span style="font-weight:800; letter-spacing: 2px; color:#c0392b; text-transform: uppercase">'+
                                c +'</span><br>' +dateFormat(dateParser(d.date)) + "<br>"+d[category].toLocaleString();
                            })	
                                .style("left", (d3.event.pageX-100) + "px")		
                                .style("top", (d3.event.pageY -60) + "px");	
                            })					
                        .on("mouseout", function(d) {		
                            div.transition()		
                                .duration(500)		
                                // .style("opacity", 0)
                                .style("display", 'none');	
                        })

                )
        countryID+=1;
    }


    // svg.append('line').attr('x1',150*w/800).attr('y1',20).attr('x2',150*w/800+30).attr('y2',20).attr('stroke','#e74c3c').attr('stroke-width',3);
    // svg.append('line').attr('x1',450*w/800).attr('y1',20).attr('x2',450*w/800+30).attr('y2',20).attr('stroke','#3498db').attr('stroke-width',3).attr('stroke-dasharray','5 2');
    // svg.append('text').attr('x',150*w/800+40).attr('y',25).attr('fill','#333').text('Population');
    // svg.append('text').attr('x',450*w/800+40).attr('y',25).attr('fill','#333').text('Fertility Rate');

    // appear({
    //     init: function init(){
    //       console.log('dom is ready');
    //     },
    //     elements: function elements(){
    //       // work with all elements with the class "track"
    //       return [document.getElementById('d3-states-1')];
    //     //   return document.getElementsByClassName('d3-states-1');
    //     },
    //     appear: function appear(el){
    //         d3.select('#line1').transition().delay(200).duration(500).attr("d", line1);
    //         d3.select('#line2').transition().delay(200).duration(500).attr("d", line2);


    //     },
    //     disappear: function disappear(el){

    //         d3.select('#line1').transition().duration(1000).attr("d", line1_before);
    //         d3.select('#line2').transition().duration(1000).attr("d", line1_before);
    //     },
    //     bounds: 200,
    //     reappear: true
    //   });

}




function section3(world, india) {

    // console.log(india);
    // console.log(world);
    let globValue;
    let globSelections = ['India', 'Italy', 'US'];
    let globCategory = 'confirmed';
    let globYScale = 'linear';

    let globStateValue;
    let globStateSelections = ['Karnataka','Kerala','Maharashtra'];
    
    for (var key in world) {
        $('#country-search').append(' <option value="' + key + '">' + key + '</option>');
    }


    for (var key in india) {
        $('#state-search').append(' <option value="' + key + '">' + key + '</option>');
    }



    let plotInitialized = false;
    let plotStateInitialized = false;

    $('#country-search')
        .dropdown({
            maxSelections: 5,
            onChange: function (value, text, $selectedItem) {
                // globValue = value;
                globValue = {}

                
                value.map(d=>{
                    globValue[d] = world[d];
                })

                
    
                if (plotInitialized) {
                    drawLinePlots('#line-plots-world', '#svg-plot-world', globValue, globCategory, globYScale);
                } else {
                    $.when(initlinePlot('#line-plots-world','svg-plot-world')).then(drawLinePlots('#line-plots-world', '#svg-plot-world',globValue, globCategory, globYScale));
                    plotInitialized = true;
                }
            }
        });


    $('#state-search')
        .dropdown({
            maxSelections: 5,
            onChange: function (value, text, $selectedItem) {
                // globValue = value;
                globStateValue = {}

                
                value.map(d=>{
                    globStateValue[d] = india[d];
                })

                
    
                if (plotStateInitialized) {
                    drawLinePlots('#line-plots-india','#svg-plot-india', globStateValue, globCategory, globYScale);
                } else {
                    $.when(initlinePlot('#line-plots-india','svg-plot-india')).then(drawLinePlots('#line-plots-india','#svg-plot-india', globStateValue, globCategory, globYScale));
            
                    plotStateInitialized = true;
                }
            }
        });

    $('#country-search').dropdown('set selected', globSelections);
    $('#state-search').dropdown('set selected', globStateSelections);


    $('#linear').click(()=>{
        $(".y-axis-scales").removeClass("active");
        $("#linear").addClass("active");
        globYScale = 'linear';
        drawLinePlots('#line-plots-world', '#svg-plot-world',globValue, globCategory, globYScale);
        drawLinePlots('#line-plots-india', '#svg-plot-india',globStateValue, globCategory, globYScale);
    })

    $('#log').click(()=>{
        $(".y-axis-scales").removeClass("active");
        $("#log").addClass("active");
        globYScale = 'log';
        drawLinePlots('#line-plots-world', '#svg-plot-world',globValue, globCategory, globYScale);
        drawLinePlots('#line-plots-india', '#svg-plot-india',globStateValue, globCategory, globYScale);    })


    $('#cat-cases').click(()=>{
        $(".category-button").removeClass("active");
        $("#cat-cases").addClass("active");
        globCategory = 'confirmed';
        $("#cumu-title").html("Confirmed Cases");
        drawLinePlots('#line-plots-world', '#svg-plot-world',globValue, globCategory, globYScale);
        drawLinePlots('#line-plots-india', '#svg-plot-india',globStateValue, globCategory, globYScale);    })

    $('#cat-recovered').click(()=>{
        $(".category-button").removeClass("active");
        $("#cat-recovered").addClass("active");
        globCategory = 'recovered';
        $("#cumu-title").html("Recovered");
        drawLinePlots('#line-plots-world','#svg-plot-world', globValue, globCategory, globYScale);
        drawLinePlots('#line-plots-india','#svg-plot-india', globStateValue, globCategory, globYScale);    })

    $('#cat-deaths').click(()=>{
        $(".category-button").removeClass("active");
        $("#cat-deaths").addClass("active");
        globCategory = 'deaths';
        $("#cumu-title").html("Deaths");
        drawLinePlots('#line-plots-world','#svg-plot-world', globValue, globCategory, globYScale);
        drawLinePlots('#line-plots-india', '#svg-plot-india',globStateValue, globCategory, globYScale);    })








}