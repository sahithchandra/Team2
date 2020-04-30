import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InviteFriendsService {

  private baseUrl = 'http://localhost:9595/ExpenseTracker';

  constructor(private http: HttpClient) { }

  public sendInvites(emailArrayObj:any) : Observable<any> {
    //return of({indicator:true, message:1});
    return this.http.request('POST', `${this.baseUrl}/sendInvites`, {body: emailArrayObj});  
  }

}