// Function to retrieve an array from local storage by key
const getArray = (key) => {
    try {
        const arrayString = localStorage.getItem(key);
        return arrayString ? JSON.parse(arrayString) : null;
    } catch (error) {
        console.error('Error getting array from local storage:', error);
        return null;
    }
};

// Function to store an array in local storage under the given key
const storeArray = (key, array) => {
    try {
        localStorage.setItem(key, JSON.stringify(array));
    } catch (error) {
        console.error('Error storing array in local storage:', error);
    }
};

export { getArray, storeArray };
