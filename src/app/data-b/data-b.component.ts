import { Component, OnInit, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import { forEach } from '@angular/router/src/utils/collection';
import { createElement } from '@angular/core/src/view/element';


@Component({
  selector: 'app-data-b',
  templateUrl: './data-b.component.html',
  styleUrls: ['./data-b.component.css']
})
export class DataBComponent implements OnInit {

  userModel ={
    email: "",
    phone: "",
    password: ""
  };

  taskData = [];
  lowData = [];
  medData=[];
  userButton=[];
  g = 0;
  

  constructor() {

   }
  //  writeUserData(){
  //   firebase.database().ref('users/').push(this.userModel, function(error) {
  //     if (error) {
  //       // The write failed...
  //       this.message("failed");
  //     } else {
  //       // Data saved successfully!
  //       this.message("successful");
        
  //     }
  //   });
  // }
  calc(x){
      this.g = x;
      this.taskData = [];
      firebase.database().ref('Tasks/').on('value', (snapshot) => {
  
        //let x = snapshot.child;
        snapshot.forEach(childSnapshot=>{
          switch (this.g) {
            case 1:
            if(childSnapshot.val().Threat_level =="Medium"){
              this.taskData.push(childSnapshot.val());
            }
              break;
            case 2:
              if(childSnapshot.val().Threat_level0 == 'Low'){
                this.taskData.push(childSnapshot.val());
              }
              break;
              case 3:
              if (childSnapshot.val().Threat_level =="High") {
                this.taskData.push(childSnapshot.val());
              }
              break;
            default:
              break;
          }
        });
    
        // console.log(this.userData);
      });
  }
  

  ngOnInit() {
   
  // firebase.database().ref().on('value', (snapshot) => {

  //   //let x = snapshot.child;
  //   snapshot.forEach(snapshot=>{
  //     this.userButton.push(snapshot.key);
  //   });

  //   console.log(this.userButton);
  console.log(this.lowData);
  // });
}
}

  //    let p = (snapshot.val());
     
  //   //  for (var m in p){
  //   //    console.log(m);
  //   //  }
  //   var keys = Object.keys(p);
  //   console.log(keys);
  // for(var i=0; i < keys.length; i++){
  //   var k = keys[i];
  //   var mail = p[k].email;
  //   var fone = p[k].phone;
  //   var tr = document.createElement('tr');
  //   var td = document.createElement('td');
  //   var textnode = document.createTextNode('email : '+ mail );
  //   tr.appendChild(td).appendChild(textnode);
  //   var role = document.getElementById('detail');
  //   document.body.insertBefore(tr,role.childNodes[1]);
  //   var td2 = document.createElement('td');
  //   var textnode2 = document.createTextNode('phone : '+ fone);
  //   tr.appendChild(td2).appendChild(textnode2);
  //   var role2 = document.getElementById('detail');
  //   document.body.insertBefore(tr,role2.childNodes[1]);
  // }
    
      
      
  
      

      //console.log(p);

      // let f = (snapshot.child('phone').val());

      // console.log(f);

      

      // $('#display').('<li>'+ name + '</li>' + '<li>'+ email + '</li>')


  //console.log(p);
