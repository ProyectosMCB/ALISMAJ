/* =========================================================
   ALISMAJ · DATOS DE LA TIENDA
   Aquí se edita TODO el contenido: WhatsApp, categorías y arreglos.
   No hace falta tocar app.js para agregar o cambiar un arreglo.
   ========================================================= */

window.ALISMAJ = {
  // Número de WhatsApp (Perú: 51 + número, sin espacios ni +)
  whatsapp: "51963493038",
  whatsappVisible: "963 493 038",
  moneda: "S/",
  // Fecha especial destacada en la portada (mes 1-12 y día)
  fechaEspecial: { mes: 10, dia: 25 },
};

/* Categorías (pestañas del catálogo) */
window.CATEGORIAS = [
  { id: "maquillaje", nombre: "Ramos de maquillaje" },
  { id: "ramos",      nombre: "Ramos de rosas" },
  { id: "flores",     nombre: "Flores y girasoles" },
  { id: "cajas",      nombre: "Cajas regalo" },
  { id: "el",         nombre: "Para él" },
  { id: "cartas",     nombre: "Cartas y combos" },
];

/* ¿Para quién es? (filtro rápido) */
window.DESTINATARIOS = [
  { id: "novia",   nombre: "Novia",   emoji: "💖" },
  { id: "mama",    nombre: "Mamá",    emoji: "🌷" },
  { id: "hermana", nombre: "Hermana", emoji: "🎀" },
  { id: "amiga",   nombre: "Amiga",   emoji: "🌸" },
  { id: "prima",   nombre: "Prima",   emoji: "🦋" },
  { id: "tia",     nombre: "Tía",     emoji: "🌹" },
  { id: "nina",    nombre: "Niña",    emoji: "⭐" },
  { id: "el",      nombre: "Para él", emoji: "🏎️" },
];

/* Temáticas (filtro opcional) */
window.TEMATICAS = [
  { id: "amarillas", nombre: "Flores amarillas" },
  { id: "personajes", nombre: "Personajes y princesas" },
  { id: "corona", nombre: "Con corona o tiara" },
  { id: "peluche", nombre: "Con peluche" },
];

/* Extras que se pueden añadir a los ramos (cada uno tiene costo adicional) */
window.EXTRAS = ["Corona", "Globos", "Foto (según tamaño)", "Luces"];

const MUJER = ["novia", "mama", "hermana", "amiga", "prima", "tia"];
const JOVEN = ["novia", "hermana", "amiga", "prima", "nina"];

/* ---------------------------------------------------------
   ARREGLOS
   id        → único. La foto del catálogo se busca en img/catalogo/<id>.jpg
               (si no existe, se muestra un diseño elegante mientras tanto)
   cat       → una de las categorías de arriba
   precio    → número en soles; null = "Consultar precio"
   incluye   → lista de lo que trae
   para      → a quién va dirigido (ids de DESTINATARIOS)
   tags      → temáticas (ids de TEMATICAS)
   nuevo     → true = aparece en "Lo más nuevo"
   linea     → texto opcional que se muestra como etiqueta
   colorEleg → true = el cliente puede elegir el color
   --------------------------------------------------------- */
window.PRODUCTOS = [

  /* ================= NOVEDADES DE OCTUBRE 2026 ================= */

  // --- Ramos de maquillaje (Día de regalar maquillaje · 25 de octubre) ---
  { id: "ramo-labiales-rosa-vino", nombre: "Ramo Labiales Rosa Vino", cat: "maquillaje", precio: null, nuevo: true,
    img: "img/nuevo/7.webp", para: MUJER,
    desc: "Labiales y rosas en tonos vino, envueltos en papel crema y rosa con gran moño satinado.",
    incluye: ["Labiales y productos de maquillaje a elección", "Rosas decorativas hechas a mano", "Papel decorativo y moño satinado", "Tarjeta dedicatoria"] },

  { id: "ramo-spa-lila", nombre: "Ramo Spa Lila", cat: "maquillaje", precio: null, nuevo: true,
    img: "img/nuevo/8.webp", para: MUJER,
    desc: "Body splash, cuidado personal y rosas rosadas en un ramo lila y rosa.",
    incluye: ["Fragancia y productos de cuidado personal", "Rosas rosadas hechas a mano", "Papel lila/rosa y moño", "Tarjeta dedicatoria"] },

  { id: "ramo-naranja-ambar", nombre: "Ramo Naranja Ámbar", cat: "maquillaje", precio: null, nuevo: true,
    img: "img/nuevo/9.webp", para: MUJER,
    desc: "Perfume, labiales y rosas naranjas sobre papel marmoleado con moño vino.",
    incluye: ["Perfume y labiales", "Rosas naranjas hechas a mano", "Papel marmoleado y moño vino", "Tarjeta dedicatoria"] },

  { id: "ramo-naranja-violeta", nombre: "Ramo Naranja y Violeta", cat: "maquillaje", precio: null, nuevo: true,
    img: "img/nuevo/10.webp", para: MUJER,
    desc: "Combinación vibrante: fragancia violeta, maquillaje y rosas naranjas.",
    incluye: ["Fragancia y maquillaje", "Rosas naranjas hechas a mano", "Papel marmoleado y moño vino", "Tarjeta dedicatoria"] },

  { id: "ramo-rosa-marmol", nombre: "Ramo Rosa Mármol", cat: "maquillaje", precio: null, nuevo: true,
    img: "img/nuevo/11.webp", para: MUJER.concat("nina"),
    desc: "Perfume, labiales y cajitas de regalo con rosas rosadas y mariposa dorada.",
    incluye: ["Perfume y labiales", "Cajitas de regalo", "Rosas rosadas y mariposa dorada", "Papel marmoleado y moño", "Tarjeta dedicatoria"] },

  { id: "ramo-te-amo-fucsia", nombre: "Ramo Te Amo Fucsia", cat: "maquillaje", precio: null, nuevo: true,
    img: "img/nuevo/12.webp", para: ["novia", "hermana", "amiga", "prima"],
    desc: "Papel con mensajes de “Te amo”, rosas fucsia y perfumes con moño fucsia.",
    incluye: ["Perfumes y labiales", "Rosas fucsia hechas a mano", "Papel “Te amo” y moño fucsia", "Tarjeta dedicatoria"] },

  { id: "ramo-rosa-beso", nombre: "Ramo Rosa Beso", cat: "maquillaje", precio: null, nuevo: true,
    img: "img/nuevo/13.webp", para: JOVEN,
    desc: "Paleta de maquillaje, labiales y rosas rosadas en papel con besos.",
    incluye: ["Paleta de maquillaje y labiales", "Rosas rosadas con tallo", "Papel decorativo y gran moño rosa", "Tarjeta dedicatoria"] },

  { id: "ramo-rojo-pasion", nombre: "Ramo Rojo Pasión", cat: "maquillaje", precio: null, nuevo: true,
    img: "img/nuevo/14.webp", para: ["novia", "mama", "hermana", "amiga", "tia"],
    desc: "Rosas rojas, mariposa dorada y maquillaje en papel rojo con moño.",
    incluye: ["Perfume, labiales y maquillaje", "Rosas rojas hechas a mano", "Mariposa dorada", "Papel rojo y moño", "Tarjeta dedicatoria"] },

  { id: "ramo-black-white", nombre: "Ramo Black & White", cat: "maquillaje", precio: null, nuevo: true,
    img: "img/nuevo/15.webp", para: ["novia", "hermana", "amiga", "prima"],
    desc: "Elegante ramo negro con rosas blancas, mariposa dorada y maquillaje.",
    incluye: ["Fragancia, paleta y labiales", "Rosas blancas hechas a mano", "Mariposa dorada", "Papel negro y moño blanco", "Tarjeta dedicatoria"] },

  { id: "ramo-fucsia-glam", nombre: "Ramo Fucsia Glam", cat: "maquillaje", precio: null, nuevo: true,
    img: "img/nuevo/16.webp", para: JOVEN,
    desc: "Paleta de sombras, base y máscara de pestañas con rosas fucsia y crema, más luces.",
    incluye: ["Base, paleta y máscara de pestañas", "Rosas fucsia y crema", "Luces decorativas", "Papel rosa marmoleado y moño fucsia", "Tarjeta dedicatoria"] },

  { id: "ramo-bella-viva", nombre: "Ramo Bella Viva", cat: "maquillaje", precio: null, nuevo: true,
    img: "img/nuevo/17.webp", para: JOVEN,
    desc: "Labial, brochas y rosas rosadas en un ramo suave con moño satinado.",
    incluye: ["Labial y set de brochas", "Rosas rosadas hechas a mano", "Papel rosa y moño satinado", "Tarjeta dedicatoria"] },

  { id: "ramo-glow-fucsia", nombre: "Ramo Glow Fucsia", cat: "maquillaje", precio: null, nuevo: true,
    img: "img/nuevo/18.webp", para: JOVEN,
    desc: "Bases de maquillaje, paleta y gypsophila con rosas fucsia y luces.",
    incluye: ["Bases de maquillaje y paleta", "Rosas fucsia", "Luces decorativas", "Papel rosa marmoleado y moño fucsia", "Tarjeta dedicatoria"] },

  { id: "ramo-mini-glam", nombre: "Ramo Mini Glam", cat: "maquillaje", precio: null, nuevo: true,
    img: "img/nuevo/21.webp", para: ["nina", "hermana", "prima"],
    desc: "Accesorios, brillos labiales y fragancia con rosas cremas. Ideal para consentir a las más pequeñas.",
    incluye: ["Accesorios y brillos labiales", "Fragancia", "Rosas cremas hechas a mano", "Papel rosa marmoleado y moño fucsia", "Tarjeta dedicatoria"] },

  { id: "pack-ramo-estrellas", nombre: "Pack Ramo Estrellas", cat: "ramos", precio: null, nuevo: true,
    img: "img/nuevo/1.webp", para: ["nina", "hermana", "prima"], tags: ["personajes"],
    desc: "Regalos mágicos para niñas: estrellas, flores y mucho más. ¡Que ella sea la protagonista!",
    incluye: ["Estrellas, flores y detalles para niñas", "Moño decorativo", "Se arma a tu gusto: consulta el contenido por WhatsApp"] },

  // --- Cajas regalo ---
  { id: "caja-snoopy-favorita", nombre: "Caja Snoopy · Persona Favorita", cat: "cajas", precio: null, nuevo: true,
    img: "img/nuevo/2.webp", para: ["novia", "hermana", "amiga", "prima", "nina"], tags: ["peluche"],
    desc: "Caja rosa con peluche de Snoopy, collar, fotos y carta dedicatoria, con luces cálidas.",
    incluye: ["Peluche de Snoopy", "Collar", "Fotos estilo instantáneo", "Carta dedicatoria", "Chocolate y detalles dulces", "Luces LED y decoración floral"] },

  { id: "caja-hello-kitty-dulce", nombre: "Caja Hello Kitty Dulce", cat: "cajas", precio: null, nuevo: true,
    img: "img/nuevo/3.webp", para: ["novia", "hermana", "amiga", "prima", "nina"], tags: ["peluche"],
    desc: "Peluche de Hello Kitty con collar, fotos, carta y chocolate en caja rosa.",
    incluye: ["Peluche de Hello Kitty", "Collar", "Fotos estilo instantáneo", "Carta dedicatoria", "Chocolate", "Luces LED y decoración floral"] },

  { id: "caja-cinnamoroll-detalle", nombre: "Caja Cinnamoroll · Detalle Especial", cat: "cajas", precio: null, nuevo: true,
    img: "img/nuevo/4.webp", para: ["novia", "hermana", "amiga", "prima", "nina"], tags: ["peluche"],
    desc: "Peluche Cinnamoroll, bolsito con lazo, pulsera y dulces en una caja hecha con el corazón.",
    incluye: ["Peluche Cinnamoroll", "Bolsito con lazo", "Pulsera", "Fotos estilo instantáneo", "Chocolate y galleta", "Luces LED"] },

  { id: "caja-lotso-fresita", nombre: "Caja Lotso Fresita", cat: "cajas", precio: null, nuevo: true,
    img: "img/nuevo/5.webp", para: ["novia", "hermana", "amiga", "prima", "nina"], tags: ["peluche"],
    desc: "Osito rosado con aroma a fresa, collar, fotos y carta. Un abrazo en caja.",
    incluye: ["Peluche osito rosado", "Collar", "Fotos estilo instantáneo", "Carta dedicatoria", "Chocolate", "Luces LED y decoración floral"] },

  { id: "caja-gatita-corazon", nombre: "Caja Gatita Corazón", cat: "cajas", precio: null, nuevo: true,
    img: "img/nuevo/6.webp", para: ["novia", "hermana", "amiga", "prima", "nina"], tags: ["peluche"],
    desc: "Gatita de peluche con corazón, pulsera brillante, fotos y carta.",
    incluye: ["Peluche de gatita", "Pulsera", "Fotos estilo instantáneo", "Carta dedicatoria", "Chocolate", "Luces LED y decoración floral"] },

  { id: "caja-snoopy-bolsito", nombre: "Caja Snoopy · Bolsito Bordado", cat: "cajas", precio: null, nuevo: true,
    img: "img/nuevo/20.webp", para: ["novia", "hermana", "amiga", "prima", "nina"], tags: ["peluche"],
    desc: "Osito, bolsito bordado, fotos, carta y galletas en una caja llena de amor.",
    incluye: ["Osito de peluche", "Bolsito bordado", "Fotos estilo instantáneo", "Carta dedicatoria", "Galletas y chocolate", "Luces LED y decoración floral"] },


  /* ================= CATÁLOGO · RAMOS Y FLORES ETERNAS ================= */

  // --- Flores sueltas y girasoles ---
  { id: "flor-love", nombre: "Flor Love", cat: "flores", precio: 15, para: MUJER, colorEleg: true,
    desc: "Una rosa eterna roja con mariposa y tarjeta: el detalle perfecto para decir “te quiero”.",
    incluye: ["1 rosa eterna (color rojo)", "1 mariposa (opcional)", "Tarjeta dedicatoria"] },

  { id: "flor-aurora", nombre: "Flor Aurora", cat: "flores", precio: 15, para: MUJER,
    desc: "Una rosa eterna en tono rosado con mariposa y tarjeta.",
    incluye: ["1 rosa eterna (color rosado)", "1 mariposa (opcional)", "Tarjeta dedicatoria"] },

  { id: "flor-mi-candy", nombre: "Flor Mi Candy", cat: "flores", precio: 15, para: MUJER,
    desc: "Una rosa eterna rosada, dulce y delicada, con mariposa y tarjeta.",
    incluye: ["1 rosa eterna (color rosado)", "1 mariposa (opcional)", "Tarjeta dedicatoria"] },

  { id: "girasol-mi-love", nombre: "Girasol Mi Love", cat: "flores", precio: 18, para: MUJER, tags: ["amarillas"],
    desc: "Un girasol mediano con lazo y tarjeta de cartulina. Alegría amarilla para quien más quieres.",
    incluye: ["1 girasol mediano", "1 lazo", "Tarjeta dedicatoria (a base de cartulina)"] },

  { id: "mi-girasol-favorita", nombre: "Mi Girasol Favorita", cat: "flores", precio: 22, para: MUJER, tags: ["amarillas"],
    desc: "Girasol con lazo, mariposa y tres fotos pequeñas para recordar sus mejores momentos.",
    incluye: ["1 girasol mediano", "1 lazo", "Tarjeta dedicatoria (a base de cartulina)", "1 mariposa pequeña", "3 fotos pequeñas (5×5 cm)"] },

  // --- Ramos de rosas · Línea clásica (catálogo 1) ---
  { id: "ramo-sally", nombre: "Ramo Sally", cat: "ramos", precio: 35, para: MUJER, linea: "Línea clásica", colorEleg: true,
    desc: "Cinco rosas con lazo y mariposa. Pequeño, bonito y lleno de cariño.",
    incluye: ["5 rosas", "1 lazo", "1 mariposa", "Tarjeta dedicatoria"] },

  { id: "ramo-daniel-clasico", nombre: "Ramo Daniel", cat: "ramos", precio: 45, para: ["novia", "hermana", "amiga", "mama"], linea: "Línea clásica",
    desc: "Tres rosas eternas azules con mariposa y una fotografía en la tarjeta.",
    incluye: ["3 rosas eternas (color azul)", "1 mariposa", "Tarjeta dedicatoria + 1 fotografía (7 cm ancho × 10 cm largo)"] },

  { id: "ramo-princesa-amada-clasico", nombre: "Ramo Mi Princesa Amada", cat: "ramos", precio: 45, para: MUJER, linea: "Línea clásica", tags: ["amarillas"],
    desc: "Rosas eternas rojas acompañadas de un girasol. Rojo pasión y amarillo alegría.",
    incluye: ["4 rosas eternas (color rojo)", "1 girasol", "Tarjeta dedicatoria"] },

  { id: "ramo-stich", nombre: "Ramo Stich", cat: "ramos", precio: 50, para: JOVEN, linea: "Línea clásica", tags: ["personajes"],
    desc: "Seis rosas con imagen de Stitch y dos mariposas. ¡Ohana!",
    incluye: ["6 rosas + imagen de Stitch", "1 lazo", "Tarjeta dedicatoria", "2 mariposas"] },

  { id: "ramo-moana", nombre: "Ramo Moana", cat: "ramos", precio: 50, para: JOVEN, linea: "Línea clásica", tags: ["personajes", "princesas"],
    desc: "Rosas naranjas y celestes con imagen de Moana. Un ramo aventurero y colorido.",
    incluye: ["4 rosas naranjas + 3 rosas celestes", "1 lazo", "Tarjeta dedicatoria", "1 imagen de Moana"] },

  { id: "ramo-mi-bella-princesa", nombre: "Ramo Mi Bella Princesa", cat: "ramos", precio: 58, para: JOVEN, linea: "Línea clásica", tags: ["personajes"],
    desc: "Siete rosas con temática de Rapunzel para tu princesa.",
    incluye: ["7 rosas", "1 lazo", "Tarjeta dedicatoria", "Imágenes con temática de Rapunzel"] },

  { id: "ramo-my-queen-tiana", nombre: "Ramo My Queen Tiana", cat: "ramos", precio: 60, para: JOVEN, linea: "Línea clásica", tags: ["personajes", "corona"],
    desc: "Siete rosas con imagen de Tiana, chocolate y mini corona dorada.",
    incluye: ["7 rosas + imagen de Tiana", "1 lazo", "Tarjeta dedicatoria", "1 chocolate", "1 mini corona dorada"] },

  { id: "ramo-dulzura-explosiva", nombre: "Ramo Dulzura Explosiva · Chicas Superpoderosas", cat: "ramos", precio: 68, para: JOVEN, linea: "Línea clásica", tags: ["personajes"],
    desc: "Seis rosas con imagen de las Chicas Superpoderosas. Dulce, pero con poder.",
    incluye: ["6 rosas", "1 lazo", "Tarjeta dedicatoria", "1 imagen de las Chicas Superpoderosas"] },

  { id: "ramo-my-queen", nombre: "Ramo My Queen", cat: "ramos", precio: 70, para: MUJER, linea: "Línea clásica", tags: ["corona", "amarillas"],
    desc: "Un girasol y diez rosas con perla, mariposa y corona dorada para una reina.",
    incluye: ["1 girasol + 10 rosas (con perla)", "1 lazo", "Tarjeta dedicatoria", "1 mariposa", "1 corona dorada"] },

  { id: "ramo-my-princess-clasico", nombre: "Ramo My Princess", cat: "ramos", precio: 75, para: JOVEN, linea: "Línea clásica", tags: ["personajes"],
    desc: "Siete rosas con siete imágenes de princesas.",
    incluye: ["7 rosas + 7 imágenes de las princesas", "1 lazo", "Tarjeta dedicatoria"] },

  { id: "ramo-mi-bombon", nombre: "Ramo Mi Bombón", cat: "ramos", precio: 80, para: MUJER, linea: "Línea clásica",
    desc: "Nueve rosas con lazo y una mariposa. Un clásico que nunca falla.",
    incluye: ["9 rosas", "1 lazo", "Tarjeta dedicatoria", "1 mariposa"] },

  { id: "ramo-lizeth-clasico", nombre: "Ramo Lizeth", cat: "ramos", precio: 80, para: MUJER, linea: "Línea clásica", tags: ["corona"],
    desc: "Nueve rosas, cuatro mariposas y una tiara.",
    incluye: ["9 rosas", "4 mariposas", "Tarjeta dedicatoria", "1 tiara"] },

  { id: "ramo-corazon-de-bellota", nombre: "Ramo Corazón de Bellota", cat: "ramos", precio: 85, para: JOVEN, linea: "Línea clásica", tags: ["personajes"],
    desc: "Siete rosas con tres imágenes de Bellota y luces. Para la más valiente.",
    incluye: ["7 rosas", "1 lazo", "Tarjeta dedicatoria", "3 imágenes de Bellota", "Luces"] },

  // --- Ramos de rosas eternas · Catálogo Flores Eternas ---
  { id: "ramo-daniel", nombre: "Ramo Daniel", cat: "ramos", precio: 40, para: ["novia", "hermana", "amiga", "mama"], linea: "Flores eternas",
    desc: "Tres rosas eternas azules con mariposa y tarjeta dedicatoria.",
    incluye: ["3 rosas eternas (color azul)", "1 mariposa", "Tarjeta dedicatoria"] },

  { id: "ramo-princesa-amada", nombre: "Ramo Mi Princesa Amada", cat: "ramos", precio: 58, para: MUJER, linea: "Flores eternas", tags: ["amarillas"],
    desc: "Rosas eternas rojas con un girasol.",
    incluye: ["4 rosas eternas (color rojo)", "1 girasol", "Tarjeta dedicatoria"] },

  { id: "ramo-mi-tierna-bebe", nombre: "Ramo Mi Tierna Bebé", cat: "ramos", precio: 60, para: ["novia", "hermana", "amiga", "prima", "nina"], linea: "Flores eternas", colorEleg: true,
    desc: "Cinco rosas eternas rosadas con mariposa. Ternura en forma de ramo.",
    incluye: ["5 rosas eternas (color rosado)", "1 mariposa", "Tarjeta dedicatoria"] },

  { id: "ramo-mom", nombre: "Ramo Mom", cat: "ramos", precio: 70, para: ["mama", "tia"], linea: "Flores eternas", colorEleg: true,
    desc: "Para mamá, con banda de frase y rosas eternas que duran para siempre.",
    incluye: ["7 rosas eternas", "1 banda con frase", "2 mariposas", "Tarjeta dedicatoria"] },

  { id: "ramo-naya", nombre: "Ramo Naya", cat: "ramos", precio: 78, para: JOVEN, linea: "Flores eternas", tags: ["amarillas", "personajes"],
    desc: "Seis rosas eternas grandes amarillas con imagen de Winnie Pooh.",
    incluye: ["6 rosas eternas grandes (color amarillo)", "Imagen de Winnie Pooh", "Tarjeta dedicatoria"] },

  { id: "ramo-my-princess", nombre: "Ramo My Princess", cat: "ramos", precio: 80, para: JOVEN, linea: "Flores eternas", colorEleg: true,
    desc: "Siete rosas eternas con tul, banda con frase y mariposa.",
    incluye: ["7 rosas eternas con tul", "1 banda con frase", "1 mariposa", "Tarjeta dedicatoria"] },

  { id: "ramo-lya", nombre: "Ramo Lya", cat: "ramos", precio: 88, para: MUJER, linea: "Flores eternas",
    desc: "Doce rosas eternas rosadas con banda de frase y dos mariposas.",
    incluye: ["12 rosas eternas (color rosado)", "1 banda con frase", "2 mariposas", "Tarjeta dedicatoria"] },

  { id: "ramo-megara", nombre: "Ramo Megara", cat: "ramos", precio: 95, para: JOVEN, linea: "Flores eternas", tags: ["personajes", "corona"],
    desc: "Doce rosas eternas moradas con tiara, frase y mariposa.",
    incluye: ["12 rosas eternas (color morado)", "1 frase", "1 tiara", "1 mariposa", "Tarjeta dedicatoria"] },

  { id: "ramo-mi-reyna", nombre: "Ramo Mi Reyna", cat: "ramos", precio: 100, para: MUJER, linea: "Flores eternas", tags: ["corona"],
    desc: "Diez rosas rojas y dieciocho rosas cremas con corona de metal. Para la reina de tu vida.",
    incluye: ["10 rosas eternas (color rojo)", "18 rosas cremas", "1 corona de metal", "2 mariposas", "Tarjeta dedicatoria"] },

  { id: "ramo-mi-love", nombre: "Ramo Mi Love", cat: "ramos", precio: 100, para: MUJER, linea: "Flores eternas", tags: ["amarillas"],
    desc: "Diez rosas rojas y trece rosas amarillas. Pasión y alegría en un solo ramo.",
    incluye: ["10 rosas eternas (color rojo)", "13 rosas eternas (color amarillo)", "2 mariposas", "Tarjeta dedicatoria"] },

  { id: "ramo-lizeth", nombre: "Ramo Lizeth", cat: "ramos", precio: 110, para: MUJER, linea: "Flores eternas", colorEleg: true,
    desc: "Nueve rosas eternas en el color que tú elijas, con cuatro mariposas.",
    incluye: ["9 rosas eternas (color a elección)", "4 mariposas", "Tarjeta dedicatoria"] },

  { id: "ramo-tiana", nombre: "Ramo Tiana", cat: "ramos", precio: 115, para: JOVEN, linea: "Flores eternas", tags: ["personajes", "corona"],
    desc: "Quince rosas eternas con dos mariposas y corona.",
    incluye: ["15 rosas eternas", "2 mariposas", "1 corona", "Tarjeta dedicatoria"] },

  { id: "ramo-bella", nombre: "Ramo Bella", cat: "ramos", precio: 120, para: JOVEN, linea: "Flores eternas", tags: ["corona", "personajes"],
    desc: "Veinte rosas eternas con banda de frase, tres mariposas, tiara de metal y lazo.",
    incluye: ["20 rosas eternas", "1 banda con frase", "3 mariposas", "1 tiara de metal", "1 lazo", "Tarjeta dedicatoria"] },

  { id: "ramo-my-kriss", nombre: "Ramo My Kriss", cat: "ramos", precio: 120, para: JOVEN, linea: "Flores eternas", tags: ["corona"],
    desc: "Quince rosas eternas con dos mariposas y corona.",
    incluye: ["15 rosas eternas", "2 mariposas", "1 corona", "Tarjeta dedicatoria"] },

  { id: "ramo-encanto", nombre: "Ramo Encanto", cat: "ramos", precio: 140, para: JOVEN, linea: "Flores eternas", tags: ["corona", "personajes"],
    desc: "Veinte rosas eternas escarchadas con frase, tiara de metal y dos mariposas.",
    incluye: ["20 rosas eternas (escarchadas)", "1 frase", "2 mariposas", "1 tiara de metal", "Tarjeta dedicatoria"] },

  { id: "ramo-my-girl", nombre: "Ramo My Girl", cat: "ramos", precio: 190, para: JOVEN, linea: "Flores eternas", tags: ["corona"],
    desc: "Nuestro ramo más grande: veintiséis rosas eternas, letra y corazón de flores, y corona de metal.",
    incluye: ["26 rosas eternas", "1 letra y corazón con flores", "3 mariposas", "1 corona de metal", "Tarjeta dedicatoria"] },

  { id: "ramo-bouquet-belen", nombre: "Ramo Bouquet Belén", cat: "ramos", precio: 80, para: MUJER, linea: "Flores eternas",
    desc: "Treinta rosas eternas con mariposa dorada. Un bouquet espectacular.",
    incluye: ["30 rosas eternas", "1 mariposa dorada (pequeña)", "Tarjeta dedicatoria"] },


  /* ================= PARA ÉL ================= */

  { id: "caja-hot-wheels", nombre: "Caja Hot Wheels", cat: "el", precio: 148, para: ["el"], tags: ["peluche"],
    desc: "Caja decorada con carritos Hot Wheels, peluche de pingüino, trofeo, llavero y tarjetas. Para el mejor novio del mundo.",
    incluye: ["1 caja decorada de Hot Wheels", "2 carritos de juguete Hot Wheels", "1 peluche de pingüino + gran moño azul satinado", "1 tarjeta de dedicatoria azul: “Te mereces esto y mucho más”", "1 mini trofeo dorado", "1 llavero de Hot Wheels azul con frase", "1 tarjeta “Llévame SIEMPRE contigo”", "1 tarjeta “Para el MEJOR NOVIO del mundo”", "1 fotografía o sticker de personaje Pop!", "1 sobre con fotografías"] },

  { id: "box-hot-wheels-cuadro", nombre: "Box Hot Wheels + Cuadro", cat: "el", precio: 90, para: ["el"],
    desc: "Box con cuadro de fotos 10×15, carrito, trofeo, llavero, globo y Doritos.",
    incluye: ["Box", "1 Doritos", "Globo", "Carro", "Trofeo", "1 llavero", "1 cuadro 10×15"] },

  { id: "bolsita-hot-wheels", nombre: "Bolsita Hot Wheels", cat: "el", precio: 56, para: ["el"],
    desc: "Bolsita de carro con globo, bon bon y foto.",
    incluye: ["Bolsita de carro", "Globo", "1 bon bon", "Foto"] },

  { id: "cuadro-spotify-madera", nombre: "Cuadro Spotify + Ramo de limpiapipas", cat: "el", precio: 75, para: ["el", "novia"],
    desc: "Cuadro con marco de madera y diseño de reproductor de Spotify con tu canción, más un ramo azul de limpiapipas.",
    incluye: ["1 cuadro con marco de madera", "1 diseño de reproductor de Spotify", "1 dedicatoria", "1 ramo de flores de limpiapipas: 6 flores grandes azules, 6 tallos verdes, 4 hojas decorativas verdes", "1 lazo fino blanco", "3 ramitas de flores decorativas"] },

  { id: "cuadro-spotify-blanco", nombre: "Cuadro Spotify · Marco blanco", cat: "el", precio: 87, para: ["el", "novia"],
    desc: "Cuadro con marco blanco, canción personalizada en reproductor de Spotify y flores azules de limpiapipas.",
    incluye: ["1 cuadro con marco blanco", "1 imagen de reproductor de Spotify con la canción (personalizado)", "1 dedicatoria: “mes contigo y ya quiero toda una vida contigo”", "1 listón", "1 flor grande de limpiapipas azul", "2 tulipanes de limpiapipas azul", "2 tulipanes pequeños de limpiapipas azul", "1 fotografía"] },

  { id: "caja-ojos-bonitos", nombre: "Caja “Para mi niño de ojos bonitos”", cat: "el", precio: 151, para: ["el"],
    desc: "Caja grande con luces LED, fotos colgantes, muñeco de crochet y muchos snacks favoritos.",
    incluye: ["1 caja de cartón grande", "1 frase en letras doradas: “Para mi niño de ojos bonitos”", "Luces LED", "3 corazones decorativos", "4 fotografías personalizadas con 4 pinzas de madera", "1 mini muñeco de crochet", "1 bolsa de papas Takis", "1 lata de papas Pringles", "1 paquete de dulces Skwinkles", "8 barras de chocolate"] },


  /* ================= CARTAS Y COMBOS ================= */

  { id: "carta-decorada", nombre: "Carta decorada a mano", cat: "cartas", precio: 8, para: MUJER.concat("el", "nina"),
    desc: "Carta hecha y decorada a mano. Envíanos tu mensaje o te ayudamos a redactarlo.",
    incluye: ["Carta decorada a mano", "Puedes enviar tu mensaje o te ayudamos a redactarlo"] },

  { id: "mini-carta", nombre: "Mini carta", cat: "cartas", precio: 5, para: MUJER.concat("el", "nina"),
    desc: "Una cartita pequeña pero llena de cariño.",
    incluye: ["Mini carta personalizada"] },

  { id: "tarjeta-cartulina", nombre: "Tarjeta de cartulina", cat: "cartas", precio: 12, para: MUJER.concat("el", "nina"),
    desc: "Tarjeta dedicatoria hecha con cartulina.",
    incluye: ["Tarjeta hecha con cartulina", "Mensaje personalizado"] },

  { id: "combo-amor-eterno", nombre: "Combo Amor Eterno", cat: "cartas", precio: 35, para: ["novia", "amiga", "hermana", "prima", "mama"], colorEleg: false,
    desc: "Dos rosas eternas rojas y una carta. Amor que no se marchita.",
    incluye: ["2 rosas eternas (rojas)", "Carta"] },

  { id: "combo-cumpleanero", nombre: "Combo Cumpleañero", cat: "cartas", precio: 45, para: MUJER.concat("el", "nina"),
    desc: "Cajita decorada con rosa, mensaje y dulces para celebrar un cumpleaños.",
    incluye: ["Cajita decorada", "Rosa", "Mensaje", "Dulces"] },
];

/* ---------------------------------------------------------
   FOTOS DEL CATÁLOGO
   Cada línea:  "id-del-arreglo": "nombre-del-archivo.webp"  (o .jpg/.png)
   El archivo va dentro de img/catalogo/. Los arreglos que no están
   aquí muestran un diseño elegante hasta que tengan su foto.
   --------------------------------------------------------- */
window.FOTOS = {
  "bolsita-hot-wheels": "bolsita-hot-wheels.webp",
  "box-hot-wheels-cuadro": "box-hot-wheels-cuadro.webp",
  "caja-hot-wheels": "caja-hot-wheels.webp",
  "caja-ojos-bonitos": "caja-ojos-bonitos.webp",
  "combo-amor-eterno": "combo-amor-eterno.webp",
  "cuadro-spotify-blanco": "cuadro-spotify-blanco.webp",
  "cuadro-spotify-madera": "cuadro-spotify-madera.webp",
  "flor-aurora": "flor-aurora.webp",
  "flor-love": "flor-love.webp",
  "flor-mi-candy": "flor-mi-candy.webp",
  "girasol-mi-love": "girasol-mi-love.webp",
  "mi-girasol-favorita": "mi-girasol-favorita.webp",
  "ramo-bella": "ramo-bella.webp",
  "ramo-bouquet-belen": "ramo-bouquet-belen.webp",
  "ramo-corazon-de-bellota": "ramo-corazon-de-bellota.webp",
  "ramo-daniel": "ramo-daniel.webp",
  "ramo-daniel-clasico": "ramo-daniel-clasico.webp",
  "ramo-dulzura-explosiva": "ramo-dulzura-explosiva.webp",
  "ramo-encanto": "ramo-encanto.webp",
  "ramo-lizeth": "ramo-lizeth.webp",
  "ramo-lizeth-clasico": "ramo-lizeth-clasico.webp",
  "ramo-lya": "ramo-lya.webp",
  "ramo-megara": "ramo-megara.webp",
  "ramo-mi-bella-princesa": "ramo-mi-bella-princesa.webp",
  "ramo-mi-bombon": "ramo-mi-bombon.webp",
  "ramo-mi-love": "ramo-mi-love.webp",
  "ramo-mi-reyna": "ramo-mi-reyna.webp",
  "ramo-mi-tierna-bebe": "ramo-mi-tierna-bebe.webp",
  "ramo-moana": "ramo-moana.webp",
  "ramo-mom": "ramo-mom.webp",
  "ramo-my-girl": "ramo-my-girl.webp",
  "ramo-my-kriss": "ramo-my-kriss.webp",
  "ramo-my-princess": "ramo-my-princess.webp",
  "ramo-my-princess-clasico": "ramo-my-princess-clasico.webp",
  "ramo-my-queen": "ramo-my-queen.webp",
  "ramo-my-queen-tiana": "ramo-my-queen-tiana.webp",
  "ramo-naya": "ramo-naya.webp",
  "ramo-princesa-amada": "ramo-princesa-amada.webp",
  "ramo-princesa-amada-clasico": "ramo-princesa-amada-clasico.webp",
  "ramo-sally": "ramo-sally.webp",
  "ramo-stich": "ramo-stich.webp",
  "ramo-tiana": "ramo-tiana.webp",
};
