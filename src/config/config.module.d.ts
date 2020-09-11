import { InjectionToken, ModuleWithProviders, Provider } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare function configurationFactoryProvidedInRoot(): any;
/**
 * Global Configuration injection token, can be used to inject configuration to any part of the app
 */
export declare const Config: InjectionToken<any>;
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
 * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
 */
export declare const ConfigChunk: InjectionToken<object[]>;
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the default configuration.
 * Should not be used directly, use `provideDefaultConfig` or `provideDefaultConfigFactory` instead.
 *
 * General rule is, that all config provided in libraries should be provided as default config.
 */
export declare const DefaultConfigChunk: InjectionToken<object[]>;
/**
 * Helper function to provide configuration chunk using ConfigChunk token
 *
 * To provide default configuration in libraries provideDefaultConfig should be used instead.
 *
 * @param config Config object to merge with the global configuration
 */
export declare function provideConfig(config?: any, defaultConfig?: boolean): Provider;
/**
 * Helper function to provide configuration with factory function, using ConfigChunk token
 *
 * To provide default configuration in libraries provideDefaultConfigFactory should be used instead.
 *
 * @param configFactory Factory Function that will generate config object
 * @param deps Optional dependencies to a factory function
 */
export declare function provideConfigFactory(configFactory: Function, deps?: any[], defaultConfig?: boolean): Provider;
/**
 * Helper function to provide default configuration chunk using DefaultConfigChunk token
 *
 * @param config Config object to merge with the default configuration
 */
export declare function provideDefaultConfig(config?: any): Provider;
/**
 * Helper function to provide default configuration with factory function, using DefaultConfigChunk token
 *
 * @param configFactory Factory Function that will generate config object
 * @param deps Optional dependencies to a factory function
 */
export declare function provideDefaultConfigFactory(configFactory: Function, deps?: any[]): Provider;
/**
 * Factory function that merges all configurations chunks. Should not be used directly without explicit reason.
 *
 */
export declare function configurationFactory(configChunks?: any[], defaultConfigChunks?: any[]): any;
export declare class ConfigModule {
    /**
     * Import ConfigModule and contribute config to the global configuration
     *
     * To provide default configuration in libraries provideDefaultConfig should be used instead.
     *
     * @param config Config object to merge with the global configuration
     */
    static withConfig(config: object): ModuleWithProviders<ConfigModule>;
    /**
     * Import ConfigModule and contribute config to the global configuration using factory function
     *
     * To provide default configuration in libraries provideDefaultConfigFactory should be used instead.
     *
     * @param configFactory Factory function that will generate configuration
     * @param deps Optional dependencies to factory function
     */
    static withConfigFactory(configFactory: Function, deps?: any[]): ModuleWithProviders<ConfigModule>;
    /**
     * Module with providers, should be imported only once, if possible, at the root of the app.
     *
     * @param config
     */
    static forRoot(config?: any): ModuleWithProviders<ConfigModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ConfigModule, never, [typeof ɵngcc1.CommonModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ConfigModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5kLnRzIiwic291cmNlcyI6WyJjb25maWcubW9kdWxlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0RUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycywgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGNvbmZpZ3VyYXRpb25GYWN0b3J5UHJvdmlkZWRJblJvb3QoKTogYW55O1xuLyoqXG4gKiBHbG9iYWwgQ29uZmlndXJhdGlvbiBpbmplY3Rpb24gdG9rZW4sIGNhbiBiZSB1c2VkIHRvIGluamVjdCBjb25maWd1cmF0aW9uIHRvIGFueSBwYXJ0IG9mIHRoZSBhcHBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgQ29uZmlnOiBJbmplY3Rpb25Ub2tlbjxhbnk+O1xuLyoqXG4gKiBDb25maWcgY2h1bmsgdG9rZW4sIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiBjaHVuayBhbmQgY29udHJpYnV0ZSB0byB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5LCB1c2UgYHByb3ZpZGVDb25maWdgIG9yIGltcG9ydCBgQ29uZmlnTW9kdWxlLndpdGhDb25maWdgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IENvbmZpZ0NodW5rOiBJbmplY3Rpb25Ub2tlbjxvYmplY3RbXT47XG4vKipcbiAqIENvbmZpZyBjaHVuayB0b2tlbiwgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIGNodW5rIGFuZCBjb250cmlidXRlIHRvIHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24uXG4gKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHksIHVzZSBgcHJvdmlkZURlZmF1bHRDb25maWdgIG9yIGBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3RvcnlgIGluc3RlYWQuXG4gKlxuICogR2VuZXJhbCBydWxlIGlzLCB0aGF0IGFsbCBjb25maWcgcHJvdmlkZWQgaW4gbGlicmFyaWVzIHNob3VsZCBiZSBwcm92aWRlZCBhcyBkZWZhdWx0IGNvbmZpZy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgRGVmYXVsdENvbmZpZ0NodW5rOiBJbmplY3Rpb25Ub2tlbjxvYmplY3RbXT47XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gY2h1bmsgdXNpbmcgQ29uZmlnQ2h1bmsgdG9rZW5cbiAqXG4gKiBUbyBwcm92aWRlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBpbiBsaWJyYXJpZXMgcHJvdmlkZURlZmF1bHRDb25maWcgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0gY29uZmlnIENvbmZpZyBvYmplY3QgdG8gbWVyZ2Ugd2l0aCB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZyhjb25maWc/OiBhbnksIGRlZmF1bHRDb25maWc/OiBib29sZWFuKTogUHJvdmlkZXI7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gd2l0aCBmYWN0b3J5IGZ1bmN0aW9uLCB1c2luZyBDb25maWdDaHVuayB0b2tlblxuICpcbiAqIFRvIHByb3ZpZGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIGluIGxpYnJhcmllcyBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3Rvcnkgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0gY29uZmlnRmFjdG9yeSBGYWN0b3J5IEZ1bmN0aW9uIHRoYXQgd2lsbCBnZW5lcmF0ZSBjb25maWcgb2JqZWN0XG4gKiBAcGFyYW0gZGVwcyBPcHRpb25hbCBkZXBlbmRlbmNpZXMgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHByb3ZpZGVDb25maWdGYWN0b3J5KGNvbmZpZ0ZhY3Rvcnk6IEZ1bmN0aW9uLCBkZXBzPzogYW55W10sIGRlZmF1bHRDb25maWc/OiBib29sZWFuKTogUHJvdmlkZXI7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwcm92aWRlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBjaHVuayB1c2luZyBEZWZhdWx0Q29uZmlnQ2h1bmsgdG9rZW5cbiAqXG4gKiBAcGFyYW0gY29uZmlnIENvbmZpZyBvYmplY3QgdG8gbWVyZ2Ugd2l0aCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGNvbmZpZz86IGFueSk6IFByb3ZpZGVyO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvdmlkZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gd2l0aCBmYWN0b3J5IGZ1bmN0aW9uLCB1c2luZyBEZWZhdWx0Q29uZmlnQ2h1bmsgdG9rZW5cbiAqXG4gKiBAcGFyYW0gY29uZmlnRmFjdG9yeSBGYWN0b3J5IEZ1bmN0aW9uIHRoYXQgd2lsbCBnZW5lcmF0ZSBjb25maWcgb2JqZWN0XG4gKiBAcGFyYW0gZGVwcyBPcHRpb25hbCBkZXBlbmRlbmNpZXMgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeShjb25maWdGYWN0b3J5OiBGdW5jdGlvbiwgZGVwcz86IGFueVtdKTogUHJvdmlkZXI7XG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdGhhdCBtZXJnZXMgYWxsIGNvbmZpZ3VyYXRpb25zIGNodW5rcy4gU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IHdpdGhvdXQgZXhwbGljaXQgcmVhc29uLlxuICpcbiAqL1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gY29uZmlndXJhdGlvbkZhY3RvcnkoY29uZmlnQ2h1bmtzPzogYW55W10sIGRlZmF1bHRDb25maWdDaHVua3M/OiBhbnlbXSk6IGFueTtcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbmZpZ01vZHVsZSB7XG4gICAgLyoqXG4gICAgICogSW1wb3J0IENvbmZpZ01vZHVsZSBhbmQgY29udHJpYnV0ZSBjb25maWcgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBUbyBwcm92aWRlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBpbiBsaWJyYXJpZXMgcHJvdmlkZURlZmF1bHRDb25maWcgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25maWcgQ29uZmlnIG9iamVjdCB0byBtZXJnZSB3aXRoIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogb2JqZWN0KTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdNb2R1bGU+O1xuICAgIC8qKlxuICAgICAqIEltcG9ydCBDb25maWdNb2R1bGUgYW5kIGNvbnRyaWJ1dGUgY29uZmlnIHRvIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvbiB1c2luZyBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiBUbyBwcm92aWRlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBpbiBsaWJyYXJpZXMgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5IHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnRmFjdG9yeSBGYWN0b3J5IGZ1bmN0aW9uIHRoYXQgd2lsbCBnZW5lcmF0ZSBjb25maWd1cmF0aW9uXG4gICAgICogQHBhcmFtIGRlcHMgT3B0aW9uYWwgZGVwZW5kZW5jaWVzIHRvIGZhY3RvcnkgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgd2l0aENvbmZpZ0ZhY3RvcnkoY29uZmlnRmFjdG9yeTogRnVuY3Rpb24sIGRlcHM/OiBhbnlbXSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnTW9kdWxlPjtcbiAgICAvKipcbiAgICAgKiBNb2R1bGUgd2l0aCBwcm92aWRlcnMsIHNob3VsZCBiZSBpbXBvcnRlZCBvbmx5IG9uY2UsIGlmIHBvc3NpYmxlLCBhdCB0aGUgcm9vdCBvZiB0aGUgYXBwLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnTW9kdWxlPjtcbn1cbiJdfQ==