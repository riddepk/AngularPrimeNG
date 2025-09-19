export interface HousesDto {
  HouseId:number;
  HouseIP4: string;
  HouseOwner_Id: string;
  IsHouseActive: boolean;
  HouseName:string;
  HousePassword:string;
  Housestatus: string; 
}

export class HousesModel {
  constructor( _id:number,_ip : string , _username  : string, _homestatus : boolean ,_housename:string,_housepassword:string,_housestatus: string){
    this.HouseId = _id;
    this.HouseIP4 = _ip;
    this.HouseOwner_Id = _username;
    this.IsHouseActive = _homestatus;
    this.HouseName= _housename;
    this.HousePassword=_housepassword;  
    this.Housestatus =  _housestatus;
  }

  HouseId: number;
  HouseIP4: string;
  HouseOwner_Id: string;
  IsHouseActive: boolean;
  HouseName:string;
  HousePassword:string;
  Housestatus: string; 
}
