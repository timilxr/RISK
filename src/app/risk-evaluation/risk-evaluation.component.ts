import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-risk-evaluation',
  templateUrl: './risk-evaluation.component.html',
  styleUrls: ['./risk-evaluation.component.css']
})
export class RiskEvaluationComponent implements OnInit {

  reModel = {
    Probabilityofoccurence: '',
    Severity: '',
    // impact: parseFloat('')
  };
  recLow = {
    Threat_level:"Low",
    Risk_category0:"Business"
  }
  recMed = {
    Threat_level:"Medium",
    Risk_category1:"Technical"
  }
  recHigh = {
    Threat_level:"High",
    Risk_category2:"Project"
  }
  userId;
 
  constructor() { 
    firebase.database().ref('risk evaluation/').on('value', function(snapshot) {
      console.log(snapshot.val());
    });
  }

  writeUserData() {
    const newMoel = {
      Probabilityofoccurence: parseFloat(this.reModel.Probabilityofoccurence),
      Severity: parseFloat(this.reModel.Severity),
      impact: parseFloat(this.reModel.Probabilityofoccurence) *  parseFloat(this.reModel.Severity)
    }
    if (newMoel.impact >= 0.4 && newMoel.impact <= 3) {
      firebase.database().ref('Tasks/'+ this.userId).update(this.recLow, function(error) {
        if (error) {
          console.log("failed");
          alert('Did not get your inputs,please check and try again.');
        } else {
          console.log("successful");
          alert('Got your inputs,Thank you.');
        location.assign('/data');
        }
      });
    } else if(newMoel.impact >= 3 && newMoel.impact <= 6){
      firebase.database().ref('Tasks/'+ this.userId).update(this.recMed, function(error) {
        if (error) {
          console.log("failed");
          alert('Did not get your inputs,please check and try again.');
        } else {
          console.log("successful");
          alert('Got your inputs,Thank you.');
        location.assign('/data');
        }
      });
    } else if(newMoel.impact >= 6 && newMoel.impact <= 8){
      firebase.database().ref('Tasks/'+ this.userId).update(this.recHigh, function(error) {
        if (error) {
          console.log("failed");
          alert('Did not get your inputs,please check and try again.');
        } else {
          console.log("successful");
          alert('Got your inputs,Thank you.');
        location.assign('/data');
        }
      });
    }
    
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
