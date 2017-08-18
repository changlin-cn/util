let regex={
    number:/^-?\d*(\.{1}\d*)?$/,
    empty:/^[\s\S]{0}$/,
    integer:/^-?\d+$/,
    positiveInteger:/^0*[1-9]+\d*$/,
    positiveNumber:/^((0*\.{1}0*[1-9]{1}\d*)|(0*[1-9]{1}\d*(\.{1}\d*)?))$/
};

module.exports=regex;
module.exports.default=module.exports;
