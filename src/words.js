var PTBR_WORDS = [
  "lento",
  "vento",
  "raquete",
  "segurança",
  "sol",
  "nuvem",
  "tempo",
  "tempestade",
  "furacão",
  "bode",
  "cachorro",
  "gato",
  "cavalo",
  "presidente",
  "vaca",
  "folha",
  "explosão",
  "sapato",
  "placas",
  "crocodilo",
  "luta",
  "tribo",
  "creme",
  "ameaça",
  "ferimento",
  "imbecil",
  "controle",
  "nariz",
  "picante",
  "sentido",
  "albergue",
  "caneta",
  "limpo",
  "mulher",
  "homem"
];

function randomWord() {
  return PTBR_WORDS[Math.floor(Math.random() * PTBR_WORDS.length)];
}

export { randomWord };
