import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { HomeNotesPage } from '../home-notes/home-notes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  idUser:number;
  username:string;
  password:string;
  postResponse:any;

  constructor(public navCtrl: NavController, public user:UserServiceProvider) {

  }

  goToSignup(){
    this.navCtrl.push(SignupPage);
  }

  login(){
    this.user.loginUser(this.username, this.password).then(data=>{
      this.postResponse=data;
      this.idUser = data.userData.users_id;
      localStorage.setItem("id", this.newFunction());
      console.log(data);
      console.log("El id es:"+this.idUser);
      if(data.status == 200){
        this.navCtrl.setRoot(HomeNotesPage);
      }
      
    })
  }


    private newFunction(): string {
        return this.idUser;
    }
}
