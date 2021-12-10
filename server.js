const express= require("express")
const app=express()
require ('dotenv').config()
const person=require('./config/modules/personSchema')
const connectedDB=require('./config/connectDB')
connectedDB() 

const addPerson=async()=>{
const hamza=new person({name:"hamza",age:27,favoritFood:['3ejja','hout']})
await
hamza.save()
}
// addPerson()
const addPerson1=async()=>{
    const hamza=new person({name:"be3be3i",age:50,favoritFood:['manedrouch']})
    await
    hamza.save()
    }
// addPerson1()

    const addPerson2=async()=>{
        const hamza=new person({name:"maher",age:29,favoritFood:['rouz']})
        await
        hamza.save()
        }
// addPerson2()

const updatPerson=async()=>{
    await person.findByIdAndUpdate("61b28d6540ed27000eccf021",{$set:{name:"taha"}})
}
// updatPerson()

const deletPerson=async()=>{
    await person.findByIdAndRemove("61b28fd210598db9055aa799")
}
// deletPerson()

const findPerson=async()=>{
    await person.findOne({name:'maher'})
}
//findPerson()
const port= process.env.port || 4000
app.listen(port,(err)=>err? console.log(err):console.log(`app listing on port ${port}`))
