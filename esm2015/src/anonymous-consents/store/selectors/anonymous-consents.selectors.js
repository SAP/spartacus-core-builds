import { createSelector } from '@ngrx/store';
import { getAnonymousConsentState } from './feature.selector';
const ɵ0 = (state) => state.consents;
export const getAnonymousConsents = createSelector(getAnonymousConsentState, ɵ0);
export const getAnonymousConsentByTemplateCode = (templateCode) => createSelector(getAnonymousConsents, (consents) => consents.find((consent) => consent.templateCode === templateCode));
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvc2VsZWN0b3JzL2Fub255bW91cy1jb25zZW50cy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFHL0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7V0FLakIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRO0FBSHRFLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUc3QixjQUFjLENBQUMsd0JBQXdCLEtBQTRCLENBQUM7QUFFeEUsTUFBTSxDQUFDLE1BQU0saUNBQWlDLEdBQUcsQ0FDL0MsWUFBb0IsRUFDNEMsRUFBRSxDQUNsRSxjQUFjLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQyxDQUNsRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cyB9IGZyb20gJy4uL2Fub255bW91cy1jb25zZW50cy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRBbm9ueW1vdXNDb25zZW50U3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0QW5vbnltb3VzQ29uc2VudHM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aEFub255bW91c0NvbnNlbnRzLFxuICBBbm9ueW1vdXNDb25zZW50W11cbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRBbm9ueW1vdXNDb25zZW50U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuY29uc2VudHMpO1xuXG5leHBvcnQgY29uc3QgZ2V0QW5vbnltb3VzQ29uc2VudEJ5VGVtcGxhdGVDb2RlID0gKFxuICB0ZW1wbGF0ZUNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cywgQW5vbnltb3VzQ29uc2VudD4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoZ2V0QW5vbnltb3VzQ29uc2VudHMsIChjb25zZW50cykgPT5cbiAgICBjb25zZW50cy5maW5kKChjb25zZW50KSA9PiBjb25zZW50LnRlbXBsYXRlQ29kZSA9PT0gdGVtcGxhdGVDb2RlKVxuICApO1xuIl19