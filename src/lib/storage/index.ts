import { StorageService } from '@/types';

class LocalStorageService implements StorageService {
  async get<T>(key: string): Promise<T | null> {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('LocalStorage get error:', error);
      return null;
    }
  }

  async set<T>(key: string, value: T): Promise<void> {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('LocalStorage set error:', error);
      throw error;
    }
  }

  async remove(key: string): Promise<void> {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('LocalStorage remove error:', error);
    }
  }

  async clear(): Promise<void> {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('LocalStorage clear error:', error);
    }
  }

  async keys(): Promise<string[]> {
    try {
      return Object.keys(localStorage);
    } catch (error) {
      console.error('LocalStorage keys error:', error);
      return [];
    }
  }
}

class IndexedDBService implements StorageService {
  private dbName = 'winnerz-ecommerce';
  private version = 1;

  private async openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains('storage')) {
          db.createObjectStore('storage', { keyPath: 'key' });
        }
      };
    });
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const db = await this.openDB();
      const transaction = db.transaction(['storage'], 'readonly');
      const store = transaction.objectStore('storage');
      
      return new Promise((resolve, reject) => {
        const request = store.get(key);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
          const result = request.result;
          resolve(result ? result.value : null);
        };
      });
    } catch (error) {
      console.error('IndexedDB get error:', error);
      return null;
    }
  }

  async set<T>(key: string, value: T): Promise<void> {
    try {
      const db = await this.openDB();
      const transaction = db.transaction(['storage'], 'readwrite');
      const store = transaction.objectStore('storage');
      
      return new Promise((resolve, reject) => {
        const request = store.put({ key, value });
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve();
      });
    } catch (error) {
      console.error('IndexedDB set error:', error);
      throw error;
    }
  }

  async remove(key: string): Promise<void> {
    try {
      const db = await this.openDB();
      const transaction = db.transaction(['storage'], 'readwrite');
      const store = transaction.objectStore('storage');
      
      return new Promise((resolve, reject) => {
        const request = store.delete(key);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve();
      });
    } catch (error) {
      console.error('IndexedDB remove error:', error);
    }
  }

  async clear(): Promise<void> {
    try {
      const db = await this.openDB();
      const transaction = db.transaction(['storage'], 'readwrite');
      const store = transaction.objectStore('storage');
      
      return new Promise((resolve, reject) => {
        const request = store.clear();
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve();
      });
    } catch (error) {
      console.error('IndexedDB clear error:', error);
    }
  }

  async keys(): Promise<string[]> {
    try {
      const db = await this.openDB();
      const transaction = db.transaction(['storage'], 'readonly');
      const store = transaction.objectStore('storage');
      
      return new Promise((resolve, reject) => {
        const request = store.getAllKeys();
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result as string[]);
      });
    } catch (error) {
      console.error('IndexedDB keys error:', error);
      return [];
    }
  }
}

export class HybridStorageService implements StorageService {
  private localStorage: LocalStorageService;
  private indexedDB: IndexedDBService;

  constructor() {
    this.localStorage = new LocalStorageService();
    this.indexedDB = new IndexedDBService();
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      return await this.localStorage.get<T>(key);
    } catch {
      return await this.indexedDB.get<T>(key);
    }
  }

  async set<T>(key: string, value: T): Promise<void> {
    try {
      await this.localStorage.set(key, value);
    } catch {
      await this.indexedDB.set(key, value);
    }
  }

  async remove(key: string): Promise<void> {
    await Promise.all([
      this.localStorage.remove(key),
      this.indexedDB.remove(key)
    ]);
  }

  async clear(): Promise<void> {
    await Promise.all([
      this.localStorage.clear(),
      this.indexedDB.clear()
    ]);
  }

  async keys(): Promise<string[]> {
    try {
      return await this.localStorage.keys();
    } catch {
      return await this.indexedDB.keys();
    }
  }
}

export const storage = new HybridStorageService();