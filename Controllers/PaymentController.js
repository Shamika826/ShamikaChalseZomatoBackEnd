const Razorpay = require('razorpay');
var crypto = require("crypto");

module.exports.getOrderId = (request, response) => {
    try {
        let { amount} =  request.body
        var instance = new Razorpay(
            {
                key_id: 'rzp_test_H7D3UtNdUhJaxp',
                key_secret: 'GPABv5UjlObmu7UAgQdRsZZa'
            }
        )

        var options = {
            amount: Number(amount*100),  // amount in the smallest currency unit ,  currency will be get converted into 100 paisa
            currency: "INR",
            receipt: "order_rcptid_11"
        };

        instance.orders.create(options, function (err, order) {
            if (err) {
                response.status(200).send("error while creating orders")
            } else {
                response.status(200).send(order)
            }

        });
    }
    catch (error) {
        response.status(200).send("ERROR!")
    }
}

module.exports.verifyPayment = (request, response) => {
    let { razorpay_order_id, razorpay_payment_id, razorpay_signature } = request.body
    let body1 = razorpay_order_id + "|" + razorpay_payment_id;

    var expectedSignature = crypto.createHmac("sha256", "GPABv5UjlObmu7UAgQdRsZZa").update(body1.toString()).digest('hex')

    console.log("signature received  = " + razorpay_signature)
    console.log("signature expected  = " + expectedSignature)

    // var msg = { signamtureIsValid: false }
    if (expectedSignature === razorpay_signature) {
        // msg = { signatureIsValid: true }
        response.status(200).send("signature matched!");
    }
}