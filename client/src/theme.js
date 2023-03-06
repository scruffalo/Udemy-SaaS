export const colorTokens = {
    grey: {
        0: "#FFFFFF",
        10: "#f6f6f6",
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#858585",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#0A0A0A",
        1000: "#000000",
    },
    primary: {
        50: "#83d18d",
        100: "#7ece89",
        200: "#77cb83",
        300: "#70c77d",
        400: "#68c377",
        500: "#60bf70",
        600: "#5bb76c",
        700: "#56af68",
        800: "#51a763",
        900: "#4da05e",
    },    
};

export const themeSettings = (mode) => {
    return {
        palette: {
            primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[50],
            },
            neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[200],
                light: colorTokens.grey[50],
            },
            background: {
                default: colorTokens.greyp[10],
                alt: colorTokens.grey[0],
            },
        },
        typography: {
            fontSize: 12, 
            h1: {
                frontSize: 40,
            },
            h2: {
                frontSize: 32,
            },
            h3: {
                frontSize: 24,
            },
            h4: {
                frontSize: 20,
            },
            h5: {
                frontSize: 16,
            },
            h6: {
                frontSize: 14,
            },
        },
    };
};