export interface MaisonsDto {
  id:number;
  ip: string;
  username: string;
  homestatus: string;
}

export class Maisons {
  constructor( _id:number,_ip : string , _username  : string, _homestatus : string ){
    this.id = _id;
    this.ip = _ip;
    this.username = _username;
    this.homestatus = _homestatus;
  }
  id: number;
  ip: string;
  username: string;
  homestatus: string;
}
