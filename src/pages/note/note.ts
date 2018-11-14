import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesProvider } from '../../providers/notes/notes';
import { HomeNotesPage } from '../home-notes/home-notes';

/**
 * Generated class for the NotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {

  idUser: string;
  title: string;
  content:string;
  postResponse: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public note:NotesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
  }

  addNote(){
        this.idUser = localStorage.getItem("id");
        console.log("El id del user en add note es: "+this.idUser);
        this.note.addNote(this.idUser, this.title, this.content).then(data=>{
          this.postResponse=data;
          console.log(data);
          if(data.status == 200){
            console.log("Todo bien status 200");
            this.navCtrl.setRoot(HomeNotesPage);
            //this.navCtrl.setRoot(HomePage);
          }
        })
      }

}
