import { HOST } from './host.api';

export const GET_CLIENT_CMR = HOST + "merchant-report/v1/client/inquiry";
export const POST_RESEND_CMR = HOST + "merchant-report/v1/client/resend";
/*EXISTING*/
//Brand
export const GET_LIST_BRAND = HOST + "api.util/v1/Merks";
export const GET_ONE_BRAND = HOST + "api.util/v1/Merks?query=id;equals;";
export const POST_BRAND = HOST + "api.util/v4/Merk";
export const UPDATE_BRAND = HOST + "api.util/v2/Merk/";

//Group
export const GET_LIST_GROUP = HOST + "api.util/v1/Groups";
export const GET_ONE_GROUP = HOST + "api.util/v1/Groups?query=id;equals;";
export const POST_GROUP = HOST + "api.util/v4/Group";
export const UPDATE_GROUP = HOST + "api.util/v2/Group/";

//Jenis Usaha
export const GET_LIST_JENIS_USAHA = HOST + "api.util/v1/MCCs";
export const GET_ONE_JENIS_USAHA = HOST + "api.util/v1/MCCs?query=id;equals;";
export const POST_JENIS_USAHA = HOST + "api.util/v4/MCC";
export const UPDATE_JENIS_USAHA = HOST + "api.util/v2/MCC/";

//Kategori Usaha
export const GET_LIST_KATEGORI_USAHA = HOST + "api.util/v1/LOBs";  
export const GET_ONE_KATEGORI_USAHA = HOST + "api.util/v1/LOBs?query=id;equals;";
export const POST_KATEGORI_USAHA = HOST + "api.util/v4/LOB";
export const UPDATE_KATEGORI_USAHA = HOST + "api.util/v2/LOB/";

//Kode Mall
export const GET_LIST_KODE_MALL = HOST + "api.util/v1/LokasiUsahas"; 
export const GET_ONE_KODE_MALL = HOST + "api.util/v1/LokasiUsahas?query=id;equals;";
export const POST_KODE_MALL = HOST + "api.util/v4/LokasiUsaha";
export const UPDATE_KODE_MALL= HOST + "api.util/v2/LokasiUsaha/";

//Kode Settle
export const GET_LIST_KODE_SETTLE = HOST + "api.util/v1/Merchantsettle";
export const GET_ONE_KODE_SETTLE = HOST + "api.util/v1/Merchantsettle?query=id;equals;";
export const POST_KODE_SETTLE = HOST + "api.util/v1/Merchantsettle";
export const UPDATE_KODE_SETTLE = HOST + "api.util/v1/Merchantsettle/";

//Kode Officer
export const GET_LIST_KODE_OFFICER = HOST + "api.util/v1/MerchantOfficers"; 
export const GET_ONE_KODE_OFFICER  = HOST + "api.util/v1/MerchantOfficer/";
export const CHECK_DUPLICATE_KODE_OFFICER  = HOST + "api.util/v5/MerchantOfficer/"; 
export const POST_KODE_OFFICER  = HOST + "api.util/v4/MerchantOfficer";
export const UPDATE_KODE_OFFICER  = HOST + "api.util/v2/MerchantOfficer/";

//MDR
export const GET_LIST_MDR = HOST + "api.util/v1/MasterMdr"; 
export const UPDATE_MDR = HOST + "api.util/v2/FacilityCard/updateMasterMDR";

//Input
export const GET_LIST_POSTAL = HOST + "api.util/v1/Postals"; 
export const GET_LIST_CABANG = HOST + "api.util/v1/Cabangs"; 
export const GET_LIST_APPROVAL_SCORING = HOST + "api.util/v1/ApprovalScoring"; 
export const GET_LIST_CITY = HOST + "api.util/v1/City";

//Positive List
export const GET_LIST_POSITIVE_LIST = HOST + "api.util/v1/SSS";
export const GET_ONE_POSITIVE_LIST = HOST + "api.util/v1/SSS?query=id;equals;";
export const POST_POSITIVE_LIST = HOST + "api.util/v1/SSS";
export const UPDATE_POSITIVE_LIST = HOST + "api.util/v1/SSS/";

//Report
export const REPORT_SLA = HOST + "api.fdm_v2.0.0/v1.0.0/ReportSla/generateReportSLA";

/*NEW API*/
// //Brand
// export const GET_LIST_BRAND = "http://10.20.214.170:55203/merk.api-1.0/Merk/v1/getList"; //Updated
// export const GET_ONE_BRAND = HOST + "api.util/v1/Merks?query=id;equals;";
// export const POST_BRAND = HOST + "api.util/v4/Merk";
// export const UPDATE_BRAND = HOST + "api.util/v2/Merk/";

// //Group
// export const GET_LIST_GROUP = "http://10.20.214.170:55203/group.api-1.0/Group/v1/getList"; //Updated
// export const GET_ONE_GROUP = HOST + "api.util/v1/Groups?query=id;equals;";
// export const POST_GROUP = HOST + "api.util/v4/Group";
// export const UPDATE_GROUP = HOST + "api.util/v2/Group/";

// //Jenis Usaha
// export const GET_LIST_JENIS_USAHA = "http://10.20.214.170:55203/mcc.api-1.0/Mcc/v1/getList"; //Updated
// export const GET_ONE_JENIS_USAHA = HOST + "api.util/v1/MCCs?query=id;equals;";
// export const POST_JENIS_USAHA = HOST + "api.util/v4/MCC";
// export const UPDATE_JENIS_USAHA = HOST + "api.util/v2/MCC/";

// //Kategori Usaha
// export const GET_LIST_KATEGORI_USAHA = "http://10.20.214.170:55203/lob.api-1.0/Lob/v1/getList";  //Updated
// export const GET_ONE_KATEGORI_USAHA = HOST + "api.util/v1/LOBs?query=id;equals;";
// export const POST_KATEGORI_USAHA = HOST + "api.util/v4/LOB";
// export const UPDATE_KATEGORI_USAHA = HOST + "api.util/v2/LOB/";

// //Kode Mall
// export const GET_LIST_KODE_MALL = "http://10.20.214.170:55203/lokasiusaha.api-1.0/LokasiUsaha/v1/getList"; //Updated
// export const GET_ONE_KODE_MALL = HOST + "api.util/v1/LokasiUsahas?query=id;equals;";
// export const POST_KODE_MALL = HOST + "api.util/v4/LokasiUsaha";
// export const UPDATE_KODE_MALL= HOST + "api.util/v2/LokasiUsaha/";

// //Kode Settle
// export const GET_LIST_KODE_SETTLE = HOST + "api.util/v1/Merchantsettle";
// export const GET_ONE_KODE_SETTLE = HOST + "api.util/v1/Merchantsettle?query=id;equals;";
// export const POST_KODE_SETTLE = HOST + "api.util/v1/Merchantsettle";
// export const UPDATE_KODE_SETTLE = HOST + "api.util/v1/Merchantsettle/";

// //Kode Officer
// export const GET_LIST_KODE_OFFICER = "http://10.20.214.170:55203/merchantofficer.api-1.0/MerchantOfficer/v1/getList"; //Updated //Dpne Bersyarat
// export const GET_ONE_KODE_OFFICER  = "http://10.20.214.170:55203/merchantofficer.api-1.0/MerchantOfficer/v1/getById/"; //Updated //Done Bersyarat
// export const CHECK_DUPLICATE_KODE_OFFICER  = HOST + "api.util/v5/MerchantOfficer/"; 
// export const POST_KODE_OFFICER  = "http://10.20.214.170:55203/merchantofficer.api-1.0/MerchantOfficer/v1/save"; //Updated //Done
// export const UPDATE_KODE_OFFICER  = "http://10.20.214.170:55203/merchantofficer.api-1.0/MerchantOfficer/v1/update/"; //Updated //Done

// //MDR
// export const GET_LIST_MDR = "http://10.20.214.170:55203/mastermdr.api-1.0/MasterMdr/v1/getList"; //Updated
// export const UPDATE_MDR = HOST + "api.util/v2/FacilityCard/updateMasterMDR";

// //Input
// export const GET_LIST_POSTAL = HOST + "api.util/v1/Postals"; 
// export const GET_LIST_CABANG = HOST + "api.util/v1/Cabangs"; 
// export const GET_LIST_APPROVAL_SCORING = HOST + "api.util/v1/ApprovalScoring"; 
// export const GET_LIST_CITY = HOST + "api.util/v1/City";
