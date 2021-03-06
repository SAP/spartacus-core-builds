import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartEntryConnector } from '../../connectors/entry/cart-entry.connector';
import { CartActions } from '../actions/index';
export declare class CartEntryEffects {
    private actions$;
    private cartEntryConnector;
    private contextChange$;
    addEntry$: Observable<CartActions.CartAddEntrySuccess | CartActions.CartAddEntryFail | CartActions.LoadCart>;
    removeEntry$: Observable<CartActions.CartRemoveEntrySuccess | CartActions.CartRemoveEntryFail | CartActions.LoadCart>;
    updateEntry$: Observable<CartActions.CartUpdateEntrySuccess | CartActions.CartUpdateEntryFail | CartActions.LoadCart>;
    constructor(actions$: Actions, cartEntryConnector: CartEntryConnector);
}
