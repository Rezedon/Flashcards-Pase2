const { User } = require('../../db/models');

class AuthService {
  static async getAllUsers() {
    const users = await User.findAll();
    const result = users.map((el) => el.get({ plain: true }));
    return result;
  }

  static async createUser({ login, mail, password }) {
    const newUser = await User.create({ login, mail, password });
  }
}
