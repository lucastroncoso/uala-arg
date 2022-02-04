import db from '../../db'

export default async function (req, res) {

    if (req.method === 'PUT') {
        const params = {
            TableName: 'aulaUalaForm-arg',
            Item: req.body
        };

        db.put(params, function (err, data) {
            if (err) {
                console.log('Error', err);
                return res.status(err.statusCode).send({ message: 'Error, no se enviaron los datos.' });
            } else {
                return res.status(302).send({ data });
            }
        });
    }
}