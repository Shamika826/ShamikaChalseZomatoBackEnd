const LocationModel_File = require("../Models/LocationModel")

module.exports.getLocationAPI = async (request,response)=>{
    try{
        let a = await LocationModel_File.find()
        response.status(200).send(a)
    }
    catch(error){
        response.status(200).send("ERROR!")
    }
}

