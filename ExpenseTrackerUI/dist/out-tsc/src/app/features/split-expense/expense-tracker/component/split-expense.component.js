import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ExpenseTrackerService } from '../service/expense-tracker.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
var SplitExpenseComponent = /** @class */ (function () {
    function SplitExpenseComponent(expenseService, formBuilder, router) {
        this.expenseService = expenseService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.categories = [];
        this.spinner = true;
        this.budgetArray = [];
        this.budgetTotal = 0;
        this.errorMessage = null;
    }
    SplitExpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expenseFormbuilder = this.formBuilder.group({
            category: [null, [Validators.required]],
            budget: [null, [Validators.required]]
        });
        this.expenseService.getUserExpenses().subscribe(function (data) {
            if (data) {
                _this.budgetArray = data;
                _this.spinner = false;
            }
        });
        this.expenseService.getExpenseCategory().subscribe(function (data) {
            if (data) {
                _this.categories = data;
                _this.spinner = false;
            }
        });
    };
    SplitExpenseComponent.prototype.removeItem = function (index) {
        this.budgetArray.splice(index, 1);
    };
    SplitExpenseComponent.prototype.addItem = function () {
        this.errorMessage = null;
        var item = {
            name: this.expenseFormbuilder.value.category,
            budget: this.expenseFormbuilder.value.budget
        };
        var value = true;
        for (var i = 0; i < this.budgetArray.length; i++) {
            if (item.name == this.budgetArray[i].name) {
                value = false;
            }
        }
        if (value) {
            this.budgetArray.push(item);
            this.expenseFormbuilder.reset();
        }
        else {
            this.errorMessage = 'You already have a budget for this category.';
        }
    };
    SplitExpenseComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    SplitExpenseComponent.prototype.onSubmit = function () {
        var _this = this;
        this.errorMessage = null;
        this.spinner = true;
        var budgetObj = {
            email: window.localStorage.getItem('email'),
            categories: this.budgetArray
        };
        console.log(budgetObj);
        this.expenseService.addExpenses(budgetObj).subscribe(function (data) {
            if (data.indicator) {
                alert('Expenses ADDED Successfully');
                _this.spinner = false;
            }
            else {
                alert('Expenses could not be ADDED');
                _this.spinner = false;
            }
        });
    };
    SplitExpenseComponent = tslib_1.__decorate([
        Component({
            selector: 'app-expense-tracker',
            templateUrl: './expense-tracker.component.html',
            styleUrls: ['./expense-tracker.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ExpenseTrackerService,
            FormBuilder,
            Router])
    ], SplitExpenseComponent);
    return SplitExpenseComponent;
}());
export { SplitExpenseComponent };
//# sourceMappingURL=split-expense.component.js.map