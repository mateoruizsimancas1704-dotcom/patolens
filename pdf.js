PL.pdf=(()=>{
const pad=n=>String(n||0).padStart(4,'0'),M=8,W=263.4;
const fit=(d,o,x,y,w,h,fmt)=>{if(!o||!o.u)return null;const k=Math.min(w/o.w,h/o.h),a=o.w*k,b=o.h*k,x0=x+(w-a)/2,y0=y+(h-b)/2;d.addImage(o.u,fmt||'JPEG',x0,y0,a,b);return{x0,y0,a,b};};
const FE=v=>{const t=new Date((v||'')+'T12:00');if(isNaN(t))return'';const s=t.toLocaleDateString('es-CO',{month:'long',year:'numeric'});return s.charAt(0).toUpperCase()+s.slice(1);};
function plano(d,p,x,y,w,h){const r=fit(d,p,x,y,w,h);if(r&&p.mx!=null&&p.mx!==undefined){const cx=r.x0+p.mx*r.a,cy=r.y0+p.my*r.b,rr=r.a/22;d.setDrawColor(30,64,255);d.setLineWidth(.6);d.ellipse(cx,cy,rr,rr*1.4,'S');d.setFillColor(220,0,0);d.circle(cx,cy,rr/5,'F');d.setDrawColor(0,0,0);d.setLineWidth(.3);}}
function ficha(d,f,o){const bx=(x,y,w,h)=>d.rect(x,y,w,h),V=k=>String(f[k]==null?'':f[k]);d.setLineWidth(.3);
 bx(M,M,58,30);bx(M+58,M,163.4,30);bx(M+221.4,M,42,30);fit(d,o.logo,M+2,M+2,54,20,'PNG');
 d.setFont('helvetica','normal').setFontSize(8);d.text('FICHA TOMA DE DATOS',M+29,M+27,{align:'center'});
 const cx=M+60;d.setFont('helvetica','bold').setFontSize(8.5);d.text('PROYECTO:',cx,M+7);d.text('LOCALIZACIÓN:',cx,M+15);d.text('ANALISTAS:',cx,M+23);
 d.setFont('helvetica','normal').setFontSize(6.8);d.text(d.splitTextToSize(V('proy'),78).slice(0,2),cx+28,M+5.5);
 d.text(d.splitTextToSize(V('dir')+(f.lat!=null?' ('+f.lat.toFixed(6)+', '+f.lng.toFixed(6)+')':''),78).slice(0,3),cx+28,M+13.5);
 d.text(V('an').split('\n').slice(0,3),cx+28,M+21.5);
 const fx=M+58+163.4-50;d.setFont('helvetica','bold').setFontSize(8);d.text('FECHA:',fx,M+12);d.text('FICHA No:',fx,M+20);d.setFont('helvetica','normal');d.text(FE(f.fecha),fx+12,M+12);d.text(pad(f.numero),fx+17,M+20);
 fit(d,o.mapa,M+222.4,M+1,40,28);
 const y2=M+30,h2=86;bx(M,y2,100,h2);bx(M+100,y2,82,h2);bx(M+182,y2,81.4,h2);
 d.setFont('helvetica','normal').setFontSize(8.5);d.text('LOCALIZACIÓN ARCHIVO FOTOGRÁFICO',M+141,y2+4.5,{align:'center'});d.text('LOCALIZACIÓN LESIONES',M+222.7,y2+4.5,{align:'center'});d.line(M+100,y2+6,M+W,y2+6);
 const pl=f.pl||[];plano(d,pl[0],M+101,y2+7,80,h2-8);plano(d,pl[1],M+183,y2+7,79.4,h2-8);
 let y=y2+4;d.setFontSize(7.5);
 [['Área de estudio','area'],['Elementos constructivos','elem'],['Espacio','esp'],['Tipo','tipo'],['Lesión','les'],['Origen','ori'],['Grado','grado'],['Materiales afectados','mat']].forEach(([l,k])=>{d.setFont('helvetica','bold');d.text(l+': ',M+2,y);const w=d.getTextWidth(l+': ');d.setFont('helvetica','normal');d.text(d.splitTextToSize(V(k),96-w)[0]||'',M+2+w,y);y+=3.6;});
 [['Sintomatología','sint'],['Localización','loc']].forEach(([l,k])=>{y+=1.5;d.line(M,y-3.6,M+100,y-3.6);d.setFont('helvetica','bold').setFontSize(8.5);d.text(l,M+50,y,{align:'center'});d.line(M,y+1.2,M+100,y+1.2);y+=5;d.setFont('helvetica','normal').setFontSize(7);const t=d.splitTextToSize(V(k),96).slice(0,6);d.text(t,M+2,y);y+=t.length*3+1;});
 const y3=y2+h2;bx(M,y3,W,6);d.setFont('helvetica','bold').setFontSize(9);d.text('Registro Fotográfico',M+W/2,y3+4.3,{align:'center'});
 const y4=y3+6,ph=f.ph||[];bx(M,y4,W/2,64);bx(M+W/2,y4,W/2,64);fit(d,ph[0],M+1,y4+1,W/2-2,62);fit(d,ph[1],M+W/2+1,y4+1,W/2-2,62);bx(M,y4+64,W/2,10);bx(M+W/2,y4+64,W/2,10);
 [0,1].forEach(i=>{const x=M+W/4+i*W/2;d.setFont('helvetica','normal').setFontSize(8);d.text('Foto No '+(i+1),x,y4+68,{align:'center'});d.setFontSize(6.5);d.text(d.splitTextToSize((ph[i]&&ph[i].c)||'',W/2-4).slice(0,1),x,y4+72,{align:'center'});});}
function ubic(d,f,o){d.addPage('letter','landscape');d.setFont('helvetica','bold').setFontSize(13);d.text('UBICACIÓN GEORREFERENCIADA',M,16);d.setLineWidth(.3);d.line(M,19,M+W,19);fit(d,o.logo,M+W-30,5,30,12,'PNG');
 if(o.mapa){d.rect(M,24,150,150);fit(d,o.mapa,M,24,150,150);}
 const x=M+158;let y=30;d.setFont('helvetica','bold').setFontSize(10);d.text('Dirección',x,y);d.setFont('helvetica','normal').setFontSize(9);y+=6;const L=d.splitTextToSize(String(f.dir||'Sin dirección'),W-166).slice(0,8);d.text(L,x,y);y+=L.length*4.5+6;
 if(f.lat!=null){d.setFont('helvetica','bold').setFontSize(10);d.text('Coordenadas',x,y);d.setFont('helvetica','normal').setFontSize(9);y+=6;d.text('Latitud: '+f.lat.toFixed(6),x,y);y+=5;d.text('Longitud: '+f.lng.toFixed(6),x,y);y+=10;
  d.setTextColor(0,0,238);d.textWithLink('Abrir en Google Earth',x,y,{url:o.earth(f.lat,f.lng)});y+=7;d.textWithLink('Abrir en Google Maps',x,y,{url:o.gmaps(f.lat,f.lng)});d.setTextColor(0,0,0);}
 else{d.setFontSize(9);d.text('Sin coordenadas registradas',x,y);}}
function informe(d,f,o){const PW=215.9,PH=279.4,m=15,TW=PW-2*m;let y=m;d.addPage('letter','portrait');
 const head=()=>{fit(d,o.logo,m,8,16,16,'PNG');d.setFont('helvetica','bold').setFontSize(12);d.text('INFORME DE REHABILITACIÓN',PW-m,14,{align:'right'});d.setFont('helvetica','normal').setFontSize(8);d.text(('Ficha '+pad(f.numero)+' · '+(f.les||'')+' · '+(f.proy||'')).slice(0,95),PW-m,19,{align:'right'});d.line(m,26,PW-m,26);y=32;};
 head();const ln=(t,sz,b,gap)=>{d.setFont('helvetica',b?'bold':'normal').setFontSize(sz);d.splitTextToSize(t,TW).forEach(s=>{if(y>PH-15){d.addPage('letter','portrait');head();d.setFont('helvetica',b?'bold':'normal').setFontSize(sz);}d.text(s,m,y);y+=sz*.42+1.2;});y+=gap;};
 String(f.informe).replace(/\*\*/g,'').split('\n').forEach(r=>{r=r.replace(/\s+$/,'');if(!r.trim()){y+=1.5;return;}if(/^#{1,3}\s/.test(r))ln(r.replace(/^#{1,3}\s+/,''),11,1,1);else if(/^\s*[-*•]\s+/.test(r))ln('•  '+r.replace(/^\s*[-*•]\s+/,''),9.5,0,.3);else ln(r,9.5,0,.8);});}
function build(J,f,o){const d=new J({orientation:'landscape',unit:'mm',format:'letter'});ficha(d,f,o);ubic(d,f,o);if(f.informe&&String(f.informe).trim())informe(d,f,o);return d;}
return{build};})();
