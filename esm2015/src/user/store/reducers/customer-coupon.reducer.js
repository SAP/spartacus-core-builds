import * as fromActions from '../actions/customer-coupon.action';
export const initialState = {
    coupons: [],
    sorts: [],
    pagination: {},
};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromActions.LOAD_CUSTOMER_COUPONS_SUCCESS: {
            return action.payload;
        }
        case fromActions.SUBSCRIBE_CUSTOMER_COUPON_SUCCESS: {
            const updatedCustomerCoupon = action.payload.coupon;
            const customerCoupons = new Array(state.coupons.length);
            state.coupons.forEach((customerCoupon, index) => customerCoupon.couponId === updatedCustomerCoupon.couponId
                ? (customerCoupons[index] = updatedCustomerCoupon)
                : (customerCoupons[index] = customerCoupon));
            return Object.assign(Object.assign({}, state), { coupons: customerCoupons });
        }
        case fromActions.UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS: {
            const updatedCouponCode = action.payload;
            const customerCoupons = new Array(state.coupons.length);
            state.coupons.forEach((customerCoupon, index) => customerCoupon.couponId === updatedCouponCode
                ? (customerCoupons[index] = Object.assign(Object.assign({}, customerCoupon), { notificationOn: false }))
                : (customerCoupons[index] = customerCoupon));
            return Object.assign(Object.assign({}, state), { coupons: customerCoupons });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91c2VyL3N0b3JlL3JlZHVjZXJzL2N1c3RvbWVyLWNvdXBvbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxXQUFXLE1BQU0sbUNBQW1DLENBQUM7QUFNakUsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUErQjtJQUN0RCxPQUFPLEVBQUUsRUFBRTtJQUNYLEtBQUssRUFBRSxFQUFFO0lBQ1QsVUFBVSxFQUFFLEVBQUU7Q0FDZixDQUFDO0FBQ0YsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBd0M7SUFFeEMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDOUMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO1FBRUQsS0FBSyxXQUFXLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUNsRCxNQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3BELE1BQU0sZUFBZSxHQUFHLElBQUksS0FBSyxDQUFpQixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hFLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBOEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUM5RCxjQUFjLENBQUMsUUFBUSxLQUFLLHFCQUFxQixDQUFDLFFBQVE7Z0JBQ3hELENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxxQkFBcUIsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUM5QyxDQUFDO1lBQ0YsdUNBQVksS0FBSyxLQUFFLE9BQU8sRUFBRSxlQUFlLElBQUc7U0FDL0M7UUFFRCxLQUFLLFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ3BELE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUN6QyxNQUFNLGVBQWUsR0FBRyxJQUFJLEtBQUssQ0FBaUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQThCLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FDOUQsY0FBYyxDQUFDLFFBQVEsS0FBSyxpQkFBaUI7Z0JBQzNDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsbUNBQ2xCLGNBQWMsS0FDakIsY0FBYyxFQUFFLEtBQUssR0FDdEIsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQzlDLENBQUM7WUFDRix1Q0FBWSxLQUFLLEtBQUUsT0FBTyxFQUFFLGVBQWUsSUFBRztTQUMvQztLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jdXN0b21lci1jb3Vwb24uYWN0aW9uJztcbmltcG9ydCB7XG4gIEN1c3RvbWVyQ291cG9uLFxuICBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdCxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY3VzdG9tZXItY291cG9uLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQgPSB7XG4gIGNvdXBvbnM6IFtdLFxuICBzb3J0czogW10sXG4gIHBhZ2luYXRpb246IHt9LFxufTtcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9ucy5DdXN0b21lckNvdXBvbkFjdGlvblxuKTogQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9ucy5MT0FEX0NVU1RPTUVSX0NPVVBPTlNfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbnMuU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9TVUNDRVNTOiB7XG4gICAgICBjb25zdCB1cGRhdGVkQ3VzdG9tZXJDb3Vwb24gPSBhY3Rpb24ucGF5bG9hZC5jb3Vwb247XG4gICAgICBjb25zdCBjdXN0b21lckNvdXBvbnMgPSBuZXcgQXJyYXk8Q3VzdG9tZXJDb3Vwb24+KHN0YXRlLmNvdXBvbnMubGVuZ3RoKTtcbiAgICAgIHN0YXRlLmNvdXBvbnMuZm9yRWFjaCgoY3VzdG9tZXJDb3Vwb246IEN1c3RvbWVyQ291cG9uLCBpbmRleCkgPT5cbiAgICAgICAgY3VzdG9tZXJDb3Vwb24uY291cG9uSWQgPT09IHVwZGF0ZWRDdXN0b21lckNvdXBvbi5jb3Vwb25JZFxuICAgICAgICAgID8gKGN1c3RvbWVyQ291cG9uc1tpbmRleF0gPSB1cGRhdGVkQ3VzdG9tZXJDb3Vwb24pXG4gICAgICAgICAgOiAoY3VzdG9tZXJDb3Vwb25zW2luZGV4XSA9IGN1c3RvbWVyQ291cG9uKVxuICAgICAgKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb3Vwb25zOiBjdXN0b21lckNvdXBvbnMgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb25zLlVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9TVUNDRVNTOiB7XG4gICAgICBjb25zdCB1cGRhdGVkQ291cG9uQ29kZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgY3VzdG9tZXJDb3Vwb25zID0gbmV3IEFycmF5PEN1c3RvbWVyQ291cG9uPihzdGF0ZS5jb3Vwb25zLmxlbmd0aCk7XG4gICAgICBzdGF0ZS5jb3Vwb25zLmZvckVhY2goKGN1c3RvbWVyQ291cG9uOiBDdXN0b21lckNvdXBvbiwgaW5kZXgpID0+XG4gICAgICAgIGN1c3RvbWVyQ291cG9uLmNvdXBvbklkID09PSB1cGRhdGVkQ291cG9uQ29kZVxuICAgICAgICAgID8gKGN1c3RvbWVyQ291cG9uc1tpbmRleF0gPSB7XG4gICAgICAgICAgICAgIC4uLmN1c3RvbWVyQ291cG9uLFxuICAgICAgICAgICAgICBub3RpZmljYXRpb25PbjogZmFsc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogKGN1c3RvbWVyQ291cG9uc1tpbmRleF0gPSBjdXN0b21lckNvdXBvbilcbiAgICAgICk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY291cG9uczogY3VzdG9tZXJDb3Vwb25zIH07XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==