import Maximo from "ibm-maximo-api";

function test_MaximoAPI_update(req: CbServer.BasicReq, resp: CbServer.Resp) {
  var options = {
    protocol: "http",
    // ANS: changed hostname, user and password below 1/10/2021
    //hostname: 'trial.maximosaas.ibm.com',
    hostname: "maximo.clearblade.com",
    port: "9080",
    user: "maxadmin",
    password: "r3g1Ty$@3",
    auth_scheme: "/maximo",
    authtype: "maxauth",
    islean: 1,
  };

  var wo = '';
  var updates = req.params;

  const maximo = new Maximo(options);
  maximo
    .authenticate()
    .then(function (jsessionid) {
      try {
        maximo
          .resourceobject("mxasset")
          .select(["*"])
          .where("assetnum")
          .equal("BU1")
          .fetch()
          .then(function (resourceset) {
            console.log(resourceset);
             maximo.resourceobject("mxasset")
            .resource(resourceset["resourcemboset"]["member"][0]["href"])
            .update(updates,Object.keys(updates))
            .then(function(resource) {
                var jsondata = resource.JSON();
                resp.success(jsondata);
            })
            .fail(function (error) {
                resp.error(error);
            });
          }
        )} catch (e) {
          resp.error(e.message);
        }})
        .fail(function (error) {
              resp.error(error);
        });
}

global.test_MaximoAPI_update = test_MaximoAPI_update;
