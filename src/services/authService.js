import apiService from "./apiService.js";

class AuthService {
  login(credentials) {
    return apiService.post("/token", credentials);
  }
}

export default new AuthService();
