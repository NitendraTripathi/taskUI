import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseurl:string="http://localhost:64315/api/";
  constructor(private http: HttpClient) { }
   ///////User/////////////////////////////////////////
  Loginuser(user:any):Observable<any>
  {
    return this.http.post(this.baseurl+"User/LoginUser",user)
  }

  AddUser(user:any) :Observable<any>
  {
    return this.http.post(this.baseurl+"User/AddUser",user);
  }
  UpdateUser(user:any) :Observable<any>
  {
    return this.http.put(this.baseurl+"User/UpdateUser",user);
  }

  DeleteUser(userid:any) :Observable<any>
  {
    return this.http.delete(this.baseurl+"User/DeleteUser/"+userid);
  }
  getAllUser() :Observable<any>
  {
    debugger;
    return this.http.get(this.baseurl+"User/GetAllUsers");
  }
  GetUserByid(id:any) :Observable<any>
  {
    return this.http.get(this.baseurl+"User/GetUserByid/"+id);
  }
/////// End User/////////////////////////////////////////
/////To Do List?////////////////////////////////////////

AddTodoItelList(todo:any) :Observable<any>
{
  return this.http.post(this.baseurl+"ToDoListItem/AddToDoItemList",todo);
}
UpdateTodoItelList(todo:any) :Observable<any>
{
  return this.http.put(this.baseurl+"ToDoListItem/UpdateToDoListItem",todo);
}

DeleteTodoItelList(id:any) :Observable<any>
{
  return this.http.delete(this.baseurl+"ToDoListItem/DeleteToDoListItem/"+id);
}
getAllTodoItelList() :Observable<any>
{
  debugger;
  return this.http.get(this.baseurl+"ToDoListItem/GetAllToDoListItems");
}
GetTodoItelList(id:any) :Observable<any>
{
  return this.http.get(this.baseurl+"ToDoListItem/GetToDoListById/"+id);
}

GetTodoItelListpending(id:any) :Observable<any>
{
  return this.http.get(this.baseurl+"ToDoListItem/GetToDoListByPending/"+id);
}
GetTodoItelListDone(id:any) :Observable<any>
{
  return this.http.get(this.baseurl+"ToDoListItem/GetToDoListByDone/"+id);
}


//////End///////////////////////////////////////////////

}
