export const formatSum = (sum) =>
    sum === 0 ? "-" : `${sum.toLocaleString()} ₽`;

export const formatCount = (count) =>
    count === 0 ? "-" : count.toLocaleString();