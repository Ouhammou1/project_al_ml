import { Recognition } from '../types';

// In a real application, we would use a proper database to store these
// For this demo, we'll use localStorage to persist recognition history
export class HistoryService {
  private storageKey: string = 'mediplant_recognition_history';
  
  constructor() {
    // Initialize storage if needed
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }
  
  public addRecognition(recognition: Omit<Recognition, 'id'>): Recognition {
    const history = this.getHistory();
    
    const newRecognition = {
      ...recognition,
      id: this.generateId()
    };
    
    history.unshift(newRecognition);
    
    // Save to localStorage, limit to 100 entries
    localStorage.setItem(this.storageKey, JSON.stringify(history.slice(0, 100)));
    
    return newRecognition;
  }
  
  public getHistory(): Recognition[] {
    const historyJson = localStorage.getItem(this.storageKey);
    if (!historyJson) return [];
    
    try {
      const history = JSON.parse(historyJson);
      // Convert string dates back to Date objects
      return history.map((item: any) => ({
        ...item,
        timestamp: new Date(item.timestamp)
      }));
    } catch (error) {
      console.error('Error parsing history:', error);
      return [];
    }
  }
  
  public clearHistory(): void {
    localStorage.setItem(this.storageKey, JSON.stringify([]));
  }
  
  public removeRecognition(id: string): void {
    const history = this.getHistory();
    const updatedHistory = history.filter(item => item.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedHistory));
  }
  
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}

// Singleton instance
export const historyService = new HistoryService();