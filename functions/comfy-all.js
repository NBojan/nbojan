const Airtable = require('airtable-node');
require("dotenv").config();

const airtable = new Airtable({ apiKey: process.env.REACT_APP_AIR_KEY })
  .base('appBayOPoBEDBQ1dS')
  .table('products')

exports.handler = async (event, context) => {
    const data = await airtable.list();
    console.log(data);
    if(data.records){
        const products = data.records.map(record => {
            const { id } = record;
            const { name, price, colors, company, description, category, shipping, featured} = record.fields;
            const image = record.fields.images[0].url;
            return {id, name, price, colors, company, description, category, shipping, featured, image}
        })
        return {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            statusCode: 200,
            body: JSON.stringify(products)
        }
    }
    else {
        return {
            statusCode: 500,
            body: "There was an error"
        }
    }
    
}