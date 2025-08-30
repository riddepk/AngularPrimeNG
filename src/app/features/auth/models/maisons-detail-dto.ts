export interface MaisonsDetailDto {
  ip: string;
  username: string;
  homestatus: string;
  microcontroller:string;
  microcontrollerstatus:string;
}
export class MaisonsDetail {
  constructor( _ip : string , _username  : string, _homestatus : string ,_microcontroller:string,_microcontrollerstatus:string){
    this.ip = _ip;
    this.username = _username;
    this.homestatus = _homestatus;
    this.microcontroller=_microcontroller;
    this.microcontrollerstatus=_microcontrollerstatus;
  }

  ip: string;
  username: string;
  homestatus: string;
  microcontroller:string;
  microcontrollerstatus:string;
}
