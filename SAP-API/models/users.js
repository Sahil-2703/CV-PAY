const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        
                "name": {
                "type": "string",
                "required": "true",
                "description": "The name of the account holder"
                },

                "email": {
                "type": "string",
                "required": "true",
                "format": "email",
                "description": "The email address of the account holder"
                },

                "phone": {
                "type": "String",
                "required": "true",
                "description": "The phone number of the account holder"
                },

                "bank_name": {
                "type": "string",
                "required": "true",
                "description": "The name of the bank"
                },

                "ifsc": {
                "type": "string",
                "required": "true",
                "description": "The IPFS code associated with the account"
                },

                "account_number": {
                "type": "string",
                "required": "true",
                "description": "The account number"
                },
                
                "amount": {
                "type": "number",
                "required": "true",
                "description": "The amount of money in the account"
                },
                "password": {
                "type": "string",
                "required": "true",
                "description": "The password associated with the account"
                },
            
        },
    {
            timestamps: true

    });

module.exports = mongoose.model("User",userSchema);