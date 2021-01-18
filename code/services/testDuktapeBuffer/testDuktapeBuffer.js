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

function testDuktapeBuffer(req,resp){
    // These are parameters passed into the code service
    const params = 'maxadmin:r3g1Ty$@3';
    const res = new Buffer(params).toString('base64')
    resp.success(res);
}