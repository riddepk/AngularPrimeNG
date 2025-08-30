export interface MaisonsDto {
  ip: string;
  username: string;
  homestatus: string;
}

export class Maisons {
  constructor( _ip : string , _username  : string, _homestatus : string ){
    this.ip = _ip;
    this.username = _username;
    this.homestatus = _homestatus;
  }
  ip: string;
  username: string;
  homestatus: string;
}
