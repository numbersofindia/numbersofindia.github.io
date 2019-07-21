function bubbleStates(id,w,h, data, eachRow,unit, radius){
    const eachWidth = w/eachRow;
        const eachHeight = 100;
        const rectPaddingX = 20;
        const rectPaddingY = 20;
        const bubbleEdge = 10;

    var svg = d3.select(id).append('svg').attr('width',w).attr('height',h);
        svg.selectAll('.state-names-density').data(data.filter(function(k){
            return k['s/u']==='s'
        })).enter().append('text')
        .attr('x',function(d,i){
            return i%eachRow * eachWidth + eachWidth/2;
        })
        .attr('y',function(d,i){
            return parseInt(i/eachRow) * eachHeight + 10;
        }).attr('text-anchor','middle')
        .attr('class','state-names-sratio')
        .text(function(d){
            return d.state.replace('-', ' ');
        })

        var gBalls = svg.selectAll('.state-g-density').data(data.filter(function(k){
            return k['s/u']==='s'
        })).enter().append('g')
        .style('transform',function(d,i){
            return 'translate('+(i%eachRow * eachWidth + rectPaddingX)+'px,'+(parseInt(i/eachRow) * eachHeight + rectPaddingY)+'px)';
        });

        gBalls.selectAll('.balls-white').data(function(d){
            // console.log(d);
            // return Array.from(Array(Math.round(d.density/10))).map(function(k){return 0;});
            const numBalls = bubbleEdge*bubbleEdge;
            return Array.from(Array(numBalls)).map(function(k){return 0;});
        }).enter().append('circle').attr('class','balls-white')
        .attr('cx',function(p,q){
            return ((eachWidth - (2*rectPaddingX))/bubbleEdge)*(q%bubbleEdge) + 5;
        })
        .attr('cy',function(p,q){
            return ((eachWidth - (2*rectPaddingX))/bubbleEdge)*(parseInt(110/bubbleEdge));
        })
        .attr('r',0)
        .attr('fill','#fff')

        gBalls.selectAll('.balls-filled').data(function(d){
            // console.log(Math.round(parseInt(d.population.split(',').join(''))*(1000-d.sexratio)/100000000));
            // var numBalls = Math.abs(Math.round(parseInt(d.population.split(',').join(''))*(1000-d.sexratio)/100000000));
            var numBalls = Math.round(parseInt(d[unit].split(',').join(''))/10);
            return Array.from(Array(numBalls)).map(function(k){return 0;});
            // return Array.from(Array()).map(function(k){return 0;});
        }).enter().append('circle').attr('class','balls-filled')
        .attr('cx',function(p,q){
            return ((eachWidth - (2*rectPaddingX))/bubbleEdge)*(q%bubbleEdge) + 5;
        })
        .attr('cy',function(p,q){
            return ((eachWidth - (2*rectPaddingX))/bubbleEdge)*(parseInt(110/bubbleEdge));
        })
        .attr('r',0)
        .attr('fill','#f39c12')

        appear({
            init: function init(){
              console.log('dom is ready');
            },
            elements: function elements(){
              // work with all elements with the class "track"
              return [document.getElementById('d3-states-sratio')];
            //   return document.getElementsByClassName('d3-states-1');
            },
            appear: function appear(el){
                console.log('sratioooo');
                gBalls.selectAll('.balls-white').transition().delay(1000).duration(500).delay(function(p,q){
                    return parseInt(q/10)*100;
                })
                .attr('cy',function(p,q){
                    return ((eachWidth - (2*rectPaddingX))/bubbleEdge)*(parseInt(q/bubbleEdge));
                }).attr('r',radius)
                
                gBalls.selectAll('.balls-filled').transition().delay(1000).duration(500).delay(function(p,q){
                    return parseInt(q/10)*100;
                })
                .attr('cy',function(p,q){
                    return ((eachWidth - (2*rectPaddingX))/bubbleEdge)*(parseInt(q/bubbleEdge));
                }).attr('r',radius)
               
        
    
            },
            disappear: function disappear(el){
                gBalls.selectAll('.balls-white').transition().duration(500)
                .attr('cy',function(p,q){
                    return ((eachWidth - (2*rectPaddingX))/bubbleEdge)*(parseInt(99/bubbleEdge));
                }).attr('r',0)
                
                gBalls.selectAll('.balls-filled').transition().duration(500)
                .attr('cy',function(p,q){
                    return ((eachWidth - (2*rectPaddingX))/bubbleEdge)*(parseInt(99/bubbleEdge));
                }).attr('r',0)
            },
            bounds: -200,
            reappear: true
          });


}

function bubbleStatesVertical(id,w,h, data, eachCol, cols, bubbleEdge){
    const eachHeight = h/eachCol;
        const eachWidth = w/cols;

    var svg = d3.select(id).append('svg').attr('width',w).attr('height',h);
        svg.selectAll('.state-names-density').data(data.filter(function(k){
            return k['s/u']==='s'
        })).enter().append('text')
        .attr('x',function(d,i){
            return parseInt(i/eachCol)*eachWidth+ 90;
        })
        .attr('y',function(d,i){
            return (i%eachCol)*eachHeight+10;
        }).attr('text-anchor','end')
        .attr('class','state-names-missingwomen')
        .text(function(d){
            return d.state.replace('-', ' ');
        })

        var gBalls = svg.selectAll('.state-g-density').data(data.filter(function(k){
            return k['s/u']==='s'
        })).enter().append('g')
        .style('transform',function(d,i){
            return 'translate('+(parseInt(i/eachCol) * eachWidth + 100)+'px,'+(parseInt(i%eachCol) * eachHeight + 5)+'px)';
        });

        gBalls.selectAll('.balls-filled-missing').data(function(d){
            // console.log(Math.round(parseInt(d.population.split(',').join(''))*(1000-d.sexratio)/100000000));
            var p = parseInt(d.population.split(',').join(''));
            var sr = parseInt(d.sexratio);
            var numBalls = Math.abs(Math.round(p*(1000-sr)/(1000+sr)/100000));
            // console.log('defici',numBalls, d.sexratio);
            // var numBalls = Math.round(parseInt(d[unit].split(',').join(''))/10);
            return Array.from(Array(numBalls)).map(function(k){return 0;});
            // return Array.from(Array()).map(function(k){return 0;});
        }).enter().append('circle').attr('class', 'balls-filled-missing')
        .attr('cx',function(p,q){
            return 0;
        })
        .attr('cy',function(p,q){
            return 0;
        })
        .attr('r',2)
        .attr('fill',function(d){
            var sr = d3.select(this.parentNode).datum().sexratio;
            if (sr > 1000) return '#1abc9c';
            else return '#e74c3c'});



            appear({
                init: function init(){
                  console.log('dom is ready');
                },
                elements: function elements(){
                  // work with all elements with the class "track"
                  return [document.getElementById('d3-states-missing')];
                //   return document.getElementsByClassName('d3-states-1');
                },
                appear: function appear(el){
                   
                    gBalls.selectAll('.balls-filled-missing').transition().delay(1000).duration(1000).delay(function(p,q){
                        return parseInt(q/10)*100;
                    })
                    .attr('cx',function(p,q){
                        return (q%bubbleEdge)*5;
                    })
                    .attr('cy',function(p,q){
                        return parseInt(q/bubbleEdge)*5;
                    })
                   
            
        
                },
                disappear: function disappear(el){
                    gBalls.selectAll('.balls-filled-missing').transition().duration(500)
                    .attr('cx',function(p,q){
                        return 0;
                    })
                    .attr('cy',function(p,q){
                        return 0;
                    })
                    
                },
                bounds: -200,
                reappear: true
              });
}

function eitherSide(id,w,h,data, radius, xmultiplier){
    const ruralOrder = data.filter(function(k){
        return k['s/u']==='s'
    }).sort(function(b,a) {
        return (parseInt(a.rural.split(',').join(''))/parseInt(a.population.split(',').join(''))*10) - (parseInt(b.rural.split(',').join(''))/parseInt(b.population.split(',').join(''))*10);
    }).map(function(d){
        return d.state
    })

    const origOrder = data.filter(function(k){
        return k['s/u']==='s'
    }).map(function(d){
        return d.state
    });


    const iconScale = 0.03;
    const iconScale2 = 0.035;
    const eachHeight = h/data.filter(function(k){
        return k['s/u']==='s'
    }).length;
    
    // var importedNodeLeft = document.importNode(leftIcon.documentElement, true);
    // var importedNodeRight = document.importNode(rightIcon.documentElement, true);
    

    var svg = d3.select(id).append('svg').attr('width',w).attr('height',h);
    svg.selectAll('.state-names-density').data(data.filter(function(k){
        return k['s/u']==='s'
    })).enter().append('text')
    .attr('x',function(d,i){
        return w/2;
    })
    .attr('y',function(d,i){
        return i*eachHeight+20;
    }).attr('text-anchor','middle')
    .attr('class','state-names-rurban')
    .text(function(d){
        return d.state.replace('-', ' ');
    })

    var gBallsLeft = svg.selectAll('.state-g-density-left').data(data.filter(function(k){
        return k['s/u']==='s'
    })).enter().append('g').attr('class','state-g-density-left')
    .style('transform',function(d,i){
        return 'translate('+(w/2 - 290)+'px,'+(i*eachHeight + 15)+'px)';
    });


    var gBallsRight = svg.selectAll('.state-g-density-right').data(data.filter(function(k){
        return k['s/u']==='s'
    })).enter().append('g').attr('class','state-g-density-right')
    .style('transform',function(d,i){
        return 'translate('+(w/2 + 30)+'px,'+(i*eachHeight + 15)+'px)';
    });

    gBallsLeft.selectAll('.balls-rural').data(function(d){
        var numBalls = 10;
        return Array.from(Array(numBalls)).map(function(k){return 0;});
    }).enter().append('circle')
    .attr('cx',function(p,q){
        return (230-q*xmultiplier);
    })
    .attr('cy',function(p,q){
        return 0;
    })
    .attr('r',radius)
    .attr('fill','#eee')



    gBallsRight.selectAll('.balls-urban').data(function(d){
        // var numBalls = Math.round(parseInt(d.rural.split(',').join(''))/parseInt(d.population.split(',').join(''))*10);
        var numBalls = 10;
        // var numBalls = Math.round(parseInt(d[unit].split(',').join(''))/10);
        return Array.from(Array(numBalls)).map(function(k){return 0;});
        // return Array.from(Array()).map(function(k){return 0;});
    }).enter().append('circle')
    .attr('cx',function(p,q){
        return (q*xmultiplier)+30;
    })
    .attr('cy',function(p,q){
        return 0;
    })
    .attr('r',radius)
    .attr('fill','#eee')




    // gBallsLeft.selectAll('.balls-rural-svg').data(function(d){
    //     var numBalls = Math.round(parseInt(d.rural.split(',').join(''))/parseInt(d.population.split(',').join(''))*10);
    //     return Array.from(Array(numBalls)).map(function(k){return 0;});
    // }).enter().append('g').attr('class','balls-rural-svg').style('transform',function(p,q){
    //     const val = 225-q*23;
    //     return 'translate('+val+'px,-'+10+'px) scale('+iconScale+')';
    //     // return 'translate(225px,-10px) scale('+iconScale+')';
    // }).each(function(d, i){ 
    //     var plane = this.appendChild(importedNodeLeft.cloneNode(true));
    // })

    // gBallsRight.selectAll('.balls-urban-svg').data(function(d){
    //     var numBalls = 10 - Math.round(parseInt(d.rural.split(',').join(''))/parseInt(d.population.split(',').join(''))*10);
    //     return Array.from(Array(numBalls)).map(function(k){return 0;});
    // }).enter().append('g').attr('class','balls-urban-svg').style('transform',function(p,q){
    //     const val = q*23 + 25;
    //     // return 'translate(25px,-10px) scale('+iconScale2+')';
    //     return 'translate('+val+'px,-'+10+'px) scale('+iconScale2+')';
    // }).each(function(d, i){ 
    //     var plane = this.appendChild(importedNodeRight.cloneNode(true));
    // })


    gBallsLeft.selectAll('.balls-rural-svg').data(function(d){
        var numBalls = Math.round(parseInt(d.rural.split(',').join(''))/parseInt(d.population.split(',').join(''))*10);
        return Array.from(Array(numBalls)).map(function(k){return 0;});
    }).enter().append('circle')
    .attr('cx',function(p,q){
        return (230-q*xmultiplier);
    })
    .attr('cy',function(p,q){
        return 0;
    })
    .attr('r',radius)
    .attr('fill','#16a085')


    gBallsRight.selectAll('.balls-urban-svg').data(function(d){
        var numBalls = 10 - Math.round(parseInt(d.rural.split(',').join(''))/parseInt(d.population.split(',').join(''))*10);
        return Array.from(Array(numBalls)).map(function(k){return 0;});
    }).enter().append('circle')
    .attr('cx',function(p,q){
        return (q*xmultiplier)+30;
    })
    .attr('cy',function(p,q){
        return 0;
    })
    .attr('r',radius)
    .attr('fill','#2980b9')



    appear({
        init: function init(){
          console.log('dom is ready');
        },
        elements: function elements(){
          // work with all elements with the class "track"
          return [document.getElementById('d3-states-rurban')];
        //   return document.getElementsByClassName('d3-states-1');
        },
        appear: function appear(el){
            console.log('rurban');
            d3.selectAll('.state-names-rurban').transition().delay(1000).duration(2000).attr('y',function(d,i){
                return ruralOrder.indexOf(origOrder[i])*eachHeight+20;
            });

            d3.selectAll('.state-g-density-left').transition().delay(1000).duration(2000).style('transform',function(d,i){
                return 'translate('+(w/2 - 290)+'px,'+(ruralOrder.indexOf(origOrder[i])*eachHeight + 15)+'px)';
            });


            d3.selectAll('.state-g-density-right').transition().delay(1000).duration(2000)
            .style('transform',function(d,i){
                return 'translate('+(w/2 + 30)+'px,'+(ruralOrder.indexOf(origOrder[i])*eachHeight + 15)+'px)';
            });
            
        },
        disappear: function disappear(el){

            d3.selectAll('.state-names-rurban').transition().delay(1000).duration(2000).attr('y',function(d,i){  
                return i*eachHeight+20;
            })

            d3.selectAll('.state-g-density-left').transition().delay(1000).duration(2000).style('transform',function(d,i){
                return 'translate('+(w/2 - 300)+'px,'+(i*eachHeight + 15)+'px)';
            });
            

            d3.selectAll('.state-g-density-right').transition().delay(1000).duration(2000)
            .style('transform',function(d,i){
                return 'translate('+(w/2 + 30)+'px,'+(i*eachHeight + 15)+'px)';
            });
        },
        bounds: -200,
        reappear: true
      });
        
}



function areaStates(id,w,h, data, eachRow,unit, rectPaddingX){
    const eachWidth = w/eachRow;
        const eachHeight = 100;
        const rectPaddingY = 10;
        const bubbleEdge = 10;

    var svg = d3.select(id).append('svg').attr('width',w).attr('height',h);
        svg.selectAll('.state-names-density').data(data.filter(function(k){
            return k['s/u']==='s'
        })).enter().append('text')
        .attr('x',function(d,i){
            return i%eachRow * eachWidth + eachWidth/1.7;
        })
        .attr('y',function(d,i){
            return parseInt(i/eachRow) * eachHeight + 10;
        }).attr('text-anchor','middle')
        .attr('class','state-names-age')
        .text(function(d){
            return d.state.replace('-', ' ');
        })

        const scaleX = d3.scaleLinear().domain([0,8]).range([0,80])
        const scaleYUp = d3.scaleLinear().domain([0,35]).range([40,0])
        const scaleYDown = d3.scaleLinear().domain([0,35]).range([41,81])

        var gBalls = svg.selectAll('.state-g-density').data(data.filter(function(k){
            return k['s/u']==='s'
        })).enter().append('g')
        .style('transform',function(d,i){
            return 'translate('+(i%eachRow * eachWidth + rectPaddingX)+'px,'+(parseInt(i/eachRow) * eachHeight + rectPaddingY)+'px)';
        });

        var areaUp = d3.area()
        .x(function(d,i) { return scaleX(i); })
        .y0(40)
        .y1(function(d,i) {return scaleYUp(d);});

        var areaDown = d3.area()
        .x(function(d,i) { return scaleX(i); })
        .y0(41)
        .y1(function(d,i) {return scaleYDown(d);});


        var line = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.close); });

        gBalls.selectAll('.area-up-rural').data(function(d){
            return [d.age_female_rural.split(',')];
        }).enter().append('path').attr('d',areaUp).attr('opacity',0.8).attr('fill','#c0392b');


        gBalls.selectAll('.area-up-urban').data(function(d){
            return [d.age_female_urban.split(',')];
        }).enter().append('path').attr('d',areaUp).attr('opacity',0.5).attr('fill','#f39c12');



        gBalls.selectAll('.area-up-rural').data(function(d){
            return [d.age_male_rural.split(',')];
        }).enter().append('path').attr('d',areaDown).attr('opacity',0.8).attr('fill','#27ae60');


        gBalls.selectAll('.area-up-urban').data(function(d){
            return [d.age_male_urban.split(',')];
        }).enter().append('path').attr('d',areaDown).attr('opacity',0.5).attr('fill','#2980b9');

        gBalls.append('circle').attr('cx',scaleX(5)).attr('cy',scaleYUp(20)).attr('r',8).attr('fill','none').attr('stroke','#eee').attr('stroke-width',1);
        gBalls.append('circle').attr('cx',scaleX(7.1)).attr('cy',scaleYUp(20)).attr('r',8).attr('fill','none').attr('stroke','#eee').attr('stroke-width',1);
        gBalls.append('circle').attr('cx',scaleX(5)).attr('cy',scaleYDown(20)).attr('r',8).attr('fill','none').attr('stroke','#eee').attr('stroke-width',1);
        gBalls.append('circle').attr('cx',scaleX(7.1)).attr('cy',scaleYDown(20)).attr('r',8).attr('fill','none').attr('stroke','#eee').attr('stroke-width',1);

        gBalls.append('text').attr('x',scaleX(5)).attr('y',scaleYUp(17)).attr('text-anchor','middle').attr('class','age-text').attr('fill','#c0392b').text(function(d){return Math.round(d.avg_female_rural)});
        gBalls.append('text').attr('x',scaleX(7.1)).attr('y',scaleYUp(17)).attr('text-anchor','middle').attr('class','age-text').attr('fill','#f39c12').text(function(d){return Math.round(d.avg_female_urban)});
        gBalls.append('text').attr('x',scaleX(5)).attr('y',scaleYDown(23)).attr('text-anchor','middle').attr('class','age-text').attr('fill','#27ae60').text(function(d){return Math.round(d.avg_male_rural)});
        gBalls.append('text').attr('x',scaleX(7.1)).attr('y',scaleYDown(23)).attr('text-anchor','middle').attr('class','age-text').attr('fill','#2980b9').text(function(d){return Math.round(d.avg_male_urban)});

        svg.append('text').attr('x',w-200).attr('y',h-65).attr('text-anchor','middle').attr('class','age-text').attr('fill','#c0392b').text("Avg. Age Rural Female");
        svg.append('text').attr('x',w-75).attr('y',h-65).attr('text-anchor','middle').attr('class','age-text').attr('fill','#f39c12').text("Avg. Age Urban Female");
        svg.append('text').attr('x',w-200).attr('y',h-35).attr('text-anchor','middle').attr('class','age-text').attr('fill','#27ae60').text("Avg. Age Rural Male");
        svg.append('text').attr('x',w-75).attr('y',h-35).attr('text-anchor','middle').attr('class','age-text').attr('fill','#2980b9').text("Avg. Age Urban Male");
        
       
}

function linePlots(id,w,h, ticks){
    var svg = d3.select(id).append('svg').attr('width',w).attr('height',h)
    svg.append('rect').attr('x',0).attr('y',0).attr('width',w).attr('height',h).attr('fill','#eee');
    const paddingX = 35;
    const paddingY = 50;
    var xScale = d3.scaleLinear().domain([1960,2018]).range([paddingX,w-paddingX]);
    var yScale = d3.scaleLinear().domain([450547679,1352617328]).range([h-paddingY,paddingY]);
    var yScale2 = d3.scaleLinear().domain([2.3,5.9]).range([h-paddingY,paddingY]);

    var line1_before = d3.line()
    .x(function(d) { return xScale(d[0]); }) // set the x values for the line generator
    .y(function(d) { return yScale(yScale.domain()[0]); }) // set the y values for the line generator 
    .curve(d3.curveMonotoneX) // apply smoothing to the line

    var line2_before = d3.line()
    .x(function(d) { return xScale(d[0]); }) // set the x values for the line generator
    .y(function(d) { return yScale2(yScale.domain()[0]); }) // set the y values for the line generator 
    .curve(d3.curveMonotoneX) // apply smoothing to the line

    var line1 = d3.line()
    .x(function(d) { return xScale(d[0]); }) // set the x values for the line generator
    .y(function(d) { return yScale(d[1]); }) // set the y values for the line generator 
    .curve(d3.curveMonotoneX) // apply smoothing to the line

    var line2 = d3.line()
    .x(function(d) { return xScale(d[0]); }) // set the x values for the line generator
    .y(function(d) { return yScale2(d[2]); }) // set the y values for the line generator 
    .curve(d3.curveMonotoneX) // apply smoothing to the line

    svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (h-paddingY) + ")")
    .call(d3.axisBottom(xScale).tickFormat(d3.format("d")).tickSize(2*paddingY-h).ticks(ticks)); // Create an axis component with d3.axisBottom

    svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate("+paddingX+",0)")
    .call(d3.axisLeft(yScale).tickSize(-w+2*paddingX).tickFormat(function(d) { return d/1000000000 + " Bil"; })); // Create an axis component with d3.axisLeft
    
    svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate("+(w-paddingX)+",0)")
    .call(d3.axisRight(yScale2).ticks(20));

    svg.append("path")
    .datum(popu_trend) // 10. Binds data to the line 
    .attr("class", "line") // Assign a class for styling 
    .attr("id", "line1") // Assign a class for styling 
    .attr("d", line1_before)
    .attr('fill','none')
    .attr('stroke','#e74c3c')
    .attr('stroke-width',3)

    svg.append("path")
    .datum(popu_trend) // 10. Binds data to the line 
    .attr("class", "line") // Assign a class for styling 
    .attr("id", "line2") // Assign a class for styling 
    .attr("d", line2_before)
    .attr('fill','none')
    .attr('stroke','#3498db')
    .attr('stroke-width',3)
    .attr('stroke-dasharray','5 2')

    svg.append('line').attr('x1',150*w/800).attr('y1',20).attr('x2',150*w/800+30).attr('y2',20).attr('stroke','#e74c3c').attr('stroke-width',3);
    svg.append('line').attr('x1',450*w/800).attr('y1',20).attr('x2',450*w/800+30).attr('y2',20).attr('stroke','#3498db').attr('stroke-width',3).attr('stroke-dasharray','5 2');
    svg.append('text').attr('x',150*w/800+40).attr('y',25).attr('fill','#333').text('Population');
    svg.append('text').attr('x',450*w/800+40).attr('y',25).attr('fill','#333').text('Fertility Rate');

    appear({
        init: function init(){
          console.log('dom is ready');
        },
        elements: function elements(){
          // work with all elements with the class "track"
          return [document.getElementById('d3-states-1')];
        //   return document.getElementsByClassName('d3-states-1');
        },
        appear: function appear(el){
            d3.select('#line1').transition().delay(200).duration(500).attr("d", line1);
            d3.select('#line2').transition().delay(200).duration(500).attr("d", line2);


        },
        disappear: function disappear(el){

            d3.select('#line1').transition().duration(1000).attr("d", line1_before);
            d3.select('#line2').transition().duration(1000).attr("d", line1_before);
        },
        bounds: 200,
        reappear: true
      });

}


function section3(){
    Promise.all([d3.csv('./res/states.csv')]).then(function(data) {
        // Promise.all([d3.csv('./res/states.csv'), d3.xml('./res/farmer.svg'), d3.xml('./res/businesswoman.svg')]).then(function(data) {
        // var farmer = data[1];
        // var businesswoman = data[2];
        data = data[0];

        if(window.innerWidth<500){

        const eachRow = 4;
            bubbleStates('#d3-states-sratio',350,800, data, eachRow,'sexratio', 1.5);
            bubbleStatesVertical('#d3-states-missing',350,400, data, 15,2, 15);
            eitherSide('#d3-states-rurban',350,600,data, 3, 12);
            areaStates('#d3-states',350,800, data, eachRow,'sexratio',5);
            linePlots('#d3-states-1',350,400,5);    
        }

        else{

        const eachRow = 8;
            bubbleStates('#d3-states-sratio',800,400, data, eachRow,'sexratio', 2.5);
        bubbleStatesVertical('#d3-states-missing',700,400, data, 10,3, 25);
        eitherSide('#d3-states-rurban',700,600,data, 5, 23);
        areaStates('#d3-states',800,400, data, eachRow,'sexratio',20);
        linePlots('#d3-states-1',800,400,10);
        
        }
        

        


    });

}
