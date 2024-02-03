const Airtable = require('airtable-node');
require("dotenv").config();
 
const airtable = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE })
  .base('appS9I5vk3LgeuBdc')
  .table('projects');

exports.handler = async (event, context) => {
    const data = await airtable.list({
        maxRecords: 50,
        pageSize: 50
    });

    if(data.records){
        const projects = data.records.map(project => {
            const { id, fields: {name, descr, images, url, gitUrl, featured, type} } = project;
            return { id, name, descr, images, url, gitUrl, featured, type }
        })
        return {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            statusCode: 200,
            body: JSON.stringify(projects)
        }
    }
    else {
        return {
            statusCode: 500,
            body: "There was an error."
        }
    }
}