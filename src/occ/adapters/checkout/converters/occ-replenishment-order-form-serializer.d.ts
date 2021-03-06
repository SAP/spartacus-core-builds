import { ScheduleReplenishmentForm } from '../../../../model/replenishment-order.model';
import { Converter } from '../../../../util/converter.service';
import { Occ } from '../../../occ-models/occ.models';
export declare class OccReplenishmentOrderFormSerializer implements Converter<Occ.ScheduleReplenishmentForm, ScheduleReplenishmentForm> {
    convert(source: Occ.ScheduleReplenishmentForm, target?: ScheduleReplenishmentForm): ScheduleReplenishmentForm;
    /**
     * Adds the current timestamp (including timezone offset) to a date string in the format YYYY-mm-dd
     * @Example
     * Converts 2021-10-15 to 2021-10-15T15:38:05-05:00
     */
    private convertDate;
}
