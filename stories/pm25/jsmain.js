"use strict";window.onload=function(){section0()};
"use strict";function section0(){var c=125,r=[["good",0,12,0,50,"#27ae60"],["moderate",12,35.5,50,100,"#f1c40f"],["unhealthy for sensitive groups",35.5,55.5,100,150,"#e67e22"],["unhealthy",55.5,150.5,150,200,"#e74c3c"],["very unhealthy",150.5,250.5,200,300,"#c0392b"],["hazardous",250.5,500.5,300,500,"#8e44ad"]];function u(t,i,n,e,a,r,s){this.x=t,this.y=i,this.sx=e,this.sy=a,this.r=n,this.canvas=r,this.ctx=s,this.bounce=-1,this.drawCircle=function(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,!1),this.ctx.fillStyle="#fff",this.ctx.fill()},this.moveCircle=function(){this.x+=this.sx,this.y+=this.sy,this.x+this.r>this.canvas.width?(this.x=this.canvas.width-this.r,this.sx*=this.bounce):this.x-this.r<0&&(this.x=this.r,this.sx*=this.bounce),this.y+this.r>this.canvas.height?(this.y=this.canvas.height-this.r,this.sy*=this.bounce):this.y-this.r<0&&(this.y=this.r,this.sy*=this.bounce)}}function f(t){for(var i=0;i<r.length&&!(t>=r[i][3]&&t<=r[i][4]);i++);var n=r[i][3],e=r[i][4],a=r[i][1];return(t-n)*(r[i][2]-a)/(e-n)+a}Promise.all([d3.csv("./res/total.csv"),d3.csv("./res/month2.csv")]).then(function(t){var i=t[0],n=t[1],e=["new-delhi","mumbai","bangalore","kolkata","chennai","hyderabad","new-york","los-angeles","san-francisco","paris","london","madrid","hong-kong","jakarta","singapore","beijing","shanghai","dhaka","são paulo","bogota","auckland","toronto","dubai","tokyo","moscow","amsterdam","istanbul","nairobi","cape town","johannesburg"],d=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];i.sort(function(t,i){return e.indexOf(t.city)-e.indexOf(i.city)}),n.sort(function(t,i){return e.indexOf(t.city)-e.indexOf(i.city)});var o=new Array(i).fill(0);d3.select("#squares").selectAll("g").data(i).enter().append("canvas").attr("width",c).attr("height",c).attr("class","cities").attr("id",function(t,i){return"city-"+i}).style("border",function(t,i){var n=function(t){for(var i=0;i<r.length&&!(t>=r[i][3]&&t<=r[i][4]);i++);return i}(t.pm25);return"3px solid "+r[n][5]}),d3.select("#squares-month").selectAll("div").data(n).enter().append("div").selectAll("canvas").data(function(t,i){return new Array(13).fill(i)}).enter().append("canvas").attr("width",55).attr("height",55).attr("class","months").attr("id",function(t,i){return"mon-"+t+"-"+i}).style("border",function(t,i){return 0<i?"3px solid #fff":"1px solid #333"}),i.forEach(function(n,e){var a=document.getElementById("city-"+e);a.width=c,a.height=c;for(var r=a.getContext("2d"),s=[],t=Math.floor(f(n.pm25)),i=0;i<t;i++){var h=new u(Math.random()*a.width,Math.random()*a.height,2,2*Math.random(),2*Math.random(),a,r);s.push(h)}o[e]=requestAnimationFrame(function t(){r.clearRect(0,0,a.width,a.height),r.font="15px Josefin Sans",r.fillStyle="#fff",r.textAlign="center",r.fillText(n.city,a.width/2,a.height/2+5);for(var i=0;i<s.length;i++)s[i].drawCircle(),s[i].moveCircle();o[e]=requestAnimationFrame(t)})}),setTimeout(function(){console.log("timed out"),o.forEach(function(t){console.log(t),cancelAnimationFrame(t)})},1e4),n.forEach(function(c,l){new Array(12).fill(0).forEach(function(t,i){var n=document.getElementById("mon-"+l+"-"+(i+1));n.width=55,n.height=55;for(var e=n.getContext("2d"),a=[],r=d[i],s=Math.floor(f(c[r])),h=0;h<s;h++){var o=new u(Math.random()*n.width,Math.random()*n.height,1,2*Math.random(),2*Math.random(),n,e);a.push(o)}!function t(){e.clearRect(0,0,n.width,n.height);for(var i=0;i<a.length;i++)a[i].drawCircle(),a[i].moveCircle();requestAnimationFrame(t)}()})})})}