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

const programs = processJSON('./databaseHelpers/Programs.json')

const findSchool = (program) => {

    return new Promise(async (res, rej)=> {
        let schoolName = program.schoolName
        res(await School.findOne({name: schoolName}))
    })
}

let tst = async () => {

    for(let p of programs){
        let school = await findSchool(p)

        if(school){
            //create program with program.school set to school.id
            let id = mongoose.Types.ObjectId(school.id)
            p.school = id
            let newProgram = new Program(p)
            let programId = mongoose.Types.ObjectId(newProgram.id)
            await newProgram.save()
            school.programs.push(programId)
            await school.save()
        }
        
    }
    mongoose.connection.close()
}


tst()
