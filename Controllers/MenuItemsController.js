const MenuItems_File = require("../Models/MenuItemsModel")

module.exports.getMenuItemsAPI = async (request,response)=>{
    try{
        let a = await MenuItems_File.find()
        response.status(200).send(a)
    }
    catch(error){
        response.status(200).send("ERROR!")
    }
}
module.exports.getMenuItemsByRestaIdAPI = async (request,response)=>{
    try{
        let restMenu_id = request.params.restMenuId
        console.log(restMenu_id)
        let a = await MenuItems_File.find({restaurantId : restMenu_id })
        response.status(200).send(a)
    }
    catch(error){
        response.status(200).send("ERROR!")
    }
}


/*
Will enter the restaurantsId in the params in url and if we enter 
restaurantId of Dominose then only tjsoe id menuitems i.e pizza vale
hee visible honge.
*/