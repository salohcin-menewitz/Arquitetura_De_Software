import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Clients {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;
}