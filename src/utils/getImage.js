function getImage(url) {
    return new URL(url, import.meta.url).href;
}

export { getImage };
