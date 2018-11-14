import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { HTTP } from '@ionic-native/http';

/*
  Generated class for the NotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotesProvider {
  dataFromServe:any;
  ip:string;
  id: number;
  cont:number;
  notes:[];

  constructor(public http: HttpClient) {
    console.log('Hello NotesProvider Provider');
    this.ip='http://localhost:8080/NoteC-Servers';
  }

  addNote(idUser:string, title:string, content: string){
    let datos = {users_id: idUser, notes_title: title, notes_content: content, tipo:"add"}
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.post(`${this.ip}/Notes`,JSON.stringify(datos),options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }
  readNote(idUser: string){
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.get(`${this.ip}/Notes?users_id=${idUser}`,options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
            //this.navCtrl.setRoot(HomePage);
          });
     });
  }

  readNoteDetail(){
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.get(`${this.ip}/NoteDetail?notes_id=${this.id}`,options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
            //this.navCtrl.setRoot(HomePage);
          });
     });
  }

  deleteNote(idUser:string){
    let datos = {users_id: idUser, notes_id: this.id, tipo:"delete"}
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.post(`${this.ip}/Notes`, JSON.stringify(datos), options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  updateNote( title:string, content: string){
    console.log("El id para el update es:"+this.id);
    let datos = {notes_id: this.id, notes_title: title, notes_content: content, tipo:"update"}
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.post(`${this.ip}/Notes`,JSON.stringify(datos),options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  addId(id:number){
    this.id = id;
  }
  /*addNote(idUser:number, ti,co: string){
    return new Promise((res,rej)=>{
      this.http.post(`${this.ip}/agregar`,
      {user_id:idUser, notes_title:ti, notes_content:co}, {})
      .then(data => {
        if(data.status==200){ 
          console.log("Nota agregada");
        }
      })
      .catch(error => {
        rej(error.error);
      });
    })
  }

  readNote(idUser:number){
    return new Promise((res,rej)=>{
      this.http.get(`${this.ip}/buscarNota/${idUser}`,{}, {})
      .then(data => {
        if(data.status==200){ 
          console.log("notas leidas");
        }
      })
      .catch(error => {
        rej(error.error);
      });
    })
  }

  deleteNote(idUser, idNote:number){
    return new Promise((res,rej)=>{
      this.http.delete(`${this.ip}/borrar`,
      {user_id:idUser, notes_id:idNote}, {})
      .then(data => {
        if(data.status==200){ 
          console.log("Nota borrada");
        }
      })
      .catch(error => {
        rej(error.error);
      });
    })
  }

  updateNote(ti,co:string, idUser, idNote:number){
    return new Promise((res,rej)=>{
      this.http.put(`${this.ip}/modificar`,
      {notes_title:ti, notes_content:co, user_id:idUser, notes_id:idNote}, {})
      .then(data => {
        if(data.status==200){ 
          console.log("Nota actualizada");
        }
      })
      .catch(error => {
        rej(error.error);
      });
    })
  }*/

  

}
