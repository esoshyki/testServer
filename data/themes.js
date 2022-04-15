const Colors = {
    primary: "#1769aa",
    primaryHover: "#2196f3",
    primaryActive: "#4dabf5",
    secondary: "#2e7d32",
    secondaryHover: "#66bb6a",
    secondaryActive: "#a5d6a7",
    background: "#2f2f2f",
    white: "#fff",
    transparent: "transparent",
    dark: "#000",
    grey: "#f2f2f2"
}

const commonTheme = {
    id: 1,
    borderRadius: "5px",

    colors: {
        main: "#000",
        secondary: "megenta",
        text: {
            main: "#000"
        },
        bgMain: Colors.background,
        primary: Colors.primary,
        primaryHover: Colors.primaryHover,
        primaryActive: Colors.primaryActive
    },
    input: {
        common: {
            bgColor: Colors.white,
            color: Colors.dark,
            borderColor: Colors.primary
        },
        hover: {
            bgColor: Colors.white,
            color: Colors.dark,
            borderColor: Colors.primaryHover
        },
        active: {
            bgColor: Colors.white,
            color: Colors.dark,
            borderColor: Colors.primaryActive
        },
        focus: {
            bgColor: Colors.white,
            color: Colors.dark,
            borderColor: Colors.primaryActive
        }
    },

    buttons: {
        primary: {
            bgcolor: Colors.primary,
            textColor: Colors.white,
            borderColor: Colors.transparent,
            hoverBackground: Colors.primaryHover,
            activeBackground: Colors.primaryActive
        },
        secondary: {
            bgcolor: Colors.secondary,
            textColor: Colors.white,
            borderColor: Colors.transparent,
            hoverBackground: Colors.secondaryHover,
            activeBackground: Colors.secondaryActive
        },
        outline: {
            bgcolor: Colors.transparent,
            textColor: Colors.dark,
            borderColor: Colors.dark,
            hoverBackground: Colors.transparent,
            activeBackground: Colors.transparent
        }
    },

    spaces: {
        0: "0",
        1: "1rem"
    }
}

const secondaryTheme = {
    id: 2,
    borderRadius: "5px",

    colors: {
        main: "#fff",
        secondary: "#000",
        text: {
            main: "#fff"
        },
        bgMain: Colors.dark,
        primary: Colors.primary,
        primaryHover: Colors.primaryHover,
        primaryActive: Colors.primaryActive
    },

    buttons: {
        primary: {
            bgcolor: Colors.primary,
            textColor: Colors.white,
            borderColor: Colors.transparent,
            hoverBackground: Colors.primaryHover,
            activeBackground: Colors.primaryActive
        },
        secondary: {
            bgcolor: Colors.secondary,
            textColor: Colors.white,
            borderColor: Colors.transparent,
            hoverBackground: Colors.secondaryHover,
            activeBackground: Colors.secondaryActive
        },
        outline: {
            bgcolor: Colors.white,
            textColor: Colors.white,
            borderColor: Colors.white,
            hoverBackground: Colors.grey,
            activeBackground: Colors.grey
        }
    },

    spaces: {
        0: "0",
        1: "1rem"
    }
}

const themes = [{
        id: 1,
        title: "Деволтная",
        theme: commonTheme
    },
    {
        id: 2,
        title: "Тёмная",
        theme: secondaryTheme
    },
]

const getThemes = () => themes.map(el => ({ id: el.id, title: el.title }));

const getTheme = (id) => themes.find(el => el.id == id);

module.exports = {
    getTheme,
    getThemes
}