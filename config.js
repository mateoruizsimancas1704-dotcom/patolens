window.PL=window.PL||{};
PL.PROVEEDORES=[['anthropic','Claude (Anthropic)','claude-sonnet-4-6'],['openai','ChatGPT (OpenAI)','gpt-4o'],['gemini','Gemini (Google)','gemini-2.5-flash'],['openrouter','OpenRouter','google/gemini-2.5-flash']];
// Claves opcionales. Solo rellenar en repositorios PRIVADOS. Mejor: escribirlas en la pestaña Ajustes.
PL.CLAVES={anthropic:'',openai:'',gemini:'',openrouter:''};
PL.lib=(()=>{const U={jspdf:['lib/jspdf.umd.min.js','https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'],leaflet:['lib/leaflet/leaflet.js','https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js'],pdfjs:['lib/pdf.min.js','https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js']},C={};
const sc=u=>new Promise((ok,ko)=>{const s=document.createElement('script');s.src=u;s.onload=ok;s.onerror=()=>{s.remove();ko(new Error('lib'));};document.head.appendChild(s);});
const G={jspdf:'jspdf',leaflet:'L',pdfjs:'pdfjsLib'};
return n=>window[G[n]]?Promise.resolve():C[n]||(C[n]=U[n].reduce((p,u)=>p.catch(()=>sc(u)),Promise.reject()).catch(e=>{C[n]=null;throw e;}));})();
PL.logo=(()=>{let c;return()=>c||(c=new Promise((ok,ko)=>{const im=new Image();im.onload=()=>{const k=document.createElement('canvas');k.width=im.naturalWidth;k.height=im.naturalHeight;k.getContext('2d').drawImage(im,0,0);ok({u:k.toDataURL('image/png'),w:k.width,h:k.height});};im.onerror=ko;im.src='logo-jbc.png';}));})();
