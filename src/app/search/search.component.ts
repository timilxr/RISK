import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  riskModel = {
    Taskname: '',
    Tasktype: '',
    Peakperiodofoccurence: '',
    Durationofoccurence: '',
    Influencedprojectsegment: ''
  };
  userId;
  replyDATA=[];

  g=0;

  constructor() { }
  find(){
    this.replyDATA = [];
    firebase.database().ref('Tasks/').on('value', (snapshot) => {
      snapshot.forEach(childSnapshot=>{
          if(childSnapshot.val().Taskname == this.riskModel.Taskname){
            this.replyDATA.push(childSnapshot.val());
            this.g = 1;
            console.log(childSnapshot.val());
            console.log('hi');
          }
          else{
            location.assign('Home');
          }
      });
    });
  }

  ngOnInit() {
    firebase.database().ref('Tasks/').on('value', function(snapshot) {
      console.log(snapshot.key);
    });
    firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode,errorMessage);
      // ...
    });
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        // ...
        this.userId = firebase.auth().currentUser.uid;
        
  
      } 
    else {
        // User is signed out.
        // ...
      }
      // ...
    })
  }

}
