import Maximo from 'ibm-maximo-api';

function test_MaximoAPI(req: CbServer.BasicReq, resp: CbServer.Resp) {
  var options = {
    protocol: 'http',
    // ANS: changed hostname, user and password below 1/10/2021
    //hostname: 'trial.maximosaas.ibm.com',
    hostname: 'maximo.clearblade.com',
    port: '9080',
    user: 'maxadmin',
    password: 'r3g1Ty$@3',
    auth_scheme: '/maximo',
    authtype: 'maxauth',
    islean: 1
  };

  const maximo = new Maximo(options);
  maximo.authenticate()
    .then(function(jsessionid) {
      maximo.resourceobject('mxasset')
      .select(['assetnum', 'serialnum', 'assettype'])
      .where('assetum')
      .equal('BU1')
      .fetch()
      .then(function(resourceset) {
        var jsondata = resourceset.thisResourceSet();
        resp.success(jsondata);
      })
    })
    .fail(function (error)
    {
      resp.error(error);
    });
}

global.test_MaximoAPI = test_MaximoAPI;