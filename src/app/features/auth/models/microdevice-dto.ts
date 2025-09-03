export interface MicrodeviceDto {
  DeviceId:number;
  DeviceOwnerId:number;
  DeviceNumericValue:number;
  DeviceAnalogicValue: boolean;
  DeviceCategoryId:number;
  DeviceName:string;
}

export interface MicroDeviceForm {
  DeviceId:number;
  DeviceNumericValue:number;
  DeviceAnalogicValue: boolean;
  DeviceCategoryId:number;
  DeviceName:string;
}

export interface DeviceCategory{
  CategoryId:number;
  Name:string;
}

export class MicroDevice {

  constructor(
                _id : number 
              , _deviceownerid : number 
              , _devicenumericvalue  : number
              , _deviceanalogicvalue : boolean 
              , _devicecategoryid:number
              , _devicename:string
            )
    {
    this.deviceid = _id;
    this.deviceownerid = _deviceownerid ;
    this.devicenumericvalue = _devicenumericvalue;
    this.deviceanalogicvalue=_deviceanalogicvalue;
    this.devicename=_devicename;
  }


  deviceid: number;
  deviceownerid : number ;
  devicenumericvalue: number;
  deviceanalogicvalue : boolean;
  devicename: string;
}