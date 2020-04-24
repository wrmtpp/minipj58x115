let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let covids = [
    {
        id: 0,
        name: "วรเมธ",
        todo: "ดีขึ้น",
        no: "58115",
        date: "24/02/63",
        img: "./1.jpg"
    }
    // },
    // {
    //     id: 0,
    //     name: "วรเมธ",
    //     todo: "ดีขึ้น",
    //     no: "58115",
    //     date: "24/02/63",
    //     img: "./2.jpg"
    // },
    // {
    //     id: 0,
    //     name: "วรเมธ",
    //     todo: "ดีขึ้น",
    //     no: "58115",
    //     date: "24/02/63",
    //     img: "./3.jpg"
    // },
    // {
    //     id: 0,
    //     name: "วรเมธ",
    //     todo: "ดีขึ้น",
    //     no: "58115",
    //     date: "24/02/63",
    //     img: "./4.png"
    // },
    // {
    //     id: 0,
    //     name: "วรเมธ",
    //     todo: "ดีขึ้น",
    //     no: "58115",
    //     date: "24/02/63",
    //     img: "./5.jpg"
    // }

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
app.listen(8080, () => console.log("Server is running"));