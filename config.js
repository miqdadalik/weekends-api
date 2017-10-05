var in_client_id = 'c00dbe7456dc4fd5b0fb01fea27e4fc9',
    in_client_secret = '7a63a8d4a94d4d05b8e04cf56ae0983b',
    in_redirect_uri = 'http://localhost:3000/auth',
    in_auth_url = 'https://api.instagram.com/oauth/authorize/?client_id='
                  + in_client_id + '&redirect_uri='
                  + in_redirect_uri + '&response_type=code';

var db = {
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12197830',
    password: 'XuqDGiEErq',
    database: 'sql12197830'
};

module.exports = {
  port: process.env.PORT || 3000,
  db: db,
  instagram: {
    client_id: in_client_id,
    client_secret: in_client_secret,
    auth_url: in_auth_url,
    redirect_uri: in_redirect_uri
  }
};