PL.gauge=(()=>{const GW=85.6,GH=55.4,TOP=[...Array(16)].map((_,i)=>+((i+1)*.05).toFixed(2)),BOT=[.85,.9,.95,1,1.05,1.1,1.15,1.2,1.3,1.4,1.6,1.8,2,2.5,3];
const f=v=>v.toFixed(2).replace('.',','),tx=i=>13.9+i*3.85,bx=i=>13.4+i*4.1;
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
// Dibuja el fisurómetro a escala real: s = píxeles por milímetro; (x,y) = centro del fisurómetro; rot en grados.
function draw(c,x,y,s,rot){c.save();c.translate(x,y);c.rotate((rot||0)*Math.PI/180);c.translate(-GW*s/2,-GH*s/2);
 c.fillStyle='rgba(255,255,255,.9)';rr(c,0,0,GW*s,GH*s,4*s);c.fill();c.strokeStyle='#000';c.lineWidth=Math.max(1,.25*s);c.stroke();
 c.fillStyle='#000';TOP.forEach((v,i)=>c.fillRect((tx(i)-v/2)*s,0,v*s,10*s));BOT.forEach((v,i)=>c.fillRect((bx(i)-v/2)*s,(GH-10)*s,v*s,10*s));
 c.font='bold '+(3*s)+'px system-ui, sans-serif';c.textAlign='left';c.textBaseline='middle';
 const lab=(t,cx,cy)=>{c.save();c.translate(cx*s,cy*s);c.rotate(-Math.PI/2);c.fillText(t,0,0);c.restore();};
 TOP.forEach((v,i)=>lab(f(v),tx(i),17.9));BOT.forEach((v,i)=>lab(f(v),bx(i),GH-10.8));lab('mm',9.2,17.9);lab('mm',9.2,GH-10.8);c.restore();}
return{draw,GW,GH,TOP,BOT,tx,bx};})();
