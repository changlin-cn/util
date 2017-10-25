/**
 * 类型声明文件
 * 用于 代码提示
 */

declare module "changlin-util" {

    export function extend(deep: boolean | object, ...other: [object]): object;
    export function isFunction(): boolean;
    export function isString(): boolean;
    export function isNumber(): boolean;
    export function isDate(): boolean;
    export function isObject(): boolean;
    export function isFunction(): boolean;
    export function isArray(): boolean;
    export function isLikeArray(): boolean;
    export function isBoolean(): boolean;
    export function isPlainObject(): boolean;
    export function isUndefined(): boolean;
    export function isWindow(): boolean;
    export function whatIs(): string;
    export function isType(type: string, value: string): boolean;


    export let regex: {
        number;
        empty;
        integer;
        positiveInteger;
        positiveNumber;
        url;
        tel;
        mobilePhone;
        email;
        account;
        IdCard;
        ip;
    }

    export function trim(string: string): string;
    export function trim(string: string,needToReplace:string): string;
    export function trim(string: string,side:string,needToReplace:string): string;
    export function decodeUnicode(string: string): string;
    export function encodeToUnicode(string: string): string;

    export function removeFromArray(array: [any],condition:(arrayElement:any)=>boolean): [any];
    export function removeFromArray(array: [any],start:number,end:number): [any];
    export function sort(array: [any],compare:(arrayElement1:any,arrayElement2:any)=>boolean): [any];
    export function shuffle(array: [any]): [any];
    export function toArray(object:object): [any];

    export function dateFormat(date:object,format:string): string;
    export function fromTime(from:object|number,now?:object|number): string;
    export const ONE_SEC:number;
    export const ONE_MIN:number;
    export const ONE_HOUR:number;
    export const ONE_DAY:number;
    export const ONE_MONTH:number;
    export const ONE_YEAR:number;

    export function randomInteger(max:number): number;
    export function randomInteger(min:number,max:number): number;





}