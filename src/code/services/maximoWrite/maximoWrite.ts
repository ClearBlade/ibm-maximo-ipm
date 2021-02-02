import Maximo from "ibm-maximo-api";

function maximoWrite(req: CbServer.BasicReq, resp: CbServer.Resp) {
  var options = maximoCredentials;
  const maximo = new Maximo(options);
  maximo
    .authenticate()
    .then(function (jsessionid) {
      try {
        maximo
          .resourceobject("mxasset")
          .select(["*"])
          .where("assetnum")
          .equal(maximoWriteParams.assetnum)
          .fetch()
          .then(function (resourceset) {
            console.log(resourceset);
             maximo.resourceobject("mxasset")
            .resource(resourceset["resourcemboset"]["member"][0]["href"])
            .update(maximoWriteParams.paramsVals,Object.keys(maximoWriteParams.paramsVals))
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

global.maximoWrite = maximoWrite;
