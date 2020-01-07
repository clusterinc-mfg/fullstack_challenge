require('dotenv').config()
import mongoose from 'mongoose'
import School from '../server/models/School'
import Program from'../server/models/Program'


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on("open", ()=>{
    console.log('connected')
})
mongoose.connection.on('close', ()=>{
    console.log('shutting it down')
})

const fs = require('fs')

const processJSON = fileName => {
    let x = fs.readFileSync(fileName)
    return JSON.parse(x)
  };

const schools = processJSON('./databaseHelpers/Schools.json')
  


const populate = async (schools) => {
    for(let s of schools){
        s.totalEnrollment = parseInt(s.totalEnrollment)

        let costPerUnit = s.costPerUnit
        if(costPerUnit.includes("-")){
            costPerUnit = costPerUnit.split("-")
                                     .map(el => parseInt(el))
        }else{
            costPerUnit = [costPerUnit]
        }
        s.costPerUnit = costPerUnit
        let newSchool = new School(s)
        await newSchool.save()
    }
}

populate(schools)




