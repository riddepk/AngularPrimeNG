export interface HousesDetailDto {
  ip: string;
  username: string;
  homestatus: string;
  microdevice:string;
  microdevicestatus:string;
}
export class HousesDetail {
  constructor( _ip : string , _username  : string, _homestatus : string ,_microdevice:string,_microdevicestatus:string){
    this.ip = _ip;
    this.username = _username;
    this.homestatus = _homestatus;
    this.microdevice=_microdevice;
    this.microdevicestatus=_microdevicestatus;
  }

  ip: string;
  username: string;
  homestatus: string;
  microdevice:string;
  microdevicestatus:string;
}
