const MealType_File = require("../Models/MealTypeModel")

module.exports.getMealTypeAPI = async (request,response)=>{
    try{
        let a = await MealType_File.find()
        response.status(200).send(a)
    }
    catch(error){
        response.status(200).send("ERROR!")
    }
}