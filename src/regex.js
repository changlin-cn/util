


/**
 *  常用正则表达式
 *
 * @property  number
 * @property  empty
 * @property  integer
 * @property  positiveInteger
 * @property  positiveNumber
 * @property  url
 * @property  tel
 * @property  mobilePhone
 * @property  email
 * @property  account
 * @property  IdCard
 * @property  ip
 * @property  numberWithUnit
 * @property  relativeNumberWithUnit
 *
 */
export let regex={
    number:/^[-+]?((\d+(\.\d*)?)|(\.\d+))$/,
    numberWithUnit:/^((?:[-+])?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+)))([%a-zA-Z]*)/,
    relativeNumberWithUnit:/^((?:[-+]=?)?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+)))([%a-zA-Z]*)/,
    empty:/^$/,
    integer:/^-?\d+\.?$/,
    positiveInteger:/^0*[1-9]+\d*$/,
    positiveNumber:/^((0*\.0*[1-9]\d*)|(0*[1-9]\d*(\.\d*)?))$/,
    url:/^((ht|f)tps?):\/\/[\w-]+(\.[\w-]+)+([\w-.,@?^=%&:/~+#]*[\w-@?^=%&/~+#])?$/,
    tel:/^((\d{6,11})|((\d{2,4}-?)?(\d{2,4}-?)?\d{6,11})|(([(（]\d{2,4}[)）])?\d{6,11})|((\+?\d{2,4}-?)?1\d{10}))$/,
    mobilePhone:/^(\+?\d{2,4})?1\d{10}$/,
    email:/^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i,
    account:/^[a-z][\w]{5,15}$/i,
    IdCard:/^((\d{15})|(\d{18})|(\d{17}[xX]))$/,
    ip:/^((1[0-9][0-9])|(2[0-4][0-9])|(25[0-5])|([1-9][0-9])|([0-9]))(\.((1[0-9][0-9])|(2[0-4][0-9])|(25[0-5])|([1-9][0-9])|([0-9]))){3}$/
};

