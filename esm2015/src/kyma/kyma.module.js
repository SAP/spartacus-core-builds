import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { defaultKymaConfig } from './config/default-kyma-config';
import { KymaStoreModule } from './store/kyma-store.module';
import { provideDefaultConfig } from '../config/config-providers';
export class KymaModule {
}
KymaModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule, KymaStoreModule],
                providers: [provideDefaultConfig(defaultKymaConfig)],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9reW1hL2t5bWEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQU1sRSxNQUFNLE9BQU8sVUFBVTs7O1lBSnRCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO2dCQUMxRCxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQ3JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdEt5bWFDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWt5bWEtY29uZmlnJztcbmltcG9ydCB7IEt5bWFTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUva3ltYS1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXByb3ZpZGVycyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsIEt5bWFTdG9yZU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW3Byb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRLeW1hQ29uZmlnKV0sXG59KVxuZXhwb3J0IGNsYXNzIEt5bWFNb2R1bGUge31cbiJdfQ==