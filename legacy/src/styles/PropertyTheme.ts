export const PropertyTheme = {
    colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        card: 'var(--card)',
        blue: 'var(--realestate-blue)',
        red: 'var(--realestate-red)',
        gray: 'var(--realestate-gray)',
        bg: 'var(--realestate-bg)',
    },
    animations: {
        bounce: {
            type: "spring",
            stiffness: 400,
            damping: 15
        },
        gentle: {
            type: "spring",
            stiffness: 300,
            damping: 30
        },
        slide: {
            type: "tween",
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};
