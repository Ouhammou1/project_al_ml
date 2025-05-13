export interface Plant {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  medicinalUses: string[];
  warnings: string[];
  imageUrl: string;
  confidence?: number;
}

export interface Recognition {
  id: string;
  plantId: number;
  imageUrl: string;
  confidence: number;
  timestamp: Date;
}

export interface RecognitionResult {
  plant: Plant;
  confidence: number;
}