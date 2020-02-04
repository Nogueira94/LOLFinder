// criar utils para funções que você ira utilizar mais vezes

module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim());
};