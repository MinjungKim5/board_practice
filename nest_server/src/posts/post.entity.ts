import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, UpdateDateColumn} from "typeorm";
import { User } from '../users/user.entity'

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    modified: Date;

    @ManyToOne(() => User, (user) => user.posts)
    user: User;
}