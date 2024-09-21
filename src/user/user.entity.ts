import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  super = 'superadmin',
  owner = 'owner',
  manager = 'manager',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  fullname: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.manager,
  })
  role: UserRole;
}
