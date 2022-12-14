

export class userAuthentication {
  constructor() {
    const token = localStorage.getItem("token");
    this.validateToken(token);
  }
  validateToken(token) {
    if (!token) {
      window.location = "index.html";
    } else {
      window.location.replace("dashboard.html");
    }
  }

  logOut() {
    localStorage.removeItem("token");
    window.location.replace("index.html");
  }
}

