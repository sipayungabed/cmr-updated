import { Option } from '../../form/model/input-model';

export interface DetailContent
{
    type        : string;
    jsonName?   : any;
    label?      : any;

    //Additional
    indented?       : number;
    colLabel?       : number;
    colValue?       : number;
    isNumber?       : {[key : string] : boolean};
    isDate?         : {[key : string] : boolean};
    hidden?         : boolean;
    seperator?      : string;
    class?          : string;
    booleanValue?   : {[key : string] : BooleanData};
    altValue?       : {[key : string] : {[key : string] : any}};
    append?         : {[key : string] : string};
    prepend?         : {[key : string] : string};
    children?        : {[key : string] : DetailContent[]};
    inputConfig?     : InputDetailsConfig;

    //Untuk RadioChildren dan children2 yang bersifat row (non-mandatory)
    colChildren?       : number;

    //untuk address-1 dan address-2 (non-mandatory)
    addressJsonName? : AddressJsonName;

    //untuk multi-value (mandatory)
    jsonNameParent? : string;

    //Untuk multi-json-label (mandatory)
    multiLabel? : {[key : string] : string};

    //blm kepake
    // tableDataConfig?     : TableDetailsConfig[];
}

export interface BooleanData
{
    trueValue : string;
    falseValue : string;
}

export interface InputDetailsConfig
{
    inputType : string;
    append?     : {[key : string] : string};
    prepend?    : {[key : string] : string};
    rows?        : number;
    option?    : Option[];
}

export interface AddressJsonName
{
    kelurahan  :   string;
    kecamatan   :   string;
    kota   :   string;
    provinsi   :   string;
    kodePos   :   string;
}

//blm kepake
// export interface TableDetailsConfig
// {
//     headerName : string;
//     jsonName   : any;
//     booleanValue? : BooleanData;
//     seperator?  : string;
//     altValue?    : {[key : string] : any};
//     isNumber?     : boolean;
//     isDate?         : boolean;
//       //Details Data Terminal
// //   detailsDataTerminal : DetailContent = 
// //     {
// //       jsonName : 'outletDevices',
// //       type     : 'data-terminal',
// //       tableDataConfig : 
// //       [
// //         {
// //           jsonName : 'index',
// //           headerName : 'No.'
// //         },
// //         {
// //           jsonName : 'terminalInit',
// //           headerName : 'TID.'
// //         },
// //         {
// //           jsonName : 'deviceMachineName',
// //           headerName : 'Tipe Terminal.'
// //         },
// //         {
// //           jsonName : ['deviceTypeName', 'deviceConnectionTypeName'],
// //           headerName : 'Jenis Koneksi',
// //           seperator : ' - '
// //         },
// //         {
// //           jsonName : 'isSameParentFacility',
// //           headerName : 'Fasiltas',
// //           booleanValue : {trueValue : 'Sama dengan outlet', falseValue : 'Custom'}
// //         },
// //         {
// //           jsonName : 'serialNumber',
// //           headerName : 'Serial Number'
// //         },
// //         {
// //           jsonName : 'button',
// //           headerName : 'Action'
// //         },
// //       ]
// //     }
//   ////////////
// }


