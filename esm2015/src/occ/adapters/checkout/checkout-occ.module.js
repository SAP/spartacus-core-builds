import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckoutAdapter } from '../../../checkout/connectors/checkout/checkout.adapter';
import { ORDER_NORMALIZER } from '../../../checkout/connectors/checkout/converters';
import { CheckoutCostCenterAdapter } from '../../../checkout/connectors/cost-center/checkout-cost-center.adapter';
import { CheckoutDeliveryAdapter } from '../../../checkout/connectors/delivery/checkout-delivery.adapter';
import { CheckoutReplenishmentOrderAdapter, REPLENISHMENT_ORDER_FORM_SERIALIZER, REPLENISHMENT_ORDER_NORMALIZER, } from '../../../checkout/connectors/index';
import { PaymentTypeAdapter } from '../../../checkout/connectors/payment-type/payment-type.adapter';
import { CheckoutPaymentAdapter } from '../../../checkout/connectors/payment/checkout-payment.adapter';
import { provideDefaultConfig } from '../../../config/config-providers';
import { OccOrderNormalizer, OccReplenishmentOrderFormSerializer, OccReplenishmentOrderNormalizer, } from './converters/index';
import { defaultOccCheckoutConfig } from './default-occ-checkout-config';
import { OccCheckoutCostCenterAdapter } from './occ-checkout-cost-center.adapter';
import { OccCheckoutDeliveryAdapter } from './occ-checkout-delivery.adapter';
import { OccCheckoutPaymentTypeAdapter } from './occ-checkout-payment-type.adapter';
import { OccCheckoutPaymentAdapter } from './occ-checkout-payment.adapter';
import { OccCheckoutReplenishmentOrderAdapter } from './occ-checkout-replenishment-order.adapter';
import { OccCheckoutAdapter } from './occ-checkout.adapter';
export class CheckoutOccModule {
}
CheckoutOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [
                    provideDefaultConfig(defaultOccCheckoutConfig),
                    {
                        provide: CheckoutAdapter,
                        useClass: OccCheckoutAdapter,
                    },
                    { provide: ORDER_NORMALIZER, useExisting: OccOrderNormalizer, multi: true },
                    {
                        provide: CheckoutDeliveryAdapter,
                        useClass: OccCheckoutDeliveryAdapter,
                    },
                    {
                        provide: CheckoutPaymentAdapter,
                        useClass: OccCheckoutPaymentAdapter,
                    },
                    {
                        provide: PaymentTypeAdapter,
                        useClass: OccCheckoutPaymentTypeAdapter,
                    },
                    {
                        provide: CheckoutCostCenterAdapter,
                        useClass: OccCheckoutCostCenterAdapter,
                    },
                    {
                        provide: CheckoutReplenishmentOrderAdapter,
                        useClass: OccCheckoutReplenishmentOrderAdapter,
                    },
                    {
                        provide: REPLENISHMENT_ORDER_NORMALIZER,
                        useExisting: OccReplenishmentOrderNormalizer,
                        multi: true,
                    },
                    {
                        provide: REPLENISHMENT_ORDER_FORM_SERIALIZER,
                        useExisting: OccReplenishmentOrderFormSerializer,
                        multi: true,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy9jaGVja291dC9jaGVja291dC1vY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRyxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2pDLG1DQUFtQyxFQUNuQyw4QkFBOEIsR0FDL0IsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNwRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN2RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLG1DQUFtQyxFQUNuQywrQkFBK0IsR0FDaEMsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQTJDNUQsTUFBTSxPQUFPLGlCQUFpQjs7O1lBekM3QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQUMsd0JBQXdCLENBQUM7b0JBQzlDO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixRQUFRLEVBQUUsa0JBQWtCO3FCQUM3QjtvQkFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtvQkFDM0U7d0JBQ0UsT0FBTyxFQUFFLHVCQUF1Qjt3QkFDaEMsUUFBUSxFQUFFLDBCQUEwQjtxQkFDckM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjt3QkFDL0IsUUFBUSxFQUFFLHlCQUF5QjtxQkFDcEM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsUUFBUSxFQUFFLDZCQUE2QjtxQkFDeEM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLHlCQUF5Qjt3QkFDbEMsUUFBUSxFQUFFLDRCQUE0QjtxQkFDdkM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGlDQUFpQzt3QkFDMUMsUUFBUSxFQUFFLG9DQUFvQztxQkFDL0M7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLDhCQUE4Qjt3QkFDdkMsV0FBVyxFQUFFLCtCQUErQjt3QkFDNUMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLG1DQUFtQzt3QkFDNUMsV0FBVyxFQUFFLG1DQUFtQzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jaGVja291dC5hZGFwdGVyJztcbmltcG9ydCB7IE9SREVSX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2NoZWNrb3V0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb3N0Q2VudGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY29zdC1jZW50ZXIvY2hlY2tvdXQtY29zdC1jZW50ZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBDaGVja291dERlbGl2ZXJ5QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvZGVsaXZlcnkvY2hlY2tvdXQtZGVsaXZlcnkuYWRhcHRlcic7XG5pbXBvcnQge1xuICBDaGVja291dFJlcGxlbmlzaG1lbnRPcmRlckFkYXB0ZXIsXG4gIFJFUExFTklTSE1FTlRfT1JERVJfRk9STV9TRVJJQUxJWkVSLFxuICBSRVBMRU5JU0hNRU5UX09SREVSX05PUk1BTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgUGF5bWVudFR5cGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9wYXltZW50LXR5cGUvcGF5bWVudC10eXBlLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2hlY2tvdXRQYXltZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvcGF5bWVudC9jaGVja291dC1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLXByb3ZpZGVycyc7XG5pbXBvcnQge1xuICBPY2NPcmRlck5vcm1hbGl6ZXIsXG4gIE9jY1JlcGxlbmlzaG1lbnRPcmRlckZvcm1TZXJpYWxpemVyLFxuICBPY2NSZXBsZW5pc2htZW50T3JkZXJOb3JtYWxpemVyLFxufSBmcm9tICcuL2NvbnZlcnRlcnMvaW5kZXgnO1xuaW1wb3J0IHsgZGVmYXVsdE9jY0NoZWNrb3V0Q29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy1jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgT2NjQ2hlY2tvdXRDb3N0Q2VudGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLWNoZWNrb3V0LWNvc3QtY2VudGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIgfSBmcm9tICcuL29jYy1jaGVja291dC1kZWxpdmVyeS5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0NoZWNrb3V0UGF5bWVudFR5cGVBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2hlY2tvdXQtcGF5bWVudC10eXBlLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ2hlY2tvdXRQYXltZW50QWRhcHRlciB9IGZyb20gJy4vb2NjLWNoZWNrb3V0LXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDaGVja291dFJlcGxlbmlzaG1lbnRPcmRlckFkYXB0ZXIgfSBmcm9tICcuL29jYy1jaGVja291dC1yZXBsZW5pc2htZW50LW9yZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ2hlY2tvdXRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY2hlY2tvdXQuYWRhcHRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0T2NjQ2hlY2tvdXRDb25maWcpLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENoZWNrb3V0QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDaGVja291dEFkYXB0ZXIsXG4gICAgfSxcbiAgICB7IHByb3ZpZGU6IE9SREVSX05PUk1BTElaRVIsIHVzZUV4aXN0aW5nOiBPY2NPcmRlck5vcm1hbGl6ZXIsIG11bHRpOiB0cnVlIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDaGVja291dFBheW1lbnRBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NoZWNrb3V0UGF5bWVudEFkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQYXltZW50VHlwZUFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2hlY2tvdXRQYXltZW50VHlwZUFkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDaGVja291dENvc3RDZW50ZXJBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0NoZWNrb3V0Q29zdENlbnRlckFkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDaGVja291dFJlcGxlbmlzaG1lbnRPcmRlckFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ2hlY2tvdXRSZXBsZW5pc2htZW50T3JkZXJBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUkVQTEVOSVNITUVOVF9PUkRFUl9OT1JNQUxJWkVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IE9jY1JlcGxlbmlzaG1lbnRPcmRlck5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFJFUExFTklTSE1FTlRfT1JERVJfRk9STV9TRVJJQUxJWkVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IE9jY1JlcGxlbmlzaG1lbnRPcmRlckZvcm1TZXJpYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRPY2NNb2R1bGUge31cbiJdfQ==