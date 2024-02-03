const Airtable = require('airtable-node');
require("dotenv").config();
 
const airtable = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE })
  .base('appS9I5vk3LgeuBdc')
  .table('projects');

  exports.handler = async (event, context) => {
    const { id } = event.queryStringParameters;

    if(id){
        const project = await airtable.retrieve(id);
        if(project.error){
            return {
                statusCode: 404,
                body: JSON.stringify(`No item with this '${id}' id.`)
            }
        }
        else {
            const { id, fields: { url, gitUrl, images, name, descr } } = project;
            const singleProject = { id, url, gitUrl, images, name, descr };
            return {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                statusCode: 200,
                body: JSON.stringify(singleProject)
            }
        }
    }
    else {
        return {
            statusCode: 400,
            body: JSON.stringify("Please provide an ID.")
        }
    }
}