import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
//import { HTTP } from '@ionic-native/http';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  dataFromServe:any;
  ip:string;
  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
    //his.ip='http://localhost:3000';
    //this.ip='http://localhost:8100/api';
    this.ip='http://localhost:8080/NoteC-Servers'
  }
  

 /* constructor(public http: HTTP) {
    this.ip='http://192.168.1.117:3000';
  }*/

  test(num:number){
    alert(num);
  }

 
  loginUser(username:string, password:string){
    let datos = {user_username: username, user_password: password}
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.post(`${this.ip}/Login`,JSON.stringify(datos),options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  registerUser(name:string, lastName:string, username:string, password:string, email:string){
    let datos = { user_name:name,user_last_name:lastName, user_username:username, user_password:password, user_email:email}
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return new Promise(resolve => {
      this.http.post(`${this.ip}/Registro`,JSON.stringify(datos),options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  logoutUser(){
    let options = {
      headers: {
        //'Content-type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return new Promise(resolve => {
      this.http.get(`${this.ip}/Logout`,options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  /*registerUser(no : string, ap: string, us: string, co: string, em: string){
    return new Promise((res,rej)=>{
      this.http.post(`${this.ip}/user/registrar`,
      {user_name: no, user_last_name:ap, user_username: us, user_password: co, user_email:em}, {})
      .then(data => {
        if(data.status==200){ 
          console.log("Usuario registrado");
          //res(JSON.parse(data.data).sum);
        }
      })
      .catch(error => {
        rej(error.error);
      });
    })
  }

  login(us: string, co: string){
    return new Promise((res,rej)=>{
      this.http.post(`${this.ip}/user/iniciar`,
      {user_username: us, user_password: co}, {})
      .then(data => {
        if(data.status==200){ 
          console.log("Sesion iniciada");
          //res(JSON.parse(data.data).sum);
        }
      })
      .catch(error => {
        rej(error.error);
      });
    })
  }

  exit(){
    return new Promise((res,rej)=>{
      this.http.get(`${this.ip}/user/cerrar`,{}, {})
      .then(data => {
        if(data.status==200){ 
          console.log("Sesion cerrada");
          //res(JSON.parse(data.data).sum);
        }
      })
      .catch(error => {
        rej(error.error);
      });
    })
  }*/

}
