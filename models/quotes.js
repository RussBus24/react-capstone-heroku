var mongoose = require('mongoose');


var quoteSchema = new mongoose.Schema({
       quote: String
    });
    
var Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;