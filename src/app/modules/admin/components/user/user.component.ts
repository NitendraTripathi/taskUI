import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from  '@angular/forms'
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit  {
  userList:any;
  isEdit:boolean=false;
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllUser();
  }
  myForm= new FormGroup({
    id: new FormControl('0'),
    fullname: new FormControl('',Validators.required),
    username:new FormControl('', Validators.required),
    password: new FormControl('',),


  });
  FormSubmitted()
  {
    if(this.isEdit)
    {
      var bookid= this.myForm.get("id")?.value;

     this.UpDateBook(this.myForm.value);
    }
    else
    {
      this.AddUser();
    }

  }

  AddUser()
  {
debugger;
    this.api.AddUser(this.myForm.value).subscribe(data=>{
      alert("User added succesfully");
      this.getAllUser();
      this.myForm.reset();
    })
  }
  getAllUser()
  {
    this.api.getAllUser().subscribe(data => {
      this.userList=data;
    })
  }

  DeleteBook(bookId:number)
  {
    debugger;
    if (confirm("do you wants to delete user?"))
    {
      this.api.DeleteUser(bookId).subscribe(data=>{
        alert("user delete succesfullu");
        this.getAllUser();
      })
    }

  }

  UpDateBook(user:any)
  {
    this.api.UpdateUser(user).subscribe(data =>{
      alert("User is updated succesfully");
      this.getAllUser();
      this.Reset();
    })
  }
  OnEdit(user:any)
  {
    this.isEdit=true;
    this.myForm.setValue({
      "id":user.id,
      "fullname":user.fullname,
      "username":user.username,
      "password":user.password

    })
  }
  Reset()
  {
    this.myForm.reset();
    this.isEdit=false;
  }
}
