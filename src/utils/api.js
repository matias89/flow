const get = async (url, { lat, lon }) => {
    const request = await fetch(`${url}&lat=${lat}&lon=${lon}&units=metric`);
    const response = await request.json();
    return response;
};

export {
    get,
};
