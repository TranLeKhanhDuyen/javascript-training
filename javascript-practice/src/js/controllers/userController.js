import UserService from '../services/userService';

class UserController {
  constructor(view, service) {
    this.view = view;
    this.service = service;
  }

  login = async (username, password) => {
    const user = await UserService.login(username, password);
    if (user) {
      if (user.role === 'supper_admin') {
        window.location.href = 'index.html';
      } else {
        window.location.href = 'product.html';
      }
    } else {
      alert('Account not found');
    }
  };

  handleLogin = async () => {
    this.view.bindLogin(this.login);
  };
}
