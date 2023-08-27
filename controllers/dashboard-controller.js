import { stationStore } from "../models/station-store.js";
import { latestReadings } from "../utils/latestreadings.js";

export const dashboardController = {
  async index(request, response) {
    const stations = await stationStore.getAllStations();
    
    //Add latest readings to each station
    for (const station of stations) {
      const readingObject = await latestReadings(station._id);
      Object.assign(station, readingObject.reading);
    };

    const viewData = {
      title: "Station Dashboard",
      stations: stations,
    };
    console.log("dashboard rendering");
    //Debug
    let viewDataString = JSON.stringify(viewData); // Debug Remove Later
    let viewDateObject = JSON.parse(viewDataString); // Debug Remove Later
    console.dir(viewDateObject, { depth: null, colors: true }); // Debug Remove Later
  
    response.render("dashboard-view", viewData);
  },

  async addStation(request, response) {
    const newStation = {
      title: request.body.title,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
    };
    console.log(`adding station ${newStation.title}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  },

  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log(`Deleting Station ${stationId}`);
    await stationStore.deleteStationById(stationId);
    response.redirect("/dashboard");
  },
};
