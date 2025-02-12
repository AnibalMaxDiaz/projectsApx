const playList = [
  {
    titulo: "Programando una webapp",
    url: "https://www.youtube.com/watch?v=eWLgXOiVeW4&list=PL7bJyjP8ZoRxqBymHTluWRj0SHAw8k7lL",
    resumen:
      "En este primer video de esta serie exploramos cómo se empiezan a tomar decisiones de producto cuando encaramos un proyecto web.",
    tags: ["Apx", "programación", "Apps"],
    visto: true,
    dificultad: 4,
  },
  {
    titulo: "Pagos online - Introducción - Parte 1/4",
    url: "https://www.youtube.com/watch?v=LttJdPtXmw4&list=PL7bJyjP8ZoRwvl5EnDoGFibFCQozIGKEC",
    resumen:
      "En este video vamos a introducirnos al mundo de los pagos online. En esta introducción vamos a entender el problema que resuelven las pasarelas de pago y como es el flujo básico de integración que podemos implementar. ",
    tags: ["Apx", "Pagos online", "Mercado pago"],
    visto: true,
    dificultad: 3,
  },
  {
    titulo: "¿Cómo empezar un desarrollo web desde cero? / Coder-Box S01E01",
    url: "https://www.youtube.com/watch?v=dxNvCn5NmwY&list=PL7bJyjP8ZoRwrQrbZ8S3TW71wq2h_M4I8",
    resumen:
      "En este primer capítulo de Coderbox esperamos poder darte una mano con algunas de las preguntas que nos hacemos todos cuando queremos empezar un proyecto desde cero, desde cómo plantear una idea, hasta qué cosas mínimas deberías tener en cuenta para definir tu stack de tecnologías y herramientas de trabajo en equipo, ¡y vamos a contarte cuáles elegimos nosotros!",
    tags: ["Apx", "Desarrollo web", "Coder-Box"],
    visto: true,
    dificultad: 1,
  },
  {
    titulo: "¿Por qué uso mac?",
    url: "https://www.youtube.com/watch?v=iQeMY2Qj80U",
    resumen:
      "En este video, te cuento por qué uso Mac y revelo los motivos personales que me hicieron caer en el lado de la manzana.",
    tags: ["Apx", "Mac", "Uso de Mac"],
    visto: true,
    dificultad: 0,
  },
  {
    titulo: "Cómo emigrar codeando",
    url: "https://www.youtube.com/watch?v=P8xxEVRa6M8",
    resumen:
      "En este video hablamos sobre las oportunidades de emigrar siendo software developer. Es importante tener en cuenta el idioma, ya que muchos países buscan devs que hablen inglés fluidamente. También es importante tener experiencia y un buen portafolio antes de buscar trabajo en el extranjero. Emigrar no siempre es solo sobre ganar más dinero, sino también sobre tener nuevas oportunidades y experiencias en la vida pero es importante estar preparados y investigar bien el país al que se desea emigrar antes de tomar una decisión.",
    tags: ["Apx", "Pagos online", "Mercado pago"],
    visto: false,
    dificultad: 2,
  },
];

//Numero total de videos.
var numeroDeVideos = playList.length;
console.log("Total de videos en la playlist: " + numeroDeVideos);

//resumen 1er video.
console.log("Primer video - Titulo:" + playList[0].titulo);
console.log("Primer video - URL:" + playList[0].url);
console.log("Primer video - Resumen:" + playList[0].resumen);

//resumen ultimo video.
console.log("Ultimo video - Titulo:" + playList[numeroDeVideos - 1].titulo);
console.log("Ultimo video - URL:" + playList[numeroDeVideos - 1].url);
console.log("Ultimo video - Resumen:" + playList[numeroDeVideos - 1].resumen);
