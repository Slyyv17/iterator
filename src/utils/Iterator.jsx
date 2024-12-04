class Iterator {
    constructor(items) {
        this.items = items || []; // Ensure items is always an array
        this.index = 0; // Current position
    }

    hasNext() {
        return this.index < this.items.length; // Check if more items exist
    }

    next() {
        if (this.hasNext()) {
            return this.items[this.index++]; // Return current item and increment
        } 
        return null; // No more items
    }

    previous() {
        if (this.index > 0) {
            return this.items[--this.index]; // Decrement index and return item
        }
        return null; // No previous items
    }

    reset() {
        this.index = 0; // Reset to start
    }

    current() {
        if (this.index >= 0 && this.index < this.items.length) {
            return this.items[this.index]; // Return current item
        }
        return null; // No current item
    }
}

export default Iterator;
