

import {isString} from './is'

/**
 * 字符串两端剪切
 *
 * @param {string}  string
 * @param {string}  fe  f or e or  fe
 * @param {string}  char
 *
 * @example
 * ```javascript
 * trim('   abc   ')//=>'abc'
 * trim('   abc   ','f')//=>'abc   '
 * trim('   abc   ','e')//=>'   abc'
 * trim('**abc**','*')//=>'abc'
 * ```
 *
 * @returns {string}
 */
export function trim(string,fe='fe',char='\\s' ){
    if(isString(string)&&isString(char)&&isString(fe)){
        if(!/^(fe)|([fe])$/.test(fe)){char=fe;fe='fe';}
        let FRegex=new RegExp(`^[${char}]*`),ERegex=new RegExp(`[${char}]*$`);
        switch (fe){
            case 'f':
                return string.replace(FRegex,'');
            case 'e':
                return string.replace(ERegex,'');
            default:
                return string.replace(FRegex,'').replace(ERegex,'')
        }
    }
    throw new Error('Parameter type error')
}

/**
 *
 * 字符转unicode
 * @param {string}  str  需要转码的字符串
 * @example
 * ```javascript
 *  encodeToUnicode('啊abc123.')
 *  //=>"\u554a\u0061\u0062\u0063\u0031\u0032\u0033\u002e"
 *
 * ```
 *
 * @returns {string}
 */

export function encodeToUnicode(str) {
    if(!isString(str)){
        throw new Error(`${str} is not string`)
    }
    let temp = "", rs = "";
    for (let i = 0, len = str.length; i < len; i++) {
        temp = str.charCodeAt(i).toString(16);
        rs += "\\u" + new Array(5 - temp.length).join("0") + temp;
    }
    return rs;
}

/**
 *
 * unicode字符串解码
 * @param {string}  str  需要解码的字符串
 * @example
 * ```javascript
 *  decodeUnicode('\u554a\u0061\u0062\u0063\u0031\u0032\u0033\u002e')
 *  //=>"啊abc123."
 *
 * ```
 *
 * @returns {string}
 */


export function decodeUnicode(str) {
    if(!isString(str)){
        throw new Error(`${str} is not string`)
    }
    return str.replace(/(\\u)(\w{4}|\w{2})/gi, function ($0, $1, $2) {
        return String.fromCharCode(parseInt($2, 16));
    });
}
