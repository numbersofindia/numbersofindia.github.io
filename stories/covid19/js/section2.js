function section2() {

    function lineAreaPlots(data,index,svgID,width,height,pad, color){

        width = Math.min(+d3.select(svgID).style('width').slice(0, -2),width);
        height = Math.min(+d3.select(svgID).style('height').slice(0, -2),height);

        // console.log(width,height);

        let x = d3.scaleLinear()
        .domain([0, data.length-1])
        .range([pad,width-pad])
        
        let y = d3.scaleLinear()
        .domain(d3.extent(data, d => d[index]))
        .range([height, pad])
        
        let area = d3.area()
        .curve(d3.curveLinear)
        .x((d,i) => x(i))
        .y0(y(0))
        .y1(d => y(d[index]))

        let line = d3.line()
        .x((d,i) => x(i))
        .y(d => y(d[index]))

        let selectedSVG = d3.select(svgID).append('svg')
        .attr('width',width).attr('height',height)
        // .attr("viewBox", `0 0 200 100`)
        // .attr("preserveAspectRatio", "xMinYMin meet")
        selectedSVG.append('path').datum(data)
        .attr("fill", color)
        .attr("opacity", 0.3)
        .attr("d", area);

        selectedSVG.append('path').datum(data)
        .attr("stroke", color)
        .attr("stroke-width", "2px")
        .attr("fill", "none")
        .attr("d", line);

    }




    function replaceText(indiaAgg,indiaDaily,world){
            let updateDate = new Date(indiaAgg.lastOriginUpdate);
            $('#updated-date').html(updateDate.toLocaleString());


            let worldAggStats = [0,0,0];
            let indiaAggStats = [0,0,0];

            let indiaDayWise = [];
            let worldDayWise = [];

            for (var i=0;i<world['India'].length;i++){
                worldDayWise.push([0,0,0]);
                indiaDayWise.push([0,0,0]);
            }

            for (var key of Object.keys(world)) {
                let datum = world[key];
                worldAggStats[0]+=parseInt(datum[datum.length-1].confirmed);
                worldAggStats[1]+=parseInt(datum[datum.length-1].recovered);
                worldAggStats[2]+=parseInt(datum[datum.length-1].deaths);

                datum.map((d,i)=>{
                    worldDayWise[i][0]+=parseInt(d.confirmed);
                    worldDayWise[i][1]+=parseInt(d.recovered);
                    worldDayWise[i][2]+=parseInt(d.deaths);
                    if (key==='India'){
                        indiaDayWise[i][0]+=parseInt(d.confirmed);
                        indiaDayWise[i][1]+=parseInt(d.recovered);
                        indiaDayWise[i][2]+=parseInt(d.deaths);
                    }
                })
                // console.log(key, datum[datum.length-1]);
            }
            indiaAggStats[0]+=indiaAgg.data.summary.total;
            indiaAggStats[1]+=indiaAgg.data.summary.discharged;
            indiaAggStats[2]+=indiaAgg.data.summary.deaths;

            $('#world-cases').html(worldAggStats[0].toLocaleString());
            $('#world-recovered').html(worldAggStats[1].toLocaleString());
            $('#world-dead').html(worldAggStats[2].toLocaleString());

            $('#india-cases').html(indiaAggStats[0].toLocaleString());
            $('#india-recovered').html(indiaAggStats[1].toLocaleString());
            $('#india-dead').html(indiaAggStats[2].toLocaleString());

            
            $('#spinner-1').hide();
            $('#spinner-1-replacement').css('display','flex');


            $('#world-recovered-perc').html((worldAggStats[1]*100/worldAggStats[0]).toFixed(1)+'%')
            $('#world-dead-perc').html((worldAggStats[2]*100/worldAggStats[0]).toFixed(1)+'%')

            $('#india-recovered-perc').html((indiaAggStats[1]*100/indiaAggStats[0]).toFixed(1)+'%')
            $('#india-dead-perc').html((indiaAggStats[2]*100/indiaAggStats[0]).toFixed(1)+'%')

            lineAreaPlots(indiaDayWise,0,'#india-cases-plot',200,100,10,"#2980b9");
            lineAreaPlots(indiaDayWise,1,'#india-recovered-plot',200,100,10,"#27ae60");
            lineAreaPlots(indiaDayWise,2,'#india-dead-plot',200,100,10,"#c0392b");
            lineAreaPlots(worldDayWise,0,'#world-cases-plot',200,100,10,"#27ae60");
            lineAreaPlots(worldDayWise,1,'#world-recovered-plot',200,100,10,"#2980b9");
            lineAreaPlots(worldDayWise,2,'#world-dead-plot',200,100,10,"#c0392b");


    }






    Promise.all(
        [
            d3.json('https://api.rootnet.in/covid19-in/stats/latest'),
            d3.json('https://api.rootnet.in/covid19-in/stats/daily'),
            d3.json('https://pomber.github.io/covid19/timeseries.json')

        ]).then(function (data) {
            let indiaAgg = data[0];
            let indiaDaily = data[1];
            let world = data[2];
            
            let stateWise = {}
            replaceText(indiaAgg,indiaDaily,world);
            section1(indiaAgg);


            $.when(formatIndiaDaily(indiaDaily, stateWise)).then(section3(world,stateWise));
            

            

    })
}




function formatIndiaDaily(indiaDaily, stateWise){
    indiaDaily.data.map(d=>{
        // console.log(d);
        let date = d.day;
        let results = d.regional;
        results.map(f=>{
            let confirmed = f.confirmedCasesIndian + f.confirmedCasesForeign;
            let recovered = f.discharged;
            let deaths = f.deaths;

            if(stateWise[f.loc]){
                stateWise[f.loc].push({date, confirmed, recovered, deaths});
            }
            else{
                stateWise[f.loc] = [{date, confirmed, recovered, deaths}];
            }
            
        })
    })

}