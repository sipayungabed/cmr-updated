//public
export interface TableNonApiModel
{
    title : string;
    totalrows? : number;
    
    removeTopBar? : boolean;
    tableData : TableData[];

    checkbox? : boolean;
    width? : number;
}

export interface TableData
{
    headerName : string;
    jsonName   : string;
    booleanData? : BooleanData;
    search? : SearchInfo;
    altValue? : {[key : string] : any}
}

export interface BooleanData //Buat nampilin data yg iingin di display
{
    trueValue : string;
    falseValue : string;
}

export interface SearchInfo 
{
    inputType : string;
    inputQuery : string;
    options? : Option[];
    value? : any;
}

export interface Option 
{
    key : string;
    value : string;
}