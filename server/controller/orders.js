var Order = mongoose.model('Order')
module.exports = (function(){
  return {
    index: function(req, res) {
      Order.find({}).populate('_customers').exec(function(err, order){
        console.log(order)
        res.json(order)
      })
    },
    create: function(req, res){
          var order = new Order(req.body);
          console.log("###########################",req.body)
            order.save(function(err){
                if(err) res.json(err)
                      // if(err) res.json(err)
                else 
                  res.json({'status' : true})
                    })
                  // })
                }
        }
})()
