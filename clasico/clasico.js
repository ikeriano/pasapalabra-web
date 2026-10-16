var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
(function () {
    // src/datos.js
    var LETRAS = "ABCDEFGHIJLMNÑOPQRSTUVXYZ".split("");
    var R = "A|e|ABEJA|Insecto que produce miel y cera.\nA|e|ANCLA|Instrumento de hierro que, echado al fondo del mar, sujeta la embarcaci\u00F3n.\nA|e|ALMOHADA|Colchoncillo que sirve para reclinar la cabeza en la cama.\nA|e|AJEDREZ|Juego de tablero con treinta y dos piezas, entre ellas el rey, la dama y los alfiles.\nB|e|BUTACA|Asiento con brazos y respaldo para una persona; tambi\u00E9n, el de los cines y teatros.\nB|e|BR\u00DAJULA|Instrumento con una aguja imantada que se\u00F1ala siempre el norte.\nB|e|BALLENA|Mam\u00EDfero marino de enorme tama\u00F1o que tiene barbas en lugar de dientes.\nB|e|BOMBILLA|Globo de cristal con un filamento que da luz cuando pasa la corriente.\nC|e|CARACOL|Molusco de concha en espiral que lleva su casa a cuestas.\nC|e|CEBOLLA|Hortaliza de bulbo que hace llorar al cortarla.\nC|e|CANGURO|Marsupial australiano que se desplaza a saltos y lleva a su cr\u00EDa en una bolsa.\nC|e|CALENDARIO|Sistema que divide el tiempo en d\u00EDas, semanas, meses y a\u00F1os.\nD|e|DELF\u00CDN|Cet\u00E1ceo muy inteligente y juguet\u00F3n que vive en mares templados.\nD|e|DESIERTO|Lugar arenoso o pedregoso, muy seco y casi sin vegetaci\u00F3n.\nD|e|DUENDE|Esp\u00EDritu travieso de los cuentos que, seg\u00FAn dicen, habita en las casas.\nD|e|DOMIN\u00D3|Juego de veintiocho fichas rectangulares marcadas con puntos.\nE|e|ESPEJO|Superficie pulida que refleja las im\u00E1genes.\nE|e|ESCALERA|Serie de pelda\u00F1os que sirve para subir o bajar.\nE|e|ELEFANTE|Mam\u00EDfero de gran tama\u00F1o con trompa y colmillos de marfil.\nE|e|ECLIPSE|Ocultaci\u00F3n de un astro por la interposici\u00F3n de otro.\nF|e|FAROLA|Poste con una l\u00E1mpara que alumbra las calles.\nF|e|FRESA|Fruto rojo con peque\u00F1as semillas en la superficie.\nF|e|FLAUTA|Instrumento musical de viento formado por un tubo con agujeros.\nF|e|FANTASMA|Esp\u00EDritu de un difunto que, seg\u00FAn algunos, se aparece a los vivos.\nG|e|GIRASOL|Planta de gran flor amarilla que se orienta hacia el sol.\nG|e|GUITARRA|Instrumento de seis cuerdas con caja de resonancia en forma de ocho.\nG|e|GLOBO|Bolsa de material flexible que se llena de aire o de gas.\nG|e|GAVIOTA|Ave marina de plumaje blanco y gris que vive en las costas.\nH|e|HELADO|Postre fr\u00EDo y cremoso hecho con leche, az\u00FAcar y sabores.\nH|e|HORMIGA|Insecto peque\u00F1o que vive en colonias muy organizadas.\nH|e|HUEVO|Cuerpo ovalado que ponen las aves y del que nace la cr\u00EDa.\nH|e|HAMACA|Red o lona que, colgada por los extremos, sirve de cama o columpio.\nI|e|ISLA|Porci\u00F3n de tierra rodeada de agua por todas partes.\nI|e|IGL\u00DA|Construcci\u00F3n de bloques de hielo con forma de c\u00FApula.\nI|e|IM\u00C1N|Mineral o metal que tiene la propiedad de atraer el hierro.\nI|e|INVIERNO|La estaci\u00F3n m\u00E1s fr\u00EDa del a\u00F1o.\nJ|e|JIRAFA|Mam\u00EDfero africano de cuello largu\u00EDsimo y pelaje con manchas.\nJ|e|JAB\u00D3N|Producto que, mezclado con agua, sirve para lavar.\nJ|e|JARD\u00CDN|Terreno donde se cultivan plantas y flores de adorno.\nJ|e|JUGLAR|En la Edad Media, artista que recitaba y cantaba por plazas y castillos.\nL|e|LIM\u00D3N|Fruto c\u00EDtrico amarillo de sabor muy \u00E1cido.\nL|e|L\u00C1PIZ|Barra de grafito envuelta en madera que sirve para escribir o dibujar.\nL|e|LUNA|Sat\u00E9lite natural de la Tierra.\nL|e|LECHUZA|Ave rapaz nocturna de cara blanca con forma de coraz\u00F3n.\nM|e|MARIPOSA|Insecto de alas de colores que antes fue oruga.\nM|e|MOLINO|M\u00E1quina que muele el grano, movida por el viento o por el agua.\nM|e|MANZANA|Fruto del manzano, de piel roja, verde o amarilla.\nM|e|MURCI\u00C9LAGO|Mam\u00EDfero volador nocturno que se orienta con ultrasonidos.\nN|e|NARANJA|Fruta c\u00EDtrica redonda de color anaranjado.\nN|e|NUBE|Masa de vapor de agua suspendida en la atm\u00F3sfera.\nN|e|NIDO|Lecho que construyen las aves para poner sus huevos.\nN|e|NAVAJA|Cuchillo cuya hoja se dobla para guardarla dentro del mango.\n\u00D1|c|PI\u00D1A|Fruta tropical de pulpa amarilla coronada por un penacho de hojas.\n\u00D1|c|CIG\u00DCE\u00D1A|Ave zancuda de pico largo y rojo que anida en los campanarios.\n\u00D1|c|MONTA\u00D1A|Gran elevaci\u00F3n natural del terreno.\n\u00D1|c|ARA\u00D1A|Animal de ocho patas que teje telas para cazar insectos.\nO|e|OSO|Mam\u00EDfero de pelaje espeso que pasa el invierno hibernando.\nO|e|OREJA|Parte externa del \u00F3rgano del o\u00EDdo.\nO|e|OLIVO|\u00C1rbol cuyo fruto es la aceituna.\nO|e|OC\u00C9ANO|Gran masa de agua salada que cubre la mayor parte de la Tierra.\nP|e|PARAGUAS|Utensilio port\u00E1til que protege de la lluvia.\nP|e|PING\u00DCINO|Ave marina que no vuela, de plumaje blanco y negro, propia del hemisferio sur.\nP|e|PIR\u00C1MIDE|Monumento de base cuadrada y caras triangulares, como los de Egipto.\nP|e|PANADER\u00CDA|Establecimiento donde se hace o se vende pan.\nQ|e|QUESO|Alimento s\u00F3lido que se elabora con leche cuajada.\nQ|e|QUIJOTE|Caballero andante protagonista de la novela m\u00E1s famosa de Cervantes.\nQ|e|QUIR\u00D3FANO|Sala de un hospital donde se hacen las operaciones.\nQ|e|QUINCE|N\u00FAmero que sigue al catorce.\nR|e|RELOJ|Instrumento que sirve para medir el tiempo y marcar las horas.\nR|e|RANA|Anfibio de piel lisa que salta y croa.\nR|e|ROSA|Flor del rosal, muy apreciada por su aroma.\nR|e|RAT\u00D3N|Peque\u00F1o roedor; tambi\u00E9n, aparato que mueve el cursor del ordenador.\nS|e|SERPIENTE|Reptil sin patas de cuerpo largo y cil\u00EDndrico.\nS|e|SOMBRERO|Prenda que cubre la cabeza, con copa y ala.\nS|e|SAND\u00CDA|Fruto grande de corteza verde y pulpa roja con pepitas negras.\nS|e|SIRENA|Ser mitol\u00F3gico con cuerpo de mujer y cola de pez.\nT|e|TORTUGA|Reptil con caparaz\u00F3n que se mueve muy despacio.\nT|e|TIJERAS|Instrumento de dos hojas cruzadas que sirve para cortar.\nT|e|TELESCOPIO|Instrumento \u00F3ptico para observar objetos lejanos, como los astros.\nT|e|TOMATE|Fruto rojo y jugoso que se usa en ensaladas y salsas.\nU|e|UVA|Fruto de la vid, que crece en racimos.\nU|e|UNICORNIO|Animal fabuloso con forma de caballo y un cuerno en la frente.\nU|e|UNIVERSO|Conjunto de todo lo que existe: galaxias, estrellas y planetas.\nU|e|U\u00D1A|L\u00E1mina dura que protege la punta de los dedos.\nV|e|VOLC\u00C1N|Monta\u00F1a por cuya abertura salen lava, humo y ceniza.\nV|e|VIOL\u00CDN|Instrumento de cuatro cuerdas que se toca con un arco.\nV|e|VENTANA|Abertura en una pared que da luz y ventilaci\u00F3n.\nV|e|VAMPIRO|Personaje de leyenda que chupa la sangre de sus v\u00EDctimas.\nX|c|TAXI|Autom\u00F3vil de alquiler con conductor y tax\u00EDmetro.\nX|c|EXAMEN|Prueba que se hace para comprobar los conocimientos.\nX|c|BOXEO|Deporte de combate en el que se golpea con los pu\u00F1os enfundados en guantes.\nX|e|XIL\u00D3FONO|Instrumento de percusi\u00F3n formado por l\u00E1minas de madera.\nY|e|YATE|Embarcaci\u00F3n de recreo.\nY|e|YOGUR|Alimento l\u00E1cteo de sabor \u00E1cido obtenido por fermentaci\u00F3n.\nY|e|YEGUA|Hembra del caballo.\nY|e|YEMA|Parte amarilla del huevo.\nZ|e|ZAPATO|Calzado que no pasa del tobillo.\nZ|e|ZANAHORIA|Ra\u00EDz comestible de color naranja.\nZ|e|ZORRO|Mam\u00EDfero carn\u00EDvoro de cola larga y peluda, famoso por su astucia.\nZ|e|ZARAGOZANO|Natural de la ciudad aragonesa en la que se encuentra la bas\u00EDlica del Pilar.";
    var BANCO = R.split("\n").map(function (l) {
        var _a = __read(l.split("|"), 4), l0 = _a[0], t = _a[1], w = _a[2], d = _a[3];
        return { l: l0, t: t, w: w, d: d };
    });
    var porLetra = function (l) { return BANCO.filter(function (b) { return b.l === l; }); };
    var prefijo = function (b) { return (b.t === "e" ? "Empieza por la " : "Contiene la ") + b.l + "."; };
    var U = "\u00BFCu\u00E1l es el r\u00EDo m\u00E1s largo de la pen\u00EDnsula ib\u00E9rica?|Tajo|Ebro|Duero|Guadalquivir\n\u00BFQu\u00E9 planeta es conocido como el planeta rojo?|Marte|J\u00FApiter|Venus|Saturno\n\u00BFCu\u00E1ntos jugadores tiene un equipo de f\u00FAtbol en el campo?|Once|Diez|Doce|Nueve\n\u00BFQui\u00E9n pint\u00F3 Las Meninas?|Vel\u00E1zquez|Goya|Picasso|El Greco\n\u00BFEn qu\u00E9 pa\u00EDs est\u00E1n las pir\u00E1mides de Guiza?|Egipto|M\u00E9xico|Per\u00FA|Grecia\n\u00BFCu\u00E1l es el oc\u00E9ano m\u00E1s grande del mundo?|Pac\u00EDfico|Atl\u00E1ntico|\u00CDndico|\u00C1rtico\n\u00BFQu\u00E9 instrumento tiene ochenta y ocho teclas?|Piano|\u00D3rgano|Acorde\u00F3n|Arpa\n\u00BFCu\u00E1l es la capital de Portugal?|Lisboa|Oporto|Co\u00EDmbra|Braga\n\u00BFCu\u00E1ntas patas tiene una ara\u00F1a?|Ocho|Seis|Diez|Doce\n\u00BFQu\u00E9 gas respiran las plantas para hacer la fotos\u00EDntesis?|Di\u00F3xido de carbono|Ox\u00EDgeno|Helio|Nitr\u00F3geno\n\u00BFEn qu\u00E9 ciudad est\u00E1 la Sagrada Familia?|Barcelona|Madrid|Valencia|Sevilla\n\u00BFQui\u00E9n escribi\u00F3 Cien a\u00F1os de soledad?|Garc\u00EDa M\u00E1rquez|Vargas Llosa|Neruda|Cort\u00E1zar\n\u00BFCu\u00E1l es el animal terrestre m\u00E1s r\u00E1pido?|Guepardo|Le\u00F3n|Caballo|Gacela\n\u00BFCu\u00E1ntos lados tiene un hex\u00E1gono?|Seis|Cinco|Ocho|Siete\n\u00BFQu\u00E9 selecci\u00F3n gan\u00F3 el Mundial de f\u00FAtbol de 2010?|Espa\u00F1a|Holanda|Alemania|Brasil\n\u00BFDe qu\u00E9 color es la caja negra de los aviones?|Naranja|Negra|Roja|Gris\n\u00BFCu\u00E1l es el metal m\u00E1s abundante de la corteza terrestre?|Aluminio|Hierro|Cobre|Oro\n\u00BFQu\u00E9 pa\u00EDs tiene forma de bota?|Italia|Grecia|Chile|Noruega\n\u00BFCu\u00E1ntos huesos tiene aproximadamente un adulto?|Doscientos seis|Ciento cincuenta|Trescientos|Cien\n\u00BFQu\u00E9 vitamina nos da sobre todo el sol?|Vitamina D|Vitamina C|Vitamina A|Vitamina B\n\u00BFCu\u00E1l es la monta\u00F1a m\u00E1s alta de Espa\u00F1a?|Teide|Mulhac\u00E9n|Aneto|Veleta\n\u00BFEn qu\u00E9 a\u00F1o lleg\u00F3 el hombre a la Luna?|Mil novecientos sesenta y nueve|Mil novecientos setenta y dos|Mil novecientos cincuenta y siete|Mil novecientos ochenta\n\u00BFQu\u00E9 animal es el s\u00EDmbolo de la paz?|Paloma|\u00C1guila|Cisne|B\u00FAho\n\u00BFQui\u00E9n compuso Las cuatro estaciones?|Vivaldi|Mozart|Bach|Beethoven\n\u00BFCu\u00E1l es el idioma m\u00E1s hablado del mundo como lengua materna?|Chino mandar\u00EDn|Ingl\u00E9s|Espa\u00F1ol|Hindi\n\u00BFCu\u00E1ntos minutos tiene un partido de baloncesto de la liga ACB?|Cuarenta|Cuarenta y ocho|Sesenta|Noventa\n\u00BFQu\u00E9 fruta es conocida como el oro verde de M\u00E9xico?|Aguacate|Lima|Kiwi|Pera\n\u00BFEn qu\u00E9 continente est\u00E1 Kenia?|\u00C1frica|Asia|Ocean\u00EDa|Am\u00E9rica\n\u00BFC\u00F3mo se llama el hueso m\u00E1s largo del cuerpo humano?|F\u00E9mur|H\u00FAmero|Tibia|Radio\n\u00BFCu\u00E1l es la capital de Australia?|Canberra|S\u00EDdney|Melbourne|Perth";
    var UNA4 = U.split("\n").map(function (l) {
        var p = l.split("|");
        return { q: p[0], ok: p[1], ops: p.slice(1) };
    });
    var SOPAS = [
        ["Animales del horóscopo chino", ["RATA", "TIGRE", "MONO"]],
        ["Colores", ["ROJO", "AZUL", "VERDE"]],
        ["Frutas", ["PERA", "KIWI", "LIMA"]],
        ["Partes del cuerpo", ["BRAZO", "CODO", "PIE"]],
        ["Instrumentos musicales", ["PIANO", "ARPA", "BOMBO"]],
        ["Ríos de España", ["EBRO", "TAJO", "DUERO"]],
        ["Deportes", ["TENIS", "GOLF", "POLO"]],
        ["Meses del año", ["MAYO", "JUNIO", "JULIO"]]
    ];
    var C = [
        [["SOL", "Estrella que nos da luz y calor."], ["MAR", "Masa de agua salada."], ["PAN", "Alimento hecho con harina, agua y levadura."], ["RÍO", "Corriente de agua que desemboca en el mar."], ["OSO", "Mamífero que hiberna."], ["TÉ", "Infusión de origen chino."], ["LUZ", "Lo contrario de oscuridad."], ["PEZ", "Animal acuático con aletas."], ["REY", "Monarca de un reino."]],
        [["GATO", "Felino doméstico que maúlla."], ["MESA", "Mueble con tablero y patas."], ["NUBE", "Masa de vapor en el cielo."], ["LAGO", "Masa de agua dulce rodeada de tierra."], ["TREN", "Vehículo que circula por raíles."], ["VACA", "Hembra del toro."], ["PIPA", "Semilla del girasol."], ["CAMA", "Mueble para dormir."], ["FOCA", "Mamífero marino con bigotes que aplaude en los acuarios."]],
        [["LIBRO", "Conjunto de hojas impresas y encuadernadas."], ["PLAYA", "Ribera arenosa del mar."], ["QUESO", "Alimento de leche cuajada."], ["RADIO", "Aparato que recibe emisiones de sonido."], ["TIGRE", "Felino de pelaje rayado."], ["CEBRA", "Équido africano de rayas blancas y negras."], ["FRESA", "Fruto rojo con semillas por fuera."], ["LLAVE", "Sirve para abrir una cerradura."], ["NIEVE", "Agua helada que cae en copos."]]
    ].map(function (s) { return s.map(function (_a) {
        var _c = __read(_a, 2), w = _c[0], d = _c[1];
        return ({ w: w, d: d });
    }); });
    var CRUZADAS = C;
    var DONDE = [
        ["Animales de granja", ["VACA", "OVEJA", "CERDO", "GALLINA", "CABALLO", "CONEJO", "PATO", "BURRO", "CABRA"]],
        ["En la cocina", ["SARTÉN", "OLLA", "CUCHARA", "HORNO", "NEVERA", "TENEDOR", "PLATO", "VASO", "JARRA"]],
        ["Profesiones", ["MÉDICO", "BOMBERO", "PINTOR", "PANADERO", "PILOTO", "MAESTRO", "CARTERO", "JUEZ", "COCINERO"]],
        ["En la playa", ["TOALLA", "ARENA", "OLAS", "SOMBRILLA", "CUBO", "GAVIOTA", "CONCHA", "HAMACA", "CANGREJO"]],
        ["Nombres", ["AGUSTINA", "MARIANO", "LUCÍA", "ROBERTO", "CARMEN", "ANDRÉS", "PILAR", "JAVIER", "TERESA"]],
        ["El hámster", ["MAMÍFERO", "CEREALES", "ROEDOR", "CORRER", "MEJILLAS", "RUEDA", "EXCAVAR", "PEQUEÑO", "DIENTES"]]
    ];
    var norm = function (s) { return String(s || "").toUpperCase().normalize("NFD").replace(/[\u0300-\u0302\u0304-\u036f]/g, "").replace(/N\u0303/g, "Ñ").replace(/[^A-ZÑ0-9 ]/g, "").trim(); };
    var rnd = function (seed) { return function () {
        seed = seed + 1831565813 | 0;
        var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }; };
    var baraja = function (a, r) {
        if (r === void 0) { r = Math.random; }
        a = a.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(r() * (i + 1));
            var t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
        return a;
    };
    function rosco(r) {
        if (r === void 0) { r = Math.random; }
        return LETRAS.map(function (l) {
            var o = porLetra(l);
            return o[Math.floor(r() * o.length)];
        });
    }
    function hoySemilla() {
        var d = /* @__PURE__ */ new Date();
        return d.getFullYear() * 1e4 + (d.getMonth() + 1) * 100 + d.getDate();
    }
    var BOTE0 = 1e5;
    var BOTE_INC = 6e3;
    var PREMIO_DIA = 1200;
    function bote() {
        var v = +(localStorage.getItem("pp_bote") || 0);
        return v >= BOTE0 ? v : BOTE0;
    }
    function boteSube() {
        var v = bote() + BOTE_INC;
        localStorage.setItem("pp_bote", String(v));
        return v;
    }
    function boteGanado() {
        localStorage.setItem("pp_bote", String(BOTE0));
    }
    var euros = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €"; };
    function finalElegida() {
        var v = localStorage.getItem("pp_final");
        return v === "alaz" ? "alaz" : "rosco";
    }
    function estructura(w, vis) {
        return w.split("").map(function (c, i) { return c === " " ? " " : vis.indexOf(i) >= 0 ? c : "_"; });
    }
    function defParcial(d) {
        var p = d.split(" ");
        return p.length < 6 ? d : p.slice(0, Math.ceil(p.length * 0.6)).join(" ") + "…";
    }
    // src/clasico.js
    var IMG = function (n) { return "img/" + n.replace(/ /g, "_") + ".png"; };
    var $ = function (t, cls, html) {
        var e = document.createElement(t);
        if (cls)
            e.className = cls;
        if (html != null)
            e.innerHTML = html;
        return e;
    };
    var root = document.getElementById("pp");
    var SND = {};
    var sndOn = localStorage.getItem("pp_sfx") !== "0";
    var musOn = localStorage.getItem("pp_mus") !== "0";
    var musica = null;
    function snd(n, vol) {
        if (!sndOn)
            return;
        try {
            var a = SND[n];
            if (!a)
                a = SND[n] = new Audio("snd/" + n + ".mp3");
            a = a.cloneNode();
            a.volume = vol == null ? 1 : vol;
            var p = a.play();
            if (p && p.catch)
                p.catch(function () {
                });
        }
        catch (e) {
        }
    }
    function music(on) {
        try {
            if (!musica) {
                musica = new Audio("snd/music.mp3");
                musica.loop = true;
                musica.volume = 0.45;
            }
            if (on && musOn) {
                var p = musica.play();
                if (p && p.catch)
                    p.catch(function () {
                    });
            }
            else
                musica.pause();
        }
        catch (e) {
        }
    }
    var timers = [];
    var later = function (f, ms) {
        var t = setTimeout(f, ms);
        timers.push(t);
        return t;
    };
    var every = function (f, ms) {
        var t = setInterval(f, ms);
        timers.push(t);
        return t;
    };
    function limpia() {
        timers.forEach(function (t) {
            clearTimeout(t);
            clearInterval(t);
        });
        timers = [];
        document.onkeydown = null;
    }
    function pantalla(cls) {
        limpia();
        root.innerHTML = "";
        var s = $("div", "scr " + (cls || ""));
        s.style.backgroundImage = "url(" + IMG("background_donut") + ")";
        root.appendChild(s);
        return s;
    }
    var mmss = function (s) {
        s = Math.max(0, Math.ceil(s));
        return Math.floor(s / 60) + ":" + ("0" + s % 60).slice(-2);
    };
    var carrera = null;
    var RONDAS = function () { return ["silla", "una4", localStorage.getItem("pp_sopa") === "cruzadas" ? "cruzadas" : "sopa", "donde"]; };
    var NOMBRE = { silla: "La silla azul", una4: "Una de cuatro", sopa: "Sopa de letras", cruzadas: "Palabras cruzadas", donde: "¿Dónde están?", rosco: "El rosco", alaz: "AlaZ" };
    var ICONO = { silla: "icon_blueChair", una4: "icon_oneOfFour", sopa: "icon_alphabetSoup", cruzadas: "icon_alphabetSoup", donde: "icon_whereAre", rosco: "icon_donut", alaz: "icon_donut" };
    function cabecera(s, titulo, icono, salir) {
        var h2 = $("div", "hdr");
        var b = $("button", "back", '<img src="' + IMG("icon_back") + '"><small>SALIR</small>');
        b.onclick = function () {
            snd("menu_press");
            (salir || menu)();
        };
        h2.append(b, $("div", "htit", titulo));
        if (icono) {
            var im = $("img", "hico");
            im.src = IMG(icono);
            h2.appendChild(im);
        }
        s.appendChild(h2);
        return h2;
    }
    function reloj(s, seg, alAcabar, cls) {
        var r = $("div", "timer " + (cls || ""));
        r.style.backgroundImage = "url(" + IMG("button_timer_blue") + ")";
        var t = $("span", "", mmss(seg));
        r.appendChild(t);
        s.appendChild(r);
        var o = { left: seg, run: true, el: r, add: function (x) {
                o.left += x;
                t.textContent = mmss(o.left);
            }, stop: function () {
                o.run = false;
            } };
        var last = Date.now();
        every(function () {
            var n = Date.now(), d = (n - last) / 1e3;
            last = n;
            if (!o.run)
                return;
            o.left -= d;
            t.textContent = mmss(o.left);
            if (o.left <= 10 && o.left > 0 && Math.ceil(o.left) !== o._b) {
                o._b = Math.ceil(o.left);
                snd("countdown_time", 0.5);
            }
            if (o.left <= 0) {
                o.run = false;
                snd("countdown_timeOut");
                alAcabar();
            }
        }, 200);
        return o;
    }
    function marcador(s, cls) {
        var m = $("div", "score " + (cls || ""));
        var ok = $("div", "ball ok", "0"), ko = $("div", "ball ko", "0");
        ok.style.backgroundImage = "url(" + IMG("button_score") + ")";
        ko.style.backgroundImage = "url(" + IMG("button_fails") + ")";
        m.append(ok, ko);
        s.appendChild(m);
        return { ok: 0, ko: 0, hit: function () {
                ok.textContent = ++this.ok;
            }, fail: function () {
                ko.textContent = ++this.ko;
            } };
    }
    function enunciado(s, txt, cls) {
        var p = $("div", "stmt " + (cls || ""));
        p.innerHTML = txt;
        s.appendChild(p);
        return p;
    }
    function teclado(s, onEnter, extra) {
        var w = $("div", "kbw");
        var row = $("div", "inrow");
        var clr = $("button", "kclr", '<img src="' + IMG("keyboard_clear") + '">'), inp = $("div", "kin"), ok = $("button", "kok", '<svg viewBox="0 0 48 48" width="100%" height="100%"><circle cx="24" cy="24" r="23" fill="#1f8cf0"/><rect x="19" y="10" width="10" height="17" rx="5" fill="#fff"/><path d="M15 23a9 9 0 0 0 18 0" stroke="#fff" stroke-width="3" fill="none"/><path d="M24 32v6M19 38h10" stroke="#fff" stroke-width="3"/></svg>');
        var val = "";
        var pinta = function () {
            inp.textContent = val;
        };
        clr.onclick = function () {
            val = "";
            pinta();
        };
        ok.onclick = function () {
            if (val.trim()) {
                var v = val;
                val = "";
                pinta();
                onEnter(v);
            }
        };
        row.append(clr, inp, ok);
        w.appendChild(row);
        ["QWERTYUIOP", "ASDFGHJKLÑ", "ZXCVBNM<"].forEach(function (f) {
            var r = $("div", "krow");
            f.split("").forEach(function (c) {
                var k = $("button", "key", c);
                k.style.backgroundImage = "url(" + IMG("keyboard_key") + ")";
                k.onclick = function () {
                    if (c === "<")
                        val = val.slice(0, -1);
                    else if (val.length < 18)
                        val += c;
                    pinta();
                };
                r.appendChild(k);
            });
            w.appendChild(r);
        });
        var sp = $("button", "key space", "");
        sp.onclick = function () {
            val += " ";
            pinta();
        };
        var r4 = $("div", "krow");
        r4.appendChild(sp);
        w.appendChild(r4);
        document.onkeydown = function (e) {
            if (e.key === "Enter")
                ok.onclick();
            else if (e.key === "Backspace") {
                val = val.slice(0, -1);
                pinta();
            }
            else if (e.key.length === 1 && /[a-zñ ]/i.test(e.key)) {
                val += e.key.toUpperCase();
                pinta();
            }
        };
        s.appendChild(w);
        return { set: function (v) {
                val = v;
                pinta();
            } };
    }
    function banner(s, txt, sub, ms) {
        var b = $("div", "banner", (sub ? "<small>" + sub + "</small>" : "") + "<b>" + txt + "</b>");
        s.appendChild(b);
        later(function () { return b.remove(); }, ms || 1600);
    }
    function intro() {
        var s = pantalla("intro");
        var l = $("img", "biglogo");
        l.src = IMG("logo_pasapalabra");
        s.appendChild(l);
        var lt = $("div", "fall");
        for (var i = 0; i < 14; i++) {
            var c = $("span", "", LETRAS[i * 7 % 25]);
            c.style.left = i * 7 + 3 + "%";
            c.style.animationDelay = i * 0.37 + "s";
            lt.appendChild(c);
        }
        s.appendChild(lt);
        s.appendChild($("div", "tap", "Toca para empezar"));
        s.appendChild($("div", "ver", "v" + (window.PP_VERSION || "1.0")));
        s.onclick = function () {
            snd("game_in");
            music(true);
            menu();
        };
    }
    function pills(s) {
        var top = $("div", "mtop");
        top.innerHTML = '<div class="pill"><img src="' + IMG("icon_ticket_hard") + '">' + (localStorage.getItem("pp_tickets") || "649") + '</div><div class="pill"><img src="' + IMG("PointsIcon") + '">' + (JSON.parse(localStorage.getItem("pp_rank") || "[]").reduce(function (a, x) { return a + Math.max(0, x.p); }, 0) + 28683) + "</div>";
        s.appendChild(top);
    }
    function menu() {
        carrera = null;
        var s = pantalla("menu");
        music(true);
        pills(s);
        var g = $("button", "mgear", '<img src="' + IMG("icon_settings") + '"><span>OPCIONES</span>');
        g.onclick = function () {
            snd("menu_press");
            opciones();
        };
        s.appendChild(g);
        var l = $("img", "mlogo");
        l.src = IMG("logo_pasapalabra");
        s.appendChild(l);
        s.appendChild($("div", "ver", "v" + (window.PP_VERSION || "1.0")));
        var b = function (cls, ic, txt, f, badge) {
            var e = $("button", "mb " + cls, '<i style="background-image:url(' + IMG(ic) + ')"></i><span>' + txt + "</span>" + (badge ? "<em>" + badge + "</em>" : ""));
            e.onclick = function () {
                snd("menu_press");
                f();
            };
            s.appendChild(e);
        };
        b("m-rank", "icon_ranking", "RANKING", ranking);
        b("m-tienda", "icon_shop", "TIENDA", tienda);
        var ad = $("button", "mb m-ad", '<img src="' + IMG("button_ad") + '">');
        ad.onclick = function () { return banner(s, "¡+1 ticket!", "VER ANUNCIO", 1200); };
        s.appendChild(ad);
        b("m-mision", "icon_daily", "MISIÓN DIARIA", function () { return final("rosco", { diario: true }); });
        var av = $("button", "mavatar", '<div class="avc"><img src="' + IMG("image_emptyUser") + '"><b>' + (1 + Math.floor(JSON.parse(localStorage.getItem("pp_rank") || "[]").length / 3)) + "</b></div><span>" + (localStorage.getItem("pp_nombre") || "IKER") + "</span>");
        av.onclick = function () {
            var n = prompt("Tu nombre", localStorage.getItem("pp_nombre") || "IKER");
            if (n) {
                localStorage.setItem("pp_nombre", n.toUpperCase().slice(0, 12));
                menu();
            }
        };
        s.appendChild(av);
        b("m-carrera", "icon_singleplayer", "CARRERA", function () { return elegir(); });
        b("m-diario", "icon_daily", "ROSCO DIARIO", function () { return final(finalElegida(), { diario: true }); }, "+");
        b("m-comp", "icon_multiplayer", "COMPETICIÓN", function () {
            carrera = { seg: {}, comp: true };
            progreso();
        });
    }
    function elegir() {
        var s = pantalla("chooser");
        pills(s);
        var cn = $("div", "cnts", '<span class="r">⏱ 0</span><span class="b">🎯 87</span><span class="g">✓ 186</span>');
        s.appendChild(cn);
        var p = $("div", "card");
        p.appendChild($("div", "ctab", '<img src="' + IMG("icon_solo") + '"><br>CARRERA'));
        var x = $("button", "cx", "✕");
        x.onclick = menu;
        p.appendChild(x);
        p.appendChild($("div", "ctit", "ELIGE MODO DE JUEGO"));
        var g = $("div", "grid");
        var sel = "silla";
        var sopaK = localStorage.getItem("pp_sopa") === "cruzadas" ? "cruzadas" : "sopa";
        var T = [["silla", "La silla azul"], ["una4", "Una de cuatro"], [sopaK, NOMBRE[sopaK]], ["donde", "¿Dónde están?"], ["rosco", finalElegida() === "alaz" ? "AlaZ" : "El rosco"], ["tv", "Programa TV"]];
        T.forEach(function (_a) {
            var _c = __read(_a, 2), k = _c[0], n = _c[1];
            var t = $("button", "tile" + (k === "tv" ? " tv" : "") + (k === sel ? " sel" : ""), '<img src="' + IMG(k === "tv" ? "icon_classic" : ICONO[k]) + '"><span>' + n + "</span>");
            t.onclick = function () {
                snd("menu_press");
                sel = k;
                g.querySelectorAll(".tile").forEach(function (e) { return e.classList.remove("sel"); });
                t.classList.add("sel");
            };
            g.appendChild(t);
        });
        p.appendChild(g);
        p.appendChild($("div", "cnote", '<span><img src="' + IMG("icon_ranking") + '"> No puntúa para el ranking</span><span>💡 Ayudas permitidas</span>'));
        s.appendChild(p);
        var j = $("button", "play", "JUGAR<small>Coste: 3 🎟</small>");
        j.style.backgroundImage = "url(" + IMG("button_orange") + ")";
        s.appendChild(j);
        s.appendChild($("div", "foot", "Atención: Permanece en la partida o recibirás una penalización de tiempo. ¡Buena suerte!"));
        j.onclick = function () {
            snd("game_in");
            if (sel === "tv") {
                carrera = { seg: {} };
                progreso();
            }
            else if (sel === "rosco")
                final(finalElegida(), {});
            else
                ronda(sel, true);
        };
    }
    function progreso() {
        var s = pantalla("prog");
        music(false);
        var L = RONDAS();
        var i = L.findIndex(function (k) { return carrera.seg[k] == null; });
        var lista2 = $("div", "plist");
        L.forEach(function (k, n) {
            var r = $("div", "prow" + (n === i ? " cur" : "") + (carrera.seg[k] != null ? " done" : ""), '<img src="' + IMG(ICONO[k]) + '"><b>' + NOMBRE[k].toUpperCase() + "</b>" + (n === i ? "<small>Presiona para empezar</small>" : "") + (carrera.seg[k] != null ? "<i>" + carrera.seg[k] + "</i>" : ""));
            if (n === i)
                r.onclick = function () {
                    snd("menu_press");
                    ronda(k);
                };
            lista2.appendChild(r);
        });
        var tot = L.reduce(function (a, k) { return a + (carrera.seg[k] || 0); }, 0);
        var f = finalElegida();
        var rr = $("div", "prow fin" + (i < 0 ? " cur" : ""), '<img src="' + IMG("icon_donut") + '"><b>' + NOMBRE[f].toUpperCase() + "</b><i>" + tot + "</i>" + (i < 0 ? "<small>Presiona para empezar</small>" : ""));
        if (i < 0)
            rr.onclick = function () { return final(f, { extra: tot }); };
        lista2.appendChild(rr);
        s.appendChild(lista2);
        var h2 = $("button", "home", "⌂");
        h2.onclick = menu;
        s.appendChild(h2);
    }
    function finRonda(k, seg, solo) {
        if (carrera && !solo) {
            carrera.seg[k] = seg;
            snd("game_out");
            later(progreso, 1800);
        }
        else {
            snd("game_out");
            later(elegir, 1800);
        }
    }
    function ronda(k, solo) {
        ({ silla: silla, una4: una4, sopa: sopa, cruzadas: cruzadas, donde: donde })[k](solo);
    }
    function turno(s, nombre, f) {
        var t = $("div", "turn", "<small>TU TURNO</small><b>" + nombre + "</b>");
        s.appendChild(t);
        snd("message_in");
        later(function () {
            t.remove();
            f();
        }, 1700);
    }
    function silla(solo) {
        var s = pantalla("silla");
        cabecera(s, "LA SILLA AZUL", "icon_blueChair");
        s.querySelector(".back img").src = IMG("image_emptyUser");
        var n = 0, vidas = 2, hits = 0;
        var TOT = 7;
        var usadas = {};
        var cont = $("div", "cnt", "");
        s.appendChild(cont);
        var st = enunciado(s, "");
        var fila = $("div", "sfila");
        s.appendChild(fila);
        var pts = $("div", "ball ok big", "0");
        pts.style.backgroundImage = "url(" + IMG("button_score") + ")";
        var fin = function () {
            banner(s, hits + " aciertos", "LA SILLA AZUL", 1600);
            finRonda("silla", hits * 2, solo);
        };
        var actual = null;
        snd("blueChair_in");
        var pide = function () {
            if (n >= TOT || vidas <= 0)
                return fin();
            cont.textContent = n + 1 + "/" + TOT;
            var op = baraja(LETRAS.filter(function (l) { return !usadas[l] && porLetra(l).some(function (b) { return b.t === "e"; }); })).slice(0, 2);
            st.innerHTML = "<small>Elige letra</small>";
            fila.innerHTML = "";
            op.forEach(function (l) {
                var b = $("button", "donut big", l);
                b.style.backgroundImage = "url(" + IMG("donut_default") + ")";
                b.onclick = function () {
                    usadas[l] = 1;
                    snd("menu_press");
                    muestra(l);
                };
                fila.appendChild(b);
            });
        };
        var muestra = function (l) {
            var c = porLetra(l).filter(function (b) { return b.t === "e"; });
            actual = c[Math.floor(Math.random() * c.length)];
            st.innerHTML = actual.d.toUpperCase();
            fila.innerHTML = "";
            var d = $("div", "donut", l);
            d.style.backgroundImage = "url(" + IMG("donut_selected") + ")";
            fila.insertBefore(pts, fila.firstChild);
            fila.appendChild(d);
            for (var i = 0; i < 2; i++) {
                var v = $("div", "life" + (i < vidas ? "" : " off"));
                v.style.backgroundImage = "url(" + IMG(i < vidas ? "donut_hit" : "donut_gray") + ")";
                fila.appendChild(v);
            }
            var bu = $("div", "bulb", "💡");
            bu.style.backgroundImage = "url(" + IMG("dot_info") + ")";
            fila.appendChild(bu);
        };
        teclado(s, function (v) {
            if (!actual)
                return;
            var ok = norm(v) === norm(actual.w);
            if (ok) {
                hits++;
                pts.textContent = hits;
                snd("blueChair_hit");
                banner(s, "¡CORRECTO!", actual.w, 900);
            }
            else {
                vidas--;
                snd("blueChair_fail");
                banner(s, actual.w, "ERA…", 1300);
            }
            actual = null;
            n++;
            later(pide, 1200);
        });
        turno(s, "La silla azul", pide);
    }
    function una4(solo) {
        var s = pantalla("una4");
        cabecera(s, "Una de Cuatro", "icon_oneOfFour");
        var Q = baraja(UNA4).slice(0, 17);
        var i = 0, acabado = false;
        var cont = $("div", "cnt");
        s.appendChild(cont);
        var st = enunciado(s, "");
        var ops = $("div", "ops");
        s.appendChild(ops);
        var sc = marcador(s, "left");
        var fin = function () {
            if (acabado)
                return;
            acabado = true;
            t.stop();
            finRonda("una4", sc.ok * 2, solo);
        };
        var sig = function () {
            if (i >= Q.length)
                return fin();
            var q = Q[i];
            cont.textContent = i + 1 + "/" + Q.length;
            st.innerHTML = q.q.toUpperCase();
            ops.innerHTML = "";
            baraja(q.ops).forEach(function (o) {
                var b = $("button", "op", o.toUpperCase());
                b.style.backgroundImage = "url(" + IMG("button_blue") + ")";
                b.onclick = function () {
                    if (ops.dataset.l)
                        return;
                    ops.dataset.l = 1;
                    var ok = o === q.ok;
                    b.style.backgroundImage = "url(" + IMG(ok ? "button_green_new" : "button_red") + ")";
                    if (ok) {
                        sc.hit();
                        snd("oneOfFour_hit");
                    }
                    else {
                        sc.fail();
                        snd("oneOfFour_fail");
                        [].forEach.call(ops.children, function (e) {
                            if (e.textContent === q.ok.toUpperCase())
                                e.style.backgroundImage = "url(" + IMG("button_green_new") + ")";
                        });
                    }
                    later(function () {
                        delete ops.dataset.l;
                        i++;
                        sig();
                    }, 900);
                };
                ops.appendChild(b);
            });
        };
        var t = { stop: function () {
            } };
        turno(s, "Una de Cuatro", function () {
            snd("oneOfFour_in");
            t = reloj(s, 90, fin);
            sig();
        });
    }
    function rejilla(words, r) {
        var _loop_1 = function (intento) {
            var e_1, _a;
            var g = Array(25).fill(""), pos = [];
            var ok = true;
            var _loop_2 = function (w) {
                var puesto = false;
                for (var k = 0; k < 60 && !puesto; k++) {
                    var v = r() < 0.5, fx = Math.floor(r() * 5), off = Math.floor(r() * (6 - w.length));
                    var cs = [];
                    for (var j = 0; j < w.length; j++)
                        cs.push(v ? (off + j) * 5 + fx : fx * 5 + off + j);
                    if (cs.every(function (c, j) { return !g[c] || g[c] === w[j]; })) {
                        cs.forEach(function (c, j) { return g[c] = w[j]; });
                        pos.push(cs);
                        puesto = true;
                    }
                }
                if (!puesto) {
                    ok = false;
                    return "break";
                }
            };
            try {
                for (var words_1 = (e_1 = void 0, __values(words)), words_1_1 = words_1.next(); !words_1_1.done; words_1_1 = words_1.next()) {
                    var w = words_1_1.value;
                    var state_2 = _loop_2(w);
                    if (state_2 === "break")
                        break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (words_1_1 && !words_1_1.done && (_a = words_1.return)) _a.call(words_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (ok) {
                var A_1 = "ABCDEFGHIJLMNOPRSTUV";
                return { value: { g: g.map(function (c) { return c || A_1[Math.floor(r() * A_1.length)]; }), pos: pos } };
            }
        };
        for (var intento = 0; intento < 200; intento++) {
            var state_1 = _loop_1(intento);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return null;
    }
    function sopa(solo) {
        var s = pantalla("sopa");
        cabecera(s, "Sopa de Letras", "icon_alphabetSoup");
        var P = baraja(SOPAS);
        var pi = 0, paneles = 0, acabado = false;
        var cont = $("div", "cnt");
        s.appendChild(cont);
        var st = enunciado(s, "", "thin");
        var dots = $("div", "dots");
        s.appendChild(dots);
        var gw = $("div", "sgrid");
        s.appendChild(gw);
        var sc = marcador(s, "left");
        var fin = function () {
            if (acabado)
                return;
            acabado = true;
            t.stop();
            finRonda("sopa", paneles * 5, solo);
        };
        var panel = function () {
            if (pi >= P.length)
                return fin();
            var _a = __read(P[pi], 2), tema = _a[0], ws = _a[1];
            cont.textContent = pi + 1 + "/" + P.length;
            st.textContent = tema.toUpperCase();
            var R2 = rejilla(ws, Math.random);
            var hechas = [];
            var selc = [];
            dots.innerHTML = "";
            ws.forEach(function () {
                var d = $("div", "dot");
                d.style.backgroundImage = "url(" + IMG("donut_gray") + ")";
                dots.appendChild(d);
            });
            gw.innerHTML = "";
            R2.g.forEach(function (c, i) {
                var b = $("button", "cell", c);
                b.style.backgroundImage = "url(" + IMG("keyboard_key") + ")";
                b.onclick = function () {
                    if (b.classList.contains("found"))
                        return;
                    b.classList.toggle("sel");
                    selc = [].map.call(gw.children, function (e, j) { return e.classList.contains("sel") ? j : -1; }).filter(function (j) { return j >= 0; });
                    snd("menu_press", 0.4);
                    comprueba();
                };
                gw.appendChild(b);
            });
            var comprueba = function () {
                R2.pos.forEach(function (p, wi) {
                    if (hechas.indexOf(wi) >= 0)
                        return;
                    if (p.length === selc.length && p.every(function (c) { return selc.indexOf(c) >= 0; })) {
                        hechas.push(wi);
                        sc.hit();
                        snd("soup_hitWord");
                        p.forEach(function (c) {
                            gw.children[c].classList.remove("sel");
                            gw.children[c].classList.add("found");
                        });
                        dots.children[hechas.length - 1].style.backgroundImage = "url(" + IMG("donut_hit") + ")";
                        dots.children[hechas.length - 1].textContent = "✓";
                        selc = [];
                        if (hechas.length === ws.length) {
                            paneles++;
                            snd("soup_round");
                            banner(s, "+5 s", "PANEL COMPLETADO", 900);
                            pi++;
                            later(panel, 1e3);
                        }
                    }
                });
                if (selc.length > 5) {
                    sc.fail();
                    snd("soup_fail");
                    [].forEach.call(gw.children, function (e) { return e.classList.remove("sel"); });
                    selc = [];
                }
            };
        };
        var t = { stop: function () {
            } };
        turno(s, "Sopa de Letras", function () {
            snd("soup_in");
            t = reloj(s, 90, fin);
            panel();
        });
    }
    function cruzadas(solo) {
        var s = pantalla("cruz");
        cabecera(s, "Palabras Cruzadas", "icon_alphabetSoup");
        var set = CRUZADAS[Math.floor(Math.random() * CRUZADAS.length)];
        var cur = 0, acabado = false;
        var hecho = {};
        var st = enunciado(s, "");
        var cols = $("div", "ccols");
        s.appendChild(cols);
        var sc = marcador(s, "left");
        var filas = set.map(function (w, i) {
            var r = $("div", "cword");
            r.onclick = function () {
                cur = i;
                pinta();
            };
            (i < 5 ? cols : cols).appendChild(r);
            return r;
        });
        var pinta = function () {
            filas.forEach(function (r, i) {
                var w = set[i].w;
                r.className = "cword" + (i === cur ? " cur" : "") + (hecho[i] === 1 ? " ok" : hecho[i] === 0 ? " ko" : "");
                r.innerHTML = "<i>" + (i + 1) + "</i>" + w.split("").map(function (c, j) { return "<span>" + (hecho[i] != null || j === 0 ? c : "") + "</span>"; }).join("");
            });
            st.innerHTML = cur + 1 + ". " + set[cur].d.toUpperCase();
        };
        var fin = function () {
            if (acabado)
                return;
            acabado = true;
            t.stop();
            finRonda("cruzadas", sc.ok * 2, solo);
        };
        var sig = function () {
            for (var k = 1; k <= 9; k++) {
                var j = (cur + k) % 9;
                if (hecho[j] == null) {
                    cur = j;
                    pinta();
                    return;
                }
            }
            fin();
        };
        teclado(s, function (v) {
            if (hecho[cur] != null)
                return;
            var ok = norm(v) === norm(set[cur].w);
            hecho[cur] = ok ? 1 : 0;
            if (ok) {
                sc.hit();
                snd("soup_hitWord");
            }
            else {
                sc.fail();
                snd("soup_fail");
            }
            pinta();
            later(sig, 500);
        });
        var t = { stop: function () {
            } };
        turno(s, "Palabras Cruzadas", function () {
            snd("soup_in");
            t = reloj(s, 75, fin);
            pinta();
        });
    }
    function donde(solo) {
        var s = pantalla("donde");
        cabecera(s, "¿Dónde están?", "icon_whereAre");
        var _a = __read(DONDE[Math.floor(Math.random() * DONDE.length)], 2), tema = _a[0], ws0 = _a[1];
        var ws = baraja(ws0);
        var acabado = false, n = 0;
        var st = enunciado(s, "<small>Memoriza: " + tema + "</small>", "q");
        var g = $("div", "dgrid");
        s.appendChild(g);
        var sc = marcador(s, "left");
        var bs = ws.map(function (w) {
            var b = $("button", "dw", w);
            b.style.backgroundImage = "url(" + IMG("button_blue") + ")";
            g.appendChild(b);
            return b;
        });
        var orden = baraja(ws.map(function (w, i) { return i; }));
        var fin = function () {
            if (acabado)
                return;
            acabado = true;
            t.stop();
            var seg = sc.ok === 9 ? 20 : sc.ok >= 5 ? 10 : sc.ok >= 3 ? 5 : 0;
            banner(s, "+" + seg + " s", sc.ok + " de 9", 1500);
            finRonda("donde", seg, solo);
        };
        var pregunta = function () {
            if (n >= 9)
                return fin();
            st.innerHTML = "<b>" + ws[orden[n]] + "</b>";
        };
        var oculta = function () {
            snd("whereAre_hide");
            bs.forEach(function (b, i) {
                b.textContent = i + 1;
                b.classList.add("hid");
                b.onclick = function () {
                    if (b.classList.contains("done") || n >= 9)
                        return;
                    var ok = i === orden[n];
                    b.textContent = ws[i];
                    b.classList.add("done");
                    b.style.backgroundImage = "url(" + IMG(ok ? "button_green_new" : "button_red") + ")";
                    if (ok) {
                        sc.hit();
                        snd("whereAre_hit");
                    }
                    else {
                        sc.fail();
                        snd("whereAre_fail");
                        var c = bs[orden[n]];
                        c.textContent = ws[orden[n]];
                        c.classList.add("done");
                        c.style.backgroundImage = "url(" + IMG("button_green_new") + ")";
                    }
                    n++;
                    later(pregunta, 600);
                };
            });
            pregunta();
        };
        var t = { stop: function () {
            } };
        turno(s, "¿Dónde están?", function () {
            snd("whereAre_in");
            t = reloj(s, 90, fin);
            later(oculta, 9e3);
        });
    }
    function final(tipo, op) {
        if (window.PPCab && PPCab.tiene(tipo === "alaz" ? "alaz" : "rosco") && !(op && op.__cab)) {
            music(false);
            op = op || {};
            op.__cab = 1;
            PPCab.play(tipo === "alaz" ? "alaz" : "rosco").then(function () {
                final(tipo, op);
            });
            return;
        }
        var alaz = tipo === "alaz";
        var s = pantalla("rosco");
        music(false);
        var r = op.diario ? rnd(hoySemilla()) : Math.random;
        cabecera(s, alaz ? "AlaZ" : "El Rosco", "icon_settings", function () {
            if (t)
                t.stop();
            menu();
        });
        var base = alaz ? 110 : 85;
        var extra = op.extra || 0;
        var preg = rosco(r);
        var orden = LETRAS.map(function (l, i) { return i; });
        if (alaz && op.zaa)
            orden.reverse();
        var est = preg.map(function () { return 0; });
        var ring = $("div", "ring");
        s.appendChild(ring);
        var dn = LETRAS.map(function (l, i) {
            var a = -Math.PI / 2 + i / 25 * Math.PI * 2;
            var d = $("div", "donut sm", l);
            d.style.left = 50 + 44 * Math.cos(a) + "%";
            d.style.top = 50 + 44 * Math.sin(a) + "%";
            d.style.backgroundImage = "url(" + IMG("donut_default") + ")";
            ring.appendChild(d);
            return d;
        });
        var cen = $("div", "rcen");
        ring.appendChild(cen);
        var pp = $("button", "ppbtn", alaz ? "LETRA (−5 s)" : "PASAPALABRA");
        pp.style.backgroundImage = "url(" + IMG("button_orange") + ")";
        var sc = marcador(s, "right");
        var pos = 0, cur = -1, vis = [];
        var t = reloj(s, base + extra, function () { return acaba(); }, "left");
        var pend = function () { return orden.filter(function (i) { return est[i] === 0; }); };
        var muestra = function () {
            var p = pend();
            if (!p.length)
                return acaba();
            if (cur >= 0)
                dn[cur].style.backgroundImage = "url(" + IMG(est[cur] === 1 ? "donut_hit" : est[cur] === 2 ? "donut_fail" : "donut_default") + ")";
            var k = orden.indexOf(cur);
            var j = -1;
            for (var x = 1; x <= 25; x++) {
                var c = orden[(k + x + 25) % 25];
                if (est[c] === 0) {
                    j = c;
                    break;
                }
            }
            if (cur < 0)
                j = p[0];
            cur = j;
            vis = [0];
            dn[cur].style.backgroundImage = "url(" + IMG("donut_selected") + ")";
            texto();
        };
        var texto = function () {
            var b = preg[cur];
            cen.innerHTML = "<b>" + (b.t === "e" ? "EMPIEZA POR " : "CONTIENE LA ") + b.l + "</b>" + (alaz ? '<div class="estr">' + estructura(b.w, vis).join(" ") + "</div><p>" + defParcial(b.d).toUpperCase() + "</p>" : "<p>" + b.d.toUpperCase() + "</p>");
            cen.appendChild(pp);
        };
        pp.onclick = function () {
            if (alaz) {
                var b = preg[cur];
                var oc = b.w.split("").map(function (c, i) { return i; }).filter(function (i) { return vis.indexOf(i) < 0; });
                if (oc.length > 1) {
                    vis.push(oc[1 + Math.floor(Math.random() * (oc.length - 1))]);
                    t.add(-5);
                    snd("message_press");
                    texto();
                }
            }
            else {
                snd("donut_pass");
                muestra();
            }
        };
        teclado(s, function (v) {
            if (cur < 0)
                return;
            var ok = norm(v) === norm(preg[cur].w);
            est[cur] = ok ? 1 : 2;
            if (ok) {
                sc.hit();
                snd("donut_hit");
            }
            else {
                sc.fail();
                snd("donut_fail");
                banner(s, preg[cur].w, "ERA…", 1100);
            }
            muestra();
        });
        var hecho = false;
        var acaba = function () {
            if (hecho)
                return;
            hecho = true;
            t.stop();
            resultado(tipo, preg, est, base + extra - Math.max(0, t.left), op);
        };
        muestra();
    }
    function resultado(tipo, preg, est, usado, op) {
        var s = pantalla("res");
        var ok = est.filter(function (e) { return e === 1; }).length, ko = est.filter(function (e) { return e === 2; }).length;
        var premio = "";
        if (ok === 25) {
            premio = "¡BOTE! " + euros(bote());
            boteGanado();
            snd("game_in");
        }
        else {
            var b = boteSube();
            premio = (op.diario || ok >= 13 ? "Premio del día: " + euros(PREMIO_DIA) + " · " : "") + "El bote sube a " + euros(b);
        }
        var best = JSON.parse(localStorage.getItem("pp_rank") || "[]");
        best.push({ p: ok * 10 - ko * 3, ok: ok, ko: ko, t: tipo, d: Date.now() });
        best.sort(function (a2, b) { return b.p - a2.p; });
        localStorage.setItem("pp_rank", JSON.stringify(best.slice(0, 20)));
        var p = $("div", "rpanel");
        p.style.backgroundImage = "url(" + IMG("panel_result") + ")";
        var h2 = $("div", "rhead", (tipo === "alaz" ? "AlaZ" : "EL ROSCO") + "<br>COMPLETADO");
        h2.style.backgroundImage = "url(" + IMG("header_result") + ")";
        p.appendChild(h2);
        p.appendChild($("div", "rstats", '<div><small>Tiempo</small><b class="g">' + mmss(usado) + '</b></div><div><small>Aciertos</small><b class="ok">' + ok + '</b></div><div><small>Fallos</small><b class="ko">' + ko + "</b></div>"));
        p.appendChild($("div", "rpts", "PUNTUACIÓN<br><b>🏅" + Math.max(0, ok * 10 - ko * 3) + "</b>"));
        p.appendChild($("div", "rprize", premio));
        var lst = $("div", "rlist");
        var i = 0;
        var pinta = function () {
            var b = preg[i];
            lst.innerHTML = '<div class="donut sm" style="position:static;margin:auto;background-image:url(' + IMG(est[i] === 1 ? "donut_hit" : est[i] === 2 ? "donut_fail" : "donut_default") + ')">' + b.l + "</div><small>" + prefijo(b).toUpperCase() + "</small><p>" + b.d + "</p><u>" + b.w + "</u><i>" + (i + 1) + "/25</i>";
        };
        pinta();
        var nav = $("div", "rnav");
        var a = $("button", "", "◀"), z = $("button", "", "▶");
        a.onclick = function () {
            i = (i + 24) % 25;
            pinta();
        };
        z.onclick = function () {
            i = (i + 1) % 25;
            pinta();
        };
        nav.append(a, lst, z);
        p.appendChild(nav);
        var c = $("button", "play", "CONTINUAR");
        c.style.backgroundImage = "url(" + IMG("button_blue") + ")";
        c.onclick = menu;
        p.appendChild(c);
        s.appendChild(p);
    }
    function lista(titulo, html) {
        var s = pantalla("lst");
        cabecera(s, titulo, null);
        var b = $("div", "box", html);
        s.appendChild(b);
        return s;
    }
    function ranking() {
        var r = JSON.parse(localStorage.getItem("pp_rank") || "[]");
        lista("Ranking", r.length ? "<ol>" + r.map(function (x) { return "<li><b>" + x.p + "</b> pts · " + x.ok + " aciertos · " + x.ko + " fallos · " + (x.t === "alaz" ? "AlaZ" : "Rosco") + "</li>"; }).join("") + "</ol>" : "<p>Todavía no hay partidas. ¡Juega un rosco!</p>");
    }
    function tienda() {
        var P = ["pack animales", "pack alienigena", "pack cavernicola", "pack fantastico", "pack super", "pack zombies"];
        lista("Tienda", '<p>En esta versión privada todo está desbloqueado y no hay compras.</p><div class="packs">' + P.map(function (p) { return '<img src="' + IMG(p) + '">'; }).join("") + "</div>");
    }
    function opciones() {
        var s = lista("Opciones", "");
        var b = s.querySelector(".box");
        var row = function (txt, k, a, bb, f) {
            var r = $("div", "orow", "<span>" + txt + "</span>");
            [a, bb].forEach(function (_a) {
                var _c = __read(_a, 2), v = _c[0], n = _c[1];
                var x = $("button", "obtn" + ((localStorage.getItem(k) || a[0]) === v ? " sel" : ""), n);
                x.onclick = function () {
                    localStorage.setItem(k, v);
                    f && f(v);
                    opciones();
                };
                r.appendChild(x);
            });
            b.appendChild(r);
        };
        row("Juego final", "pp_final", ["rosco", "El rosco"], ["alaz", "AlaZ"]);
        row("Tercera prueba", "pp_sopa", ["sopa", "Sopa de letras"], ["cruzadas", "Palabras cruzadas"]);
        row("Efectos", "pp_sfx", ["1", "Sí"], ["0", "No"], function (v) { return sndOn = v === "1"; });
        row("Música", "pp_mus", ["1", "Sí"], ["0", "No"], function (v) {
            musOn = v === "1";
            music(musOn);
        });
        b.appendChild($("p", "small", "Bote actual: " + euros(bote()) + " (+6.000 € por programa). Premio del día: " + euros(PREMIO_DIA) + ".<br>Versión " + (window.PP_VERSION || "1.0")));
    }
    var h = (location.hash || "").slice(1);
    if (h === "diario")
        final("rosco", { diario: true });
    else if (h === "rosco" || h === "alaz")
        final(h, {});
    else if (NOMBRE[h])
        ronda(h, true);
    else if (h === "carrera") {
        carrera = { seg: {} };
        progreso();
    }
    else if (h === "menu")
        menu();
    else if (h === "elegir")
        elegir();
    else
        intro();
    window.PP2D = { resultado: resultado, rosco: rosco, menu: menu, final: final, ronda: ronda, elegir: elegir, progreso: progreso, opciones: opciones, setCarrera: function (c) { return carrera = c; } };
})();
