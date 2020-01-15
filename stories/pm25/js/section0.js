

function section0() {

    

    const canvasDims = 125;
    const canvasDims2 = 55;

    const pm25 = [
        ['good', 0, 12, 0, 50, '#27ae60'],
        ['moderate', 12, 35.5, 50, 100, '#f1c40f'],
        ['unhealthy for sensitive groups', 35.5, 55.5, 100, 150, '#e67e22'],
        ['unhealthy', 55.5, 150.5, 150, 200, '#e74c3c'],
        ['very unhealthy', 150.5, 250.5, 200, 300, '#c0392b'],
        ['hazardous', 250.5, 500.5, 300, 500, '#8e44ad'],
    ];




    function Circle(x, y, r, sx, sy, canvas, ctx) {
        this.x = x;
        this.y = y;
        this.sx = sx;
        this.sy = sy;
        this.r = r;
        this.canvas = canvas;
        this.ctx = ctx;
        this.bounce = -1;
        this.drawCircle = function () {
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            this.ctx.fillStyle = '#fff';
            this.ctx.fill();
        }
        this.moveCircle = function () {
            this.x += this.sx;
            this.y += this.sy;
            if (this.x + this.r > this.canvas.width) {
                this.x = this.canvas.width - this.r;
                this.sx *= this.bounce;
            }
            else if (this.x - this.r < 0) {
                this.x = this.r;
                this.sx *= this.bounce;
            }
            if (this.y + this.r > this.canvas.height) {
                this.y = this.canvas.height - this.r;
                this.sy *= this.bounce;
            }
            else if (this.y - this.r < 0) {
                this.y = this.r;
                this.sy *= this.bounce;
            }
        }

    }




    function calculateConc(aqi) {
        // console.log('pm25 len',pm25.length, aqi);
        for (var k = 0; k < pm25.length; k++) {
            if (aqi >= pm25[k][3] && aqi <= pm25[k][4]) {
                break;
            }
        }
        // console.log('k',k);
        let aqi_lo = pm25[k][3];
        let aqi_hi = pm25[k][4];
        let conc_lo = pm25[k][1];
        let conc_hi = pm25[k][2];

        let conc = ((aqi - aqi_lo) * (conc_hi - conc_lo) / (aqi_hi - aqi_lo)) + conc_lo;
        // console.log('aqi',aqi, 'conc', conc);
        return conc;
    }

    function calculateConcLevel(aqi) {
        for (var k = 0; k < pm25.length; k++) {
            if (aqi >= pm25[k][3] && aqi <= pm25[k][4]) {
                break;
            }
        }

        return k;
    }

    Promise.all([d3.csv('./res/total.csv'), d3.csv('./res/month2.csv')]).then(function (data) {
        const total = data[0];
        const months = data[1];

        // console.log(months);

        let cityOrder = [
            'new-delhi',
            'mumbai',
            'bangalore',
            'kolkata',
            'chennai',
            'hyderabad',
            'new-york',
            'los-angeles',
            'san-francisco',
            'paris',
            'london',
            'madrid',
            'hong-kong',
            'jakarta',
            'singapore',
            'beijing',
            'shanghai',
            'dhaka',
            'são paulo',
            'bogota',
            'auckland',
            'toronto',
            'dubai',
            'tokyo',
            'moscow',
            'amsterdam',
            'istanbul',
            'nairobi',
            'cape town',
            'johannesburg'
        ]

        const monthsOfYear = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

        total.sort(function (a, b) {
            return cityOrder.indexOf(a.city) - cityOrder.indexOf(b.city);
        });


        months.sort(function (a, b) {
            return cityOrder.indexOf(a.city) - cityOrder.indexOf(b.city);
        });

        let totalAnimations = new Array(total).fill(0);

        // console.log(total);


        d3.select('#squares').selectAll('g').data(total)
            .enter().append('canvas')
            .attr('width', canvasDims)
            .attr('height', canvasDims)
            .attr('class', 'cities')
            .attr('id', function (d, i) {
                return 'city-' + i;
            })
            .style('border', function (d, i) {
                let level = calculateConcLevel(d.pm25);
                return '3px solid ' + pm25[level][5];
            })
        // .text(function(d){
        //     return d.file;
        // })

        let monSq = d3.select("#squares-month").selectAll('div').data(months)
                    .enter().append('div');

        monSq.selectAll('canvas').data(function(d,i){
            return new Array(13).fill(i)
        }).enter().append('canvas')
                    .attr('width', canvasDims2)
                    .attr('height', canvasDims2)
                    .attr('class', 'months')
                    .attr('id', function (k, i) {
                        return 'mon-' +k+'-'+ i;
                    })
                    .style('border', function (d, i) {
                        // let level = calculateConcLevel(d.pm25);
                        // return '3px solid ' + pm25[level][5];
                        if(i>0){
                            return '3px solid #fff';
                        }
                        else{return '1px solid #333'}
                    })




        total.forEach((d, j) => {
            // console.log(d);
            var canvas = document.getElementById('city-' + j);
            canvas.width = canvasDims;
            canvas.height = canvasDims;
            var ctx = canvas.getContext('2d');
            var circles = [];

            let conc = Math.floor(calculateConc(d.pm25));
            let x_pos_seed = 15;
            let y_pos_seed = 15;
            let x_speed_seed = 2;
            let y_speed_seed = 2;

            for (var i = 0; i < conc; i++) {
                var _x = Math.random() * canvas.width,
                    _y = Math.random() * canvas.height,
                    xspd = Math.random() * x_speed_seed,
                    yspd = Math.random() * y_speed_seed,
                    radius = 2,
                    c = new Circle(_x, _y, radius, xspd, yspd, canvas, ctx);
                circles.push(c);
            }
            function update() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = "15px Josefin Sans";
                ctx.fillStyle = "#fff";
                ctx.textAlign = "center";
                ctx.fillText(d.city, canvas.width / 2, canvas.height / 2 + 5);

                for (var i = 0; i < circles.length; i++) {
                    circles[i].drawCircle();
                    circles[i].moveCircle();
                }
                totalAnimations[j] = requestAnimationFrame(update);
            }
            totalAnimations[j] = requestAnimationFrame(update);
        })

        setTimeout(function(){
            console.log('timed out');
            totalAnimations.forEach((d)=>{
                console.log(d);
                cancelAnimationFrame(d);
            });
        },10000)





        months.forEach((d, j) => {
            new Array(12).fill(0).forEach((p,k)=>{
                var canvas = document.getElementById('mon-' + j + '-' + (k+1));
                canvas.width = canvasDims2;
                canvas.height = canvasDims2;
                var ctx = canvas.getContext('2d');
                var circles = [];
                let monthOfYear = monthsOfYear[k]

                let conc = Math.floor(calculateConc(d[monthOfYear]));
                let x_speed_seed = 2;
                let y_speed_seed = 2;

                for (var i = 0; i < conc; i++) {
                    var _x = Math.random() * canvas.width,
                        _y = Math.random() * canvas.height,
                        xspd = Math.random() * x_speed_seed,
                        yspd = Math.random() * y_speed_seed,
                        radius = 1,
                        c = new Circle(_x, _y, radius, xspd, yspd, canvas, ctx);
                    circles.push(c);
                }
                function update() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // ctx.font = "15px Josefin Sans";
                    // ctx.fillStyle = "#fff";
                    // ctx.textAlign = "center";
                    // ctx.fillText(d.city, canvas.width / 2, canvas.height / 2 + 5);

                    for (var i = 0; i < circles.length; i++) {
                        circles[i].drawCircle();
                        circles[i].moveCircle();
                    }
                    requestAnimationFrame(update);
                }
                update();
            });

        });


    })
}

