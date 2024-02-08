import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ManyToOne,  
    OneToOne, 
    JoinColumn
} from "typeorm";
import { Address } from "./address.entities";
import { Category } from "./categories.entities";

@Entity("realEstates")
export class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ default: false })
    sold: boolean;

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number | string;

    @Column()
    size: number;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @OneToOne(() => Address, (a) => a.realEstate )
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category, (c) => c.realEstate )
    category: Category;
}