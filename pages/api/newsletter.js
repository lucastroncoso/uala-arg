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
                res.status(500).send({ message: 'Error, no se enviaron los datos.' })
                return;
            } else {
                res.status(302).send({ data })
                return;
            }
        });
    }
}