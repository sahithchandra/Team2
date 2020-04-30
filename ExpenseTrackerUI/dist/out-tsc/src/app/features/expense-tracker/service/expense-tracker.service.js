import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
var ExpenseTrackerService = /** @class */ (function () {
    function ExpenseTrackerService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9595/ExpenseTracker';
    }
    ExpenseTrackerService.prototype.getExpenseCategory = function () {
        var categories = [
            "Entertainment", "Food", "Health", "Housing", "Insurance", "Miscellaneous", "Personal", "Saving", "Transportation", "Utilities"
        ];
        return of(categories);
        // return this.http.request('GET',`${this.baseUrl}/getCategories`);
    };
    ExpenseTrackerService.prototype.addExpenses = function (expenseDTO) {
        return of({ indicator: true, message: 1 });
        // return this.http.request('POST',`${this.baseUrl}/setBudget`, { body: expenseDTO });
    };
    ExpenseTrackerService.prototype.getUserExpenses = function () {
        var expenseList = [
            { name: "Entertainment", budget: 12 },
            { name: "Food", budget: 12 },
            { name: "Health", budget: 12 },
        ];
        return of(expenseList);
        // return this.http.request('GET', ``${this.baseUrl}/getUserExpenses`);
    };
    ExpenseTrackerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ExpenseTrackerService);
    return ExpenseTrackerService;
}());
export { ExpenseTrackerService };
//# sourceMappingURL=expense-tracker.service.js.map