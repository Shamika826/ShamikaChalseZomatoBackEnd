//27th video of mentor session
const RestaurantModel_File = require("../Models/RestaurantModel")

module.exports.getHome = (request, response) => {
    try {
        response.status(200).send("home page api of ")
    }
    catch (error) {
        response.status(200).send("ERROR!")
    }
}


module.exports.getRestaurantAPI = async (request, response) => {
    try {
        let a = await RestaurantModel_File.find()
        response.status(200).send(a)
    }
    catch (error) {
        response.status(200).send("ERROR!")
    }
}
module.exports.getRestaurantByLocID = async (request, response) => {
    try {
        let locationID = request.params
        console.log(locationID.locid)

        let locId = locationID.locid
        let a = await RestaurantModel_File.find({ location_id: locId })
        response.status(200).send(a)
    }
    catch (error) {
        response.status(200).send("ERROR!")
    }

}
/*
location_id --> mongodb location id from  Restaurants collection in mongodb
locationID -->location id which use entered
so location_id must be equal to locationId so we use {location_id:locationID}
*/

module.exports.getRestaurantByRestaID = async (request, response) => {
    try {
        let restaurantID = request.params
        console.log(restaurantID.restaid)

        let restId = restaurantID.restaid
        let a = await RestaurantModel_File.findOne({ _id: restId })
        response.status(200).send(a)
    }
    catch (error) {
        response.status(200).send("ERROR!")
    }

}

module.exports.getFilterData = async (request, response) => {

    // let filter = {}
    // console.log(filter)
    // filter["name"] = "shamika" //if we want to direct add a key-value pair to an object we do this
    // console.log(filter)

    try {
        let { locID, mealID, cuisineID, sortPrice, highCost, lowCost } = request.body
        let filter = {} //empty object 

        if (locID !== undefined) filter["location_id"] = locID;
        if (mealID !== undefined) filter["mealtype_id"] = mealID;
        if (cuisineID !== undefined) filter["cuisine_id"] = { $in: cuisineID }; //$in in mongoDB will check in cuisineID consiredring cuisineID as an an array 

        if (sortPrice == undefined) sortPrice = 1; //$in in mongoDB will check in cuisineID consiredring cuisineID as an an array 
        console.log(sortPrice)

        if (highCost !== undefined && lowCost !== undefined) filter["min_price"] = { $gte: lowCost, $lte: highCost }; //$in in mongoDB will check in cuisineID consiredring cuisineID as an an array 

        // let result1 = await RestaurantModel_File.find(filter).sort(
        let result1 = await RestaurantModel_File.find(filter,
            {
                name: 1,
                city: 1,
                locality: 1,
                min_price: 1,
                cuisine: 1,
                image:1
            }
        ).sort(
            {
                min_price: sortPrice
            }
        )

        response.status(200).send(result1)

    }
    catch (error) {
        response.status(200).send("ERROR!")
    }



    //sort =  1 --> low to high 
    //sort = -1 --> high to low 
    //this is the common behaviour which comes under the sort

}

/*
Going to send the above data from body section of postman
body section will have:-
{
    "locID" : 5 or 1
}


$in in mongoDB will check in cuisineID consiredring cuisineID as an an array 
But why we are doing this , that's becaz when we select checkboxes on filter's 
cuisine section those selected checkboxes will be passed as a collection of
selected checkbox index.
eg:-
cuisine:-
North Indian --> check box selected of this
South Indian --> check box selected of this
Chinise
Fast Food --> check box selected of this
Street Food

since 3 checkbox are selected so now selected checkbox have collection of 3 index
So,when we use checkbox we always pass array to server
to pass array we use a special type of opertor


Sort:-
we have sort operation in filter section
where if we clicked on "low to high" then low t high price see sort hona chahiye
and to sort it we have a special function called sort.
{
    "sortPrice" : 1
}
sort in the body can be 1 or -1


Cost For Two:-
Here we have highCost and lowCost , now what does it mean?
lowcost will be 0
and high cost will be 500

ye isliye hai becaz like for eg when we search to buy a laptop we have
options like under 20k to 30k , under 50k to 1lac
simillarly here we have options in cost for two filter's section, like from 0 to 500
i.e low to high cost.
for this logic we need to range numbers how can we do that?
using range operators:-
we have $lte = less than or equal too value 
and we have $hte = more than or equal too value 



rather than writing this big code:-
   let result = await RestaurantModel_File.find(filter)
    response.status(200).send(result)
    console.log("filter before = ",filter)
    console.log("locID before = ",locID)

    if (locID == undefined) {
        let result = await RestaurantModel_File.find(filter)
        response.status(200).send(result)
        console.log("filter before = ",filter)
        console.log("locID before = ",locID)
    } else {
        console.log("locID after = ", locID)
        filter["location_id"] = locID
        console.log("filter after = ", filter)
        let result1 = await RestaurantModel_File.find(filter)
        response.status(200).send(result1)
    }


the bellow code works:-
    let { locID, mealID, cuisineID } = request.body
    let filter = {} //empty object 

    if (locID !== undefined) filter["location_id"] = locID;

    let result1 = await RestaurantModel_File.find(filter)
    response.status(200).send(result1)
*/