let regex={
    number:/^-?((\d+(\.\d*)?)|(\.\d+))$/,
    empty:/^[\s\S]{0}$/,
    integer:/^-?\d+\.?$/,
    positiveInteger:/^0*[1-9]+\d*$/,
    positiveNumber:/^((0*\.0*[1-9]\d*)|(0*[1-9]\d*(\.\d*)?))$/,
    url:/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/,
};

export {regex}

