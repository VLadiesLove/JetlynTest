import Axios from "axios";

const instance = Axios.create({
  baseURL: "http://www.filltext.com/",
});

const listAPI = {
  getUsers(rows = 10, delay = 0) {
    return instance.get(
      `?rows=${rows}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&message=%7Blorem%7C32%7D&timestamp={date}&delay=${delay}`
    );
  },
};

export default listAPI;
