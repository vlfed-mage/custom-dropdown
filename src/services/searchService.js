export const searchService = (items, query) => {
    if (!query) {
        return items;
    }

    return items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );
};
