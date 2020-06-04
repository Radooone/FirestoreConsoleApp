import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

export interface Bill {
  id?: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  // private $bills: Observable<Bill[]>;
  // private billCollection: AngularFirestoreCollection<Bill>;
  private displayName: string;
  public authState: any = null;

  constructor(
    public theme: ThemeService,
    public auth: AuthService,
    // public afs: AngularFirestore,
    // public afAuth: AngularFireAuth,
    // private billService: any
  ) {}

  ngOnInit() {

    console.log('ngOnInit......home.page.ts');
    // this.$bills = this.billService.getBills();
    // console.log('Home page ...ngOnInit');
    // this.billCollection = this.afs.collection<Bill>('bills');
    // const data = <Bill>{};
    // data.id = "dlkfjsld";
    // data.name = "testiiiiiiicek";
    // data.price = 20;
    // this.billCollection.add(data);
  }


  enableDark() {
    this.theme.enableDark();
  }

  enableLight() {
    this.theme.enableLight();
  }

}