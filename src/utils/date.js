const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
};

const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
};

export {
    formatDate,
    formatDay,
}