export const imageDetailsData = [
  {
    id: "image1",
    src: "/foto1.jpg",
    title: "Imagen 1",
    message:
      "¡Lo lograste, Yuliana! 💖 Así como juntaste cada pieza, así encajamos tú y yo: perfectamente. Eres y siempre serás el amor de mi vida.",
    completed: false,
    boardSlots: {},
    pool: [],
    clues: 5,
    questions: [
      {
        id: "1",
        question: "¿Cúando es nuestro aniversario?",
        answer: "2024-02-20",
        type: "date",
        answered: false,
        active: true,
      },
    ],
  },
  {
    id: "image2",
    src: "/foto2.jpg",
    title: "Imagen 2",
    boardSlots: {},
    pool: [],
    clues: 5,
    completed: false,
    message:
      "Nuestro amor es la pieza perfecta, Yuliana. 💑 Cada pedacito de este rompecabezas me recuerda lo bien que estamos juntos. ¡Te amo con todo mi ser!",
    questions: [
      {
        id: "1",
        question: "¿Cúando es mi cumpleaños?",
        answer: "1998-09-02",
        type: "date",
        answered: false,
        active: true,
      },
    ],
  },
  {
    id: "image3",
    src: "/foto3.jpg",
    pool: [],
    title: "Imagen 3",
    boardSlots: {},
    clues: 5,
    completed: false,
    message:
      "¡Juntos completamos todo, Yuliana! 💕 Sin ti, este rompecabezas estaría incompleto, igual que mi vida sin tu amor. Eres y siempre serás mi persona favorita.",
    questions: [
      {
        id: "1",
        question: "¿Cúal es mi plato favorito?",
        answer: "arroz con mariscos",
        type: "text",
        answered: false,
        active: true,
      },
    ],
  },
];

export const puzzleSize = [
  {
    id: "image1",
    cols: 4,
    rows: 5,
  },
  {
    id: "image2",
    cols: 4,
    rows: 5,
  },
  {
    id: "image3",
    cols: 4,
    rows: 5,
  },
].map((puzzle) => ({
  ...puzzle,
  total: puzzle.cols * puzzle.rows,
}));

// Definir fondos y clases de botones por tema
export const themeConfig = {
  roses: {
    background: "/roses/bg_roses2.png?updatedAt=1739137059447",
    buttonClass: "rose-btn",
    gradient: "linear-gradient(135deg, #a30808,rgb(255, 56, 56))",
    color: "#ff4d4d",
    fireworks: ["#FF4D6D", "#FF1E56", "#D81B60", "#C2185B", "#880E4F"],
    boxShadow: "rgba(255, 0, 85, 0.4)", // Suave brillo rosado
  },
  tulips: {
    background: "/tulips/bg_tulips2.png?updatedAt=1739137532740",
    buttonClass: "tulip-btn",
    gradient: "linear-gradient(135deg, #9b59b6, #e91e63)",
    color: "#e91e63",
    boxShadow: "rgba(156, 39, 176, 0.4)", // Efecto lila sutil
    fireworks: ["#D291BC", "#C2185B", "#BA68C8", "#9C27B0", "#7B1FA2"],
  },
  sunflowers: {
    background: "/sunflowers/bg_sunflowers2.png?updatedAt=1739137327900",
    buttonClass: "sunflower-btn",
    gradient: "linear-gradient(135deg, #f39c12, #ffeb3b)", // Naranja cálido a amarillo brillante
    color: "#f39c12",
    fireworks: ["#FFDD44", "#FFD700", "#FFC107", "#FFB300", "#FFA000"],
    boxShadow: "rgba(255, 152, 0, 0.4)", // Simula presión
  },
  lilies: {
    background: "/lilies/bg_lilies2.png?updatedAt=1739129704173",
    buttonClass: "lily-btn",
    gradient: "linear-gradient(135deg, #1A237E, #64B5F6)", // Azul noche a azul cielo vibrante
    color: "#2980b9",
    fireworks: ["#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#0D47A1"], // Tonos de azul en degradado equilibrado
    boxShadow: "rgba(13, 71, 161, 0.5)", // Azul profundo con opacidad para efecto refinado
  },
} as const;

export type Theme = keyof typeof themeConfig;
