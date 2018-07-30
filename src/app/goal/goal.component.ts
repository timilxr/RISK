import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goalModel = {
    Clientgoal: '',
    Stakeholders: '',
    Amount: '',
    Equipment: '',
    Personnel: ''
  };
  userId;
//   constructor() { 
//     firebase.database().ref('goals/').on('value', function(snapshot) {
//       console.log(snapshot.val());
// });
//   }

  writeUserData2(Clientgoal,Stakeholders,Amount,Equipment,Personnel) {
    firebase.database().ref('Tasks/'+ this.userId).update(this.goalModel, function(error) {
      if (error) {
        // The write failed...
        console.log("failed");
      } else {
        // Data saved successfully!
        console.log("successful");
      }
    });
  }


  ngOnInit() {
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
