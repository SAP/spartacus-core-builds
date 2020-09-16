import { inject, InjectFlags, InjectionToken } from '@angular/core';
import { deepMerge } from './utils/deep-merge';
/**
 * Global Configuration injection token, can be used to inject configuration to any part of the app
 */
export const Config = new InjectionToken('Configuration', {
    providedIn: 'root',
    factory: () => deepMerge({}, inject(DefaultConfig), inject(RootConfig)),
});
/**
 * Default Configuration token, used to build Global Configuration, built from DefaultConfigChunks
 */
export const DefaultConfig = new InjectionToken('DefaultConfiguration', {
    providedIn: 'root',
    factory: () => { var _a; return deepMerge({}, ...((_a = inject(DefaultConfigChunk, InjectFlags.Optional)) !== null && _a !== void 0 ? _a : [])); },
});
/**
 * Root Configuration token, used to build Global Configuration, built from ConfigChunks
 */
export const RootConfig = new InjectionToken('RootConfiguration', {
    providedIn: 'root',
    factory: () => { var _a; return deepMerge({}, ...((_a = inject(ConfigChunk, InjectFlags.Optional)) !== null && _a !== void 0 ? _a : [])); },
});
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
 * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
 */
export const ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the default configuration.
 * Should not be used directly, use `provideDefaultConfig` or `provideDefaultConfigFactory` instead.
 *
 * General rule is, that all config provided in libraries should be provided as default config.
 */
export const DefaultConfigChunk = new InjectionToken('DefaultConfigurationChunk');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXRva2Vucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NvbmZpZy9jb25maWctdG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0M7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsZUFBZSxFQUFFO0lBQ3hELFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Q0FDeEUsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsc0JBQXNCLEVBQUU7SUFDdEUsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUNaLE9BQUEsU0FBUyxDQUFDLEVBQUUsRUFBRSxHQUFHLE9BQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsbUNBQUksRUFBRSxDQUFDLENBQUMsQ0FBQSxFQUFBO0NBQzdFLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLElBQUksY0FBYyxDQUFDLG1CQUFtQixFQUFFO0lBQ2hFLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSxHQUFHLEVBQUUsV0FDWixPQUFBLFNBQVMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxPQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxtQ0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFBLEVBQUE7Q0FDdEUsQ0FBQyxDQUFDO0FBRUg7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLElBQUksY0FBYyxDQUFXLG9CQUFvQixDQUFDLENBQUM7QUFDOUU7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGNBQWMsQ0FDbEQsMkJBQTJCLENBQzVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIEluamVjdEZsYWdzLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi91dGlscy9kZWVwLW1lcmdlJztcblxuLyoqXG4gKiBHbG9iYWwgQ29uZmlndXJhdGlvbiBpbmplY3Rpb24gdG9rZW4sIGNhbiBiZSB1c2VkIHRvIGluamVjdCBjb25maWd1cmF0aW9uIHRvIGFueSBwYXJ0IG9mIHRoZSBhcHBcbiAqL1xuZXhwb3J0IGNvbnN0IENvbmZpZyA9IG5ldyBJbmplY3Rpb25Ub2tlbignQ29uZmlndXJhdGlvbicsIHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICBmYWN0b3J5OiAoKSA9PiBkZWVwTWVyZ2Uoe30sIGluamVjdChEZWZhdWx0Q29uZmlnKSwgaW5qZWN0KFJvb3RDb25maWcpKSxcbn0pO1xuXG4vKipcbiAqIERlZmF1bHQgQ29uZmlndXJhdGlvbiB0b2tlbiwgdXNlZCB0byBidWlsZCBHbG9iYWwgQ29uZmlndXJhdGlvbiwgYnVpbHQgZnJvbSBEZWZhdWx0Q29uZmlnQ2h1bmtzXG4gKi9cbmV4cG9ydCBjb25zdCBEZWZhdWx0Q29uZmlnID0gbmV3IEluamVjdGlvblRva2VuKCdEZWZhdWx0Q29uZmlndXJhdGlvbicsIHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICBmYWN0b3J5OiAoKSA9PlxuICAgIGRlZXBNZXJnZSh7fSwgLi4uKGluamVjdChEZWZhdWx0Q29uZmlnQ2h1bmssIEluamVjdEZsYWdzLk9wdGlvbmFsKSA/PyBbXSkpLFxufSk7XG5cbi8qKlxuICogUm9vdCBDb25maWd1cmF0aW9uIHRva2VuLCB1c2VkIHRvIGJ1aWxkIEdsb2JhbCBDb25maWd1cmF0aW9uLCBidWlsdCBmcm9tIENvbmZpZ0NodW5rc1xuICovXG5leHBvcnQgY29uc3QgUm9vdENvbmZpZyA9IG5ldyBJbmplY3Rpb25Ub2tlbignUm9vdENvbmZpZ3VyYXRpb24nLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogKCkgPT5cbiAgICBkZWVwTWVyZ2Uoe30sIC4uLihpbmplY3QoQ29uZmlnQ2h1bmssIEluamVjdEZsYWdzLk9wdGlvbmFsKSA/PyBbXSkpLFxufSk7XG5cbi8qKlxuICogQ29uZmlnIGNodW5rIHRva2VuLCBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gY2h1bmsgYW5kIGNvbnRyaWJ1dGUgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSwgdXNlIGBwcm92aWRlQ29uZmlnYCBvciBpbXBvcnQgYENvbmZpZ01vZHVsZS53aXRoQ29uZmlnYCBpbnN0ZWFkLlxuICovXG5leHBvcnQgY29uc3QgQ29uZmlnQ2h1bmsgPSBuZXcgSW5qZWN0aW9uVG9rZW48b2JqZWN0W10+KCdDb25maWd1cmF0aW9uQ2h1bmsnKTtcbi8qKlxuICogQ29uZmlnIGNodW5rIHRva2VuLCBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gY2h1bmsgYW5kIGNvbnRyaWJ1dGUgdG8gdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbi5cbiAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSwgdXNlIGBwcm92aWRlRGVmYXVsdENvbmZpZ2Agb3IgYHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeWAgaW5zdGVhZC5cbiAqXG4gKiBHZW5lcmFsIHJ1bGUgaXMsIHRoYXQgYWxsIGNvbmZpZyBwcm92aWRlZCBpbiBsaWJyYXJpZXMgc2hvdWxkIGJlIHByb3ZpZGVkIGFzIGRlZmF1bHQgY29uZmlnLlxuICovXG5leHBvcnQgY29uc3QgRGVmYXVsdENvbmZpZ0NodW5rID0gbmV3IEluamVjdGlvblRva2VuPG9iamVjdFtdPihcbiAgJ0RlZmF1bHRDb25maWd1cmF0aW9uQ2h1bmsnXG4pO1xuIl19