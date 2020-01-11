export const months = [
    'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
];

export const monthsDropDown = () => {
    let dropDownList = months.map(m => ({ value: m , text: m }))
    return dropDownList
}