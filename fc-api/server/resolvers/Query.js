import db from 'mongodb'
import Program from '../models/Program'
import School from '../models/School'

const program = async (parent, {data}, ctx, info) => {
    const {id} = data
    let program = await Program.findById(db.ObjectID(id)).populate("school")
    return program
}

const programSearch = async (parent, {data}, ctx, info) => {
    let term, filter = null
    const {offset=0, limit=10} = data
    
    if(data.term){ term = data.term }
    if(data.filter){filter = data.filter}


    let programs = []
    let count 
    if(!term){

        if(filter){
            const expression = new RegExp(filter, "gi")
            const query = {degreeLevel: expression}
            programs = await Program.find(query)
                                        .skip(offset)
                                        .limit(limit)
                                        .populate("school")
            
            count = await Program.countDocuments(query)
        }else{
            programs = await Program.find()
                                        .skip(offset)
                                        .limit(limit)
                                        .populate("school")

            count = await Program.countDocuments()
        }

        return {count, programs}
    }else{

        const expression = new RegExp(term, "gi")

        const query = {$or:[
            {"name":expression},
            {"collegeOrDeptName":expression},
            {"degreeType":expression},
            {"degreeLevel":expression},
            {"schoolName":expression},
            {"deliveryMode":expression},
        ]}

        programs = await Program.find(query).skip(offset)
        .limit(limit)
        .populate("school")

        count = await Program.countDocuments(query)

        return {count, programs}
    }
}


const Query = {
    program,
    programSearch
}

export default Query