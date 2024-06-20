import { Post } from "../posts/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_no: number;

    @Column()
    user_id: string;

    @Column()
    password: string;

    @OneToMany(() =>Post, (post) => post.user)
    posts: Post[];
}