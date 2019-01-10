import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { auth } from 'firebase';
import { Observable } from 'rxjs';
import { MShoppingList } from 'src/models/db/shopping-list.model';
import { FirebaseService } from 'src/services/firebase/firebase.service';

@Component({
    selector: 'compras-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    title = 'compras';
    // ! ONLY for testing purposes
    item: MShoppingList;
    testModelCollection: AngularFirestoreCollection<any>;
    list: Observable<MShoppingList[]>;

    /**
     * Create a new `AngularFirestoreCollection`.
     * @param afs collection instance.
     */
    constructor(
        private afs: AngularFirestore,
        private afAuth: AngularFireAuth,
        private firebaseService: FirebaseService
    ) {
        this.testModelCollection = afs.collection<MShoppingList>('listas');
    }

    // * Angular Lifecycle

    /**
     * Get all previously-saved objects.
     */
    ngOnInit() {
        this.item = new MShoppingList();

        this.list = this.firebaseService.getListsCollection();
    }

    // * User Interaction

    /**
     * Use the Google auth service in order to login the user.
     */
    didPressLogin(): void {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((credential: auth.UserCredential) => {
            console.log('credentials', credential);
        });
    }

    /**
     * Save the current item into `Firestore`.
     */
    didPressSave(): void {
        this.testModelCollection.add(this.item);

        this.item = new MShoppingList();
    }
}
