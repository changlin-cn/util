/**
 * @module string
 */

import {isString} from './is'

/**
 * 字符串两端剪切
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
function trim(string,fe='fe',char='\\s' ){
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





export  {
    trim
};


