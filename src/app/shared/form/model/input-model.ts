import { TableData, Pagination } from '../../table/model/table-model';

////////////////////////////////Public//////////////////////////////
export class JsonTemplate
{
    address : string[] =
    [
      "postal_code",
      "postal_id",
      "province_id",
      "province_name",
      "regency_id",
      "regency_name",
      "subdistrict_id",
      "subdistrict_name",
      "village_id",
      "village_name"
    ]
}

export interface FormTemplate
{
    title : string;
    backUrl : string;
    getDataUrl ?: string;
    getOneUrl ?: string;
    postDataUrl? : string;
    putDataUrl ?: string;
    inputList : InputDetails[];
}

export interface InputDetails
{
    jsonName : any;
    required? : boolean;
    label   :   string;

    type : string;
    duplicateUrl? : string;
    minlength? : number; 
    maxValue? : number;  
    minValue? : number;  
    maxlength? : number;
    isNegative? :boolean;
    append? : string;
    prepend? : string;
    option? : Option[];
    textAreaConfiguration? : TextAreaConfiguration;
    modalConfiguration? : ModalConfiguration;
    selectApiConfiguration? : SelectApiConfiguration;
    children? : {[key : string] : InputDetails[]}

    //Untuk select yg bentuk jsonName-nya array
    benchmark? : string; //patokan untuk mendapatkan value

    //kosmetik (on progress)
    indented? : number;
    colLabel? : number;
    colInput? : number;

    //private
    value?   : any;
}

export interface Option
{
    key : string;
    value : any;
}

export interface TextAreaConfiguration
{
    rows : number;
    cols : number;
}

export interface ModalConfiguration
{
    valuesKey? : any; //mapping json (default: bakal ngikutin jsonName)
    displayKey : string; //Yang mau dimunculin dikolom input text bedasarkan key(jsonName)
    displayKey2? : string; //Yang mau dimunculin dikolom input append text bedasarkan key(jsonName)
    apiUrl : string;
    paginationInit? : Pagination;
    tableData : TableData[];
    displayLabel? : string;
    displayLabel2? : string;
    tableTitle? : string;

    
    //private
    displayInit? : string;
    displayInit2? : string;
}

export interface SelectApiConfiguration
{
    apiUrl : string;
    valuesKey : any; //mapping json (default: bakal ngikutin jsonName)
    displayKey : string; //Yang mau dimunculin dikolom input text bedasarkan key(jsonName)
}
////////////////////////////////Public//////////////////////////////


////////////////////////////////Private//////////////////////////////
export interface ModalDisplayValueInput
{
    data? : any; 
    display1 : any; 
    display2? : any; 
}
////////////////////////////////Private//////////////////////////////


//contoh pengisian
// formTemplate : FormTemplate =
  // {
  //   title : "Brand",
  //   backUrl : "data-master/brand",
  //   inputList : 
  //   [
  //     {
  //       jsonName : "name",
  //       required : true,
  //       value : "",
  //       label : "Nama Brand",
  //       type : "text",
  //       maxlength : 25
  //     },
  //     {
  //       jsonName : "rba",
  //       required : true,
  //       label : "RBA",
  //       value : "",
  //       type : "select",
  //       option : 
  //       [
  //         {
  //           key : "Low Risk",
  //           value : "Low Risk"
  //         },
  //         {
  //           key : "High Risk",
  //           value : "High Risk"
  //         },
  //       ]
  //     },
  //     {
  //       jsonName : "status",
  //       required : true,
  //       label : "Status",
  //       value : "Active",
  //       type : "radio",
  //       option : 
  //       [
  //         {
  //           key : "Active",
  //           value : "Active"
  //         },
  //         {
  //           key : "Inactive",
  //           value : "Inactive"
  //         },
  //       ]
  //     },
  //     {
  //       jsonName : "visa",
  //       required : true,
  //       maxlength : 4,
  //       label : "Visa",
  //       value : "",
  //       type : "number",
  //     },
  //     {
  //       jsonName : "group_id",
  //       required : true,
  //       label : "Group",
  //       value : "",
  //       type : "modal",
  //       modalConfiguration :
  //       {
  //         valuesKey : "id",
  //         displayKey : "name",
  //         apiUrl : "http://10.20.213.191:55203/api.util/v1/Groups",
  //         tableData : [{
  //             headerName : "Group",
  //             jsonName   : "name",
  //             search : {
  //                 inputType :  "text",
  //                 inputQuery : "full_like",
  //             }
  //         }]
  //       }
  //     }
        // {
      //   jsonName : new AddressJsonName().addressJsonName,
      //   label: "Kelurahan",
      //   type: "address"
      // }
  //   ]
  // }