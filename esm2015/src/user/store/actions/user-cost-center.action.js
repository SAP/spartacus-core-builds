import { StateUtils } from '../../../state/utils/index';
import { USER_COST_CENTERS } from '../user-state';
export const LOAD_ACTIVE_COST_CENTERS = '[User] Load Active CostCenters';
export const LOAD_ACTIVE_COST_CENTERS_FAIL = '[User] Load Active CostCenters Fail';
export const LOAD_ACTIVE_COST_CENTERS_SUCCESS = '[User] Load Active CostCenters Success';
export class LoadActiveCostCenters extends StateUtils.LoaderLoadAction {
    constructor(payload) {
        super(USER_COST_CENTERS);
        this.payload = payload;
        this.type = LOAD_ACTIVE_COST_CENTERS;
    }
}
export class LoadActiveCostCentersFail extends StateUtils.LoaderFailAction {
    constructor(payload) {
        super(USER_COST_CENTERS, payload);
        this.payload = payload;
        this.type = LOAD_ACTIVE_COST_CENTERS_FAIL;
    }
}
export class LoadActiveCostCentersSuccess extends StateUtils.LoaderSuccessAction {
    constructor(payload) {
        super(USER_COST_CENTERS);
        this.payload = payload;
        this.type = LOAD_ACTIVE_COST_CENTERS_SUCCESS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXNlci1jb3N0LWNlbnRlci5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyxnQ0FBZ0MsQ0FBQztBQUN6RSxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FDeEMscUNBQXFDLENBQUM7QUFDeEMsTUFBTSxDQUFDLE1BQU0sZ0NBQWdDLEdBQzNDLHdDQUF3QyxDQUFDO0FBRTNDLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxVQUFVLENBQUMsZ0JBQWdCO0lBRXBFLFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFEUixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsVUFBVSxDQUFDLGdCQUFnQjtJQUV4RSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURqQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyw2QkFBNkIsQ0FBQztJQUc5QyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsVUFBVSxDQUFDLG1CQUFtQjtJQUU5RSxZQUFtQixPQUFxQjtRQUN0QyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQURSLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFEL0IsU0FBSSxHQUFHLGdDQUFnQyxDQUFDO0lBR2pELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvc3RDZW50ZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmctdW5pdC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgVVNFUl9DT1NUX0NFTlRFUlMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfQUNUSVZFX0NPU1RfQ0VOVEVSUyA9ICdbVXNlcl0gTG9hZCBBY3RpdmUgQ29zdENlbnRlcnMnO1xuZXhwb3J0IGNvbnN0IExPQURfQUNUSVZFX0NPU1RfQ0VOVEVSU19GQUlMID1cbiAgJ1tVc2VyXSBMb2FkIEFjdGl2ZSBDb3N0Q2VudGVycyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0FDVElWRV9DT1NUX0NFTlRFUlNfU1VDQ0VTUyA9XG4gICdbVXNlcl0gTG9hZCBBY3RpdmUgQ29zdENlbnRlcnMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQWN0aXZlQ29zdENlbnRlcnMgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9BQ1RJVkVfQ09TVF9DRU5URVJTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoVVNFUl9DT1NUX0NFTlRFUlMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQWN0aXZlQ29zdENlbnRlcnNGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQUNUSVZFX0NPU1RfQ0VOVEVSU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9DT1NUX0NFTlRFUlMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQWN0aXZlQ29zdENlbnRlcnNTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQUNUSVZFX0NPU1RfQ0VOVEVSU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29zdENlbnRlcltdKSB7XG4gICAgc3VwZXIoVVNFUl9DT1NUX0NFTlRFUlMpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJDb3N0Q2VudGVyQWN0aW9uID1cbiAgfCBMb2FkQWN0aXZlQ29zdENlbnRlcnNcbiAgfCBMb2FkQWN0aXZlQ29zdENlbnRlcnNGYWlsXG4gIHwgTG9hZEFjdGl2ZUNvc3RDZW50ZXJzU3VjY2VzcztcbiJdfQ==