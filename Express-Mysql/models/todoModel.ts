import {Table , Model , Column , DataType, PrimaryKey, AllowNull} from 'sequelize-typescript';

@Table({
   timestamps:false,
   tableName:"todos",
})
export class Todos extends Model {
   
//    @PrimaryKey
//    @Column({
//     type:DataType.STRING,
//     allowNull:false,
//    })
//    todoId!:string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
      
    })
    name !: string;
    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    description! : string;
}