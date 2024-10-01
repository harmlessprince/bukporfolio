

export const generateThumbnailFromText = (text) => {
    return `https://placehold.co/356x215/776002/white?text=${text.slice(0,1)}`;
}

export const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export function getDayFromDate(dateString) {
    const date = new Date(dateString);
    return date.getDate();
}

export function getMonthFromDate(dateString) {
    const date = new Date(dateString);
    return monthNames[date.getMonth()].slice(0, 3);
}

export function getYearFromDate(dateString) {
    const date = new Date(dateString);
    return date.getFullYear().toString().slice(-2);
}

export function getFullYearFromDate(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
}

export function getBlogDate(dateString) {
    const date = new Date(dateString);
    return `${date.getDate()}-${getMonthFromDate(dateString)}-${date.getFullYear()}`;
}

export function formatMoney(money) {
    return new Intl.NumberFormat().format(money);
}

