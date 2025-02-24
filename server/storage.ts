import { events, messages, type Event, type InsertEvent, type Message, type InsertMessage } from "@shared/schema";

export interface IStorage {
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {
  private events: Map<number, Event>;
  private messages: Map<number, Message>;
  private currentEventId: number;
  private currentMessageId: number;

  constructor() {
    this.events = new Map();
    this.messages = new Map();
    this.currentEventId = 1;
    this.currentMessageId = 1;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = { ...insertEvent, id, isActive: insertEvent.isActive ?? true };
    this.events.set(id, event);
    return event;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.currentMessageId++;
    const message: Message = { ...insertMessage, id, createdAt: new Date() };
    this.messages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();