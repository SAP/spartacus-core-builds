import { createSelector } from '@ngrx/store';
import { PageType } from '../../../model/cms.model';
import { StateEntityLoaderSelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getCmsState } from './feature.selectors';
const getPageEntitiesSelector = (state) => state.pageData.entities;
const ɵ0 = getPageEntitiesSelector;
const getIndexByType = (index, type) => {
    switch (type) {
        case PageType.CONTENT_PAGE: {
            return index.content;
        }
        case PageType.PRODUCT_PAGE: {
            return index.product;
        }
        case PageType.CATEGORY_PAGE: {
            return index.category;
        }
        case PageType.CATALOG_PAGE: {
            return index.catalog;
        }
    }
    return { entities: {} };
};
const ɵ1 = getIndexByType;
const getPageComponentTypesSelector = (page) => {
    const componentTypes = new Set();
    if (page && page.slots) {
        for (const slot of Object.keys(page.slots)) {
            for (const component of page.slots[slot].components || []) {
                componentTypes.add(component.flexType);
            }
        }
    }
    return Array.from(componentTypes);
};
const ɵ2 = getPageComponentTypesSelector;
const ɵ3 = (state) => state.page;
export const getPageState = createSelector(getCmsState, ɵ3);
const ɵ4 = (page) => page.index;
export const getPageStateIndex = createSelector(getPageState, ɵ4);
export const getPageStateIndexEntityLoaderState = (pageContext) => createSelector(getPageStateIndex, (index) => getIndexByType(index, pageContext.type));
export const getPageStateIndexLoaderState = (pageContext) => createSelector(getPageStateIndexEntityLoaderState(pageContext), (indexState) => StateEntityLoaderSelectors.entityStateSelector(indexState, pageContext.id));
export const getPageStateIndexValue = (pageContext) => createSelector(getPageStateIndexLoaderState(pageContext), (entity) => StateLoaderSelectors.loaderValueSelector(entity));
export const getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
export const getPageData = (pageContext) => createSelector(getPageEntities, getPageStateIndexValue(pageContext), (entities, indexValue) => entities[indexValue]);
export const getPageComponentTypes = (pageContext) => createSelector(getPageData(pageContext), (pageData) => getPageComponentTypesSelector(pageData));
export const getCurrentSlotSelectorFactory = (pageContext, position) => {
    return createSelector(getPageData(pageContext), (entity) => {
        if (entity) {
            return entity.slots[position] || { components: [] };
        }
    });
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9wYWdlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHcEQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixvQkFBb0IsR0FDckIsTUFBTSw0QkFBNEIsQ0FBQztBQUtwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbEQsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDOztBQUM5RSxNQUFNLGNBQWMsR0FBRyxDQUNyQixLQUFnQixFQUNoQixJQUFjLEVBQ2EsRUFBRTtJQUM3QixRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUN2QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtLQUNGO0lBQ0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUM7O0FBRUYsTUFBTSw2QkFBNkIsR0FBNkIsQ0FDOUQsSUFBVSxFQUNWLEVBQUU7SUFDRixNQUFN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bW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHsgRW50aXR5TG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgU3RhdGVFbnRpdHlMb2FkZXJTZWxlY3RvcnMsXG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RhdGUsIEluZGV4VHlwZSwgUGFnZVN0YXRlLCBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0Q21zU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3JzJztcblxuY29uc3QgZ2V0UGFnZUVudGl0aWVzU2VsZWN0b3IgPSAoc3RhdGU6IFBhZ2VTdGF0ZSkgPT4gc3RhdGUucGFnZURhdGEuZW50aXRpZXM7XG5jb25zdCBnZXRJbmRleEJ5VHlwZSA9IChcbiAgaW5kZXg6IEluZGV4VHlwZSxcbiAgdHlwZTogUGFnZVR5cGVcbik6IEVudGl0eUxvYWRlclN0YXRlPHN0cmluZz4gPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFBhZ2VUeXBlLkNPTlRFTlRfUEFHRToge1xuICAgICAgcmV0dXJuIGluZGV4LmNvbnRlbnQ7XG4gICAgfVxuICAgIGNhc2UgUGFnZVR5cGUuUFJPRFVDVF9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXgucHJvZHVjdDtcbiAgICB9XG4gICAgY2FzZSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY2F0ZWdvcnk7XG4gICAgfVxuICAgIGNhc2UgUGFnZVR5cGUuQ0FUQUxPR19QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY2F0YWxvZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgZW50aXRpZXM6IHt9IH07XG59O1xuXG5jb25zdCBnZXRQYWdlQ29tcG9uZW50VHlwZXNTZWxlY3RvcjogKHBhZ2U6IFBhZ2UpID0+IHN0cmluZ1tdID0gKFxuICBwYWdlOiBQYWdlXG4pID0+IHtcbiAgY29uc3QgY29tcG9uZW50VHlwZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgaWYgKHBhZ2UgJiYgcGFnZS5zbG90cykge1xuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBPYmplY3Qua2V5cyhwYWdlLnNsb3RzKSkge1xuICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgcGFnZS5zbG90c1tzbG90XS5jb21wb25lbnRzIHx8IFtdKSB7XG4gICAgICAgIGNvbXBvbmVudFR5cGVzLmFkZChjb21wb25lbnQuZmxleFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gQXJyYXkuZnJvbShjb21wb25lbnRUeXBlcyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIFBhZ2VTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldENtc1N0YXRlLCAoc3RhdGU6IENtc1N0YXRlKSA9PiBzdGF0ZS5wYWdlKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZUluZGV4OiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIEluZGV4VHlwZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldFBhZ2VTdGF0ZSwgKHBhZ2U6IFBhZ2VTdGF0ZSkgPT4gcGFnZS5pbmRleCk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGVJbmRleEVudGl0eUxvYWRlclN0YXRlID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBFbnRpdHlMb2FkZXJTdGF0ZTxzdHJpbmc+PiA9PlxuICBjcmVhdGVTZWxlY3RvcihnZXRQYWdlU3RhdGVJbmRleCwgKGluZGV4OiBJbmRleFR5cGUpID0+XG4gICAgZ2V0SW5kZXhCeVR5cGUoaW5kZXgsIHBhZ2VDb250ZXh0LnR5cGUpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGVJbmRleExvYWRlclN0YXRlID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBMb2FkZXJTdGF0ZTxzdHJpbmc+PiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlU3RhdGVJbmRleEVudGl0eUxvYWRlclN0YXRlKHBhZ2VDb250ZXh0KSxcbiAgICAoaW5kZXhTdGF0ZSkgPT5cbiAgICAgIFN0YXRlRW50aXR5TG9hZGVyU2VsZWN0b3JzLmVudGl0eVN0YXRlU2VsZWN0b3IoaW5kZXhTdGF0ZSwgcGFnZUNvbnRleHQuaWQpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGVJbmRleFZhbHVlID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBzdHJpbmc+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKGdldFBhZ2VTdGF0ZUluZGV4TG9hZGVyU3RhdGUocGFnZUNvbnRleHQpLCAoZW50aXR5KSA9PlxuICAgIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3I8c3RyaW5nPihlbnRpdHkpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgeyBbaWQ6IHN0cmluZ106IFBhZ2UgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldFBhZ2VTdGF0ZSwgZ2V0UGFnZUVudGl0aWVzU2VsZWN0b3IpO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZURhdGEgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIFBhZ2U+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VFbnRpdGllcyxcbiAgICBnZXRQYWdlU3RhdGVJbmRleFZhbHVlKHBhZ2VDb250ZXh0KSxcbiAgICAoZW50aXRpZXM6IHsgW2lkOiBzdHJpbmddOiBQYWdlIH0sIGluZGV4VmFsdWU6IHN0cmluZykgPT5cbiAgICAgIGVudGl0aWVzW2luZGV4VmFsdWVdXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlQ29tcG9uZW50VHlwZXMgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIHN0cmluZ1tdPiA9PlxuICBjcmVhdGVTZWxlY3RvcihnZXRQYWdlRGF0YShwYWdlQ29udGV4dCksIChwYWdlRGF0YSkgPT5cbiAgICBnZXRQYWdlQ29tcG9uZW50VHlwZXNTZWxlY3RvcihwYWdlRGF0YSlcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRTbG90U2VsZWN0b3JGYWN0b3J5ID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gIHBvc2l0aW9uOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBDb250ZW50U2xvdERhdGE+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKGdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSwgKGVudGl0eSkgPT4ge1xuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIHJldHVybiBlbnRpdHkuc2xvdHNbcG9zaXRpb25dIHx8IHsgY29tcG9uZW50czogW10gfTtcbiAgICB9XG4gIH0pO1xufTtcbiJdfQ==