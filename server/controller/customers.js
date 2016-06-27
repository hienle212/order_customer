var Customer = mongoose.model('Customer')

module.exports = (function(){
  return {
    index: function(req, res) {
      Customer.find({}).populate('_orders').exec(function(err, customer){
        console.log(customer)
        res.json(customer)
      })
    },
    create: function(req, res){
      		var customer = new Customer(req.body);
      		customer.save(function(err){
        if(err) res.json(err)
        else res.json({'status': true})		
      })
    },
    delete: function(req, res){
      Customer.remove({_id: req.params.id }, function(err, customer){
        if(err) res.json(err)
        else res.json({'status': true})
      })
    }
  }
})()
