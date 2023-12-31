import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { latestReadings } from "../utils/latestreadings.js";


export const stationController = {


  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    console.log("station_ID: " + station._id);
    const lastReading = await latestReadings(station._id);

    Object.assign(station, lastReading.reading);

    const viewData = {
      title: "Station",
      station: station,
      latitude: station.latitude,
      longitude: station.longitude,
    };

    Object.assign(viewData, lastReading.reading);
    response.render("station-view", viewData);
  },


  async addReading(request, response) {
    const timestamp = new Date(); // Get the current date and time 
    const station = await stationStore.getStationById(request.params.id);
    const newReading = {
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: Number(request.body.windDirection),
      pressure: Number(request.body.pressure),
      timestamp: timestamp.toLocaleString(), // Add the timestamp to the reading
    };
    console.log(`adding reading ${newReading.code}`);
    await readingStore.addReading(station._id, newReading);
    response.redirect("/station/" + station._id);
  },

  async deleteReading(request, response) {
    const stationId = request.params.stationid;
    const readingId = request.params.readingid;
    console.log(`Deleting Reading ${readingId} from Station ${stationId}`);
    await readingStore.deleteReading(request.params.readingId);
    response.redirect("/station/" + stationId);
  },
};
