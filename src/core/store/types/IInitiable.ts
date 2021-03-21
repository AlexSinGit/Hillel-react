export interface IInitiable<Options extends Object> {
  init(options: Options): void;
}
