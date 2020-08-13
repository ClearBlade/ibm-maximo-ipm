/**
 * Type: Micro Service
 * Description: A short-lived service which is expected to complete within a fixed period of time.
 * @param {CbServer.BasicReq} req
 * @param {string} req.systemKey
 * @param {string} req.systemSecret
 * @param {string} req.userEmail
 * @param {string} req.userid
 * @param {string} req.userToken
 * @param {boolean} req.isLogging
 * @param {[id: string]} req.params
 * @param {CbServer.Resp} resp
 */

function test_MaximoAPI(req,resp){
    // These are parameters passed into the code service
    var params = req.params;
    var options = {
              protocol: 'http',
              hostname: 'trial.maximosaas.ibm.com',
              port: '9080',
              user: 'asharma@clearblade.com',
              password: 'asharma',
              auth_scheme: '/maximo',
              authtype:'maxauth',
              islean:0
          };

    var Maximo = new maximo(options);
    Maximo.authenticate();
    (log(http));
    resp.success("Success");
}
