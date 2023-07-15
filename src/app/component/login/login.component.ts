import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
interface IUser{
  id:number,
  fullname:string,
  username:string,
  password:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usrDtl:IUser={id:0,fullname:"",username:"",password:""};
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  faLock = faLock;
  constructor(private auth:AuthService, private routr:Router, private api:ApiService){

  }
  ngOnInit(): void {
    if(this.auth.isLoggedIn())
    {
      this.routr.navigate(['admin']);
    }
  }

  onSubmit()
  {
    debugger;
      if(this.loginForm.valid)
      {
        this.usrDtl.id=0;
        this.usrDtl.fullname="";
        this.usrDtl.username=<string> <unknown> <undefined>this.loginForm.get("email")?.value;
        this.usrDtl.password=<string> <unknown> <undefined>this.loginForm.get("password")?.value;;
        // this.auth.login(this.usrDtl).subscribe(data =>{
        //   debugger;
        //   this.routr.navigate(['admin'])
        // },
        // // (err)=>{
        // //   alert(err.message);
        // // }
        // );
        this.api.Loginuser(this.usrDtl).subscribe(
          (data)=> {
            debugger;
            if(data != null)
            {
            localStorage.setItem('userid', data.id);
            this.routr.navigate(['admin'])
            }
            else
            {
              alert("Either user name or password is wrong");
            }
        },
        (err)=>{
          alert("Unable to login")
        });
      }
  }
}
