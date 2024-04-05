"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
var typeorm_1 = require("typeorm");
var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid') //gives unique id
        ,
        __metadata("design:type", String)
    ], UserProfile.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], UserProfile.prototype, "firstName", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], UserProfile.prototype, "lastName", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], UserProfile.prototype, "age", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], UserProfile.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)(),
        __metadata("design:type", Date)
    ], UserProfile.prototype, "deleteDate", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], UserProfile.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], UserProfile.prototype, "updatedAt", void 0);
    UserProfile = __decorate([
        (0, typeorm_1.Entity)() //define as table
    ], UserProfile);
    return UserProfile;
}());
exports.UserProfile = UserProfile;
// import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// @Entity()
// export class UserProfile {
//     @PrimaryGeneratedColumn('uuid')
//     id: string
//     @Column()
//     username: string
//     @Column()
//     password: string
//     @DeleteDateColumn()
//     deleteDate: Date
//     @CreateDateColumn()
//     createdAt: Date
//     @UpdateDateColumn()
//     updatedAt: Date
// }
//# sourceMappingURL=UserProfile.js.map