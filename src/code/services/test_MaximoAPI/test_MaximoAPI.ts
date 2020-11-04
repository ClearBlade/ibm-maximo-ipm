import Maximo from 'ibm-maximo-api';

function test_MaximoAPI(req: CbServer.BasicReq, resp: CbServer.Resp) {
  var options = {
    protocol: "http",
    hostname: "trial.maximosaas.ibm.com",
    port: "9080",
    user: "asharma@clearblade.com",
    password: "asharma",
    auth_scheme: "/maximo",
    authtype: "maxauth",
    islean: 0,
  };

  const maximo = new Maximo(options);
  maximo.authenticate()
        .then(function(jsessionid)
        {
          resp.success(jsessionid);
        })
        .fail(function (error)
        {
          resp.error(error);
        });
}

global.test_MaximoAPI = test_MaximoAPI;