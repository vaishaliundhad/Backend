import { Sequelize } from "sequelize-typescript";
import {Todos} from '../models/todoModel'

const connection = new Sequelize({
    dialect:"mysql",
    host:"localhost",
    username:"root",
    password:"admin@1234",
    database:"todos",
    logging:false,
    models:[Todos],

})

export default connection;