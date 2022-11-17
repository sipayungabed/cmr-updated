//public
export interface CardModel
{
    title : string;
    totalrows : number;
    getListUrl : string;
    editButton? : boolean;
    editId? : string;
    paginationInit? : Pagination;
    removePagination? : boolean;
    removeTopBar? : boolean;
    cardData : CardData[];

}

export interface Pagination
{
    size : number;
    page : number;
    orderby : string;
    query : string;
    queryMandatory?: string;
}

export interface CardData
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
    category : string;
    value? : string;
}

export interface Option 
{
    key : string;
    value : string;
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

