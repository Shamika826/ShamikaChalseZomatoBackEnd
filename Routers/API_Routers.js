const express =  require("express")
const RestaurantsController_File =  require("../Controllers/RestaurantController")
const LocationsController_File =  require("../Controllers/LocationController")
const MealTypesController_File =  require("../Controllers/MealTypeController")
const MenuItemsController_File =  require("../Controllers/MenuItemsController")
const UserSignUpLoginController_File =  require("../Controllers/UserSignUpLoginController")
const PaymentController_File =  require("../Controllers/PaymentController")
const router =  express.Router()

router.get(
    "/homePg_api",
    RestaurantsController_File.getHome
)

//restaurants and locations:-
router.get(
    "/restaurant_api",
     RestaurantsController_File.getRestaurantAPI
)
router.get(
    "/location_api",        //1
    LocationsController_File.getLocationAPI
)
router.get(
    "/restaurant_api-by-locid/:locid",   //2
     RestaurantsController_File.getRestaurantByLocID
)
router.get(
    "/restaurant_api-by-restaid/:restaid",   //3
     RestaurantsController_File.getRestaurantByRestaID
)
router.post(
    "/restaurant_filterData",   //3
     RestaurantsController_File.getFilterData
)



//mealTypes:-
router.get(
    "/mealTypes_api",       //7
    MealTypesController_File.getMealTypeAPI
)

//menuitems:-
router.get(
    "/menuItems_api",
    MenuItemsController_File.getMenuItemsAPI
)
router.get(
    "/menuItems_By_restaurantID_api/:restMenuId", //4
    MenuItemsController_File.getMenuItemsByRestaIdAPI
)


//user:-
router.post(
    "/userSignUp_api", //5
    UserSignUpLoginController_File.getSignUpAPI
)

router.post(
    "/userLogin_api", //5
    UserSignUpLoginController_File.getLoginAPI
)


//razorPay
router.post(
    "/razorPayOrderId", //5
    PaymentController_File.getOrderId
)

router.post(
    "/verifyPayment",
    PaymentController_File.verifyPayment
)
module.exports = router