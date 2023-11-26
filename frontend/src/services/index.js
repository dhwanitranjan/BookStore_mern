import axios from "axios";
import { API_PORT_LINK } from "../constants";

const Services = {
  GetAllBooks: function () {
    return axios.get(`${API_PORT_LINK}/books`);
  },
  GetBookById: function (id) {
    return axios.get(`${API_PORT_LINK}/books/${id}`);
  },
  CreateBook: function (data) {
    return axios.post(`${API_PORT_LINK}/books`, data);
  },
  DeleteBook: function (id) {
    return axios.delete(`${API_PORT_LINK}/books/${id}`);
  },
  EditBook: function (id, data) {
    return axios.put(`${API_PORT_LINK}/books/${id}`, data);
  },
};

export default Services;
