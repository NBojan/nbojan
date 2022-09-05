const Airtable = require('airtable-node');
require("dotenv").config();

const airtable = new Airtable({ apiKey: process.env.REACT_APP_AIR_KEY })
  .base('appBayOPoBEDBQ1dS')
  .table('products')

exports.handler = async (event, context) => {
    const { id } = event.queryStringParameters;
    if(id){
        const data = await airtable.retrieve(id);
        if(data.error){
            return {
                statusCode: 404,
                body: `No matching id for ${id}`
            } 
        }
        else {
            const { id, fields: {stock, price, shipping, featured, colors, category, images, reviews, stars, name, description, company} } = data;
            const singleProduct = {id, stock, price, shipping, featured, colors, category, images, reviews, stars, name, description, company};
            return {
                statusCode: 200,
                body: JSON.stringify(singleProduct)
            } 
        }
    }
    else {
       return {
        statusCode: 400,
        body: "Please provide an ID"
       } 
    }
}