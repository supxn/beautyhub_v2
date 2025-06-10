import { useCallback, useEffect, useState } from 'react';

const FAVOURITES_KEY = 'favouriteMasters';

export function useFavourites() {
    const [favourites, setFavourites] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem(FAVOURITES_KEY);
        if (stored) setFavourites(JSON.parse(stored));
    }, []);

    const addFavourite = useCallback((phone: string) => {
        setFavourites(prev => {
            const updated = prev.includes(phone) ? prev : [...prev, phone];
            localStorage.setItem(FAVOURITES_KEY, JSON.stringify(updated));
            return updated;
        });
    }, []);

    const removeFavourite = useCallback((phone: string) => {
        setFavourites(prev => {
            const updated = prev.filter(p => p !== phone);
            localStorage.setItem(FAVOURITES_KEY, JSON.stringify(updated));
            return updated;
        });
    }, []);

    const isFavourite = useCallback((phone: string) => {
        return favourites.includes(phone);
    }, [favourites]);

    return { favourites, addFavourite, removeFavourite, isFavourite };
} 