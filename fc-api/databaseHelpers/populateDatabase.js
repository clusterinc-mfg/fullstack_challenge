require('dotenv').config()
import mongoose from 'mongoose'
import School from '../server/models/School'
import Program from'../server/models/Program'


//mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
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

  const Programs = processTSV('./databaseHelpers/Programs.json')
  const Schools = processTSV
/*
 
  processed.shift()
  


  const schools = {}
*/


const populate = async () => {
    for(let program of processed){
        let [school, course, degreeType ,delivery, thousands, hundreds, city, state] = program.split(',')
        
  
  
        city = city.slice(1)
        state=state.slice(0,state.length - 1)
        let location = `${city} ${state}`
  
        let tuition = thousands*1000+hundreds
  
        let schoolId
  
        if(!schools[school]){
          const pre_school = {name: school}
          const mSchool = new School(pre_school)
          schools[school] = mSchool._id
          await mSchool.save()
        }
          
        const pre_program = {name: course, school: schools[school], degreeType, delivery, tuition, location}
        const mProgram = new Program(pre_program)
        let savedProgram =  await mProgram.save()
        
        let schoolToUpdate = await School.findByIdAndUpdate(schools[school], {"$push": {"programs": mProgram._id}})
        
    }
}

//populate()


