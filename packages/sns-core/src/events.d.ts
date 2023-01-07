declare module "events" {
  export type Listener = (...args: any[]) => void;

  export default class EventEmitter {
    static listenerCount(emitter: EventEmitter, type: string | number): number;
    static defaultMaxListeners: number;

    eventNames(): Array<string | number>;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    emit(type: string | symbol | number, ...args: any[]): boolean;
    addListener(type: string | symbol | number, listener: Listener): this;
    on(type: string | symbol | number, listener: Listener): this;
    once(type: string | symbol | number, listener: Listener): this;
    prependListener(type: string | symbol | number, listener: Listener): this;
    prependOnceListener(
      type: string | symbol | number,
      listener: Listener
    ): this;
    removeListener(type: string | symbol | number, listener: Listener): this;
    off(type: string | symbol | number, listener: Listener): this;
    removeAllListeners(type?: string | number): this;
    listeners(type: string | symbol | number): Listener[];
    listenerCount(type: string | symbol | number): number;
    rawListeners(type: string | symbol | number): Listener[];
  }
}
