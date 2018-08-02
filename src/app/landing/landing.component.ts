import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  riskModel = {
    Taskname: '',
    Tasktype: '',
    Peakperiodofoccurence: '',
    Durationofoccurence: '',
    Influencedprojectsegment: '',
    Avoidanceaction: '',
    Controlaction: '',
    Containmentaction: ''
  };
  userId;

  constructor() { 
   
  }
  writeUserData() {
    firebase.database().ref('Tasks/' + this.userId).update(this.riskModel, function(error) {
      if (error) {
        // The write failed...
        this.message("failed");
        alert('Did not get your inputs,please check and try again.');
      } else {
        // Data saved successfully!
        console.log("successful");
        alert('Got your inputs,please proceed.');
        location.assign('/Goal');
        
      }
    });
  }
    
    
  

  // number(){
  //   alert("this is me");
  // }
  // others(){
  //   alert("<input type='text' class='form-control' placeholder='other?'>");
  //   }
  //   yesnoCheck(){
  //     if ( document.getElementById("me").click){
  //       document.getElementById("ifYes").style.display = "block";
  //     } else {
  //       document.getElementById("ifYes").style.display = "none";
  //     }
  //   }

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


