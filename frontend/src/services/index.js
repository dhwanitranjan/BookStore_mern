import axios from "axios";

const Services = () => {
  return {
    GetAllBooks: function () {
      return axios.get("http://localhost:5555/books");
    },
    GetBookById: function (id) {
      return axios.get(`http://localhost:5555/books/${id}`);
    },
    CreateBook: function (data) {
      return axios.post("http://localhost:5555/books", data);
    },
    DeleteBook: function (id) {
      return axios.delete(`http://localhost:5555/books/${id}`);
    },
    EditBook: function (id, data) {
      return axios.put(`http://localhost:5555/books/${id}`, data);
    },
  };
};

export default Services;
