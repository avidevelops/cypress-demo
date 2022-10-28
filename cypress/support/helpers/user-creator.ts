import { UserModel } from "@support/models/user";
import { DEFAULT_USER } from "@support/helpers/default-user";

export class UserGenerator {

    constructor(private user: UserModel) {     
    }

    static create(overrides: Partial<UserModel> = {}): UserGenerator {
        return new UserGenerator({
            ...overrides
        });
    }

    public firstName(firstName: string): UserGenerator {
        this.user.firstName = firstName;
        return this;
    }

    public lastName(lastName: string): UserGenerator {
        this.user.lastName = lastName;
        return this;
    }

    public email(email: string): UserGenerator {
        this.user.email = email;
        return this;
    }

    public age(age: string): UserGenerator {
        this.user.age = age;
        return this;
    }

    public salary(salary: string): UserGenerator {
        this.user.salary = salary;
        return this;
    }

    public department(department: string): UserGenerator {
        this.user.department = department;
        return this;
    }

    public get build(): UserModel {
        return {
            ...this.user
        };
    }

    public buildX(userG: UserGenerator): UserModel {
        return {
            ...userG.user
        };
    }
}