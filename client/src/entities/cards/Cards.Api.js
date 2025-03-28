import axios from "axios";

export class CardsApi {
  static async getAll() {
    const { data } = await axios.get(`/api/cards`);
    return data.data;
  }
}
