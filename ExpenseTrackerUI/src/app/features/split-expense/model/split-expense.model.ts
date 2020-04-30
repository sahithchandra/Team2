export module SplitExpenseModule {
    export interface SplitExpenseDTO {
        userEmail:string;
        emailArray: string[];
        category:string;
        budget:number;
    }
}