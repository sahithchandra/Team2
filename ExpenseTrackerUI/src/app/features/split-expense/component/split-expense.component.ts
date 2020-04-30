import {Component, OnInit} from '@angular/core'
import { SplitExpenseService } from '../service/split-expense.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-expense-tracker',
    templateUrl: './split-expense.component.html',
    styleUrls: ['./split-expense.component.scss']
}) 
export class SplitExpenseComponent implements OnInit
{
    public categories: string[];
    public splitExpenseFormBuilder: FormGroup; 
    public spinner: boolean = true;
    public emailArray: string[] = [];
    public errorMessage: string = null;

    constructor (
        private splitExpenseService : SplitExpenseService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
       
    }

    public ngOnInit() {
        this.splitExpenseFormBuilder =  this.formBuilder.group({
            email : [null, [Validators.required]],
            category: [null, [Validators.required]],
            budgetTotal: 0
        });
        
        this.splitExpenseService.getExpenseCategory().subscribe((data: string[])=> {
            if(data) {
                this.categories = data;
                this.spinner = false;
            }
        });
        
    }

    public addEmail() {
        let email: string = this.splitExpenseFormBuilder.value.email;
        this.emailArray.push(email);
    }

    public keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
           if (!pattern.test(inputChar)) {
               event.preventDefault();
          }
    }

    public onSubmit() {
        this.errorMessage = null;
        this.spinner =true;
        let splitExpenseObj: any = {
            email: window.localStorage.getItem('email'),
            emails: this.emailArray,
            name: this.splitExpenseFormBuilder.value.category,
            budget: this.splitExpenseFormBuilder.value.budgetTotal
        }

        console.log(splitExpenseObj);
        this.splitExpenseService.splitExpenses(splitExpenseObj).subscribe((data)=>{
            if(data.indicator) {
                alert('Expenses ADDED Successfully');
                this.spinner = false;
            } else {
                alert('Expenses could not be ADDED');
                this.spinner = false;
            }
        });
    }
} 


