import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loader: any;

  constructor(public loadingController: LoadingController) {
  }

  showLoader() {
      if (this.loader) {
          this.loader.present();
      } else {
          this.loader = this.loadingController.create({
              message: 'Loading',
          }).then(() => {
              this.loader.present();
          });
      }
  }

  hideLoader() {
      this.loader.dismiss();
      this.loader = null;
  }
}
