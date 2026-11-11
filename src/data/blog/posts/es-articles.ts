import type { BlogPostFull } from '../types';

const matchEsp = {
  image: '/images/gameplay/modern-warfare-4-match-esp.webp',
  imageWidth: 1024,
  imageHeight: 576,
} as const;

const aimbotMenu = {
  image: '/images/gameplay/modern-warfare-4-aimbot-menu.webp',
  imageWidth: 1024,
  imageHeight: 627,
} as const;

const espMenu = {
  image: '/images/gameplay/modern-warfare-4-esp-menu.webp',
  imageWidth: 1024,
  imageHeight: 627,
} as const;

export const esBlogArticles: BlogPostFull[] = [
  {
    slug: 'buy-modern-warfare-4-cheats',
    title: 'Cómo comprar cheats de Modern Warfare 4: qué revisar antes de pagar',
    h1: 'Cómo comprar cheats de Modern Warfare 4: qué revisar antes de pagar',
    tag: 'Guías para compradores',
    desc: 'Una lista práctica para quien vaya a comprar cheats de Modern Warfare 4: requisitos de PC, entrega, soporte y qué confirmar antes del pago.',
    metaTitle: 'Comprar cheats de Modern Warfare 4: lista antes de pagar',
    metaDescription:
      '¿Piensas comprar cheats de Modern Warfare 4? Revisa primero requisitos de PC, entrega, soporte, licencia y actualizaciones.',
    date: '2026-10-26',
    readTime: '5 min de lectura',
    featured: true,
    imageAlt: 'Azotea MW4 beta en primera persona con cajas ESP, nombres y distancias',
    ...matchEsp,
    body: [
      {
        type: 'p',
        text: 'Comprar cheats para un Call of Duty recién lanzado no es lo mismo que hacerlo en un juego con años en el mercado. Modern Warfare 4 salió el 23 de octubre de 2026 con una versión nueva de Ricochet, así que los detalles de la compra importan más que el precio. Esto es lo que vale la pena comprobar antes de pagar.',
      },
      { type: 'h2', text: 'Confirma que tu PC puede jugar online de verdad' },
      {
        type: 'p',
        text: 'En PC, Modern Warfare 4 exige [TPM 2.0 y Secure Boot](/blog/how-to-enable-tpm-2-and-secure-boot-for-modern-warfare-4/) antes de poder jugar online. Si alguno está desactivado, el juego no te dejará entrar a partidas, con o sin software adicional. Revisa esto primero, porque es la razón más habitual por la que la gente cree que una compra "no funciona".',
      },
      {
        type: 'p',
        text: 'Nuestras herramientas también listan HVCI, Core Isolation, TPM y Secure Boot como ajustes obligatorios en Windows 10 u 11 (64 bits). Cloud DMA también hace falta para la funcionalidad completa de nuestros productos, así que lee las notas de configuración antes de comprar, no después.',
      },
      { type: 'h2', text: 'Mira qué incluye y qué no' },
      {
        type: 'p',
        text: 'Una buena página de producto te dice con claridad qué recibes. Antes del pago, busca:',
      },
      {
        type: 'ul',
        items: [
          'La lista actual de funciones, no una línea vaga de "todas las funciones"',
          'Versiones de Windows compatibles',
          'Si el producto está hecho para Modern Warfare 4 en concreto o para títulos antiguos de Call of Duty',
          'Cómo se entrega el acceso tras el pago',
          'Dónde pedir ayuda si algo falla',
        ],
      },
      {
        type: 'p',
        text: 'Si una página no responde a esto, pregunta a [soporte](/support/) antes de pagar.',
      },
      { type: 'h2', text: 'Elige una duración de licencia acorde a cómo juegas' },
      {
        type: 'p',
        text: 'Las licencias cortas encajan con quien quiere probar un producto con poco compromiso. Las más largas tienen más sentido si juegas a diario y piensas quedarte en un título toda una temporada. Lo que elijas, comprueba qué pasa cuando el juego se actualiza, porque los parches de Call of Duty pueden cambiar el comportamiento del software de terceros.',
      },
      { type: 'h2', text: 'Revisa cómo se gestionan actualizaciones y soporte' },
      {
        type: 'p',
        text: 'Modern Warfare 4 es nuevo y Ricochet se actualiza con frecuencia; Activision se ha comprometido a actualizaciones regulares del anti-cheat durante la primera temporada. Eso significa que cualquier producto para este juego necesita mantenimiento activo. Busca una forma clara de hacer preguntas, informar de problemas y enterarte de las novedades.',
      },
      { type: 'h2', text: 'Sé realista con el riesgo' },
      {
        type: 'p',
        text: 'Ningún cheat para un juego online está libre de riesgo. Activision ha dicho que los baneos por hardware se refuerzan, de modo que un ban puede seguir a tu PC, no solo a tu cuenta. Quien compre debe entenderlo desde el principio. Lo tratamos con más detalle en nuestra guía sobre [cómo valorar los riesgos](/blog/are-modern-warfare-4-cheats-safe/).',
      },
      { type: 'h2', text: 'Listo para ver el producto' },
      {
        type: 'p',
        text: 'Si ya revisaste tu PC y sabes qué buscas, puedes ver los detalles actuales en nuestra página de [cheats de Modern Warfare 4](/modern-warfare-4-cheats/), incluido qué viene incluido y cómo funciona el acceso.',
      },
    ],
  },
  {
    slug: 'modern-warfare-4-anti-cheat-explained',
    title: 'Anti-cheat de Modern Warfare 4 explicado: Ricochet, driver en kernel y server culling',
    h1: 'Anti-cheat de Modern Warfare 4 explicado',
    tag: 'Guías',
    desc: 'Desglose claro de las capas anti-cheat que Activision usa en Modern Warfare 4 y qué significa cada una para jugadores de PC.',
    metaTitle: 'Anti-cheat de Modern Warfare 4: Ricochet y server culling',
    metaDescription:
      '¿Cómo funciona el anti-cheat en Modern Warfare 4? Explicación de Ricochet, el driver en kernel, TPM 2.0, Secure Boot y baneos por hardware.',
    date: '2026-10-15',
    readTime: '5 min de lectura',
    imageAlt: 'Overlay MW4 pestaña Aimbot con interruptor, teclas de aim y deslizadores FOV',
    ...aimbotMenu,
    body: [
      {
        type: 'p',
        text: 'El anti-cheat en Call of Duty ha cambiado mucho desde que apareció Ricochet. Modern Warfare 4, lanzado el 23 de octubre de 2026, reúne varias capas. Aquí va una explicación sencilla de cada una, según lo que Activision ha dicho en público.',
      },
      { type: 'h2', text: 'Qué es Ricochet' },
      {
        type: 'p',
        text: 'Ricochet es el sistema anti-cheat interno de Activision para la saga Call of Duty. Cubre Modern Warfare 4 junto con títulos recientes de Call of Duty y Warzone. En PC usa un driver a nivel de kernel, lo que le da visibilidad profunda sobre lo que se ejecuta en el sistema.',
      },
      { type: 'h2', text: 'TPM 2.0 y Secure Boot' },
      {
        type: 'p',
        text: 'Para la beta y el lanzamiento de Modern Warfare 4 en PC, Activision exige TPM 2.0 y Secure Boot antes de poder jugar online. Ambos son funciones de seguridad de Windows que dificultan la manipulación a bajo nivel. Si no sabes si los tienes activos, nuestra [guía de configuración de TPM 2.0 y Secure Boot](/blog/how-to-enable-tpm-2-and-secure-boot-for-modern-warfare-4/) lo explica paso a paso.',
      },
      { type: 'h2', text: 'Baneos por hardware' },
      {
        type: 'p',
        text: 'Activision ha dicho que sus baneos por hardware se han reforzado, de modo que el castigo debe afectar al propio PC y no solo a la cuenta. Por eso muchos jugadores baneados preguntan qué es un ban HWID y cuánto dura. En resumen, la sanción se ata a identificadores del hardware, lo que la hace más difícil de ignorar que un ban de cuenta.',
      },
      { type: 'h2', text: 'Server culling' },
      {
        type: 'p',
        text: 'Server culling es una capa más reciente orientada a wallhacks. La idea es que el servidor evita enviar datos de posición enemiga a tu cliente cuando ese enemigo no debería ser visible para ti, así hay menos información que revelar desde el principio. Activision ha dicho que esto aplica a todos los mapas en el lanzamiento, con mapas nuevos de temporada en vivo cubiertos en adelante.',
      },
      { type: 'h2', text: 'Actualizaciones semanales' },
      {
        type: 'p',
        text: 'Activision se ha comprometido a actualizaciones regulares del anti-cheat hasta el final de la Temporada 1. Es una señal útil para quien siga este ámbito: las reglas y los riesgos no son estáticos, y lo cierto en el lanzamiento puede cambiar en pocas semanas.',
      },
      { type: 'h2', text: 'Qué significa para los jugadores' },
      {
        type: 'p',
        text: 'Para quien juega limpio, estos cambios son buenas noticias. Para quien considere software de terceros, significan un entorno más exigente que en Call of Duty anteriores. Si estás sopesando esa decisión, lee nuestro análisis sobre [si los cheats de Modern Warfare 4 son seguros](/blog/are-modern-warfare-4-cheats-safe/) y asegúrate de entender los riesgos antes de comprar nada, también con nosotros.',
      },
    ],
  },
  {
    slug: 'how-to-enable-tpm-2-and-secure-boot-for-modern-warfare-4',
    title: 'Cómo activar TPM 2.0 y Secure Boot para Modern Warfare 4 en PC',
    h1: 'Cómo activar TPM 2.0 y Secure Boot para Modern Warfare 4',
    tag: 'Solución de problemas',
    desc: 'Ayuda paso a paso para comprobar y activar TPM 2.0 y Secure Boot para que Modern Warfare 4 te deje jugar online en PC.',
    metaTitle: 'Activar TPM 2.0 y Secure Boot para Modern Warfare 4 (PC)',
    metaDescription:
      'Modern Warfare 4 en PC necesita TPM 2.0 y Secure Boot. Cómo comprobar ambos, activarlos en la BIOS y resolver problemas habituales.',
    date: '2026-10-06',
    readTime: '6 min de lectura',
    imageAlt: 'Overlay MW4 pestaña ESP con caja de jugador, nombre, vida y distancia',
    ...espMenu,
    body: [
      {
        type: 'p',
        text: 'Modern Warfare 4 en PC no te dejará jugar online a menos que TPM 2.0 y Secure Boot estén activados. Si ves un error, esta guía explica cómo comprobar cada ajuste y qué hacer si alguno está desactivado. Los nombres exactos del menú varían según la placa base; trata los pasos de BIOS como guía general.',
      },
      { type: 'h2', text: 'Comprueba TPM primero' },
      {
        type: 'ul',
        items: [
          'Pulsa Windows + R, escribe tpm.msc y pulsa Enter.',
          'Si la ventana indica que el TPM está listo para usarse, mira la Versión de especificación a la derecha. Debe decir 2.0.',
          'Si aparece que no se encuentra un TPM compatible, probablemente esté desactivado en la BIOS.',
        ],
      },
      { type: 'h2', text: 'Comprueba Secure Boot y modo BIOS' },
      {
        type: 'ul',
        items: [
          'Pulsa Windows + R, escribe msinfo32 y pulsa Enter.',
          'Busca "Secure Boot State". Debe decir On.',
          'Busca "BIOS Mode". Debe decir UEFI, no Legacy.',
        ],
      },
      {
        type: 'p',
        text: 'Si Secure Boot dice Unsupported u Off, sigue leyendo.',
      },
      { type: 'h2', text: 'Activar TPM en la BIOS' },
      {
        type: 'p',
        text: 'Reinicia el PC y entra en la configuración BIOS o UEFI, normalmente con Supr o F2 al arrancar. Busca en seguridad, avanzado o sección de CPU uno de estos nombres:',
      },
      {
        type: 'ul',
        items: [
          'Sistemas Intel: Intel PTT o Platform Trust Technology',
          'Sistemas AMD: AMD fTPM o Firmware TPM',
          'Algunas placas solo dicen TPM Device o Security Device Support',
        ],
      },
      {
        type: 'p',
        text: 'Actívalo, guarda y reinicia.',
      },
      { type: 'h2', text: 'Activar Secure Boot' },
      {
        type: 'p',
        text: 'Secure Boot necesita modo UEFI y un disco del sistema GPT. En la BIOS, busca en Boot o Security la opción Secure Boot. Puede que antes tengas que desactivar CSM (Compatibility Support Module). Si Secure Boot aparece en gris, puede que debas poner el modo de claves en Standard o cargar las claves predeterminadas.',
      },
      { type: 'h2', text: 'Si tu disco es MBR' },
      {
        type: 'p',
        text: 'Secure Boot no funcionará con un disco MBR heredado. Windows incluye la herramienta mbr2gpt para convertir un disco del sistema sin borrarlo, pero haz copia de seguridad de tus archivos primero y lee con cuidado las instrucciones de Microsoft. Un error aquí puede dejar Windows sin arrancar.',
      },
      { type: 'h2', text: 'Cuando termines' },
      {
        type: 'p',
        text: 'Reinicia en Windows y ejecuta msinfo32 otra vez para confirmar ambos ajustes. Luego lanza Modern Warfare 4. Activision también mantiene una página oficial de soporte de TPM y Secure Boot si tu placa tiene un diseño poco habitual.',
      },
      {
        type: 'p',
        text: 'Si también planeas usar software de terceros con Modern Warfare 4, ten en cuenta que productos como los nuestros listan HVCI, Core Isolation, TPM y Secure Boot como requisitos, así que dejar esto bien es el paso uno en cualquier caso. Nuestro artículo sobre [qué revisar antes de comprar](/blog/buy-modern-warfare-4-cheats/) cubre el resto.',
      },
    ],
  },
  {
    slug: 'modern-warfare-4-hwid-spoofer',
    title: 'HWID Spoofer para Modern Warfare 4: qué es y qué confirmar antes de comprar',
    h1: 'HWID Spoofer para Modern Warfare 4: qué es y qué revisar primero',
    tag: 'Guías',
    desc: 'Explicación de baneos por hardware y HWID spoofers, con precios, requisitos y preguntas sobre soporte de Modern Warfare 4.',
    metaTitle: 'HWID Spoofer Modern Warfare 4: qué hace y qué revisar',
    metaDescription:
      '¿Qué es un ban HWID, qué hace un spoofer y qué confirmar antes de comprar uno para Modern Warfare 4? Precios y requisitos incluidos.',
    date: '2026-09-22',
    readTime: '5 min de lectura',
    imageAlt: 'Partida MW4 beta en azotea con cajas verdes, nombres y etiquetas de distancia',
    ...matchEsp,
    body: [
      {
        type: 'p',
        text: 'Las búsquedas de HWID spoofer para Modern Warfare 4 han subido desde que Activision anunció baneos por hardware más fuertes. Si no tienes claro qué significa o si un spoofer es la herramienta adecuada, aquí va una explicación directa.',
      },
      { type: 'h2', text: 'Qué es un ban HWID' },
      {
        type: 'p',
        text: 'Un ban HWID (hardware ID) ata la sanción a identificadores de tu PC, no solo a la cuenta que usaste. Esos identificadores pueden incluir números de serie del disco, direcciones del adaptador de red e IDs de GPU. Por eso una cuenta nueva no siempre resuelve el problema tras un ban por hardware.',
      },
      { type: 'h2', text: 'Qué hace un spoofer' },
      {
        type: 'p',
        text: 'Un HWID spoofer cambia esos identificadores de hardware para que el equipo presente otra huella. Nuestro [HWID Spoofer](/hwid-spoofer/) incluye un cleaner, que limpia restos antes de volver a lanzar un juego. Está pensado para quien se recupera de baneos por hardware.',
      },
      { type: 'h2', text: 'Qué juegos admite' },
      {
        type: 'p',
        text: 'Nuestro HWID Spoofer lista soporte en varios sistemas anti-cheat, incluidos títulos con Ricochet como Warzone, Modern Warfare II, Modern Warfare III, Black Ops 6 y Black Ops 7. Modern Warfare 4 es un lanzamiento nuevo con anti-cheat actualizado, así que confirma el soporte actual de Modern Warfare 4 con nuestro equipo antes de comprar. Preferimos que preguntes a que des por hecho.',
      },
      { type: 'h2', text: 'Requisitos' },
      {
        type: 'ul',
        items: [
          'Windows 10 u 11 (64 bits)',
          'Derechos de administrador para el spoof y los pasos de limpieza',
          'Internet estable para activación y actualizaciones',
          'HVCI, Core Isolation, TPM y Secure Boot activados',
        ],
      },
      { type: 'h2', text: 'Precios' },
      {
        type: 'p',
        text: 'Las opciones, condiciones de acceso y precios actuales aparecen al pagar.',
      },
      { type: 'h2', text: 'Expectativas realistas' },
      {
        type: 'p',
        text: 'Activision ha descrito sus baneos por hardware como más fuertes para Modern Warfare 4 y se ha comprometido a actualizaciones continuas del anti-cheat. Un spoofer es una herramienta para un problema concreto y nada de ello elimina el riesgo. Sigue la guía de configuración al pie de la letra, en el orden correcto, y no te saltes los pasos de limpieza.',
      },
      { type: 'h2', text: 'Siguiente paso' },
      {
        type: 'p',
        text: 'Si lidias con un ban por hardware y quieres ver los detalles, visita la página del [HWID Spoofer](/hwid-spoofer/) y escribe a soporte para confirmar compatibilidad con Modern Warfare 4 primero.',
      },
    ],
  },
  {
    slug: 'modern-warfare-4-skin-changer',
    title: 'Skin Changer para Modern Warfare 4: cómo funciona y cuánto cuesta',
    h1: 'Skin Changer para Modern Warfare 4: cómo funciona y cuánto cuesta',
    tag: 'Guías',
    desc: 'Qué es un skin changer, qué ofrece el nuestro, precio y qué confirmar sobre soporte de Modern Warfare 4 antes de comprar.',
    metaTitle: 'Skin Changer Modern Warfare 4: funciones y precio',
    metaDescription:
      '¿Te interesa un skin changer para Modern Warfare 4? Qué hace, precios mensual y de por vida, requisitos de PC y qué confirmar primero.',
    date: '2026-09-08',
    readTime: '4 min de lectura',
    imageAlt: 'Panel Aimbot MW4 con tecla M2, hueso más cercano y deslizadores de suavizado',
    ...aimbotMenu,
    body: [
      {
        type: 'p',
        text: 'Los cosméticos de Call of Duty son caros. Paquetes, skins de operadores y planos de armas suman rápido, y muchos jugadores preferirían no pagar. Esa es la demanda para la que sirve un skin changer.',
      },
      { type: 'h2', text: 'Qué hace un skin changer' },
      {
        type: 'p',
        text: 'Un skin changer te deja controlar los cosméticos que ves en tu personaje y armas. Nuestro Skin Changer se describe como una herramienta simple y ligera que desbloquea una amplia gama de skins premium de armas, atuendos de personaje y variantes raras de cuchillo en títulos importantes, en lugar de pagar cada uno por microtransacciones.',
      },
      { type: 'h2', text: 'Soporte de Modern Warfare 4' },
      {
        type: 'p',
        text: 'El Skin Changer está hecho para usarse en muchos juegos. Modern Warfare 4 es un lanzamiento nuevo, así que pide a nuestro equipo de soporte que confirme el soporte actual antes de comprar. Ese mensaje puede evitarte comprar algo que no encaja con tu juego.',
      },
      { type: 'h2', text: 'Requisitos' },
      {
        type: 'ul',
        items: ['Windows 10 u 11', 'HVCI, Core Isolation, TPM y Secure Boot activados'],
      },
      {
        type: 'p',
        text: 'En PC, Modern Warfare 4 ya necesita TPM 2.0 y Secure Boot, así que la mayoría tendrá los ajustes principales cubiertos tras seguir nuestra guía de configuración.',
      },
      { type: 'h2', text: 'Precios' },
      {
        type: 'ul',
        items: ['Las opciones, condiciones de acceso y precios actuales aparecen al pagar.'],
      },
      { type: 'h2', text: '¿Es para ti?' },
      {
        type: 'p',
        text: 'Un skin changer tiene sentido si quieres la parte visual de Call of Duty sin pagar cada cosmético. No es un atajo para todo, y como cualquier software de terceros con un juego online, conlleva riesgo. El anti-cheat de Modern Warfare 4 está activo y se actualiza con regularidad, así que lee los riesgos antes de comprometerte.',
      },
      { type: 'h2', text: 'Ver los detalles' },
      {
        type: 'p',
        text: 'Puedes ver los detalles completos del producto en la página del [Skin Changer](/skin-changer/). Si compras sobre todo para Modern Warfare 4, empieza por nuestra página principal de [cheats de Modern Warfare 4](/modern-warfare-4-cheats/) y nuestra [lista de compra](/blog/buy-modern-warfare-4-cheats/).',
      },
    ],
  },
  {
    slug: 'modern-warfare-4-ban-appeal-account-recovery',
    title: 'Apelaciones y recuperación de cuentas en Modern Warfare 4',
    h1: 'Apelación de ban y recuperación de cuenta en Modern Warfare 4',
    tag: 'Guías',
    desc: 'Identifica la restricción y prepara una apelación por los canales oficiales.',
    metaTitle: 'Guía de apelación de ban y recuperación en Modern Warfare 4',
    metaDescription: 'Identifica la restricción y prepara una apelación por los canales oficiales.',
    date: '2026-10-19',
    readTime: '5 min de lectura',
    imageAlt: 'Overlay MW4 pestaña ESP Players con Enable ESP activo y caja completa',
    ...espMenu,
    body: [
      {
        type: 'p',
        text: 'Identifica primero la restricción de tu cuenta de Modern Warfare 4. Estos pasos te ayudan a preparar una apelación.',
      },
      { type: 'h2', text: 'Identifica qué tipo de ban tienes' },
      {
        type: 'p',
        text: 'Empieza por aclarar qué ocurrió de verdad. Una suspensión temporal, un ban permanente de cuenta y un ban por hardware son situaciones distintas con opciones distintas. Lee el aviso que recibiste y anota la fecha, el texto y cualquier número de referencia.',
      },
      { type: 'h2', text: 'Cómo suelen funcionar las apelaciones' },
      {
        type: 'p',
        text: 'La mayoría de apelaciones pasan por los canales oficiales de soporte del editor. Suelen ir mejor cuando:',
      },
      {
        type: 'ul',
        items: [
          'Mantienes un tono calmado y factual en el mensaje',
          'Incluyes datos de cuenta, fechas y qué estabas haciendo en ese momento',
          'Guardas registro de cada respuesta y número de ticket',
          'Evitas enviar el mismo mensaje una y otra vez',
        ],
      },
      {
        type: 'p',
        text: 'El resultado depende por completo de la decisión del editor y del motivo del ban. Ningún tercero puede prometer un resultado concreto.',
      },
      { type: 'h2', text: 'Los baneos por hardware son otro problema' },
      {
        type: 'p',
        text: 'Si la restricción está ligada a tu PC, un flujo de apelación es solo una parte del panorama. Nuestra guía sobre [baneos por hardware y spoofers](/blog/modern-warfare-4-hwid-spoofer/) explica en qué se diferencian.',
      },
    ],
  },
  {
    slug: 'are-modern-warfare-4-cheats-safe',
    title: '¿Son seguros los cheats de Modern Warfare 4? Cuáles son los riesgos de verdad',
    h1: '¿Son seguros los cheats de Modern Warfare 4? Cuáles son los riesgos de verdad',
    tag: 'Guías',
    desc: 'Mirada honesta al riesgo de ban en Modern Warfare 4 y forma práctica de valorar cualquier proveedor antes de comprar.',
    metaTitle: '¿Son seguros los cheats de Modern Warfare 4? Riesgos reales',
    metaDescription:
      '¿Son seguros los cheats de Modern Warfare 4? Mirada honesta al riesgo de ban, baneos por hardware, Ricochet y cómo valorar un proveedor antes de gastar.',
    date: '2026-10-24',
    readTime: '5 min de lectura',
    imageAlt: 'Vista MW4 en azotea con nombres ESP, recuadros y marcador BETA',
    ...matchEsp,
    body: [
      {
        type: 'p',
        text: 'La respuesta honesta a "¿son seguros los cheats de Modern Warfare 4?" es que ningún cheat está libre de riesgo. Quien diga lo contrario te está vendiendo algo. Lo que sí puedes hacer es entender los riesgos y juzgar a los proveedores por lo que te dicen de verdad.',
      },
      { type: 'h2', text: 'Contra qué compites' },
      {
        type: 'p',
        text: 'Modern Warfare 4 salió el 23 de octubre de 2026 con Ricochet protegiéndolo. En PC eso incluye un driver a nivel de kernel y la exigencia de TPM 2.0 y Secure Boot. Activision también ha dicho que los baneos por hardware se han reforzado, añadió server culling para limitar wallhacks y se comprometió a actualizaciones regulares del anti-cheat durante la primera temporada. También ha dicho que actúa contra vendedores de cheats.',
      },
      {
        type: 'p',
        text: 'En pocas palabras, es un entorno activo que sigue cambiando.',
      },
      { type: 'h2', text: 'Qué puede significar un ban' },
      {
        type: 'p',
        text: 'Según el caso, un ban puede significar perder una sola cuenta o que tu PC quede restringido de Call of Duty por completo. Tus compras, progreso y desbloqueos en una cuenta baneada suelen desaparecer para siempre. Piensa en lo que perderías antes de decidir.',
      },
      { type: 'h2', text: 'Qué buscar en un proveedor' },
      {
        type: 'p',
        text: 'Afirmaciones como "100% safe" o "guaranteed" son señal de alerta, porque nadie puede garantizar lo que hará el editor después. Mejores señales:',
      },
      {
        type: 'ul',
        items: [
          'Lista clara de qué hace el producto y qué juego admite',
          'Requisitos honestos, como HVCI, Core Isolation, TPM y Secure Boot en Windows 10 u 11',
          'Cloud DMA, que nuestros productos necesitan para funcionalidad completa, listado como requisito desde el principio',
          'Soporte real al que puedas escribir antes y después de comprar',
          'Disposición a decir "aún no compatible" en lugar de vender de más',
        ],
      },
      { type: 'h2', text: 'Formas en que la gente reduce el riesgo' },
      {
        type: 'p',
        text: 'Nada de esto elimina el riesgo, pero importa:',
      },
      {
        type: 'ul',
        items: [
          'Lee las instrucciones de configuración por completo y sigue el orden de los pasos',
          'No ejecutes software desconocido junto con otra cosa',
          'Mantén Windows y los ajustes de BIOS según lo exigido',
          'Presta atención a las actualizaciones cuando Modern Warfare 4 reciba parches',
        ],
      },
      { type: 'h2', text: 'Nuestra postura' },
      {
        type: 'p',
        text: 'Preferimos que compres con expectativas realistas que con una promesa que no podemos cumplir. Si decides seguir adelante, empieza por nuestra página de [cheats de Modern Warfare 4](/modern-warfare-4-cheats/) y lee primero la [lista de compra](/blog/buy-modern-warfare-4-cheats/).',
      },
    ],
  },
];
