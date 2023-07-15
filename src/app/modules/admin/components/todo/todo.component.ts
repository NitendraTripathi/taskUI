import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from  '@angular/forms'
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit  {
  TodoList:any;
  isEdit:boolean=false;
  userid:any= localStorage.getItem('userid');
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllTodoItelList();
  }
  myForm= new FormGroup({
    id: new FormControl('0'),
    Title: new FormControl('',Validators.required),
    Description:new FormControl('', Validators.required),
    Priority: new FormControl('',),
    DueDate: new FormControl(''),
    Status:new FormControl(''),
    Userid:new FormControl(''),


  });
  FormSubmitted()
  {
    if(this.isEdit)
    {


     this.UpdateTodoItelList(this.myForm.value);
    }
    else
    {
      this.AddTodoItelList();
    }

  }

  AddTodoItelList()
  {
debugger;
this.myForm.patchValue({
  "Userid":this.userid
})
    this.api.AddTodoItelList(this.myForm.value).subscribe(data=>{
      alert("Todo added succesfully");
      this.getAllTodoItelList();
      this.myForm.reset();
    })
  }
  UpdateTodoItelList(todo:any)
  {
    this.api.UpdateTodoItelList(todo).subscribe(data =>{
      alert("Todo is updated succesfully");
      this.getAllTodoItelList();
      this.Reset();
    })
  }
  getAllTodoItelList()
  {
    this.api.getAllTodoItelList().subscribe(data => {
      debugger;
      this.TodoList=data;
    })
  }

  DeleteTodoItelList(bookId:number)
  {
    debugger;
    if (confirm("do you wants to delete Todo"))
    {
      this.api.DeleteTodoItelList(bookId).subscribe(data=>{
        alert("Todo delete succesfullu");
        this.getAllTodoItelList();
      })
    }

  }


  OnEdit(todo:any)
  {
    debugger;
    this.isEdit=true;
    this.myForm.setValue({
      "id":todo.id,
      "Title":todo.title,
      "Description":todo.description,
      "Priority":todo.priority,
      "DueDate":todo.dueDate,
      "Status":todo.status,
      "Userid":todo.userid

    })
  }
  Reset()
  {
    this.myForm.reset();
    this.isEdit=false;
  }
}
