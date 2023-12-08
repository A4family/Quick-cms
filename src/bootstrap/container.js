const awilix = require('awilix');
const { Lifetime } = awilix;

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
});

const containerSetup = () => {
    container.loadModules([
        "./src/http/controllers/**/*.js",
        [
            "./src/http/services/**/*.js",
            {
                register: awilix.asClass,
                lifetime: Lifetime.SINGLETON,
            }
        ]
    ],{
        formatName: "camelCase",
        resolverOptions: {
            lifetime: Lifetime.TRANSIENT,
            register: awilix.asClass
        }
    });   
}

module.exports = {
    containerSetup,
    container
}