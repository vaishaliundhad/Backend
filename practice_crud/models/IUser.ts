export interface Iuser {
    _id?:String;
    username:String;
    email:String;
    password:String;
    imageUrl:String;
    isAdmin:boolean;
    createdAt?:Date;
    updatedAt?:Date;
}