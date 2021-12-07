export const formatDate = (dateString) =>
    new Date(dateString).toLocaleString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });

export const formatDateFilterValue = (string) => {
    const formatString = string.split(".");
    return new Date(formatString[2], formatString[1] - 1, formatString[0]);
};