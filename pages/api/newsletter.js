import db from '../../db'

export default async function (req, res) {

    if (req.method === 'PUT') {
        const params = {
            TableName: 'aulaUala-arg',
            Item: req.body
        };

        db.put(params, function (err, data) {
            if (err) {
                console.log('Error', err);
            } else {
                console.log('Success, updated.', data);
            }
        });
    }
}