const PALETTES = {
  standard: {
    darkest: "#111",
    darker: "#222",
    dark: "#333",
    mid: "#444",
    midLight: "#666",

    correct: "rgb(140, 240, 140)",
    wrong: "rgb(237, 107, 107)",
    warning: "rgb(248, 175, 92)",
    shield: "",
    counter: "",
    contrast: "",
    
    super: "",
    ultra: ""
  },
  hard: {
    darker: "#112",
    darker: "#222441",
    dark: "#41598B",
    mid: "#414D7A",
    midLight: "#64BAD2",

    correct: "rgb(140, 240, 140)",
    wrong: "rgb(237, 107, 107)",
    warning: "rgb(248, 175, 92)",
    shield: "",
    counter: "",
    contrast: "",
    
    super: "rgb(53, 255, 53)",
    ultra: "rgb(221, 53, 255)",

    softSuper: "",
    softUltra: ""
  },
  fall: {
    darkest: "#321",
    darker: "#432",
    dark: "#653",
    mid: "#974",
    midLight: "#eb6",

    correct: "rgb(140, 240, 140)",
    wrong: "rgb(237, 107, 107)",
    warning: "rgb(248, 175, 92)",
    shield: "",
    counter: "",
    contrast: "",
    
    super: "rgb(53, 255, 53)",
    ultra: "rgb(221, 53, 255)",

    softSuper: "",
    softUltra: ""
  },
  relax: {
    darkest: "#311",
    darker: "#422",
    dark: "#633",
    mid: "#944",
    midLight: "#e66",

    correct: "rgb(140, 240, 140)",
    wrong: "rgb(237, 107, 107)",
    warning: "rgb(248, 175, 92)",
    shield: "",
    counter: "",
    contrast: "",
    
    super: "",
    ultra: "",

    softSuper: "",
    softUltra: ""
  }

}


function changeColorPalette( color ) {
  const PALETTE_ROOT = document.getElementById("paletteRoot")

  let newPalette = `
    html {
      --colorDarkest: ${PALETTES[color]["darkest"] || "#111" }
      --colorDarker: ${PALETTES[color]["darker"] || "#222" }
      --colorDark: ${PALETTES[color]["dark"] || "#333"}
      --colorMid: ${PALETTES[color]["mid"] || "#444"}
      --colorMidLight: ${PALETTES[color]["midLight"] || "#666"}
      --colorLight: #fff

      --colorCorrect: ${PALETTES[color]["correct"] || "rgb(140, 240, 140)" }
      --colorWrong: ${PALETTES[color]["wrong"] || "rgb(237, 107, 107)" }
      --colorWarning: ${PALETTES[color]["warning"] || "rgb(248, 175, 92)"}

      --colorShield: ${PALETTES[color]["shield"] || "rgb(70, 187, 255)" }
      --colorCounter: ${PALETTES[color]["counter"] || "gold" } 
      --colorContrast: ${PALETTES[color]["contrast"] || "red"}

      --colorSuperSonic: ${PALETTES[color]["super"] || "rgb(53, 255, 53)" }
      --colorUltraSonic: ${PALETTES[color]["ultra"] || "rgb(221, 53, 255)" }

      --colorSuperSoft: ${PALETTES[color]["softSuper"] || "rgb(140, 240, 140)" }
      --colorUltraSoft: ${PALETTES[color]["softUltra"] || "rgb(218, 94, 230)" }
    }
    ::selection {
      background-color: ${PALETTES[color]["mid"]}
    }
  `
  
  PALETTE_ROOT.innerHTML = newPalette

  changeFavicon(color)
  
}

function changeFavicon( color ) {
  favicon.href = `favicon_${ color }.ico`
  imgLogo.src = `logo_${ color }.png`
}