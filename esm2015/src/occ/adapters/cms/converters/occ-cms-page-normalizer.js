import { Injectable } from '@angular/core';
import { CMS_FLEX_COMPONENT_TYPE, JSP_INCLUDE_CMS_COMPONENT_TYPE, } from '../../../../cms/config/cms-config';
import * as i0 from "@angular/core";
export class OccCmsPageNormalizer {
    convert(source, target = {}) {
        this.normalizePageData(source, target);
        this.normalizePageSlotData(source, target);
        this.normalizePageComponentData(source, target);
        this.normalizeComponentData(source, target);
        return target;
    }
    normalizePageData(source, target) {
        target.page = {
            loadTime: Date.now(),
            name: source.name,
            type: source.typeCode,
            title: source.title,
            pageId: source.uid,
            template: source.template,
            slots: {},
            properties: source.properties,
            label: source.label,
        };
    }
    normalizePageSlotData(source, target) {
        if (!Array.isArray(source.contentSlots.contentSlot)) {
            source.contentSlots.contentSlot = [source.contentSlots.contentSlot];
        }
        for (const slot of source.contentSlots.contentSlot) {
            target.page.slots[slot.position] = {
                components: [],
                properties: slot.properties,
            };
        }
    }
    normalizePageComponentData(source, target) {
        for (const slot of source.contentSlots.contentSlot) {
            if (slot.components.component &&
                Array.isArray(slot.components.component)) {
                for (const component of slot.components.component) {
                    const comp = {
                        uid: component.uid,
                        typeCode: component.typeCode,
                        properties: component.properties,
                    };
                    if (component.typeCode === CMS_FLEX_COMPONENT_TYPE) {
                        comp.flexType = component.flexType;
                    }
                    else if (component.typeCode === JSP_INCLUDE_CMS_COMPONENT_TYPE) {
                        comp.flexType = component.uid;
                    }
                    else {
                        comp.flexType = component.typeCode;
                    }
                    target.page.slots[slot.position].components.push(comp);
                }
            }
        }
    }
    normalizeComponentData(source, target) {
        target.components = [];
        for (const slot of source.contentSlots.contentSlot) {
            if (slot.components.component &&
                Array.isArray(slot.components.component)) {
                for (const component of slot.components.component) {
                    // we dont put properties into component state
                    if (component.properties) {
                        component.properties = undefined;
                    }
                    target.components.push(component);
                }
            }
        }
    }
}
OccCmsPageNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccCmsPageNormalizer_Factory() { return new OccCmsPageNormalizer(); }, token: OccCmsPageNormalizer, providedIn: "root" });
OccCmsPageNormalizer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvYWRhcHRlcnMvY21zL2NvbnZlcnRlcnMvb2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLDhCQUE4QixHQUMvQixNQUFNLG1DQUFtQyxDQUFDOztBQVEzQyxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLE9BQU8sQ0FDTCxNQUFtQixFQUNuQixTQUE0QixFQUFFO1FBRTlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLGlCQUFpQixDQUFDLE1BQVcsRUFBRSxNQUF5QjtRQUM5RCxNQUFNLENBQUMsSUFBSSxHQUFHO1lBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDcEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUTtZQUNyQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixLQUFLLEVBQUUsRUFBRTtZQUNULFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtZQUM3QixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFTyxxQkFBcUIsQ0FBQyxNQUFXLEVBQUUsTUFBeUI7UUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNuRCxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckU7UUFDRCxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRztnQkFDakMsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQ1QsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFTywwQkFBMEIsQ0FDaEMsTUFBVyxFQUNYLE1BQXlCO1FBRXpCLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7WUFDbEQsSUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7Z0JBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFDeEM7Z0JBQ0EsS0FBSyxNQUFNLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtvQkFDakQsTUFBTSxJQUFJLEdBQTZCO3dCQUNyQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUc7d0JBQ2xCLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTt3QkFDNUIsVUFBVSxFQUFFLFNBQVMsQ0FBQyxVQUFVO3FCQUNqQyxDQUFDO29CQUVGLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyx1QkFBdUIsRUFBRTt3QkFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO3FCQUNwQzt5QkFBTSxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssOEJBQThCLEVBQUU7d0JBQ2hFLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztxQkFDL0I7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO3FCQUNwQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDeEQ7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVPLHNCQUFzQixDQUFDLE1BQVcsRUFBRSxNQUF5QjtRQUNuRSxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV2QixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQ2xELElBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO2dCQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQ3hDO2dCQUNBLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFnQixFQUFFO29CQUN4RCw4Q0FBOEM7b0JBQzlDLElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRTt3QkFDeEIsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7cUJBQ2xDO29CQUNELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNuQzthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7O1lBdEZGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDTVNfRkxFWF9DT01QT05FTlRfVFlQRSxcbiAgSlNQX0lOQ0xVREVfQ01TX0NPTVBPTkVOVF9UWVBFLFxufSBmcm9tICcuLi8uLi8uLi8uLi9jbXMvY29uZmlnL2Ntcy1jb25maWcnO1xuaW1wb3J0IHsgQ29udGVudFNsb3RDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL21vZGVsL2NvbnRlbnQtc2xvdC1jb21wb25lbnQtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMvbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjQ21zUGFnZU5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLkNNU1BhZ2UsIENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuQ01TUGFnZSxcbiAgICB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsID0ge31cbiAgKTogQ21zU3RydWN0dXJlTW9kZWwge1xuICAgIHRoaXMubm9ybWFsaXplUGFnZURhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHRoaXMubm9ybWFsaXplUGFnZVNsb3REYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICB0aGlzLm5vcm1hbGl6ZVBhZ2VDb21wb25lbnREYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICB0aGlzLm5vcm1hbGl6ZUNvbXBvbmVudERhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVBhZ2VEYXRhKHNvdXJjZTogYW55LCB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsKTogdm9pZCB7XG4gICAgdGFyZ2V0LnBhZ2UgPSB7XG4gICAgICBsb2FkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgIG5hbWU6IHNvdXJjZS5uYW1lLFxuICAgICAgdHlwZTogc291cmNlLnR5cGVDb2RlLFxuICAgICAgdGl0bGU6IHNvdXJjZS50aXRsZSxcbiAgICAgIHBhZ2VJZDogc291cmNlLnVpZCxcbiAgICAgIHRlbXBsYXRlOiBzb3VyY2UudGVtcGxhdGUsXG4gICAgICBzbG90czoge30sXG4gICAgICBwcm9wZXJ0aWVzOiBzb3VyY2UucHJvcGVydGllcyxcbiAgICAgIGxhYmVsOiBzb3VyY2UubGFiZWwsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplUGFnZVNsb3REYXRhKHNvdXJjZTogYW55LCB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsKTogdm9pZCB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNvdXJjZS5jb250ZW50U2xvdHMuY29udGVudFNsb3QpKSB7XG4gICAgICBzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90ID0gW3NvdXJjZS5jb250ZW50U2xvdHMuY29udGVudFNsb3RdO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgdGFyZ2V0LnBhZ2Uuc2xvdHNbc2xvdC5wb3NpdGlvbl0gPSB7XG4gICAgICAgIGNvbXBvbmVudHM6IFtdLFxuICAgICAgICBwcm9wZXJ0aWVzOiBzbG90LnByb3BlcnRpZXMsXG4gICAgICB9IGFzIENvbnRlbnRTbG90RGF0YTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVBhZ2VDb21wb25lbnREYXRhKFxuICAgIHNvdXJjZTogYW55LFxuICAgIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzbG90IG9mIHNvdXJjZS5jb250ZW50U2xvdHMuY29udGVudFNsb3QpIHtcbiAgICAgIGlmIChcbiAgICAgICAgc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnN0IGNvbXA6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSA9IHtcbiAgICAgICAgICAgIHVpZDogY29tcG9uZW50LnVpZCxcbiAgICAgICAgICAgIHR5cGVDb2RlOiBjb21wb25lbnQudHlwZUNvZGUsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBjb21wb25lbnQucHJvcGVydGllcyxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC50eXBlQ29kZSA9PT0gQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUpIHtcbiAgICAgICAgICAgIGNvbXAuZmxleFR5cGUgPSBjb21wb25lbnQuZmxleFR5cGU7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQudHlwZUNvZGUgPT09IEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSkge1xuICAgICAgICAgICAgY29tcC5mbGV4VHlwZSA9IGNvbXBvbmVudC51aWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXAuZmxleFR5cGUgPSBjb21wb25lbnQudHlwZUNvZGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldC5wYWdlLnNsb3RzW3Nsb3QucG9zaXRpb25dLmNvbXBvbmVudHMucHVzaChjb21wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplQ29tcG9uZW50RGF0YShzb3VyY2U6IGFueSwgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbCk6IHZvaWQge1xuICAgIHRhcmdldC5jb21wb25lbnRzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgaWYgKFxuICAgICAgICBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50ICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkoc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudClcbiAgICAgICkge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50IGFzIGFueSkge1xuICAgICAgICAgIC8vIHdlIGRvbnQgcHV0IHByb3BlcnRpZXMgaW50byBjb21wb25lbnQgc3RhdGVcbiAgICAgICAgICBpZiAoY29tcG9uZW50LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXQuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==