import axios from "axios";

export default {
  // Gets all books
  getDatas: function() {
    return axios.get("/api/enterData");
  },
  // Gets the book with the given id
  getData: function(id) {
    return axios.get("/api/enterData/" + id);
  },
  // Deletes the book with the given id
  deleteData: function(id) {
    return axios.delete("/api/enterData/" + id);
  },
  // Saves a book to the database
  saveData: function(dayData) {
    return axios.post("/api/books", dayData);
  }
};
