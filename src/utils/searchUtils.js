import * as data from '../data/mockData';

export const getAllSearchableItems = () => {
    const items = [];

    // Index Decoration Categories
    data.decorationCategories.forEach(cat => {
        items.push({
            id: `cat-${cat.id}`,
            title: cat.title,
            image: cat.image,
            type: 'Category',
            link: `/decorations/${cat.id}`,
            category: 'Decorations'
        });

        if (cat.products) {
            cat.products.forEach(prod => {
                items.push({
                    id: `prod-${cat.id}-${prod.id}`,
                    title: prod.name,
                    image: prod.image,
                    type: 'Product',
                    link: `/decorations/${cat.id}`,
                    category: cat.title,
                    price: prod.price
                });
            });
        }
    });

    // Index Birthday Decorations
    data.birthdayDecorations.forEach(item => {
        items.push({
            id: `bday-${item.id}`,
            title: item.title,
            image: item.image,
            type: 'Birthday Decor',
            link: '/birthday',
            category: 'Birthday',
            price: `₹${item.price}`
        });
    });

    // Index Festival Decorations
    data.festivalDecorations.forEach(cat => {
        items.push({
            id: `fest-${cat.id}`,
            title: cat.title,
            image: cat.image,
            type: 'Festival Category',
            link: `/festival/${cat.id}`,
            category: 'Festival'
        });
        if (cat.products) {
            cat.products.forEach(prod => {
                items.push({
                    id: `fest-prod-${cat.id}-${prod.id}`,
                    title: prod.name,
                    image: prod.image,
                    type: 'Product',
                    link: `/festival/${cat.id}`,
                    category: cat.title,
                    price: prod.price
                });
            });
        }
    });

    // Index Corporate Decorations
    data.corporateDecorations.forEach(cat => {
        items.push({
            id: `corp-${cat.id}`,
            title: cat.title,
            image: cat.image,
            type: 'Corporate Category',
            link: `/corporate/${cat.id}`,
            category: 'Corporate'
        });
        if (cat.products) {
            cat.products.forEach(prod => {
                items.push({
                    id: `corp-prod-${cat.id}-${prod.id}`,
                    title: prod.name,
                    image: prod.image,
                    type: 'Product',
                    link: `/corporate/${cat.id}`,
                    category: cat.title,
                    price: prod.price
                });
            });
        }
    });



    // Index Occasions
    data.occasionsDecorations.forEach(cat => {
        items.push({
            id: `occ-${cat.id}`,
            title: cat.title,
            image: cat.image,
            type: 'Occasion Category',
            link: `/occasions/${cat.id}`,
            category: 'Occasions'
        });
        if (cat.products) {
            cat.products.forEach(prod => {
                items.push({
                    id: `occ-prod-${cat.id}-${prod.id}`,
                    title: prod.name,
                    image: prod.image,
                    type: 'Product',
                    link: `/occasions/${cat.id}`,
                    category: cat.title,
                    price: prod.price
                });
            });
        }
    });

    return items;
};

export const searchItems = (query) => {
    if (!query || query.trim() === '') return [];

    const allItems = getAllSearchableItems();
    const lowerQuery = query.toLowerCase().trim();

    return allItems.filter(item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery) ||
        item.type.toLowerCase().includes(lowerQuery)
    );
};
