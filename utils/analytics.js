import { readingStore } from "../models/reading-store.js";
import { conversions } from "../utils/conversions.js";

export const analytics = {

    findMaxValue(readings, maxValue) {
        if (readings.length === 0) {
            return null; // Handle case when the array is empty
        }
        let maxReading = Math.max(...readings);
        if (maxValue === "max") {
            return maxReading;
        }
    },

    findMinValue(readings, minValue) {
        if (readings.length === 0) {
            return null; // Handle case when the array is empty
        }
        let minReading = Math.min(...readings);
        if (minValue === "min") {
            return minReading;
        }
    }
}
