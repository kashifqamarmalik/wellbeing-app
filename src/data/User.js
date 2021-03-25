export class User {
  constructor(username, password, points, location) {
    this.username = username;
    this.password = password;
    this.points = points;
    this.location = location;
    this.subsribers = [];
  }
}
