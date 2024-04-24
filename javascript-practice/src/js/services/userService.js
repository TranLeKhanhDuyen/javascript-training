import { Base_Url , User } from '../constants/url';

export default class UserService {
  //function get user from json
  static getAllUser = async () => {
    try {
      const res = await fetch(`${Base_Url}${User}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application-json',
        },
      });
      return res.json();
    } catch (error) {
      throw new Error('Failed to get all user.');
    }
  };

  static login = async (username, password) => {
    try {
      const data = await this.getAllUser();
      const user = data.find(
        (user) => user.email === username && user.password === password
      );
      return user;
    } catch (error) {
      throw new Error('Failed to get user.');
    }
  };
}
