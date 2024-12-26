import {useEffect, useState} from "react";

export const useStoredItems = () => {
    const [storedItems, setStoredItems] = useState([]);

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem("bookStore_storedItems"));

        if (items) {
            setStoredItems(items);
        }
    }, []);

    return storedItems;
}