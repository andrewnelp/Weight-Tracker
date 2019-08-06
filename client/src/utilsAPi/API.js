import axios from "axios";

export default {
  // Gets all dayActivities
  getDatas: function() {
    return axios.get("/api/enterData");
  },
  // Gets the day Activity with the given id
  getData: function(id) {
    return axios.get("/api/enterData/" + id);
  },
  // Deletes the activity with the given id
  deleteData: function(id) {
    return axios.delete("/api/enterData/" + id);
  },
  // Saves a Day Activity to the database
  saveData: function(day) {
    return axios.post("/api/enterData", day);
  },
  // Saves a Day Activity to the database
  updateData: function(id) {
    return axios.post("/api/enterData/" + id);
  }
};
