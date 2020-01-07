require('dotenv').config()
import mongoose from 'mongoose'
import School, { schoolSchema } from '../server/models/School'
import Program from'../server/models/Program'


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on("open", ()=>{
    console.log('connected')
})
mongoose.connection.on('close', ()=>{
    console.log('shutting it down')
})


const updateSchools = async () => {
    let programs = await Program.find({})
    for(let program of programs){
        let id = mongoose.Types.ObjectId(program.school)
        let school = await School.findById(id)
        school.programs.push(mongoose.Types.ObjectId(program.id))
        await school.save()
    }
mongoose.connection.close()
}

updateSchools()