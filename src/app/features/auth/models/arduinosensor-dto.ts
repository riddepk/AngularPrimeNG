/**
 * Utilisé pour les transferts de données entre  Angular et WEB API
 */
export interface ArduinoSensorDto {
  id: number;
  definitionOfEvent: string | null;
  digitalValue: number | null;
  analogicValue: boolean;
  lastUpdated: Date | null;
  category: string | null;
  houseOwner: number;
}

/**
 * DTO pour la création d'un nouveau capteur Arduino
 */
export interface CreateArduinoSensorDto {
  definitionOfEvent: string | null;
  digitalValue?: number | null;
  analogicValue?: boolean;
  category: string | null;
  houseOwner: number;
}

/**
 * DTO pour la mise à jour d'un capteur Arduino existant
 */
export interface UpdateArduinoSensorDto {
  id: number;
  definitionOfEvent?: string | null;
  digitalValue?: number | null;
  analogicValue?: boolean;
  category?: string | null;
  houseOwner?: number;
}

/**
 * DTO pour les requêtes de filtrage des capteurs
 */
export interface ArduinoSensorFilterDto {
  houseOwner?: number;
  category?: string;
  analogicValue?: boolean;
  dateFrom?: Date;
  dateTo?: Date;
}

/**
 * DTO pour la réponse paginée des capteurs
 */
export interface ArduinoSensorPagedResponseDto {
  data: ArduinoSensorDto[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

// AJOUT: Interface SensorData manquante
export interface SensorData {
  id: string | number;
  name: string;
  type: string;
  value: number;
  unit: string;
  lastUpdate: Date | string;
  houseId: string | number;
}

// AJOUT: Interface House pour le typage
export interface House {
  HouseId: string | number; // Peut être string ou number selon votre API
  HouseIP4: string;
  HouseName: string;
  IsHouseActive: boolean;
  homestatus: string;
  HouseOwner_Id: string | number;
}

export class ArduinoSensors{
      id: number;
      definitionOfEvent: String;
      digitalValue: number;
      analogicValue: boolean;
      lastUpdated: Date;
      category: string;
      houseOwner: number;

      constructor( _id:number
        , _definitionOfEvent:String
        , _digitalValue:number
        , _analogicValue :boolean
        , _lastUpdated: Date
        , _category: string
        , _houseOwner: number
      ){
          this.id = _id;
          this.definitionOfEvent = _definitionOfEvent;
          this.digitalValue = _digitalValue;
          this.analogicValue = _analogicValue;
          this.lastUpdated = _lastUpdated;
          this.category = _category;
          this.houseOwner = _houseOwner;
        }
}
