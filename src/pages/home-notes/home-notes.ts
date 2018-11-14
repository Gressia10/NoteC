import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';
import { NotesProvider } from '../../providers/notes/notes';
import { NotePage } from '../note/note';
import { NoteDetailPage } from '../note-detail/note-detail';


/**
 * Generated class for the HomeNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-notes',
  templateUrl: 'home-notes.html',
})
export class HomeNotesPage {

  notes = [];

  idUser: string;
  idNote: string;
  title: string;
  content:string;
  cont:number;

  getResponse:any;
  postResponse:any;

  

  constructor(public navCtrl: NavController, public user:UserServiceProvider, public note:NotesProvider) {
    console.log("Las notas son: ");
    this.readNote();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeNotesPage');
  }

  logout(){
    this.user.logoutUser().then(data=>{
      this.getResponse=data;
      console.log(data);
      if(data == 200){
        this.navCtrl.setRoot(HomePage);
      }
    })
  }

  /*addNote(){

    this.note.addNote(this.idUser, this.title, this.content).then(data=>{
      this.postResponse=data;
      console.log(data);
      if(data.status == 200){
        //this.navCtrl.setRoot(HomePage);
      }
    })
  }*/

  readNote(){
    this.idUser = localStorage.getItem("id");
    console.log("El id es: "+this.idUser)

    this.note.readNote(this.idUser).then(data=>{
      let noteData = data.response;
      this.getResponse=data;
      console.log(data);
      if(data.status == 200){
        for(this.cont = 0; this.cont <noteData.length; this.cont++ ){
          this.notes.push(noteData[this.cont]);
          console.log(noteData[this.cont].notes_title);
        }
        //this.navCtrl.setRoot(HomePage);
      }
    })
  }

  /*updateNote(){
    this.note.updateNote(this.idNote, this.title, this.content).then(data=>{
      this.getResponse=data;
      console.log(data);
      if(data.status == 200){
        //this.navCtrl.setRoot(HomePage);
      }
    })
  }*/

  goToNoteUpdate(NoteID: number){
    this.navCtrl.push(NoteDetailPage);
    console.log("El id de la nota es: "+NoteID);
    this.note.addId(NoteID);
    //this.noteDetail.addNote(NoteID);
  }

  goToNote(){
    this.navCtrl.push(NotePage);
  }

  /*initializeItems(){
    for(this.cont = 0; this.cont < this.notes.length; this.cont++){
      this.notes[this.cont]= this.notes[this.cont]
    }
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.notes.notes_title = this.notes.notes_title.filter((notes) => {
        return (notes.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }*/
  
}
