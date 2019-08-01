function percentCircles(svg,width, height, light, red){

    const eachMatrix = width/4;
    
    const padding = 10;
    const eachBallDistance = (eachMatrix-(2*padding))/10;

    let percentMatrices = svg.selectAll('.term-g').data(loksabha_terms.slice(0, -1)).enter()
    .append('g').attr('class','term-g')
    .style('transform',function(d,i){
        console.log(d,i);
        const x = eachMatrix*parseInt((i/4))+padding;
        const y = (eachMatrix+(padding))*(i%4) + padding;
        return 'translate('+x+'px,'+y+'px)'
    });


    percentMatrices.selectAll('.white-balls').data(function(d,i){
        return Array.from(Array(100)).map(function(k){return 0;});
    }).enter().append('circle').attr('cx',function(p,q){
        return padding+eachBallDistance*parseInt(q/10);
    }).attr('cy',function(p,q){
        return padding+eachBallDistance*(q%10);
    }).attr('class','white-balls')
    .attr('r',3).attr('fill',light)


    percentMatrices.selectAll('.red-balls').data(function(d,i){
        return Array.from(Array(Math.round(d.women_perc))).map(function(k){return 0;});
    }).enter().append('circle').attr('cx',function(p,q){
        return padding+eachBallDistance*(q%10);
    }).attr('cy',function(p,q){
        return padding+eachBallDistance*parseInt(q/10);
    }).attr('class','red-balls')
    .attr('r',3).attr('fill',red)


    percentMatrices.append('text').attr('x',(p,q)=>{
        return eachMatrix/2-5;
    }).attr('cy',10).attr('class','white-text')
    .attr('fill','#eee').attr('text-anchor','middle').text((p,q)=>p.year_in+' - '+p.year_out)

    svg.append('text').attr('x',-height/2).attr('y',0).attr('fill','#eee').attr('text-anchor','middle')
    .attr('transform','rotate(-90)').attr('class','lok-big').text('Loksabha Terms')




    // percentMatrices.append('rect').attr('x',0).attr('y',0)
    // .attr('width',eachMatrix).attr('height',eachMatrix)
    // .attr('stroke','#fff').attr('stroke-width',1)
}

function mapCurrent(svg, light, red, stroke){
    Promise.all([d3.json('./res/india.geojson')]).then(function(data) {
        data = data[0];     
        var projection = d3.geoMercator().scale(600).translate([-700,430]);
        var path = d3.geoPath()
        .projection(projection);

            svg.append("g").selectAll(".states-fill")
                .data(data.features)
                .enter()
                .append("path")
                .attr("class", "states-fill")
                .attr("id",function(d,i){
                    // console.log(d.properties.st_name);
                    return d.properties.pc_name.replace(" & ",'-').replace(" ",'-');
                })
                .attr("d", path)
                .style("fill", function(d){
                    const pc_name = d.properties.pc_name.replace(" & ",'-').replace(" ",'-');
                    const st_name = d.properties.st_name.replace(" & ",'-').replace(" ",'-');
                    const id_name = pc_name+'_'+st_name;
                    // console.log('pcname',id_name);
                    const selectedPC = ls2019_map.filter(f=>{
                        const check_id = f.pc_name.replace(" & ",'-').replace(" ",'-')+'_'+f.s_name.replace(" & ",'-').replace(" ",'-');
                        return id_name===check_id
                    })[0];
                    // console.log(selectedPC);
                    if(selectedPC===undefined){
                        return light;
                    }
                    else if (selectedPC.gen==='m'){
                        return light;
                    }
                    else{
                        return red;
                    }
                    // return d3.interpolateBlues(scale(state[unit].split(',').join('')));
                })
                .style("stroke", stroke)
                .style("stroke-width", "0.15px");
            
            





        })
        
        

}

function currentBigPercentCirlces(svg, width, height, light, red){
    const interCircle = width/10;
    const padding = 10;
    svg.selectAll('.big-white-circles').data(()=>{
        return Array.from(Array(100)).map(function(k){return 0;});
    }).enter().append('circle').attr('cx',function(p,q){
        return padding+interCircle*parseInt(q/10);
    }).attr('cy',function(p,q){
        return padding+interCircle*(q%10);
    }).attr('class','white-balls')
    .attr('r',5).attr('fill',light)

    svg.selectAll('.big-red-circles').data(()=>{
        return Array.from(Array(Math.round(loksabha_terms[loksabha_terms.length-1].women_perc))).map(function(k){return 0;});
    }).enter().append('circle').attr('cx',function(p,q){
        return padding+interCircle*parseInt(q%10);
    }).attr('cy',function(p,q){
        return padding+interCircle*parseInt(q/10);
    }).attr('class','white-balls')
    .attr('r',5).attr('fill',red)

    svg.append('text').attr('x',width/2).attr('y',-10).attr('class','white-text-big')
    .attr('fill','#eee').attr('text-anchor','middle').text(loksabha_terms[loksabha_terms.length-1].year_in +' - '+loksabha_terms[loksabha_terms.length-1].year_out)

    const basey = 50;
    svg.append('text').attr('x',-70).attr('y',basey).attr('class','lok-big-2').attr('text-anchor','middle').text('% of Women')
    svg.append('text').attr('x',-70).attr('y',basey+25).attr('class','lok-big-2').attr('text-anchor','middle').text('Members of')
    svg.append('text').attr('x',-70).attr('y',basey+50).attr('class','lok-big-2').attr('text-anchor','middle').text('Parliament in')
    svg.append('text').attr('x',-70).attr('y',basey+75).attr('class','lok-big-2').attr('text-anchor','middle').text('all Loksabhas')

}

function partyBars(svg,width,height,light){
    // console.log(parties_2019);

    // const parties_arr = parties_2019.slice(0,9)

    parties_2019 = parties_2019.sort(function(a,b){
        // console.log(a,b);
        const x = political_allies.filter(function(d){
            const temp = d.parties.indexOf(a.party);
            // console.log(temp);
            return temp > -1
        })[0].id;
        const y = political_allies.filter(function(d){
            const temp = d.parties.indexOf(b.party);
            // console.log(temp);
            return temp > -1
        })[0].id;
        // console.log('imed',x,y);
        return x-y;
        
    })

    // console.log(parties_2019);


    const parties_arr = parties_2019;
    const entries = parties_arr.length;
    const padding = 20;
    const eachBar = height/entries;

    let bars = svg.selectAll('.bar-g').data(parties_arr).enter().append('g').attr('class','.bar-g')
    .style('transform',function(d,i){
        const x = 0;
        const y = eachBar*i;
        return 'translate('+x+'px,'+y+'px)';
    })

    const barScale = d3.scaleLinear().domain([0,100]).range([0,width-30]);
    // console.log(barScale(0),barScale(0),barScale(0),barScale(0))
    const yPad = 2;
    bars.append('rect').attr('x',barScale(0)).attr('y',yPad).attr('width',(d,i)=>(barScale(d.perc)-barScale(0)))
    .attr('height',eachBar-2*yPad).attr('fill',function(d,i){
        return political_allies.filter(function(k){
            return k.parties.indexOf(d.party) > -1;
        })[0].color;
    }).attr('rx',7).attr('ry',7).attr('class','women-bar');

    bars.append('rect').attr('x',(d,i)=>(barScale(d.perc))).attr('y',yPad)
    .attr('width',(d,i)=>(barScale(100-d.perc)-barScale(0))).attr('height',eachBar-2*yPad)
    .attr('fill',light).attr('rx',7).attr('ry',7).attr('class','men-bar');

    bars.append('text').attr('x',barScale(103)).attr('y',13).attr('class','white-text')
    .attr('fill','#fff').text((d,i)=>(d.party));

    svg.selectAll('.allies-rect').data(political_allies).enter().append('rect').attr('class','allies-rect')
    .attr('x',-25).attr('y',(d,i)=>(d.before * eachBar + 3))
    .attr('width',5).attr('height',(d,i)=>(d.parties.length * eachBar - 6))
    .attr('fill',(d,i)=>(d.color))

    svg.selectAll('.allies-text').data(political_allies).enter().append('text')
    .attr('x',(d,i)=>(-(2*d.before+d.parties.length)/2 * eachBar)).attr('y',-5)
    .attr('text-anchor','middle').attr('class','white-text').attr('transform','rotate(-90)').attr('fill','#fff').text((d,i)=>(d.name));
    
    // svg.append('rect').attr('x',barScale(0)).attr('y',height+20)
    // .attr('width',barScale(100)-barScale(0)).attr('height',1)
    // .attr('fill','#fff');

    svg.selectAll('.man-ticks').data([0,25,50,75,100]).enter().append('text')
    .attr('x',(d,i)=>(barScale(d))).attr('y',height+15)
    .attr('text-anchor','middle').attr('class','white-text').attr('fill','#fff').text((d,i)=>(d+'%'));
    
    svg.append('text').attr('x',width/2).attr('y',340).attr('text-anchor','middle')
    .attr('class','lok-big-2').attr('fill','#fff').text('% of Women in the Candidate Pool (2019)');
    

}

function textblob(svg,x,y){
    svg.append('text').attr('x',x).attr('y',y).attr('class','lok-big-2').text('The current loksabha has the ')
    svg.append('text').attr('x',x).attr('y',y+25).attr('class','lok-big-2').text('highest number of women law-')
    svg.append('text').attr('x',x).attr('y',y+50).attr('class','lok-big-2').text('makers in the history of India.')
    svg.append('text').attr('x',x).attr('y',y+75).attr('class','lok-big-2').text('Both BJP and INC had promised')
    svg.append('text').attr('x',x).attr('y',y+100).attr('class','lok-big-2').text('to pass the "Women Reservation"')
    svg.append('text').attr('x',x).attr('y',y+125).attr('class','lok-big-2').text('bill which will ensure 33% seats')
    svg.append('text').attr('x',x).attr('y',y+150).attr('class','lok-big-2').text('for women in assembly and general')
    svg.append('text').attr('x',x).attr('y',y+175).attr('class','lok-big-2').text("elections. Less than 15% of both BJP")
    svg.append('text').attr('x',x).attr('y',y+200).attr('class','lok-big-2').text("and INC's candidates were women.")

    svg.append('text').attr('x',x).attr('y',y+250).attr('class','lok-big-2').text('It is 2019. How can we and when')
    svg.append('text').attr('x',x).attr('y',y+275).attr('class','lok-big-2').text('will we ever get to 50% at this pace?')
        
}


function section0() {
    

    const light = '#444';
    const stroke = '#222';
    const red = '#b33939';

    let svg;
    if(window.innerWidth<500){
        // Tiny Screens
        const width = 400;
        const height = 1800;
        const padding = 20;

        svg = d3.select('#svg-div').append('svg').attr('width',width).attr('height',height);
        svg.append('text').attr('x',width/2).attr('y',padding).attr('text-anchor','middle')
        .attr('class','title-svg').text('Women in Parliament')
        svg.append('text').attr('x',250).attr('y',740).attr('text-anchor','middle')
        .attr('class','lok-big-2').text('Constituencies with')
        svg.append('text').attr('x',250).attr('y',763).attr('text-anchor','middle')
        .attr('class','lok-big-2').text('Women MPs')
        svg.append('text').attr('x',250).attr('y',786).attr('text-anchor','middle')
        .attr('class','lok-big-2').text('[2019]')

        percentCircles(svg.append('g').style('transform','translate(20px,40px)'), 360, 400, light, red);
        mapCurrent(svg.append('g').style('transform','translate(20px,690px)'), light, red, stroke);
        currentBigPercentCirlces(svg.append('g').style('transform','translate(150px,480px)'), 200, 300, light, red);
        partyBars(svg.append('g').style('transform','translate(50px,1050px)'),300,300);
    
        
        textblob(svg.append('g'),75,1450);
        svg.append('text').attr('x',width/2).attr('y',1780).attr('text-anchor','middle')
        .attr('font-size','12px').attr('fill','#fff').attr('font-family','Literata').text('Made with ❤️ by Vivek')

    
    }
    else{
        // Larger Screens 
        const width = 800;
        const height = 970;
        svg = d3.select('#svg-div').append('svg').attr('width',width).attr('height',height);
        

        svg.append('text').attr('x',width/2).attr('y',60).attr('text-anchor','middle')
        .attr('class','title-svg').text('Women in Parliament')
        svg.append('text').attr('x',680).attr('y',120).attr('text-anchor','middle')
        .attr('class','lok-big-2').text('Constituencies with')
        svg.append('text').attr('x',680).attr('y',143).attr('text-anchor','middle')
        .attr('class','lok-big-2').text('Women MPs')
        svg.append('text').attr('x',680).attr('y',166).attr('text-anchor','middle')
        .attr('class','lok-big-2').text('[2019]')

        percentCircles(svg.append('g').style('transform','translate(20px,80px)'), 460,500,light, red);
        mapCurrent(svg.append('g').style('transform','translate(480px,80px) scale(0.8)'),light, red, stroke);
        currentBigPercentCirlces(svg.append('g').style('transform','translate(620px,405px)'), 160, 200, light, red);
        partyBars(svg.append('g').style('transform','translate(320px,580px)'),430,300, light);


        textblob(svg.append('g'),20,600);
        svg.append('text').attr('x',width/2).attr('y',960).attr('text-anchor','middle')
        .attr('font-size','12px').attr('fill','#fff').attr('font-family','Literata').text('Made with ❤️ by Vivek')

        
        
    }

    
    

    

}
