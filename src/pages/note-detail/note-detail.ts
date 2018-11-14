import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesProvider } from '../../providers/notes/notes';
import { HomeNotesPage } from '../home-notes/home-notes';

/**
 * Generated class for the NoteDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-note-detail',
  templateUrl: 'note-detail.html',
})
export class NoteDetailPage {

  putResponse:any;
  title: string;
  content: string;
  idUser: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public note:NotesProvider) {
    this.readNoteDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteDetailPage');
  }

  updateNote(){
    this.note.updateNote( this.title, this.content).then(data=>{
      this.putResponse=data;
      console.log(data);
      if(data.status == 200){
        this.navCtrl.setRoot(HomeNotesPage);
        //this.navCtrl.setRoot(HomePage);
      }
    })
  }

  readNoteDetail(){
    this.note.readNoteDetail().then(data=>{
      this.putResponse=data;
      let dataNote = data.response;
      console.log(data);
      if(data.status == 200){
        this.title = dataNote.notes_title;
        this.content = dataNote.notes_content;
        //this.navCtrl.setRoot(HomePage);
      }
    })
  }

  deleteNote(){
    this.idUser = localStorage.getItem("id");
    this.note.deleteNote(this.idUser).then(data=>{
      this.putResponse=data;
      //let dataNote = data.response;
      console.log(data);
      if(data.status == 200){
        console.log("Nota Borrada");
        this.navCtrl.setRoot(HomeNotesPage);
      }
    })
  }


}
