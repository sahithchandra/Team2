import {Component, OnInit} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InviteFriendsService } from '../service/invite-friends.service';

@Component({
    selector: 'app-invite-friends',
    templateUrl: './invite-friends.component.html',
    styleUrls: ['./invite-friends.component.scss']
}) 
export class InviteFriendsComponent implements OnInit
{
    public inviteFriendsFormbuilder: FormGroup; 
    public spinner: boolean = true;
    public errorMessage: string = null;
    public email: string;
    public emailArray: string[] = [];

    constructor (
        private inviteFriendsService : InviteFriendsService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
       
    }

    public ngOnInit() {
        this.inviteFriendsFormbuilder =  this.formBuilder.group({
            emails: [null, [Validators.required]],
        });
        this.spinner = false;
    }

    public removeItem(index:number) {
        this.emailArray.splice(index,1);
    }

    public addEmail() {
        let email: string = this.inviteFriendsFormbuilder.value.emails;
        this.emailArray.push(email);
    }

    public onSubmit() {
        this.errorMessage = null;
        this.spinner =true;
        let emailArrayObj: any = {
            email: window.localStorage.getItem('email'),
            emails: this.emailArray
        }

        console.log(emailArrayObj);
        this.inviteFriendsService.sendInvites(emailArrayObj).subscribe((data)=>{
            if(data.indicator) {
                alert('Invites sent Successfully');
                this.spinner = false;
            } else {
                alert('Invites could not be sent');
                this.spinner = false;
            }
        });
    }
} 


