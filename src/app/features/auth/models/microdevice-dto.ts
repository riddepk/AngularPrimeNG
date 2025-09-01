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