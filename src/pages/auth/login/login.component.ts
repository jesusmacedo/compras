import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Component({
    selector: 'compras-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    constructor(private firebase: AngularFireAuth, private router: Router) {}

    // * Angular Lifecycle

    ngOnInit() {}

    // * User Interaction

    /**
     * Display the auth page in order to access the Google user account.
     */
    didPressGoogle(): void {
        this.firebase.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((credentials: auth.UserCredential) => {
            console.log('credentials', credentials);
            this.router.navigate(['compras/dashboard']);
        });
    }
}
