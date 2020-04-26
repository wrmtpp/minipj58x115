let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let env = require('dotenv').config()
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let covids = [
    {
        id: 0,
        name: "วรเมธ",
        todo: "มีอาการไอ",
        no: "58.115",
        date: "24/02/63",
        img: "./1.jpg"
    },
    {
        id: 1,
        name: "สมหญิง",
        todo: "มีอาการเมื่อยตัว",
        no: "02.036",
        date: "28/02/63",
        img: "./2.jpg"
    },
    {
        id: 2,
        name: "สมหมาย",
        todo: "อาการดีขึ้นจากเมื่อวาน",
        no: "03.424",
        date: "10/03/63",
        img: "./3.jpg"
    },
    {
        id: 3,
        name: "ฉัตรชัย",
        todo: "หายใจไม่สะดวก",
        no: "03.234",
        date: "01/04/63",
        img: "./4.png"
    },
    {
        id: 4,
        name: "สมปอง",
        todo: "มีไข้สูง",
        no: "05.342",
        date: "14/04/63",
        img: "./5.jpg"
    },
    {
        id: 5,
        name: "ปาริชาติ",
        todo: "มีอาการเเทรกซ้อน",
        no: "02.508",
        date: "12/04/63",
        img: "./pari.jpg"
    },
    {
        id: 6,
        name: "อัครชาติ",
        todo: "มีไข้สูง และมีผื่นขึ้น",
        no: "02.556",
        date: "03/04/63",
        img: "./ak.jpg"
    },
    {
        id: 7,
        name: "สิริรักษ์",
        todo: "มีไข้สูง และไอ",
        no: "01.006",
        date: "13/04/63",
        img: "./siri.jpg"
    }


]

router.route('/covids')
    // get all covids
    .get((req, res) => res.json(covids))
    // insert a new covid
    .post((req, res) => {
        var covid = {};
        covid.id = covids.length > 0 ? covids[covids.length - 1].id + 1 : 0;
        covid.name = req.body.name
        covid.todo = req.body.todo
        covid.no = req.body.no
        covid.date = req.body.date
        covid.img = req.body.img
        covids.push(covid);
        res.json({ message: 'Covid created!' })
    })

router.route('/covids/:covid_id')
    .get((req, res) => {
        let id = req.params.covid_id
        let index = covids.findIndex(covid => (covid.id === +id))
        res.json(covids[index])                   // get a covid
    })
    .put((req, res) => {                               // Update a covid
        let id = req.params.covid_id
        let index = covids.findIndex(covid => (covid.id === +id))
        covids[index].name = req.body.name;
        covids[index].todo = req.body.todo;
        covids[index].no = req.body.no;
        covids[index].date = req.body.date;
        covids[index].img = req.body.img;
        res.json({ message: 'Covid updated!' + req.params.covid_id });
    })
    .delete((req, res) => {                   // Delete a covid
        // delete     covids[req.params.covid_id]
        let id = req.params.covid_id
        let index = covids.findIndex(covid => covid.id === +id)
        covids.splice(index, 1)
        res.json({ message: 'Covid deleted: ' + req.params.covid_id });
    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(process.env.PORT, () => console.log("Server is running"));
