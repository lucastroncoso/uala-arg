import db from '../../db'

export default async function (req, res) {

    if (req.method === 'PUT') {
        const params = {
            TableName: 'aulaUala-arg',
            Item: req.body,
            ReturnValues: 'ALL_NEW',
        };

        db.put(params, function (err, data) {
            if (err) {
                console.log('Error', err);
                return false;
            } else {
                if (data) {
                    console.log('data', data);
                    return true;
                }
            }

            const params2 = {
                TableName: 'aulaUala-arg',
                Key:{
                    "Email": req.body.Email
                }
            };
            
            db.get(params2, function(err, data) {
                if (err) {
                    console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
                }
            });
        });

        
    }
}