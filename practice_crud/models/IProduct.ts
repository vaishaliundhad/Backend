export interface Iproduct{
    _id?:String;
    username:String;
    email:String;
    password:String;
    imageUrl:String;
    isAdmin:Boolean;
    createdAt?:Date;
    updatedAt?:Date;
}