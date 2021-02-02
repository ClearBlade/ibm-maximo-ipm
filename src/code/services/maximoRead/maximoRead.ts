import Maximo from "ibm-maximo-api";

function maximoRead(req: CbServer.BasicReq, resp: CbServer.Resp) {
  var options = maximoCredentials;
  const maximo = new Maximo(options);
  maximo
    .authenticate()
    .then(function (jsessionid) {
      try {
        maximo
          .resourceobject("mxasset")
          .select(maximoReadParams.params)
          .where("assetnum")
          .equal(maximoReadParams.assetnum)
          .fetch()
          .then(function (resourceset) {
            var jsondata = resourceset.thisResourceSet();
            resp.success(jsondata);
          });
      } catch (e) {
        resp.error(e.message);
      }
    })
    .fail(function (error) {
      resp.error(error);
    });
}

global.maximoRead = maximoRead;
