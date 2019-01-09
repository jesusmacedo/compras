import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { auth } from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MTest } from 'src/models/db/test.model';

@Component({
    selector: 'compras-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    title = 'compras';
    // ! ONLY for testing purposes
    item: MTest;
    testModelCollection: AngularFirestoreCollection<any>;
    list: Observable<MTest[]>;

    /**
     * Create a new `AngularFirestoreCollection`.
     * @param afs collection instance.
     */
    constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
        this.testModelCollection = afs.collection<MTest>('MTest');
    }

    // * Angular Lifecycle

    /**
     * Get all previously-saved objects.
     */
    ngOnInit() {
        this.item = { name: '' };

        this.list = this.testModelCollection.snapshotChanges().pipe(
            map(actions =>
                actions.map(a => {
                    const data = a.payload.doc.data() as MTest;
                    console.log(data);
                    const id = a.payload.doc.id;
                    console.log(id);

                    return { id, ...data };
                })
            )
        );
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

        this.item = {};
    }
}
