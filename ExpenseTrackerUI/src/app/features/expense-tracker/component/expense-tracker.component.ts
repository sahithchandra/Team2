import {Component, OnInit} from '@angular/core'
import { ExpenseTrackerService } from '../service/expense-tracker.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseTracker } from '../model/expense-tracker.model';

@Component({
    selector: 'app-expense-tracker',
    templateUrl: './expense-tracker.component.html',
    styleUrls: ['./expense-tracker.component.scss']
}) 
export class ExpenseTrackerComponent implements OnInit
{
    public categories: string [] = [];
    public expenseFormbuilder: FormGroup; 
    public spinner: boolean = true;
    public budgetArray: ExpenseTracker.ExpenseDTO[] = [];
    public budgetTotal: number = 0;
    public errorMessage: string = null;

    constructor (
        private expenseService: ExpenseTrackerService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
       
    }

    public ngOnInit() {
        this.expenseFormbuilder =  this.formBuilder.group({
            category: [null, [Validators.required]],
            budget: [null, [Validators.required]]
        });

        this.expenseService.getUserExpenses().subscribe((data: ExpenseTracker.ExpenseDTO[]) => {
            if(data) {
                this.budgetArray = data;
                this.spinner = false;
            }
        });
        
        this.expenseService.getExpenseCategory().subscribe((data: string[])=> {
            if(data) {
                this.categories = data;
                this.spinner = false;
            }
        });
        
    }

    public removeItem(index:number) {
        this.budgetArray.splice(index,1);
        this.expenseService.getUserExpenses().subscribe((data: ExpenseTracker.ExpenseDTO[]) => {
            if(data) {
                this.budgetArray = data;
                this.spinner = false;
            }
        });
    }

    public addItem() {
        this.errorMessage = null;
        let item: ExpenseTracker.ExpenseDTO ={
            name: this.expenseFormbuilder.value.category,
            budget: this.expenseFormbuilder.value.budget
        }

        let value: boolean = true;
        for(let i = 0; i < this.budgetArray.length; i ++) {

            if(item.name == this.budgetArray[i].name) {
                value = false;
            }
        }

        if(value) {
            this.budgetArray.push(item);
            this.expenseFormbuilder.reset();
        } else {
            this.errorMessage = 'You already have a budget for this category.'
        }

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
        let budgetObj: any = {
            email: window.localStorage.getItem('email'),
            categories: this.budgetArray
        }

        console.log(budgetObj);
        this.expenseService.addExpenses(budgetObj).subscribe((data)=>{
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


