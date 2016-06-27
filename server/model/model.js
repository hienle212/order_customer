// require mongoose
var mongoose = require('mongoose');
// create the schema
var customerModel = new mongoose.Schema({
	name : {type: String, required:true, minlength:4, maxlength:45 },
	_orders: [{type: mongoose.Schema.Types.ObjectId, ref:'Order'}]
}, {timestamps:true});

var orderModel = new mongoose.Schema({
	name : {type: String},
	product : {type: String, required:true, minlength:4, maxlength:45 },
	quantity : {type: Number},
	_customers: {type: mongoose.Schema.Types.ObjectId, ref:'Customer'}
}, {timestamps:true});


mongoose.model('Customer', customerModel)
mongoose.model('Order', orderModel)

