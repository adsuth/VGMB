// const COLORS = {
//     red: "rgb(237, 107, 107)",
//     yellow: "#ffd700",
//     orange: "rgb(248, 175, 92)",
//     blue: "rgb(70, 187, 255)",
//     green: "rgb(140, 240, 140)",
//     purple: "rgb(218, 94, 230)"
// }

// const PALETTES = {
//     red: {
//         darker: "#622",
//         dark: "#822",
//         mid: "#a22",
//         midLight: "#ed6b6b",

//         correct: "",
//         wrong: "",
//         warning: "",
//         shield: "",
//         counter: "",
//         contrast: "",
        
//         super: "",
//         ultra: ""
//     },
//     green: {
//         darker: "#262",
//         dark: "#282",
//         mid: "#2a2",
//         midLight: "rgb(140, 240, 140)",

//         correct: "",
//         wrong: "",
//         warning: "",
//         shield: "",
//         counter: "",
//         contrast: "",

//         super: "",
//         ultra: ""
//     }


// }

const PALETTES = {
    default: {
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
    relax: {
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
    },
}


function changeColorPalette( color ) {
    const PALETTE_ROOT = document.getElementById("paletteRoot");

    let newPalette = `
        html {
            --colorDarker: ${PALETTES[color]["darker"] || "#222" };
            --colorDark: ${PALETTES[color]["dark"] || "#333"};
            --colorMid: ${PALETTES[color]["mid"] || "#444"};
            --colorMidLight: ${PALETTES[color]["midLight"] || "#666"};
            --colorLight: #fff;

            --colorCorrect: ${PALETTES[color]["correct"] || "rgb(140, 240, 140)" };
            --colorWrong: ${PALETTES[color]["wrong"] || "rgb(237, 107, 107)" };
            --colorWarning: ${PALETTES[color]["warning"] || "rgb(248, 175, 92)"};

            --colorShield: ${PALETTES[color]["shield"] || "rgb(70, 187, 255)" };
            --colorCounter: ${PALETTES[color]["counter"] || "gold" } ;
            --colorContrast: ${PALETTES[color]["contrast"] || "red"};

            --colorSuper: ${PALETTES[color]["super"] || "rgb(53, 255, 53)" };
            --colorUltra: ${PALETTES[color]["ultra"] || "rgb(221, 53, 255)" };

            --colorSuper: ${PALETTES[color]["softSuper"] || "rgb(140, 240, 140)" };
            --colorUltra: ${PALETTES[color]["softUltra"] || "rgb(218, 94, 230)" };
        }
        ::selection {
            background-color: ${PALETTES[color]["mid"]};
        }
    `;
    
    PALETTE_ROOT.innerHTML = newPalette;
    
}




