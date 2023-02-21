export const getCurrentThemeLocalStorage = () => localStorage.getItem('THEME');

export const changeThemeLocalStorage = (theme) => localStorage.setItem('THEME', theme);
