module.exports = {
  testing: {
    server: 'localhost',
    port: '8066',
    ip: '192.168.10.106', //TODO: this ip is for local development, and you probably need to change it to your own address when testing with emulator/phone
    serverURI: 'https://localhost:8066/api',
  },
  cloud: {
    uri: 'https://team-wellbeing-api.azurewebsites.net/api',
  },
  mockAPI: {
    port: '3001',
  },
};
