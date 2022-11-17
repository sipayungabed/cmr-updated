//public
export interface TableModel
{
    title : string;
    totalrows : number;
    getListUrl : string;
    addButton? : boolean;
    editButton? : boolean;
    editId? : string;
    paginationInit? : Pagination;
    removePagination? : boolean;
    removeTopBar? : boolean;
    tableData : TableData[];

    //blm kepake  
    checkbox? : boolean;
}

export interface Pagination
{
    size : number;
    page : number;
    orderby : string;
    query : string;
    queryMandatory?: string;
}

export interface TableData
{
    headerName : string;
    jsonName   : any;

    link? : string;
    linkIdKey? : string;
    linkModal? : string;
    search? : SearchInfo;

    isNumber?     : {[key : string] : boolean};
    isDate?         : {[key : string] : boolean};
    hidden?         : boolean;
    seperator?      : string;
    class?          : string;
    booleanValue?   : {[key : string] : BooleanData};
    altValue?       : {[key : string] : {[key : string] : any}};
    append?         : {[key : string] : string};
    prepend?         : {[key : string] : string};

    customPipe? : string;
    splitBy? : string;

    width? : number;
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


//Private
export interface Search
{
    index : number;
    value : any;
}

export interface Sort
{
    index : number;
    direction : string; 
}

export interface  Row {
    start : number;
    end : number;
  }

