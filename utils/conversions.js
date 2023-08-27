export const conversions = {

    codeToString(code) {
        let option = code;
        while (option != 0) {
            let weather = " ";

            switch (option) {
                case 100:
                    weather = "Clear";
                    return weather;
                case 200:
                    weather = "Partial Clouds";
                    return weather;
                case 300:
                    weather = "Cloudy";
                    return weather;
                case 400:
                    weather = "Light Showers";
                    return weather;
                case 500:
                    weather = "Heavy Showers";
                    return weather;
                case 600:
                    weather = "Rain";
                    return weather;
                case 700:
                    weather = "Snow";
                    return weather;
                case 800:
                    weather = "Thunder";
                    return weather;
                default:
                    return null;
            }
        }
        return null;
    },

    convertToFahrenheit(temperature) {
        let fahrenheit = (temperature * 9) / 5 + 32;
        return Math.round(fahrenheit * 100.0) / 100.0;
    },

    beaufort(windSpeed) {
        let kmHr = windSpeed;
        while (kmHr != 0) {
            let beaufort;

            switch ((kmHr == 1) ? 0 :
                (2 <= kmHr && kmHr <= 5) ? 1 :
                    (6 <= kmHr && kmHr <= 11) ? 2 :
                        (12 <= kmHr && kmHr <= 19) ? 3 :
                            (20 <= kmHr && kmHr <= 28) ? 4 :
                                (29 <= kmHr && kmHr <= 38) ? 5 :
                                    (38 <= kmHr && kmHr <= 49) ? 6 :
                                        (50 <= kmHr && kmHr <= 61) ? 7 :
                                            (62 <= kmHr && kmHr <= 74) ? 8 :
                                                (75 <= kmHr && kmHr <= 88) ? 9 :
                                                    (89 <= kmHr && kmHr <= 102) ? 10 :
                                                        (103 <= kmHr && kmHr <= 117) ? 11 : 11) {
                case 0:
                    beaufort = 0;
                    return beaufort;
                case 1:
                    beaufort = 1;
                    return beaufort;
                case 2:
                    beaufort = 2;
                    return beaufort;
                case 3:
                    beaufort = 3;
                    return beaufort;
                case 4:
                    beaufort = 4;
                    return beaufort;
                case 5:
                    beaufort = 5;
                    return beaufort;
                case 6:
                    beaufort = 6;
                    return beaufort;
                case 7:
                    beaufort = 7;
                    return beaufort;
                case 8:
                    beaufort = 8;
                    return beaufort;
                case 9:
                    beaufort = 9;
                    return beaufort;
                case 10:
                    beaufort = 10;
                    return beaufort;
                case 11:
                    beaufort = 11;
                    return beaufort;

            }
        }
        return 0;
    },

    direction(windDirection) {
        let degree = windDirection;
        while (0 <= degree && degree <= 360) {
            let direction;

            switch (((348.75 <= degree && degree <= 360) || (0 <= degree && degree < 11.25)) ? 0 :
                (11.25 <= degree && degree < 33.75) ? 1 :
                    (33.75 <= degree && degree < 56.25) ? 2 :
                        (56.25 <= degree && degree < 78.75) ? 3 :
                            (78.75 <= degree && degree < 101.25) ? 4 :
                                (101.25 <= degree && degree < 123.75) ? 5 :
                                    (123.75 <= degree && degree < 146.25) ? 6 :
                                        (146.25 <= degree && degree < 168.75) ? 7 :
                                            (168.75 <= degree && degree < 191.25) ? 8 :
                                                (191.25 <= degree && degree < 213.75) ? 9 :
                                                    (213.75 <= degree && degree < 236.25) ? 10 :
                                                        (236.25 <= degree && degree < 258.75) ? 11 :
                                                            (258.75 <= degree && degree < 281.25) ? 12 :
                                                                (281.75 <= degree && degree < 303.75) ? 13 :
                                                                    (303.75 <= degree && degree < 326.25) ? 14 :
                                                                        (326.25 <= degree && degree < 348.75) ? 15 : 15) {
                case 0:
                    direction = "North (N)";
                    return direction;
                case 1:
                    direction = "North North East (NNE)";
                    return direction;
                case 2:
                    direction = "North East (NE)";
                    return direction;
                case 3:
                    direction = "East North East (ENE)";
                    return direction;
                case 4:
                    direction = "East (E)";
                    return direction;
                case 5:
                    direction = "East South East (ESE)";
                    return direction;
                case 6:
                    direction = "South East (SE)";
                    return direction;
                case 7:
                    direction = "South South East (SSE)";
                    return direction;
                case 8:
                    direction = "South (S)";
                    return direction;
                case 9:
                    direction = "South South West (SSW)";
                    return direction;
                case 10:
                    direction = "South West (SW)";
                    return direction;
                case 11:
                    direction = "West South West (WSW)";
                    return direction;
                case 12:
                    direction = "West (W)";
                    return direction;
                case 13:
                    direction = "West North West (WNW)";
                    return direction;
                case 14:
                    direction = "North West (NW)";
                    return direction;
                case 15:
                    direction = "North North West (NNW)";
                    return direction;

            }
        }
        return " ";
    },

    convertToWindChill(temperature, windSpeed) {
        let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
        return Math.round(windChill);
    },

}