import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 25})
    fullnName: string;

    @Column()
    birthday: Date;

    @Column()
    isActive: boolean;
}
