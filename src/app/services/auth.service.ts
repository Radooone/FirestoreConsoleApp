import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController } from '@ionic/angular';




@Injectable({
  // A singleton service is a service for which only one instance exists in an app.
  // There are two ways to make a service a singleton in Angular:
  // Declare root for the value of the @Injectable() providedIn property
  // Include the service in the AppModule or in a module that is only imported by the AppModule
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public loadingController: LoadingController
  ) {
  }

  async firebaseSignUp(email: string, password: string, nickname: string) {
    try {
      console.log('Firabase create user starting ...');
      const createUser = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      if (nickname) {
        const updateUser = await createUser.user.updateProfile({
          displayName: nickname,
          // photoURL: 'http://www.sme.sk'
        });
      }
      // const signInUsser = await this.afAuth.auth.ac
    } catch (error) {
      console.log(error);

    }
  }

  getFirebaseProvider() {
    return this.afAuth;
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
