import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ThemeService } from '../services/theme.service';

export interface Bill {
  id?: string,
  name: string,
  price:  number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  // private $bills: Observable<Bill[]>;
  private billCollection: AngularFirestoreCollection<Bill>;
  private displayName: string;
  public authState: any = null
  
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public theme: ThemeService,
    // private billService: any
  ) {
   
    /* this.billCollection.snapshotChanges().subscribe(
      (data) => (console.log(data,'data ......'))
    ) */
    this.afAuth.authState.subscribe(auth =>{
      console.log('authState has changed',auth);
      this.authState = auth;
    });
    this.afAuth.authState

  } 

  ngOnInit() {
    // this.$bills = this.billService.getBills();
   
    // console.log('Home page ...ngOnInit');
    // this.billCollection = this.afs.collection<Bill>('bills');
    // const data = <Bill>{};
    // data.id = "dlkfjsld";
    // data.name = "testiiiiiiicek";
    // data.price = 20;
    // this.billCollection.add(data);
  }

  async signUp() {
    try {
      const createUser = await this.afAuth.auth.createUserWithEmailAndPassword('radovanlauci.k@gmail.com','testicek');
      const updateUser = await createUser.user.updateProfile({
        displayName:"Nejton Allgreeen",
        photoURL:"https://avataaars.io/?avatarStyle=topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'"
      });
      // const signInUsser = await this.afAuth.auth.ac
    } catch (error) {
      console.log(error);
    }
  }

   




  enableDark() {
    this.theme.enableDark();
  }
 
  enableLight() {
    this.theme.enableLight();
  }

}