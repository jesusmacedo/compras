import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MShoppingList } from 'src/models/db/shopping-list.model';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    listsCollection: AngularFirestoreCollection<any>;

    constructor(private db: AngularFirestore) {
        this.listsCollection = db.collection<MShoppingList>('listas');
    }

    // * Public Methods

    /**
     * Get all available lists.
     */
    getListsCollection(): Observable<any> {
        return this.listsCollection.snapshotChanges().pipe(
            map(actions =>
                actions.map(a => {
                    const data = a.payload.doc.data() as MShoppingList;
                    const id = a.payload.doc.id;

                    return { id, ...data };
                })
            )
        );
    }

    /**
     * Save a new `MShoppingList` in `firestore`.
     * @param list to be saved.
     */
    saveNewCollection(list: MShoppingList): void {
        this.listsCollection.add(list);
    }
}
