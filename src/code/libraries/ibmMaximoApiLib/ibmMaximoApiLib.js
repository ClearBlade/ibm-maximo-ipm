try {
    const maximo = require('ibm-maximo-api2');

    // globalThis.maximo = () => {
    //     console.log('maximo!')
    // };
    globalThis.maximo = maximo;
} catch(e) {
    console.log('caught error in ibmMaximoApiLib', e.stack);
}