const mongoose=require("mongoose");
const Chat=require("./models/chat.js")

main().then(()=>console.log("Connection Successfull"))
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');
}

let allChats=[
    { 
    from:"Tom",
    to:"jerry",
    msg:"You are my Friend",
    created_at:new Date(),
    },

    {
        from:"Rahul",
        to:"Rohit",
        msg:"Came , play cricket",
        created_at:new Date(),
    },

    {
        from:"Ruhi",
        to:"Puja",
        msg:"Give me the Notes",
        created_at:new Date(),
    },

    {
        from:"Raju",
        to:"Jaggu",
        msg:"lets, ctach the fish",
        created_at:new Date(),
    }
    

];

Chat.insertMany(allChats);

