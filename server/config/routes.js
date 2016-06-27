var customer = require('../controller/customers.js')
var order = require('../controller/orders.js')

module.exports = function(app){
  app.get('/customers', customer.index );
  app.post('/customers', customer.create );
  app.delete('/customers/:id', customer.delete );

  app.post('/orders', order.create );
  app.get('/orders', order.index );
  // app.delete('/customers/:id', customer.delete );
}