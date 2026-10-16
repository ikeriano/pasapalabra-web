// Pasapalabra 2: Nueva Edición — recreación del juego 2D de Glu (320x480) a partir del vídeo de referencia
(function () {
'use strict';
const OF = !!window.GLU_OFICIAL, EN_APP = !/standalone/.test(location.search) && !window.GLU_STANDALONE;
const RAP = /rapido/.test(location.search);
const ST = document.getElementById('st'), INP = document.getElementById('inp'), INPT = document.getElementById('inpt'), INPB = document.getElementById('inpb');
ST.appendChild(INP);
function ajusta() { const k = Math.min(innerWidth / 320, innerHeight / 480); ST.style.transform = `scale(${k}) translate(-50%,-50%)`; ST.style.transform = ''; ST.style.left = (innerWidth - 320 * k) / 2 + 'px'; ST.style.top = (innerHeight - 480 * k) / 2 + 'px'; ST.style.transform = `scale(${k})`; }
addEventListener('resize', ajusta); ajusta();
const $ = (h) => { const d = document.createElement('div'); d.innerHTML = h; return d.firstElementChild; };
const I = n => 'img/' + n;
let sndOn = localStorage.glu2_snd != '0', musOn = localStorage.glu2_mus != '0';
// ---------- sonido ----------
let AC = null; const ac = () => AC || (AC = new (window.AudioContext || window.webkitAudioContext)());
let mus = null, musK = '';
function musica(k) { if (k == musK) return; musK = k; if (mus) { mus.pause(); mus = null; } if (!OF || !k || !musOn) return; mus = new Audio('snd/' + k + '.mp3'); mus.loop = true; mus.volume = 0.55; mus.play().catch(() => { }); }
function tono(fs, tipo, dur) { try { const A = ac(); fs.forEach(([f, d]) => { const o = A.createOscillator(), g = A.createGain(), t = A.currentTime + d; o.type = tipo; o.frequency.value = f; g.gain.setValueAtTime(0.2, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur); o.connect(g).connect(A.destination); o.start(t); o.stop(t + dur + 0.05); }); } catch (e) { } }
function sfx(k) {
  if (!sndOn) return;
  if (k == 'acierto' || k == 'fallo') { new Audio('sfx/' + k + '.mp3').play().catch(() => { }); return; } // efectos de Iker (archivos exactos)
  if (OF && (k == 'pasa' || k == 'tic' || k == 'boton')) { new Audio('snd/' + k + '.mp3').play().catch(() => { }); return; }
  if (k == 'pasa') tono([[523, 0], [659, .08], [784, .16]], 'sine', .25); else if (k == 'tic') tono([[1200, 0]], 'square', .05); else tono([[700, 0]], 'sine', .08);
}
const clic = () => sfx('boton');
// ---------- utilidades ----------
const norm = s => (s || '').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-ZÑ ]/g, '').replace(/\s+/g, ' ').trim();
const nor2 = s => (s || '').toUpperCase().replace(/Ñ/g, '\u0001').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u0001/g, 'Ñ').replace(/[^A-ZÑ ]/g, '').trim();
const esIgual = (a, b) => nor2(a) == nor2(b);
let timers = []; const later = (f, ms) => { const t = setTimeout(f, RAP ? Math.min(ms, 400) : ms); timers.push(t); return t; };
const limpia = () => { timers.forEach(clearTimeout); timers = []; clearInterval(reloj); reloj = 0; INP.style.display = 'none'; };
let reloj = 0, pausado = false;
function pantalla(html) { limpia(); ST.querySelectorAll('.scr,.dlg').forEach(s => s.remove()); pausado = false; const s = $(`<div class="scr on">${html}</div>`); ST.insertBefore(s, INP); return s; }
// ---------- personajes ----------
const PJ = [{ g: 'm', n: 'Raúl' }, { g: 'f', n: 'Marta' }, { g: 'f', n: 'Elena' }, { g: 'm', n: 'Javier' }, { g: 'f', n: 'Lucía' }, { g: 'f', n: 'Pilar' }];
const BB = [[56, 171], [72, 174], [79, 175], [57, 172], [80, 176], [79, 174]];
const COLS = [['#2a2a2a', '#8fb6e8'], ['#3a2418', '#6a1648'], ['#1a1210', '#1e7a4a'], ['#4a3018', '#9cc4ec'], ['#2a1a12', '#f2f2f2'], ['#8a5a28', '#c81010']];
function avatarSVG(i) { const [pelo, ropa] = COLS[i]; return `<svg xmlns="http://www.w3.org/2000/svg" width="190" height="215" viewBox="0 0 190 215"><path d="M10 215 Q15 140 95 130 Q175 140 180 215Z" fill="${ropa}" stroke="#000" stroke-width="3"/><ellipse cx="95" cy="80" rx="38" ry="48" fill="#f1c7a0" stroke="#000" stroke-width="3"/><path d="M55 75 Q60 25 95 28 Q135 25 137 78 Q128 45 95 46 Q65 45 55 75Z" fill="${pelo}"/><circle cx="80" cy="80" r="4"/><circle cx="110" cy="80" r="4"/><path d="M82 105 Q95 113 108 105" stroke="#000" stroke-width="3" fill="none"/><circle cx="58" cy="170" r="18" fill="#f8a040" stroke="#fff" stroke-width="2"/></svg>`; }
function figura(i, x, y, esc) { // x,y = esquina como en el vídeo
  esc = esc || 1;
  if (OF) return `<img src="${I('char' + i + '.png')}" style="position:absolute;left:${x}px;top:${y}px;transform:scale(${esc});transform-origin:50% 100%">`;
  return `<div style="position:absolute;left:${x}px;top:${y}px;transform:scale(${esc});transform-origin:50% 100%">${avatarSVG(i)}</div>`;
}
const fondoEstudio = () => OF ? `<img class="img" src="${I('bg_studio.jpg')}">` : `<div style="position:absolute;left:0;top:0;width:320px;height:400px;background:linear-gradient(#dfe6f2 0 70px,#2448b0 70px 92px,transparent 92px),repeating-linear-gradient(90deg,#1c4cc4 0 14px,#6a96f4 14px 18px,#0c1c66 18px 30px)"></div>`;
const fondoEsc = () => OF ? `<img class="img" src="${I('bg_esc.jpg')}">` : fondoEstudio();
const ga = i => PJ[i].g == 'f' ? 'a' : 'o';
// ---------- barras ----------
function barra(s, txt, cls) { let b = s.querySelector('.bar'); if (!b) { b = $('<div class="bar"></div>'); s.appendChild(b); } b._tok = null; b.className = 'bar' + (cls ? ' ' + cls : ''); b.textContent = txt; return b; }
function escribe(s, txt, cb, ff) { const b = barra(s, ''); const tok = b._tok = {}; let i = 0; const paso = () => { if (!b.isConnected || b._tok !== tok) return; i += 2; b.textContent = txt.slice(0, i); if (i < txt.length) later(paso, 45); else { if (ff) b.appendChild($('<span class="ff">▶▶</span>')); cb && cb(); } }; paso(); return b; }
function dialogo(s, paginas, cb) { let k = 0; const sig = () => { if (k >= paginas.length) { s.onclick = null; return cb(); } const t = paginas[k++]; let listo = false; escribe(s, t, () => listo = true, true); s.onclick = () => { clic(); if (!listo) { barra(s, t).appendChild($('<span class="ff">▶▶</span>')); listo = true; limpia(); } else sig(); }; }; sig(); }
function topbar(s, onClica, txt) { const t = $(`<div class="top"><div class="home"></div>${onClica !== null ? `<div class="topbar">${txt || 'Clica para contestar'}</div>` : ''}</div>`); s.appendChild(t); t.querySelector('.home').onclick = e => { e.stopPropagation(); clic(); pausa(); }; const tb = t.querySelector('.topbar'); if (tb) tb.onclick = e => { e.stopPropagation(); clic(); onClica && onClica(); }; return t; }
// v2.8 · teclado del móvil: el campo se abre y se enfoca solo; con keep (rosco, escalera) sigue abierto entre palabras
function pide(cb, keep) { const ya = INP.style.display == 'block' && document.activeElement == INPT; INP.style.display = 'block'; INPT.value = ''; if (!ya) { try { INPT.focus({ preventScroll: true }); } catch (e) { INPT.focus(); } }
  const ok = () => { const v = INPT.value; if (!v.trim()) return; INPT.value = ''; if (!keep) { INP.style.display = 'none'; INPT.blur(); } INPB.onpointerdown = INPT.onkeydown = null; cb(v); };
  INPB.onclick = e => e.preventDefault(); INPB.onpointerdown = e => { e.preventDefault(); ok(); }; INPT.onkeydown = e => { if (e.key == 'Enter' || e.keyCode == 13) { e.preventDefault(); ok(); } }; }
const pideFuera = () => { INP.style.display = 'none'; INPT.blur(); };
// ---------- pausa ----------
let reanudar = null;
function pausa() {
  if (document.getElementById('dlgp')) return; pausado = true; INP.style.display = 'none';
  const d = $(`<div class="dlg" id="dlgp" style="z-index:20"><div class="pill" style="top:62px;left:20px;width:150px;text-align:left;padding-left:30px;box-sizing:border-box">Continuar</div><div class="pill" style="top:98px;left:20px;width:150px;text-align:left;padding-left:30px;box-sizing:border-box">Opciones</div><div class="pill" style="top:134px;left:20px;width:150px;text-align:left;padding-left:30px;box-sizing:border-box">Instrucciones</div><div class="pill" style="top:170px;left:20px;width:150px;text-align:left;padding-left:30px;box-sizing:border-box">Menú principal</div></div>`);
  ST.appendChild(d); const P = d.querySelectorAll('.pill');
  P[0].onclick = () => { clic(); d.remove(); pausado = false; };
  P[1].onclick = () => { clic(); opciones(d); };
  P[2].onclick = () => { clic(); ayuda(d); };
  P[3].onclick = () => { clic(); confirma('¿Volver al menú principal?', () => { d.remove(); pausado = false; menu(); }, () => { }); };
}
function confirma(txt, si, no) { const d = $(`<div class="dlg" style="z-index:30"><p>${txt}</p><div class="pill sel" style="top:184px">Sí</div><div class="pill" style="top:222px">No</div></div>`); ST.appendChild(d); const P = d.querySelectorAll('.pill'); P[0].onclick = () => { clic(); d.remove(); si(); }; P[1].onclick = () => { clic(); d.remove(); no(); }; }
function opciones(sobre) { const d = $(`<div class="dlg" style="z-index:30"><p>Opciones</p><div class="pill" style="top:150px"></div><div class="pill" style="top:190px"></div><div class="pill" style="top:240px">Volver</div></div>`); ST.appendChild(d); const P = d.querySelectorAll('.pill'); const pinta = () => { P[0].textContent = 'Sonido: ' + (sndOn ? 'Sí' : 'No'); P[1].textContent = 'Música: ' + (musOn ? 'Sí' : 'No'); }; pinta(); P[0].onclick = () => { sndOn = !sndOn; localStorage.glu2_snd = sndOn ? 1 : 0; clic(); pinta(); }; P[1].onclick = () => { musOn = !musOn; localStorage.glu2_mus = musOn ? 1 : 0; const k = musK; musK = ''; musica(k); clic(); pinta(); }; P[2].onclick = () => { clic(); d.remove(); }; }
function ayuda() { const d = $(`<div class="dlg" style="z-index:30;overflow:auto"><div style="position:absolute;left:14px;top:20px;right:14px;color:#fff;font-size:13px;line-height:17px">${Object.keys(REGLAS).map(k => `<b style="color:#f7a6ee">${NOMBRE[k]}</b><br>${REGLAS[k].join(' ')}<br><br>`).join('')}</div><div class="pill" style="position:sticky;top:440px;margin-top:440px">Volver</div></div>`); ST.appendChild(d); d.querySelector('.pill').onclick = () => { clic(); d.remove(); }; }
// ---------- textos ----------
const NOMBRE = { escalera: 'La Escalera', pulsador: 'El Pulsador', parpar: 'De Par en Par', imposible: 'Palabra imposible', rosco: 'El Rosco' };
const REGLAS = {
  escalera: ['Tendrás que hacer una escalera, es decir, empezar con una palabra larga y eliminando una letra de esa palabra conseguir otra palabra diferente con una letra menos. Se continúa así hasta que la última palabra tiene solamente tres letras.', 'Para introducir una palabra, toca la pantalla.'],
  pulsador: ['Tendrás que ser la primer@ en responder a la pregunta. Para accionar pulsa el pulsador.'],
  parpar: ['Las letras de la palabra se irán descubriendo de dos en dos. Pulsa el pulsador cuando sepas la respuesta: cuantas menos letras necesites, más segundos ganarás.'],
  imposible: ['Te daré la definición de una palabra muy difícil y tres posibles respuestas. Toca la que creas correcta.'],
  rosco: ['Deberás averiguar, a partir de las definiciones proporcionadas, palabras que empiezan por cada una de las letras del alfabeto. Si no conoces la respuesta correcta puedes pasar el turno al otro concursante para parar tu tiempo.', 'Pulsa la tecla para responder y el botón de Pasapalabra para pasar el turno.']
};
const ESCALERAS = [
  [['SECRETO', 'Cosa oculta que no le puedes desvelar a mariñas porque se la chiva a cantizano'], ['RECTOS', 'Así son los caminos responsables que siempre llegan a casa a su hora'], ['CORTE', 'Herida que te haces con un cuchillo'], ['CERO', 'Número que no vale nada'], ['REO', 'Persona condenada que cumple su pena']],
  [['PLÁTANO', 'Fruta alargada y amarilla que se pela'], ['PLANTA', 'Ser vivo que crece en la tierra y no se mueve'], ['PLATA', 'Metal precioso que da nombre a las bodas de 25 años'], ['PALA', 'Herramienta para cavar o jugar a las palas en la playa'], ['ALA', 'Extremidad con la que vuelan los pájaros']],
  [['PALOMAS', 'Aves que son símbolo de la paz'], ['PALMAS', 'Lo que se tocan en las sevillanas'], ['LAPAS', 'Moluscos pegados a las rocas, y personas que no se despegan'], ['PALA', 'Herramienta con mango y una hoja ancha'], ['ALA', 'Parte del avión donde van los motores']]];
const TEMAS = [['VILLANCICOS', [['¿Quiénes cantan villancicos, los villanos o los pastores?', 'LOS DOS'], ['¿Qué hacen los peces en el río en el villancico del mismo título?', 'BEBER'], ['¿A qué pueblo van los pastores en el villancico?', 'BELÉN'], ['¿Qué animal acompaña al buey en el portal?', 'MULA'], ['¿Cuántos Reyes Magos vienen a adorar al niño?', 'TRES']]],
  ['ANIMALES', [['¿Qué animal es el rey de la selva?', 'LEÓN'], ['¿Cómo se llama la cría de la vaca?', 'TERNERO'], ['¿Qué ave no vuela y vive en la Antártida?', 'PINGÜINO'], ['¿Qué mamífero vuela de noche?', 'MURCIÉLAGO'], ['¿Qué animal lleva su casa a cuestas?', 'CARACOL']]]];
const PARPAR = [['GUITARRA', 'Instrumento de seis cuerdas'], ['BICICLETA', 'Vehículo de dos ruedas que se mueve pedaleando'], ['MARIPOSA', 'Insecto que antes fue oruga'], ['CHOCOLATE', 'Dulce que se hace con cacao'], ['PARAGUAS', 'Lo abres cuando llueve']];
const IMPOS = [['Persona que colecciona sellos', ['FILATÉLICO', 'NUMISMÁTICO', 'BIBLIÓFILO'], 0], ['Miedo a los espacios cerrados', ['AGORAFOBIA', 'CLAUSTROFOBIA', 'ACROFOBIA'], 1], ['Palabra que se lee igual al derecho que al revés', ['PALÍNDROMO', 'ANAGRAMA', 'ACRÓNIMO'], 0], ['Estudio de los insectos', ['ORNITOLOGÍA', 'ICTIOLOGÍA', 'ENTOMOLOGÍA'], 2], ['Que dura un solo día', ['EFÍMERO', 'PERENNE', 'BIENAL'], 0]];
const LETRAS = 'ABCDEFGHIJLMNÑOPQRSTUVXYZ'.split('');
const RJ = { A: ['AFILAR', 'Sacar filo o hacer más delgado o agudo el de un arma o instrumento'], B: ['BURRITO', 'Comida típica de méxico que consiste en una tortilla de harina de trigo enrollada y rellena de carne, frijoles o queso'], C: ['CASTILLO', 'Edificio fortificado con murallas y torres'], D: ['DELFÍN', 'Mamífero marino muy inteligente que vive en grupo'], E: ['ESCOBA', 'Utensilio para barrer'], F: ['FAROLA', 'Poste con luz que ilumina la calle'], G: ['GIRASOL', 'Planta cuya flor sigue al sol'], H: ['HORMIGA', 'Insecto pequeño que vive en hormigueros'], I: ['ISLA', 'Porción de tierra rodeada de agua'], J: ['JIRAFA', 'Animal de cuello muy largo'], L: ['LIMÓN', 'Fruto cítrico amarillo y ácido'], M: ['MOCHILA', 'Bolsa que se lleva a la espalda'], N: ['NARANJA', 'Fruta cítrica de color anaranjado'], Ñ: ['Contiene la Ñ', 'ARAÑA', 'Animal de ocho patas que teje telas'], O: ['OREJA', 'Órgano del oído'], P: ['PIRATA', 'Ladrón que roba en el mar'], Q: ['QUESO', 'Alimento que se hace con leche cuajada'], R: ['RELOJ', 'Instrumento para medir el tiempo'], S: ['SANDÍA', 'Fruta grande, verde por fuera y roja por dentro'], T: ['TORTUGA', 'Reptil con caparazón'], U: ['UVA', 'Fruto de la vid'], V: ['VOLCÁN', 'Montaña que expulsa lava'], X: ['Contiene la X', 'TAXI', 'Coche con conductor que se alquila'], Y: ['YOGUR', 'Producto lácteo que se toma con cuchara'], Z: ['ZAPATO', 'Calzado que cubre el pie'] };
const RR = { A: ['ABRIR', 'Separar una cosa que está tapando una abertura, para que ésta quede libre'], B: ['BIENIO', 'Tiempo de dos años'], C: ['CUCHARA', 'Cubierto para la sopa'], D: ['DADO', 'Cubo con puntos para jugar'], E: ['ELEFANTE', 'Animal con trompa'], F: ['FUEGO', 'Calor y luz de la combustión'], G: ['GATO', 'Felino doméstico'], H: ['HIELO', 'Agua congelada'], I: ['IGLÚ', 'Casa de hielo'], J: ['JAMÓN', 'Pata de cerdo curada'], L: ['LUNA', 'Satélite de la Tierra'], M: ['MAR', 'Agua salada que cubre gran parte de la Tierra'], N: ['NUBE', 'Masa de vapor en el cielo'], Ñ: ['Contiene la Ñ', 'NIÑO', 'Persona de pocos años'], O: ['OSO', 'Animal que hiberna'], P: ['PAN', 'Alimento de harina cocido al horno'], Q: ['QUESO', 'Lo que dicen al hacer una foto'], R: ['RATÓN', 'Pequeño roedor'], S: ['SOL', 'Estrella del sistema solar'], T: ['TREN', 'Transporte sobre raíles'], U: ['UÑA', 'Lámina dura en la punta de los dedos'], V: ['VACA', 'Animal que da leche'], X: ['Contiene la X', 'EXAMEN', 'Prueba para comprobar conocimientos'], Y: ['YATE', 'Barco de recreo'], Z: ['ZORRO', 'Animal astuto de cola larga'] };
const defi = (R, l) => { const r = R[l]; return r.length == 3 ? { w: r[1], d: r[0] + '. ' + r[2] } : { w: r[0], d: 'Empieza por la ' + l + '. ' + r[1] }; };
// ---------- flujo ----------
let J = null; // partida: { pj, rival, modo, cola, seg }
function splash() {
  musica('menu');
  if (!OF) { const s = pantalla(`<div style="position:absolute;inset:0;background:linear-gradient(#d0123a,#7a0a3a 55%,#2a1a9a)"></div><div class="logo" style="top:170px">Pasapalabra<i>2</i><u>NUEVA EDICIÓN</u></div>`); s.onclick = menu; later(menu, 2500); return; }
  const seq = ['tele.jpg', 'glu.jpg', 'titulo.jpg']; let k = 0;
  const sig = () => { if (k >= seq.length) return menu(); const s = pantalla(`<img class="img" src="${I(seq[k++])}">`); s.onclick = sig; later(sig, k == 3 ? 3000 : 1800); }; sig();
}
function fondoMenu() { return OF ? `<img class="img" src="${I('menu_bg.jpg')}">` : `<div style="position:absolute;inset:0;background:linear-gradient(#d0123a,#9a1250 40%,#3a20b0 80%,#2a1ac0)"></div><div class="logo">Pasapalabra<i>2</i><u>NUEVA EDICIÓN</u></div>`; }
function menu() {
  musica('menu'); J = null;
  const N = ['Jugar', 'Entrenamiento', 'Opciones', 'Ayuda', 'Salir'], Y = [188, 242, 296, 350, 404];
  const s = pantalla(fondoMenu() + N.map((n, i) => OF ? `<img class="mbtn" src="${I('btn' + i + '.png')}" style="top:${Y[i]}px" data-i="${i}">` : `<div class="pill" style="top:${Y[i] + 5}px;left:56px;width:208px;text-align:left;padding-left:34px;box-sizing:border-box" data-i="${i}">${n}</div>`).join(''));
  s.querySelectorAll('[data-i]').forEach(b => b.onclick = () => { clic(); b.classList.add('sel'); const i = +b.dataset.i; later(() => [() => jugar(['escalera', 'pulsador', 'parpar', 'imposible', 'rosco']), entrenamiento, () => opciones(), () => ayuda(), salir][i](), 150); });
}
function salir() { confirma('¿Quieres salir del juego?', () => { musica(''); if (EN_APP && window.parent === window) location.href = '../index.html'; else if (window.Android && Android.salir) Android.salir(); else splash(); }, () => { }); }
function entrenamiento() {
  const K = ['escalera', 'pulsador', 'parpar', 'imposible', 'rosco'];
  const s = pantalla(fondoMenu() + K.map((k, i) => `<div class="pill" style="top:${190 + i * 54}px;left:52px;width:215px;height:28px;line-height:28px;border-radius:14px" data-k="${k}">${NOMBRE[k]}</div>`).join('') + (OF ? `<img class="back" src="${I('back.png')}" style="width:34px;height:34px;left:3px;top:443px">` : `<div class="back home" style="left:6px;top:448px;width:26px;height:26px"></div>`));
  s.querySelectorAll('[data-k]').forEach(b => b.onclick = () => { clic(); b.classList.add('sel'); later(() => jugar([b.dataset.k], true), 150); });
  s.querySelector('.back').onclick = () => { clic(); menu(); };
}
function jugar(cola, entreno) { J = { cola: cola.slice(), entreno, seg: 0, pj: 0, rival: 1 }; seleccion(); }
function seleccion() {
  musica('menu'); let i = J.pj;
  const s = pantalla(OF ? `<img class="img" src="${I('bg_sel.jpg')}"><div id="fg"></div><div style="position:absolute;left:14px;top:224px;width:34px;height:34px;cursor:pointer" id="izq"></div><div style="position:absolute;left:272px;top:224px;width:34px;height:34px;cursor:pointer" id="der"></div><div id="ok" style="position:absolute;left:70px;top:150px;width:180px;height:240px;cursor:pointer"></div>`
    : fondoEstudio() + `<div id="fg"></div><div class="home" id="izq" style="left:14px;top:228px;width:28px;height:28px;transform:scaleX(-1)"></div><div class="home" id="der" style="left:278px;top:228px;width:28px;height:28px"></div><div id="ok" style="position:absolute;left:70px;top:150px;width:180px;height:240px;cursor:pointer"></div><div class="bar" style="text-align:center;padding-top:22px">Por favor elige tu personaje</div>`);
  const pinta = () => { s.querySelector('#fg').innerHTML = OF ? figura(i, BB[i][0], BB[i][1]) : figura(i, 65, 171); };
  pinta(); s.querySelector('#izq').onclick = () => { clic(); i = (i + 5) % 6; pinta(); }; s.querySelector('#der').onclick = () => { clic(); i = (i + 1) % 6; pinta(); };
  s.querySelector('#ok').onclick = () => { clic(); J.pj = i; J.rival = (i + 1 + Math.floor(Math.random() * 5)) % 6; siguiente(); };
}
function siguiente() { const k = J.cola.shift(); if (!k) return final(); if (k == 'rosco' && window.PPCab) { musica(''); return PPCab.play('rosco').then(() => transicion(k, () => presenta(k, () => PRUEBA[k](() => siguiente())))); } transicion(k, () => presenta(k, () => PRUEBA[k](() => siguiente()))); }
function transicion(k, cb) {
  musica(''); const im = { escalera: 'tr_escalera.jpg', pulsador: 'tr_pulsador.jpg', rosco: 'tr_rosco.jpg' }[k];
  const s = pantalla(OF ? `<img class="img" src="${I(im || 'tr_base.jpg')}" style="opacity:0;transition:opacity .5s">${im ? '' : `<div class="tit" style="top:140px;left:120px;width:190px;text-align:left;font-size:22px">${NOMBRE[k].replace(' ', '<br>')}</div>`}` : `<div style="position:absolute;inset:0;background:radial-gradient(#d8102a,#5a0010)"></div><div class="tit">${NOMBRE[k]}</div>`);
  const im0 = s.querySelector('img'); if (im0) requestAnimationFrame(() => im0.style.opacity = 1);
  s.onclick = () => cb(); later(cb, 2600);
}
function presenta(k, cb) {
  musica(k == 'rosco' ? 'rosco' : 'intro');
  const s = pantalla(k == 'rosco' ? fondoEstudio() + (OF ? `<img src="${I('chris.png')}" style="position:absolute;left:58px;top:168px">` : `<div style="position:absolute;left:60px;top:170px">${avatarSVG(0).replace('#8fb6e8', '#fff')}</div>`) : (OF ? `<img class="img" src="${I('pres.jpg')}">` : `<div style="position:absolute;inset:0 0 80px 0;background:linear-gradient(#64d0f0,#2aa0e0)"></div><div class="logo" style="top:110px;font-size:36px">Pasapalabra</div><div style="position:absolute;left:70px;top:170px">${avatarSVG(0).replace('#8fb6e8', '#fff')}</div>`));
  const P = REGLAS[k].map(t => t.replace('@', ga(J.pj)));
  if (k == 'pulsador') { J.tema = TEMAS[Math.floor(Math.random() * TEMAS.length)]; P.push('Y el tema es: ' + J.tema[0]); }
  dialogo(s, P, cb);
}
function fin(s, txt, seg, cb) { J.seg += seg; INP.style.display = 'none'; clearInterval(reloj); barra(s, txt); later(cb, 2200); }
// ---------- La Escalera ----------
function escalera(cb) {
  musica('letra'); const E = ESCALERAS[Math.floor(Math.random() * ESCALERAS.length)]; let t = RAP ? 6 : 150, n = 0, rev = 0, hechos = [];
  const s = pantalla(fondoEsc() + figura(J.pj, OF ? BB[J.pj][0] - 70 : -10, OF ? BB[J.pj][1] + 6 : 176) + `<div id="lad"></div><div class="tmr" style="left:225px;top:328px">${t}</div>`);
  topbar(s, () => responde()); const T = s.querySelector('.tmr');
  const pinta = () => { const L = s.querySelector('#lad'); L.innerHTML = ''; E.forEach((w, i) => { if (i > n) return; const len = [...w[0]].length, y = 281 - i * 40, wd = len * 19 + 12; const txt = i < n ? w[0] : (i == 0 ? w[0][0] : '_') + ' _'.repeat(len - 1).replace(/ /g, ''); L.appendChild($(`<div class="slot" style="left:${312 - wd}px;top:${y}px;width:${wd}px">${i < n ? nor2(w[0]) : (i == 0 ? nor2(w[0])[0] : '_') + ' _'.repeat(len - 1)}</div>`)); });
    if (n < E.length) { const w = [...nor2(E[n][0])]; const pista = w.map((c, j) => (j * 7 + 3) % w.length < rev ? c : '_').join(''); L.appendChild($(`<div class="pista">${pista}</div>`)); } };
  const pregunta = () => { if (n >= E.length) { pideFuera(); return fin(s, '¡Escalera completa!', 50, cb); } pinta(); escribe(s, E[n][1]); responde(); };
  const responde = () => { if (pausado || n >= E.length) return; pide(v => { if (esIgual(v, E[n][0])) { sfx('acierto'); barra(s, nor2(E[n][0]), 'verde'); n++; rev = 0; later(pregunta, 500); } else { sfx('fallo'); barra(s, 'No es correcto. ' + E[n][1]); responde(); } }, true); };
  s.onclick = e => { if (e.target == s || e.target.tagName == 'IMG') responde(); };
  reloj = setInterval(() => { if (pausado) return; t--; T.textContent = t; if (t % 6 == 0 && n < E.length) { rev++; pinta(); } if (t <= 10 && t > 0) sfx('tic'); if (t <= 0) { fin(s, '¡Tiempo!', n * 10, cb); } }, 1000);
  pregunta();
}
// ---------- El Pulsador ----------
function pulsador(cb) {
  musica('relacionadas'); const Q = J.tema[1].slice(0, RAP ? 2 : 5); let q = 0, a = 0, b = 0, turno = null;
  const s = pantalla(`<div class="marco" style="left:4px">${fondoEstudio()}${figura(J.pj, OF ? -28 : -30, OF ? 70 : 90, OF ? 1.42 : 1)}</div><div class="marco az" style="left:160px">${fondoEstudio()}${figura(J.rival, OF ? -28 : -30, OF ? 70 : 90, OF ? 1.42 : 1)}</div><div class="tema">${J.tema[0]}</div><div class="ptos" style="left:8px">0</div><div class="ptos" style="left:286px;background:#2a7af0">0</div><div class="puls" style="left:40px"></div><div class="puls" style="left:234px"></div>`);
  topbar(s, () => pulsa(), 'Clica para contestar'); const [PA, PB] = s.querySelectorAll('.ptos'), [BA, BBt] = s.querySelectorAll('.puls');
  const sig = () => { if (q >= Q.length) return fin(s, a > b ? '¡Has ganado el pulsador!' : a == b ? '¡Empate!' : 'El pulsador es para tu rival', a * 10, cb); turno = null; BA.classList.remove('on'); BBt.classList.remove('on');
    escribe(s, '¿Estás preparad' + ga(J.pj) + ' para la pregunta?', () => later(() => { escribe(s, Q[q][0]); turno = 'abierto'; const tq = q; later(() => { if (turno == 'abierto' && q == tq) rivalResponde(); }, 2500 + Math.random() * 3500); }, 900)); };
  const rivalResponde = () => { turno = 'rival'; BBt.classList.add('on'); sfx('boton'); later(() => { const bien = Math.random() < .55; if (bien) { b++; PB.textContent = b; barra(s, nor2(Q[q][1]), 'verde'); sfx('acierto'); } else { barra(s, 'Tu rival falla. Era: ' + nor2(Q[q][1])); sfx('fallo'); } q++; later(sig, 2000); }, 1500); };
  const pulsa = () => { if (turno != 'abierto' || pausado) return; turno = 'yo'; BA.classList.add('on'); sfx('boton'); pide(v => { if (esIgual(v, Q[q][1])) { a++; PA.textContent = a; sfx('acierto'); barra(s, nor2(Q[q][1]), 'verde'); } else { sfx('fallo'); barra(s, 'No es correcto. Era: ' + nor2(Q[q][1])); } q++; later(sig, 2000); }); };
  BA.onclick = e => { e.stopPropagation(); pulsa(); };
  sig();
}
// ---------- De Par en Par ----------
function parpar(cb) {
  musica('silabas'); const L = PARPAR.slice().sort(() => Math.random() - .5).slice(0, RAP ? 2 : 4); let k = 0, gana = 0, abiertas = 0, tmo = 0, activo = false;
  const s = pantalla(fondoEstudio() + figura(J.pj, OF ? BB[J.pj][0] - 70 : -10, OF ? BB[J.pj][1] + 6 : 176) + `<div class="slot" id="pal" style="left:150px;top:250px;width:166px;font-size:15px;letter-spacing:3px"></div><div class="tmr" style="left:172px;top:322px">0</div><div class="puls" style="left:262px;top:330px"></div>`);
  topbar(s, () => pulsa()); const PAL = s.querySelector('#pal'), T = s.querySelector('.tmr');
  const sig = () => { if (k >= L.length) return fin(s, `Has ganado ${gana} segundos`, gana, cb); abiertas = 0; activo = true; const w = [...nor2(L[k][0])]; PAL.style.width = (w.length * 17 + 12) + 'px'; PAL.style.left = (314 - w.length * 17 - 12) + 'px'; const ord = w.map((_, i) => i).sort(() => Math.random() - .5);
    const pinta = () => { PAL.textContent = w.map((c, i) => ord.indexOf(i) < abiertas ? c : '_').join(''); T.textContent = Math.max(0, w.length - abiertas); }; pinta(); escribe(s, L[k][1]);
    tmo = setInterval(() => { if (pausado || !activo) return; abiertas += 2; pinta(); if (abiertas >= w.length) { clearInterval(tmo); activo = false; sfx('fallo'); barra(s, 'Era: ' + w.join('')); k++; later(sig, 1800); } }, RAP ? 500 : 3000); timers.push(tmo); };
  const pulsa = () => { if (!activo || pausado) return; activo = false; sfx('boton'); pide(v => { clearInterval(tmo); const w = nor2(L[k][0]); if (esIgual(v, w)) { const g = Math.max(1, w.length - abiertas); gana += g; sfx('acierto'); barra(s, w, 'verde'); } else { sfx('fallo'); barra(s, 'No es correcto. Era: ' + w); } k++; later(sig, 1800); }); };
  s.querySelector('.puls').onclick = e => { e.stopPropagation(); pulsa(); };
  sig();
}
// ---------- Palabra imposible ----------
function imposible(cb) {
  musica('silabas'); const L = IMPOS.slice().sort(() => Math.random() - .5).slice(0, RAP ? 2 : 4); let k = 0, ok = 0;
  const s = pantalla(fondoEstudio() + figura(J.pj, OF ? BB[J.pj][0] - 70 : -10, OF ? BB[J.pj][1] + 6 : 176) + `<div id="ops"></div>`);
  topbar(s, null); const O = s.querySelector('#ops');
  const sig = () => { if (k >= L.length) return fin(s, `Has acertado ${ok} de ${L.length}`, ok * 10, cb); const [d, op, c] = L[k]; escribe(s, d); O.innerHTML = op.map((o, i) => `<div class="pill" style="left:150px;width:164px;top:${210 + i * 40}px;font-size:13px" data-i="${i}">${o}</div>`).join('');
    O.querySelectorAll('.pill').forEach(p => p.onclick = () => { if (pausado) return; clic(); const bien = +p.dataset.i == c; O.querySelectorAll('.pill').forEach(x => x.onclick = null); p.classList.add('sel'); if (bien) { ok++; sfx('acierto'); barra(s, op[c], 'verde'); } else { sfx('fallo'); barra(s, 'No es correcto. Era: ' + op[c]); } k++; later(sig, 1800); }); };
  sig();
}
// ---------- El Rosco ----------
function rosco(cb) {
  const base = J.entreno ? 150 : 120; const yo = { t: RAP ? 8 : base + J.seg, est: {}, i: 0, R: RJ, fig: J.pj, ok: 0, ko: 0 }, el = { t: RAP ? 8 : 150 + Math.floor(Math.random() * 40), est: {}, i: 0, R: RR, fig: J.rival, ok: 0, ko: 0 };
  let quien = yo, espera = false; musica('rosco');
  const s = pantalla(fondoEstudio() + `<div class="panel"><b>Pasapalabra</b></div><div id="fg"></div><div id="ring"></div><div class="tmr" style="left:150px;top:328px;width:40px"></div><div class="ptos" style="left:156px;top:362px;width:30px;height:16px;line-height:16px;font-size:12px;background:#2a6ae0">0</div><div class="pasa">Pasa<br>palabra</div>`);
  topbar(s, () => responde()); const T = s.querySelector('.tmr'), PT = s.querySelector('.ptos');
  const pendientes = J2 => LETRAS.filter(l => !J2.est[l]);
  const pinta = () => { const J2 = quien; if (RAP) window.__GLW = defi(J2.R, LETRAS[J2.i]).w; s.querySelector('#fg').innerHTML = OF ? figura(J2.fig, BB[J2.fig][0] - 5, BB[J2.fig][1] + 6) : figura(J2.fig, 60, 176); T.className = 'tmr' + (J2 == yo ? '' : ' az'); T.textContent = Math.max(0, J2.t); PT.textContent = J2.ok;
    s.querySelector('#ring').innerHTML = LETRAS.map((l, i) => { const a = -Math.PI / 2 + (i + .3) * 2 * Math.PI / LETRAS.length; const x = 157 + 132 * Math.cos(a), y = 192 + 138 * Math.sin(a); const e = J2.est[l]; return `<div class="bola ${e == 1 ? 'ok' : e == 2 ? 'ko' : (l == LETRAS[J2.i] ? 'cur' : '')}" style="left:${x}px;top:${y}px">${l}</div>`; }).join(''); };
  const avanza = J2 => { const p = pendientes(J2); if (!p.length) return false; let i = J2.i; do { i = (i + 1) % LETRAS.length; } while (J2.est[LETRAS[i]]); J2.i = i; return true; };
  const acabado = J2 => !pendientes(J2).length || J2.t <= 0;
  const terminar = () => { clearInterval(reloj); const g = yo.ok > el.ok || (yo.ok == el.ok && yo.ko < el.ko); const todo = yo.ok == LETRAS.length; J.res = { todo, gana: g, ok: yo.ok, ko: yo.ko }; barra(s, todo ? '¡Has completado el rosco! ¡Te llevas el bote!' : g ? `¡Has ganado! ${yo.ok} aciertos y ${yo.ko} fallos` : `Ha ganado tu rival. ${yo.ok} aciertos y ${yo.ko} fallos`); later(cb, 3000); quien = null; };
  const turno = J2 => { if (acabado(yo) && acabado(el)) return terminar(); if (acabado(J2)) J2 = J2 == yo ? el : yo; quien = J2; if (J2.est[LETRAS[J2.i]]) avanza(J2); pinta(); const d = defi(J2.R, LETRAS[J2.i]); escribe(s, d.d); if (J2 == yo) responde(); else pideFuera(); if (J2 == el) later(juegaRival, 2200 + Math.random() * 1500); };
  const cambia = () => { espera = true; later(() => { espera = false; turno(quien == yo ? el : yo); }, 1600); };
  const resultado = (J2, bien, pasa) => { const l = LETRAS[J2.i], d = defi(J2.R, l); if (pasa) { if (J2 == yo) pideFuera(); sfx('pasa'); barra(s, 'Pasapalabra'); avanza(J2); pinta(); return cambia(); } J2.est[l] = bien ? 1 : 2; if (bien) { J2.ok++; sfx('acierto'); barra(s, nor2(d.w), 'verde'); pinta(); if (acabado(J2)) { if (J2 == yo) pideFuera(); return cambia(); } avanza(J2); const sigD = () => { if (quien == J2) { pinta(); escribe(s, defi(J2.R, LETRAS[J2.i]).d); if (J2 == el) later(juegaRival, 2000); else responde(); } }; if (J2 == yo) sigD(); else later(sigD, 1200); } else { if (J2 == yo) pideFuera(); J2.ko++; sfx('fallo'); barra(s, 'La respuesta correcta era ' + nor2(d.w)); pinta(); avanza(J2); cambia(); } };
  const juegaRival = () => { if (quien != el || pausado || espera) return later(juegaRival, 500); const r = Math.random(); resultado(el, r < .7, r >= .7 && r < .85); };
  const responde = () => { if (quien != yo || pausado || espera) return; pide(v => { if (quien != yo) return; if (norm(v) == 'PASAPALABRA') return resultado(yo, false, true); resultado(yo, esIgual(v, defi(yo.R, LETRAS[yo.i]).w), false); }, true); };
  s.querySelector('.pasa').onclick = e => { e.stopPropagation(); if (quien != yo || pausado || espera) return; INP.style.display = 'none'; resultado(yo, false, true); };
  s.onclick = e => { if (e.target.tagName == 'IMG' || e.target.id == 'fg') responde(); };
  reloj = setInterval(() => { if (pausado || !quien || espera) return; quien.t--; T.textContent = Math.max(0, quien.t); if (quien == yo && quien.t <= 10 && quien.t > 0) sfx('tic'); if (quien.t <= 0) { INP.style.display = 'none'; barra(s, '¡Tiempo!'); cambia(); } }, 1000);
  turno(yo);
}
const PRUEBA = { escalera, pulsador, parpar, imposible, rosco };
function final() {
  musica('resultados'); const r = J.res;
  const s = pantalla(OF ? `<img class="img" src="${I('pres.jpg')}">` : `<div style="position:absolute;inset:0 0 80px 0;background:linear-gradient(#64d0f0,#2aa0e0)"></div><div class="logo" style="top:110px;font-size:36px">Pasapalabra</div><div style="position:absolute;left:70px;top:170px">${avatarSVG(0).replace('#8fb6e8', '#fff')}</div>`);
  dialogo(s, [r ? (r.todo ? '¡Enhorabuena! ¡Has completado el rosco y te llevas el bote!' : r.gana ? `¡Enhorabuena, has ganado el programa con ${r.ok} aciertos!` : `Lo siento, esta vez ha ganado tu rival. Has conseguido ${r.ok} aciertos.`) : '¡Prueba terminada! Has ganado ' + J.seg + ' segundos para El Rosco.', '¡Hasta el próximo programa de Pasapalabra!'], menu);
}
window.GLUT = { menu, jugar, escalera, pulsador, parpar, imposible, rosco, J: () => J, sel: seleccion, splash };
splash();
})();
