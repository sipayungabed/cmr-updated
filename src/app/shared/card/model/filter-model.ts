export interface FilterModel
{
    search? : SearchInfo;
    checkFilter ?: CheckFilterModel[];
    radioFilter ?: RadioFilterModel[];
}
export interface RadioFilterModel
{   
    jsonName?  : string;
    name?  : string;
    groupId : number;
    value? : String;
    optionName ? : Array<OptionModel>;
}

export interface CheckFilterModel
{   
    jsonName?  : string;
    name?  : string;
    optionName ? : Array<OptionModel>;
}

export interface OptionModel
{   
    value?  : string;
    name?  : string;
    id? : number;
    checked : boolean;
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
