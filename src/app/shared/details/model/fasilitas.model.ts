

export interface TableMdrDetails
{
    label   : string;
    name    : string;
}

export interface FiturFasilitasDetails
{
    name    : string;
    children1? : InputFasilitas[];
    value? : any;
}


export interface InputFasilitas
{
    inputType   : string;  //currency, date, clock, text, checkbox
    id?         : number;
    name?       : string;
    altValue?   : {[key : string] : any};
    append?     :  string;
    prepend?    : string;
    children2?  : InputFasilitas[];
    value? : any;
}