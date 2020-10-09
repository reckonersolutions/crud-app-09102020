import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData;
  userForm: FormGroup;
  editUserForm: FormGroup;
  showEditUserForm = false;
  editFormId;

  //variable to status of request;
  userCreated = false;
  userEdited = false;
  userDeleted = false;
  userDeletedId;

  constructor(private userDataService: UserdataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.userDataService.getUserData().subscribe((data)=> {
      console.log('Data', data);
      this.userData = data;

    });
    
    //this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      name:[],
      username: [],
      email:[]
    });
  }

  createUser(event, userform) {
    const userData = userform.value;

    this.userDataService.createUserData(userData).subscribe((data) => {
      console.log('User Data', userData);
      this.userCreated = true;
      setTimeout(() => {
        this.userCreated = false;
      },2000);
    });
  }

  editUser(event, data) {
    this.showEditUserForm = true;
    this.editFormId = data.Id;
    this.editUserForm = this.fb.group({
      id: [data.id],
      name: [data.name],
      username: [data.username],
      email: [data.email]
    });
  }

  editUserData(event, userform){
    const userData = userform.value;
    this.userDataService.editUser(userData).subscribe((data) => {
      console.log('user edited', data);
      this.userEdited = true;
      setTimeout(() => {
        this.userEdited = false;
        this.showEditUserForm = false;
      },2000);
    });
  }

  deleteUser(event, userData){
    this.userDataService.deleteUser(userData).subscribe((data) => {
      console.log('user deleted', data);
      this.userDeletedId = userData.id;
      this.userDeleted = true;
      setTimeout(() => {
        this.userDeleted = false;
      },2000)
    });
  }


}