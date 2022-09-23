const config = {
  dev: {
    api: 'http://www.lae.test/api/',
    auth: 'http://www.auth_server.test',
    ws_host: 'www.lae.test',
    ws_port: 6001,
  },
  prod: {
    api: 'https://api.lae.yistars.net/api/',
    auth: 'https://auth.laecloud.com',

    ws_host: 'api.lae.yistars.net',
    ws_port: 443,
  },
};

let current = config.dev;

if (process.env.NODE_ENV === 'production') {
  current = config.prod;
}

console.log('api endpoint: ' + current.api);

export default current;
