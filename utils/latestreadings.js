import { readingStore } from "../models/reading-store.js";
import { conversions } from "../utils/conversions.js";
import { analytics } from "../utils/analytics.js";

export const latestReadings = async (id) => {

  let readings = await readingStore.getReadingsByStationId(id);
  let latestReading = null;

  const reading = {
    latestCode: null,
    codeName: null,
    codeIcon: null,
    //directionIcon: null,
    latestTemp: null,
    latestWindSpeed: null,
    latestWindDirection: null,
    latestPressure: null,
    latestTempFahrenheit: null,
    latestBeaufort: null,
    weather: null,
    compassDirection: null,
    windChill: null,
    maxTemp: null,
    minTemp: null,
    maxWind: null,
    minWind: null,
    maxPressure: null,
    minPressure: null,

  };

  if (readings.length > 0) {
    latestReading = readings.length - 1;
    reading.latestCode = readings[latestReading].code;
    reading.codeName = conversions.codeToStringName(reading.latestCode);
    reading.codeIcon = conversions.codeToStringIcon(reading.latestCode);
    //reading.directionIcon = conversions.directionIcon(reading.compassDirection);
    reading.latestTemp = readings[latestReading].temperature;
    reading.latestWindSpeed = readings[latestReading].windSpeed;

    reading.latestWindDirection = readings[latestReading].windDirection;
    reading.latestPressure = readings[latestReading].pressure;

    reading.latestTempFahrenheit = conversions.convertToFahrenheit(reading.latestTemp);
    reading.latestBeaufort = conversions.beaufort(reading.latestWindSpeed);
    reading.compassDirection = conversions.direction(reading.latestWindDirection);
    reading.windChill = conversions.convertToWindChill(reading.latestTemp, reading.latestWindSpeed);
    reading.maxTemp = analytics.findMaxValue(
      readings.map((readings) => readings.temperature),
      "max"
    );
    reading.minTemp = analytics.findMinValue(
      readings.map((readings) => readings.temperature),
      "min"
    );
    reading.maxWind = analytics.findMaxValue(
      readings.map((readings) => readings.windSpeed),
      "max"
    );
    reading.minWind = analytics.findMinValue(
      readings.map((readings) => readings.windSpeed),
      "min"
    );
    reading.maxPressure = analytics.findMaxValue(
      readings.map((readings) => readings.pressure),
      "max"
    );
    reading.minPressure = analytics.findMinValue(
      readings.map((readings) => readings.pressure),
      "min"
    );
  };
  return {
    latestReading: latestReading,
    reading: reading,
  };
};

