const WA_NUMBER = "34971454892";
const MAPS_URL = "https://maps.app.goo.gl/eV2x4zK1jKoQ8Tqt5";

const translations = {
  es: {
    "nav.story":"Historia","nav.menu":"Carta","nav.gallery":"Galería","nav.visit":"Visítanos","nav.reserve":"Reservar","nav.reserveFull":"Reservar por WhatsApp",
    "hero.eyebrow":"Pescara · Mallorca · Desde 1918","hero.title":"Cocina italiana<br><em>con memoria.</em>","hero.copy":"Cuatro generaciones, producto fresco y una cocina hecha al momento. Una historia italiana que hoy se sirve en Palma.","hero.reserve":"Reservar por WhatsApp","hero.menu":"Ver la carta","hero.today":"Hoy","hero.addressLabel":"Santa Catalina · Palma","hero.directions":"Abrir en Google Maps",
    "ribbon.origin":"Pescara, Abruzzo","ribbon.generations":"generaciones","ribbon.mallorca":"La Bottega en Mallorca","ribbon.today":"la historia continúa",
    "story.eyebrow":"Más de un siglo alrededor de la mesa","story.title":"No es sólo una receta.<br><em>Es una herencia.</em>","story.lead":"La historia de la familia Caporale empieza en 1918, cuando Nonna Graziela abre su primer restaurante en Pescara, Abruzzo. Desde entonces, cada generación ha añadido su carácter sin perder el origen.","story.photoCaption":"Michele & Manuel Caporale","story.livingLegacy":"Un legado que sigue vivo",
    "story.t1title":"Todo empieza con Nonna Graziela","story.t1body":"En Pescara, en la región de Abruzzo, abre el primer restaurante familiar. Una cocina basada en producto, oficio y hospitalidad.",
    "story.t2year":"Después","story.t2title":"El oficio pasa de generación en generación","story.t2body":"Nono Don Donato Simone continúa la actividad y, más tarde, Antonieta mantiene viva la tradición familiar.",
    "story.t3title":"Michele recoge el legado","story.t3body":"La tercera generación convierte la tradición en una cocina de autor: recetas reconocibles, creatividad y respeto absoluto por la materia prima.",
    "story.t4title":"De Abruzzo a Mallorca","story.t4body":"Michele lleva ese conocimiento a Palma y abre La Bottega di Michele, combinando raíces italianas con el producto mediterráneo de la isla.",
    "story.t5year":"Hoy","story.t5title":"La historia continúa","story.t5body":"Manuel Caporale representa la siguiente generación. La familia sigue evolucionando, pero la promesa permanece: cocinar al momento, cuidar el producto y hacer que cada cliente se sienta en casa.",
    "story.quote":"“Para crear platos extraordinarios, la materia prima también debe ser extraordinaria.”","story.value1title":"Producto","story.value1body":"Fresco, de temporada y elegido por calidad.","story.value2title":"Al momento","story.value2body":"Cada plato se cocina cuando lo pides.","story.value3title":"Emoción","story.value3body":"Sabor, textura y recuerdos que permanecen.",
    "menu.eyebrow":"Carta 2026","menu.title":"Primero elegimos<br><em>con los ojos.</em>","menu.intro":"La carta sigue siendo completa y fácil de leer, pero ahora las fotografías acompañan la elección sin convertir el menú en una imagen que haya que ampliar con los dedos.","menu.signaturesKicker":"Sugerencias de Michele","menu.signaturesTitle":"Platos que cuentan la casa","menu.fullKicker":"La carta completa","menu.fullTitle":"Explora a tu manera.","menu.search":"Buscar un plato","menu.note":"Todos los precios incluyen IVA. Los platos de cazuela son para mínimo 2 personas. S.P.M. = según precio de mercado.","menu.allergens":"¿Alergias o intolerancias? Pregunta a nuestro equipo antes de pedir.","menu.all":"Todo","menu.starters":"Entrantes","menu.casserole":"A la cazuela","menu.pasta":"Pasta","menu.meatfish":"Carnes & pescados","menu.desserts":"Postres","menu.wines":"Bodega",
    "menu.desc.starters":"Para abrir la mesa · producto mediterráneo","menu.desc.casserole":"Cazuela de barro · mínimo dos personas","menu.desc.pasta":"Pasta bio · recetas italianas de la casa","menu.desc.meatfish":"Producto de mercado · carne y pescado","menu.desc.desserts":"Elaborados en casa","menu.desc.wines":"Una selección entre España e Italia",
    "featured.lobster":"Preparado en cazuela de barro, para compartir y disfrutar sin prisa.",
    "gallery.eyebrow":"La experiencia","gallery.title":"La mesa, la cocina,<br><em>la gente.</em>","gallery.service":"Servicio cercano","gallery.home":"Como en casa","gallery.moments":"Momentos","gallery.craft":"Hecho al momento","gallery.product":"Producto","gallery.cuisine":"Cocina de autor",
    "booking.kicker":"Tu próxima mesa","booking.title":"Una reserva.<br><em>Un mensaje.</em>","booking.body":"Elige fecha, hora y número de personas. Preparamos el mensaje y WhatsApp se abre listo para enviar. La reserva queda sujeta a confirmación del restaurante.","booking.button":"Reservar por WhatsApp",
    "visit.eyebrow":"Santa Catalina · Palma","visit.title":"Ven a<br><em>La Bottega.</em>","visit.directions":"Abrir restaurante en Maps","hours.title":"Horario de cocina","hours.monTue":"Lunes — Martes","hours.wed":"Miércoles","hours.closed":"Cerrado","hours.thuSat":"Jueves — Sábado","hours.sun":"Domingo","hours.call":"Reservas telefónicas de 11:30 a 22:00.",
    "floating.whatsapp":"Reservar por WhatsApp","footer.tagline":"Una familia de restauradores desde 1918.","mobile.menu":"Carta","mobile.directions":"Cómo llegar",
    "reserve.eyebrow":"Reserva por WhatsApp","reserve.title":"Tu mesa,<br><em>en segundos.</em>","reserve.copy":"Completa los datos y abriremos WhatsApp con tu solicitud preparada. El restaurante confirmará la disponibilidad.","reserve.name":"Nombre","reserve.people":"Personas","reserve.date":"Fecha","reserve.time":"Hora","reserve.note":"Nota opcional","reserve.notePlaceholder":"Terraza, alergias, celebración...","reserve.whatsapp":"Abrir WhatsApp","reserve.disclaimer":"Esta solicitud no confirma automáticamente la mesa. Espera la respuesta del restaurante.","reserve.phone":"Prefiero llamar: +34 971 454 892","reserve.message":"Hola, me gustaría solicitar una reserva en La Bottega di Michele."
  },
  en: {
    "nav.story":"Story","nav.menu":"Menu","nav.gallery":"Gallery","nav.visit":"Visit","nav.reserve":"Book","nav.reserveFull":"Book on WhatsApp",
    "hero.eyebrow":"Pescara · Mallorca · Since 1918","hero.title":"Italian cooking<br><em>with a memory.</em>","hero.copy":"Four generations, fresh ingredients and food cooked to order. An Italian family story now served in Palma.","hero.reserve":"Book on WhatsApp","hero.menu":"Explore the menu","hero.today":"Today","hero.addressLabel":"Santa Catalina · Palma","hero.directions":"Open in Google Maps",
    "ribbon.origin":"Pescara, Abruzzo","ribbon.generations":"generations","ribbon.mallorca":"La Bottega in Mallorca","ribbon.today":"the story continues",
    "story.eyebrow":"More than a century around the table","story.title":"Not just a recipe.<br><em>An inheritance.</em>","story.lead":"The Caporale family story begins in 1918, when Nonna Graziela opened her first restaurant in Pescara, Abruzzo. Each generation has added its own character without losing sight of where it began.","story.photoCaption":"Michele & Manuel Caporale","story.livingLegacy":"A living legacy",
    "story.t1title":"It begins with Nonna Graziela","story.t1body":"In Pescara, in the Abruzzo region, she opens the family's first restaurant. A kitchen built on produce, craft and hospitality.",
    "story.t2year":"Then","story.t2title":"The craft passes from one generation to the next","story.t2body":"Nono Don Donato Simone continues the restaurant tradition, followed later by Antonieta, who keeps the family craft alive.",
    "story.t3title":"Michele takes up the legacy","story.t3body":"The third generation turns tradition into signature cooking: recognisable recipes, creativity and absolute respect for the ingredients.",
    "story.t4title":"From Abruzzo to Mallorca","story.t4body":"Michele brings that knowledge to Palma and opens La Bottega di Michele, combining Italian roots with the Mediterranean produce of the island.",
    "story.t5year":"Today","story.t5title":"The story continues","story.t5body":"Manuel Caporale represents the next generation. The family keeps evolving, while the promise remains the same: cook to order, respect the produce and make every guest feel at home.",
    "story.quote":"“To create extraordinary dishes, the ingredients must also be extraordinary.”","story.value1title":"Produce","story.value1body":"Fresh, seasonal and chosen for quality.","story.value2title":"Made to order","story.value2body":"Every dish is cooked when you order it.","story.value3title":"Emotion","story.value3body":"Flavour, texture and memories that stay with you.",
    "menu.eyebrow":"2026 Menu","menu.title":"We choose first<br><em>with our eyes.</em>","menu.intro":"The full menu stays easy to read, while photography now helps the choice instead of forcing guests to pinch and zoom a photographed menu page.","menu.signaturesKicker":"Michele's suggestions","menu.signaturesTitle":"Dishes that tell our story","menu.fullKicker":"The complete menu","menu.fullTitle":"Explore it your way.","menu.search":"Search the menu","menu.note":"All prices include VAT. Terracotta-pot dishes are for a minimum of 2 people. M.P. = market price.","menu.allergens":"Allergies or intolerances? Please ask our team before ordering.","menu.all":"All","menu.starters":"Starters","menu.casserole":"Terracotta pot","menu.pasta":"Pasta","menu.meatfish":"Meat & fish","menu.desserts":"Desserts","menu.wines":"Wine cellar",
    "menu.desc.starters":"To open the table · Mediterranean produce","menu.desc.casserole":"Terracotta pot · minimum two guests","menu.desc.pasta":"Organic pasta · house Italian recipes","menu.desc.meatfish":"Market produce · meat and fish","menu.desc.desserts":"Made in house","menu.desc.wines":"A selection from Spain and Italy",
    "featured.lobster":"Prepared in a terracotta pot, made for sharing and enjoying without rushing.",
    "gallery.eyebrow":"The experience","gallery.title":"The table, the kitchen,<br><em>the people.</em>","gallery.service":"Personal service","gallery.home":"Feel at home","gallery.moments":"Moments","gallery.craft":"Made to order","gallery.product":"Produce","gallery.cuisine":"Signature cuisine",
    "booking.kicker":"Your next table","booking.title":"One booking.<br><em>One message.</em>","booking.body":"Choose the date, time and number of guests. We prepare the message and open WhatsApp ready to send. The restaurant will then confirm availability.","booking.button":"Book on WhatsApp",
    "visit.eyebrow":"Santa Catalina · Palma","visit.title":"Come to<br><em>La Bottega.</em>","visit.directions":"Open restaurant in Maps","hours.title":"Kitchen hours","hours.monTue":"Monday — Tuesday","hours.wed":"Wednesday","hours.closed":"Closed","hours.thuSat":"Thursday — Saturday","hours.sun":"Sunday","hours.call":"Telephone reservations from 11:30 to 22:00.",
    "floating.whatsapp":"Book on WhatsApp","footer.tagline":"A family of restaurateurs since 1918.","mobile.menu":"Menu","mobile.directions":"Directions",
    "reserve.eyebrow":"WhatsApp booking","reserve.title":"Your table,<br><em>in seconds.</em>","reserve.copy":"Complete the details and we will open WhatsApp with your request ready to send. The restaurant will confirm availability.","reserve.name":"Name","reserve.people":"Guests","reserve.date":"Date","reserve.time":"Time","reserve.note":"Optional note","reserve.notePlaceholder":"Terrace, allergies, celebration...","reserve.whatsapp":"Open WhatsApp","reserve.disclaimer":"This request does not automatically confirm the table. Please wait for the restaurant's reply.","reserve.phone":"I prefer to call: +34 971 454 892","reserve.message":"Hello, I would like to request a reservation at La Bottega di Michele."
  }
};

const categoryMeta = {
  starters:{image:"assets/images/serving-terrace.jpeg",kickerEs:"Para empezar",kickerEn:"To begin"},
  casserole:{image:"assets/images/lobster-pasta.jpg",kickerEs:"Cocción lenta",kickerEn:"Slow & generous"},
  pasta:{image:"assets/images/parmesan-wheel.jpeg",kickerEs:"El corazón italiano",kickerEn:"The Italian heart"},
  meatfish:{image:"assets/images/fish.jpg",kickerEs:"Mar & tierra",kickerEn:"Sea & land"},
  desserts:{image:"assets/images/panna-cotta.jpg",kickerEs:"Hecho en casa",kickerEn:"Made in house"},
  wines:{image:"assets/images/wine-cellar.jpg",kickerEs:"La bodega",kickerEn:"The cellar"}
};

const menuData = [
  {cat:"starters",es:"Ensalada caprese con mozzarella de búfala",en:"Caprese salad with buffalo mozzarella",price:"16€",descEs:"Tomate, mozzarella de búfala y albahaca.",descEn:"Tomato, buffalo mozzarella and basil."},
  {cat:"starters",es:"Ensalada de queso de cabra templada",en:"Warm goat's cheese salad",price:"16€",descEs:"Con confitura de tomate.",descEn:"With tomato preserve."},
  {cat:"starters",es:"Porchetta deshuesada all'Abruzzese",en:"Boneless Porchetta all'Abruzzese",price:"18€",descEs:"Con rúcula, parmesano, albahaca y aceite de trufa.",descEn:"With rocket, Parmesan, basil and truffle oil."},
  {cat:"starters",es:"Ensalada de foie",en:"Foie salad",price:"22€",descEs:"Con confitura de frutos del bosque, pasas y piñones.",descEn:"With forest berry preserve, raisins and pine nuts."},
  {cat:"starters",es:"Ensalada tropical",en:"Tropical salad",price:"16€",descEs:"Piña, pera, uva, tomate cherry, parmesano y reducción balsámica.",descEn:"Pineapple, pear, grapes, cherry tomato, Parmesan and balsamic reduction."},
  {cat:"starters",es:"Anchoas del Cantábrico",en:"Cantabrian anchovies",price:"18€",descEs:"Con pimientos del Piquillo.",descEn:"With Piquillo peppers."},
  {cat:"starters",es:"Ensalada mixta mediterránea",en:"Mediterranean mixed salad",price:"9€",descEs:"Fresca y sencilla.",descEn:"Fresh and simple."},
  {cat:"starters",es:"Ensalada con ventresca de atún",en:"Tuna belly salad",price:"18€",descEs:"Selección mediterránea.",descEn:"Mediterranean selection."},
  {cat:"starters",es:"Ensalada templada al gorgonzola",en:"Warm Gorgonzola salad",price:"16€",descEs:"Con espárragos verdes y nueces.",descEn:"With green asparagus and walnuts."},
  {cat:"starters",es:"Carpaccio de ternera",en:"Beef carpaccio",price:"18€",descEs:"Con rúcula, manzana verde y parmesano.",descEn:"With rocket, green apple and Parmesan."},
  {cat:"starters",es:"Carpaccio de atún marinado",en:"Marinated tuna carpaccio",price:"18€",descEs:"Con soja y tomate seco.",descEn:"With soy and sun-dried tomato."},
  {cat:"starters",es:"Vitello Tonnato",en:"Vitello Tonnato",price:"16€",descEs:"Lomo de cerdo al horno con atún, alcaparras y mayonesa.",descEn:"Roast pork loin with tuna, capers and mayonnaise."},
  {cat:"starters",es:"Antipasto a la italiana",en:"Italian antipasto",price:"24€",descEs:"Salami, prosciutto y mozzarella.",descEn:"Salami, prosciutto and mozzarella."},
  {cat:"starters",es:"Gambas al ajillo",en:"Garlic prawns",price:"21€",descEs:"Clásico de la casa.",descEn:"A house classic."},
  {cat:"starters",es:"Gambas con setas del abogado",en:"Prawns with seasonal mushrooms",price:"22€",descEs:"Preparación de la casa.",descEn:"House preparation."},
  {cat:"starters",es:"Revuelto de mozzarella fresca",en:"Fresh mozzarella scramble",price:"18€",descEs:"Con huevos ecológicos y aceite de trufa.",descEn:"With organic eggs and truffle oil."},
  {cat:"casserole",es:"Spaghetti con bogavante",en:"Spaghetti with lobster",price:"S.P.M.",descEs:"En cazuela de barro, con frutti di mare. Mín. 2 pers.",descEn:"Terracotta pot with seafood. Min. 2 guests.",photo:"assets/images/lobster-pasta.jpg"},
  {cat:"casserole",es:"Spaghetti con gambas",en:"Spaghetti with prawns",price:"22€ p.p.",descEs:"Tomate de colina, ajo, perejil y coñac. Mín. 2 pers.",descEn:"Hill tomatoes, garlic, parsley and cognac. Min. 2 guests."},
  {cat:"casserole",es:"Linguini con ventresca de atún",en:"Linguine with tuna belly",price:"19€ p.p.",descEs:"Ajo, perejil y tomates de colina. Mín. 2 pers.",descEn:"Garlic, parsley and hill tomatoes. Min. 2 guests."},
  {cat:"casserole",es:"Spaghetti Vongole",en:"Spaghetti Vongole",price:"25€ p.p.",descEs:"Almejas, ajo, perejil y vino blanco. Mín. 2 pers.",descEn:"Clams, garlic, parsley and white wine. Min. 2 guests."},
  {cat:"casserole",es:"Spaghetti all'Arrabbiata",en:"Spaghetti all'Arrabbiata",price:"16€ p.p.",descEs:"Tomate, olivas negras, cebolla, albahaca, guindilla y parmesano.",descEn:"Tomato, black olives, onion, basil, chilli and Parmesan."},
  {cat:"casserole",es:"Spaghetti alla Americana",en:"Spaghetti alla Americana",price:"18€ p.p.",descEs:"Guanciale, tomate y parmesano. Mín. 2 pers.",descEn:"Guanciale, tomato and Parmesan. Min. 2 guests."},
  {cat:"pasta",es:"Pappardelle alla Sophia Loren",en:"Pappardelle alla Sophia Loren",price:"22€",descEs:"Gambas, setas, crema de tartufo blanco y parmesano.",descEn:"Prawns, mushrooms, white truffle cream and Parmesan.",photo:"assets/images/pasta-fresca.jpg"},
  {cat:"pasta",es:"Spaghetti aglio, olio e peperoncino",en:"Spaghetti aglio, olio e peperoncino",price:"16€",descEs:"Ajo, guindilla y parmesano.",descEn:"Garlic, chilli and Parmesan."},
  {cat:"pasta",es:"Spaghetti alla Bolognese",en:"Spaghetti alla Bolognese",price:"16€",descEs:"Ragú de ternera y parmesano.",descEn:"Beef ragù and Parmesan."},
  {cat:"pasta",es:"Tagliatelle con tomate, burrata y pesto",en:"Tagliatelle with tomato, burrata and pesto",price:"18€",descEs:"Tomate, burrata cremosa y pesto.",descEn:"Tomato, creamy burrata and pesto."},
  {cat:"pasta",es:"Pappardelle con ragú de ciervo",en:"Pappardelle with venison ragù",price:"20€",descEs:"Con setas y parmesano.",descEn:"With mushrooms and Parmesan."},
  {cat:"pasta",es:"Ravioli rellenos de trufa",en:"Truffle-filled ravioli",price:"22€",descEs:"Crema de setas y parmesano.",descEn:"Mushroom cream and Parmesan."},
  {cat:"pasta",es:"Ravioli rellenos de foie",en:"Foie-filled ravioli",price:"25€",descEs:"Salsa de setas, trufa y parmesano.",descEn:"Mushroom sauce, truffle and Parmesan."},
  {cat:"pasta",es:"Ravioli rellenos de calabaza",en:"Pumpkin-filled ravioli",price:"16€",descEs:"Con crema de queso.",descEn:"With cheese cream."},
  {cat:"pasta",es:"Tagliatelle en rueda de Parmigiano Reggiano",en:"Tagliatelle in a Parmigiano Reggiano wheel",price:"22€",descEs:"Parmigiano de 30 meses, pimienta negra y aceite de trufa.",descEn:"30-month Parmigiano, black pepper and truffle oil.",photo:"assets/images/parmesan-wheel.jpeg"},
  {cat:"meatfish",es:"Foie fresco a la plancha",en:"Grilled fresh foie gras",price:"32€",descEs:"Manzanas caramelizadas al Pedro Ximénez.",descEn:"Caramelised apples with Pedro Ximénez."},
  {cat:"meatfish",es:"Pollo con risotto",en:"Chicken with risotto",price:"21€",descEs:"Setas, parmesano y aceite de trufa.",descEn:"Mushrooms, Parmesan and truffle oil."},
  {cat:"meatfish",es:"Tagliata alla Fiorentina de entrecot",en:"Entrecote Tagliata alla Fiorentina",price:"28€",descEs:"Entrecot fileteado con rúcula y parmesano.",descEn:"Sliced entrecote with rocket and Parmesan.",photo:"assets/images/meat.jpg"},
  {cat:"meatfish",es:"Entrecot a la plancha",en:"Grilled entrecote",price:"28€",descEs:"Fileteado con patatas a la provenzal.",descEn:"Sliced with Provençal potatoes."},
  {cat:"meatfish",es:"Paletilla de cordero al horno",en:"Oven-baked lamb shoulder",price:"32€",descEs:"Con patatas.",descEn:"With potatoes."},
  {cat:"meatfish",es:"Lubina a la Siciliana al horno",en:"Sicilian-style baked sea bass",price:"S.P.M.",descEs:"Verdura, patata parmentine, olivas negras y vino blanco. Mín. 2 pers.",descEn:"Vegetables, parmentine potatoes, black olives and white wine. Min. 2 guests.",photo:"assets/images/fish.jpg"},
  {cat:"meatfish",es:"Bacalao a la Terramana",en:"Cod Terramana style",price:"32€",descEs:"Con salsa marinera y patata.",descEn:"With seafood sauce and potato."},
  {cat:"meatfish",es:"Pescado de mercado",en:"Market fish",price:"S.P.M.",descEs:"Según disponibilidad del día.",descEn:"According to today's catch."},
  {cat:"desserts",es:"Tiramisú",en:"Tiramisu",price:"8€",descEs:"Clásico italiano de la casa.",descEn:"House Italian classic."},
  {cat:"desserts",es:"Tarta de queso con frutos del bosque",en:"Cheesecake with forest berries",price:"7,50€",descEs:"Cremosa y casera.",descEn:"Creamy and homemade."},
  {cat:"desserts",es:"Mousse de chocolate blanco",en:"White chocolate mousse",price:"7,50€",descEs:"Suave y ligera.",descEn:"Smooth and light."},
  {cat:"desserts",es:"Mousse de chocolate negro",en:"Dark chocolate mousse",price:"7,50€",descEs:"Intensa y cremosa.",descEn:"Rich and creamy."},
  {cat:"desserts",es:"Panna Cotta",en:"Panna Cotta",price:"7,50€",descEs:"Flan italiano de nata y vainilla con frutos del bosque.",descEn:"Italian cream and vanilla flan with forest berries.",photo:"assets/images/panna-cotta.jpg"},
  {cat:"desserts",es:"Sorbete de limón",en:"Lemon sorbet",price:"7,50€",descEs:"Fresco y cítrico.",descEn:"Fresh and citrusy."},
  {cat:"desserts",es:"Sorbete de mango",en:"Mango sorbet",price:"7,50€",descEs:"Frutal y refrescante.",descEn:"Fruity and refreshing."},
  {cat:"desserts",es:"Affogato",en:"Affogato",price:"8€",descEs:"Helado de vainilla con café.",descEn:"Vanilla ice cream with coffee."},
  {cat:"desserts",es:"Banoffee",en:"Banoffee",price:"7,50€",descEs:"Postre cremoso de plátano y caramelo.",descEn:"Creamy banana and caramel dessert."},
  {cat:"wines",es:"Marqués de Murrieta Reserva",en:"Marqués de Murrieta Reserva",price:"39€",descEs:"Tempranillo, Garnacha, Mazuelo · D.O. Rioja.",descEn:"Tempranillo, Garnacha, Mazuelo · D.O. Rioja.",photo:"assets/images/wine-cellar.jpg"},
  {cat:"wines",es:"Pedra de Binissalem Eco",en:"Pedra de Binissalem Eco",price:"22€",descEs:"Manto Negro y Cabernet · D.O. Binissalem.",descEn:"Manto Negro and Cabernet · D.O. Binissalem."},
  {cat:"wines",es:"Sassicaia 2015",en:"Sassicaia 2015",price:"S.P.M.",descEs:"Sauvignon y Cabernet Franc · D.O. Toscana.",descEn:"Sauvignon and Cabernet Franc · D.O. Toscana."}
];

let lang = "es";
let activeCat = "all";
let searchTerm = "";
const categories = ["all","starters","casserole","pasta","meatfish","desserts","wines"];
const foodCategories = categories.slice(1);
const t = key => translations[lang][key] || key;

function updateTodayHours(){
  const el = document.getElementById("todayHours");
  if(!el) return;
  const day = new Date().getDay();
  if(day === 3) el.textContent = lang === "es" ? "Cerrado" : "Closed";
  else if(day === 0) el.textContent = "13:00 — 16:00";
  else el.textContent = "13:00 — 22:00";
}

function applyTranslations(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.getElementById("langSwitch").textContent = lang === "es" ? "EN" : "ES";
  updateTodayHours();
  renderVisualCategories();
  renderTabs();
  renderMenu();
}

function renderVisualCategories(){
  const rail = document.getElementById("visualCategoryRail");
  rail.innerHTML = foodCategories.map(cat => {
    const meta = categoryMeta[cat];
    const count = menuData.filter(i => i.cat === cat).length;
    const kicker = lang === "es" ? meta.kickerEs : meta.kickerEn;
    return `<button class="visual-cat ${activeCat === cat ? "active" : ""}" type="button" data-visual-cat="${cat}">
      <img src="${meta.image}" alt="" loading="lazy" />
      <span class="visual-cat-copy"><small>${kicker}</small><strong>${t("menu."+cat)}</strong><span>${count} ${lang === "es" ? "propuestas" : "choices"}</span></span>
    </button>`;
  }).join("");
  rail.querySelectorAll("[data-visual-cat]").forEach(btn => btn.addEventListener("click", () => {
    activeCat = btn.dataset.visualCat;
    searchTerm = "";
    document.getElementById("menuSearch").value = "";
    renderVisualCategories(); renderTabs(); renderMenu();
    document.querySelector(".menu-reader").scrollIntoView({behavior:"smooth",block:"start"});
  }));
}

function renderTabs(){
  const tabs = document.getElementById("categoryTabs");
  tabs.innerHTML = categories.map(cat => `<button type="button" data-cat="${cat}" class="${activeCat===cat ? "active" : ""}">${t("menu."+cat)}</button>`).join("");
  tabs.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
    activeCat = btn.dataset.cat;
    renderTabs(); renderVisualCategories(); renderMenu();
  }));
}

function itemMarkup(item){
  const title = item[lang];
  const desc = lang === "es" ? item.descEs : item.descEn;
  const photo = item.photo ? `<img class="menu-item-thumb" src="${item.photo}" alt="${title.replace(/"/g,"&quot;")}" loading="lazy" />` : "";
  return `<article class="menu-item ${item.photo ? "featured-item" : ""}">${photo}<div><h4>${title}</h4><p>${desc}</p></div><span class="menu-price">${item.price}</span></article>`;
}

function groupMarkup(cat, items){
  const meta = categoryMeta[cat];
  return `<section class="menu-group">
    <div class="menu-group-visual"><img src="${meta.image}" alt="" loading="lazy" /><div><small>${lang === "es" ? meta.kickerEs : meta.kickerEn}</small><h3>${t("menu."+cat)}</h3><p>${t("menu.desc."+cat)}</p></div></div>
    <div class="menu-items">${items.map(itemMarkup).join("")}</div>
  </section>`;
}

function renderMenu(){
  const q = searchTerm.trim().toLowerCase();
  const matching = menuData.filter(item => {
    const haystack = `${item.es} ${item.en} ${item.descEs} ${item.descEn}`.toLowerCase();
    return (!q || haystack.includes(q)) && (q || activeCat === "all" || item.cat === activeCat);
  });
  const groups = q ? foodCategories : (activeCat === "all" ? foodCategories : [activeCat]);
  const html = groups.map(cat => {
    const items = matching.filter(i => i.cat === cat);
    return items.length ? groupMarkup(cat, items) : "";
  }).join("");
  document.getElementById("menuList").innerHTML = html || `<div class="menu-empty">${lang === "es" ? "No encontramos ese plato. Prueba otra búsqueda." : "We couldn't find that dish. Try another search."}</div>`;
}

function openModal(){
  const modal = document.getElementById("reservationModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
  setTimeout(() => document.getElementById("resName")?.focus(), 80);
}
function closeModal(){
  const modal = document.getElementById("reservationModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}
function closeLightbox(){
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
}

function init(){
  document.getElementById("langSwitch").addEventListener("click", () => { lang = lang === "es" ? "en" : "es"; applyTranslations(); });
  document.getElementById("menuSearch").addEventListener("input", e => { searchTerm = e.target.value; renderMenu(); });

  const toggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  toggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    mobileNav.setAttribute("aria-hidden", String(!open));
  });
  mobileNav.querySelectorAll("a,button").forEach(el => el.addEventListener("click", () => {
    mobileNav.classList.remove("open"); toggle.setAttribute("aria-expanded","false"); mobileNav.setAttribute("aria-hidden","true");
  }));

  document.querySelectorAll(".reserve-trigger").forEach(btn => btn.addEventListener("click", openModal));
  document.querySelectorAll("[data-close-modal]").forEach(btn => btn.addEventListener("click", closeModal));

  const dateInput = document.getElementById("resDate");
  const localToday = new Date();
  const yyyy = localToday.getFullYear();
  const mm = String(localToday.getMonth()+1).padStart(2,"0");
  const dd = String(localToday.getDate()).padStart(2,"0");
  dateInput.min = `${yyyy}-${mm}-${dd}`;

  document.getElementById("reservationForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("resName").value.trim();
    const people = document.getElementById("resPeople").value;
    const date = document.getElementById("resDate").value;
    const time = document.getElementById("resTime").value;
    const note = document.getElementById("resNote").value.trim();
    const message = lang === "es"
      ? `${t("reserve.message")}\n\nNombre: ${name}\nPersonas: ${people}\nFecha: ${date}\nHora: ${time}${note ? `\nNota: ${note}` : ""}\n\nQuedo pendiente de vuestra confirmación. Gracias.`
      : `${t("reserve.message")}\n\nName: ${name}\nGuests: ${people}\nDate: ${date}\nTime: ${time}${note ? `\nNote: ${note}` : ""}\n\nI will wait for your confirmation. Thank you.`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  document.querySelectorAll(".gallery-item").forEach(btn => btn.addEventListener("click", () => {
    lightboxImg.src = btn.dataset.img;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden","false");
  }));
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", e => { if(e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", e => { if(e.key === "Escape"){ closeModal(); closeLightbox(); } });

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), {threshold:.1});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  document.querySelectorAll(`a[href="${MAPS_URL}"]`).forEach(a => a.setAttribute("aria-label", lang === "es" ? "Abrir La Bottega di Michele en Google Maps" : "Open La Bottega di Michele in Google Maps"));
  applyTranslations();
}

document.addEventListener("DOMContentLoaded", init);
