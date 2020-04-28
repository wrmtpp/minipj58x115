let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let env = require('dotenv').config()
let app = express();
app.use(cors());

app.use('/api', bodyParser.json(), router);   
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let covids = [
        {
            "id": 12,
            "name": "วรเมธ",
            "todo": "ไม่มีอาการ",
            "no": "58.115",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-7.fna.fbcdn.net/v/t31.0-8/24273571_2081133312120839_4866147031283403529_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_eui2=AeGSGBbTjsa-FMo_O3scYKSjcpAgUHsDT0VykCBQewNPRS6AYsiMhLL5HlAOVEPgwjJ3eERA4cc2iYi7wznIXLxd&_nc_ohc=5sKOdkwsO6YAX8PLxFd&_nc_ht=scontent.fbkk5-7.fna&oh=d0a434db95b03229634ddfcb3fef94d4&oe=5ECA27D7"
        },
        {
            "id": 14,
            "name": "สุรภาอร",
            "todo": "ไม่มีอาการ",
            "no": "01.111",
            "date": "26/04/63",
            "img": "https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/91875682_3070856882959473_9074742468783636480_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeHT45fSsepxnWLUJn6l8XtwQrw76kdL4_RCvDvqR0vj9Kdg0Yy0UNAtXH3hSBA1y2RSvZx2MJxNUMPlg_XhMyi5&_nc_ohc=6ahWCDz7MdoAX9XYL_b&_nc_ht=scontent.fbkk5-4.fna&oh=3ac60eeab741a6b8788a8bf39f97481d&oe=5ECA9CA7"
        },
        {
            "id": 15,
            "name": "กิตติกานต์",
            "todo": "ไม่มีอาการ",
            "no": "01.222",
            "date": "26/04/63",
            "img": "https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/60624189_2165092006878919_3523251828567310336_n.jpg?_nc_cat=102&_nc_sid=174925&_nc_eui2=AeGipeYLhvwK7A1_r7Q1TfN0WCncZjRoIlNYKdxmNGgiU8zFdra_KCedF5jcChoWvxKSMBS2i2QvzLZuNoGLxvNQ&_nc_ohc=eFmCLqdELwIAX8FZDwo&_nc_ht=scontent.fbkk5-6.fna&oh=3d8028670e8b47f54032f6fbf1bf251f&oe=5EC8BBF4"
        },
        {
            "id": 16,
            "name": "ชลดา",
            "todo": "ไม่มีอาการ",
            "no": "02.330",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-7.fna.fbcdn.net/v/t31.0-8/26850308_1578898035510201_7583907221065530994_o.jpg?_nc_cat=108&_nc_sid=ad2b24&_nc_eui2=AeGger1Ra3mcp67veCLRfZ6oQy61WnZYqnJDLrVadliqcuzmgovkZkJMXONbOcKFsVgZWVtMdNltVO6YdEW7kaRm&_nc_ohc=kWWE2jaoHwUAX_rVrp4&_nc_ht=scontent.fbkk5-7.fna&oh=6de04ad2c0ba2eef70ba25e69008d33a&oe=5EC8ABEA"
        },
        {
            "id": 17,
            "name": "ปฏิวัติ",
            "todo": "คลุ้มคลั่งใส่พยาบาล",
            "no": "58.062",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.0-9/20663840_325799471212895_384663846827869462_n.jpg?_nc_cat=106&_nc_sid=174925&_nc_eui2=AeHXmwLVR7Jr-toKR0LKQ9Mzz7HT9c-9Dt_PsdP1z70O3_oltyN-GWXO9fbFOan091ibQTU7bGY9CI_GgBIutAD2&_nc_ohc=gOY-x0T0ZW8AX8Q6CIc&_nc_ht=scontent.fbkk5-8.fna&oh=5e3526ead94286778a7a2a3c40e27d54&oe=5EC8E4A4"
        },
        {
            "id": 18,
            "name": "อัครชัย",
            "todo": "สะลึมสะลือ",
            "no": "58.110",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/42256269_1942016255893209_7914813342781276160_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_eui2=AeFdUh2ZhoYSjUFlTN2kFhXfzENf8kBMq73MQ1_yQEyrvcsX-9Jr2qTYX0M3SEDXo4z6BFl--dL6zAnevoz6SKkv&_nc_ohc=xpHL3hDkcDYAX_ZKmlg&_nc_ht=scontent.fbkk5-6.fna&oh=1e77e2d0903ce6124ef571b71ccfb85a&oe=5ECC2C67"
        },
        {
            "id": 19,
            "name": "นภัทร",
            "todo": "ทานอาหารไม่ได้(บวช)",
            "no": "58.007",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/75233776_3072178506190334_5582749987722231808_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_eui2=AeGOj2kNb19qTFwsPadPayZvLP_zN_uVpNws__M3-5Wk3PvWC06ZtUpn5T4TVYjBTNwo2PsgIIdM-eVjcRq8fdB8&_nc_ohc=naHOZ796KVsAX8EHVeO&_nc_ht=scontent.fbkk5-7.fna&oh=806c5ed9707df6258a0cdc940a52b424&oe=5EC9B998"
        },
        {
            "id": 21,
            "name": "รัฐศักดิ์",
            "todo": "มีไข้นิดหน่อย",
            "no": "58.053",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/45079417_2123204557724715_4924071277766901760_n.jpg?_nc_cat=110&_nc_sid=ad2b24&_nc_eui2=AeHd8_3jbnJceRsI4U7PYLq33cMndQXvvnfdwyd1Be--d0aJPs3Jw3dYMT7y9ZTnWBUk5MH9wS8BeUKGfFaS3HFf&_nc_ohc=YrGtCmwgw5MAX_aI4kg&_nc_ht=scontent.fbkk5-4.fna&oh=ecb4b1439f359613a0c3a3c6adeafe3b&oe=5EC9B9CB"
        },
        {
            "id": 22,
            "name": "ภูมินทร์",
            "todo": "มีน้ำมูก",
            "no": "58.102",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/70617299_2381769458577656_2519527514909442048_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeFJVkZ8HvWEDXYTzLGBdePHymBYLp_329bKYFgun_fb1j2KQElW6x47ItFdmeeoPG6AkcFSTIINHIjJ3UAF7BH1&_nc_ohc=j7OhTSVznRAAX9KuISF&_nc_ht=scontent.fbkk5-6.fna&oh=19a511968148708e075b1b5716915e41&oe=5ECAB46D"
        },
        {
            "id": 23,
            "name": "คณาพงษ์",
            "todo": "มีไข้",
            "no": "58.013",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/27067780_1986352988056341_6873647723829134208_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeGmsc-O_BJmoSAddhROq6FgdG95pjTh7bh0b3mmNOHtuFfaQyYkLAquF0G8w5WUZDN0i2HcfamMi6J4wLi5ZaMd&_nc_ohc=0necJia-s7MAX_VmUZn&_nc_ht=scontent.fbkk5-4.fna&oh=796bf42cb3cef14a20824e4fe39b5640&oe=5ECA4A3B"
        },
        {
            "id": 24,
            "name": "ธีรวุธ",
            "todo": "มีไข้",
            "no": "58.012",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/69168870_2371102676511624_3103166390220095488_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeGg0SaCEl4RMadgrBGAqKOfadqpKBBaD2xp2qkoEFoPbBEPkq0nxORy02vo7SiA2UsglM0JzE21ExtCAhA5JF7F&_nc_ohc=J1rHiOkd1jAAX9i-DEO&_nc_ht=scontent.fbkk5-3.fna&oh=dec3934e744bb283c55f77784f25e701&oe=5ECB61E9"
        },
        {
            "id": 25,
            "name": "พิสิฏฐ์",
            "todo": "มีไข้",
            "no": "58.085",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/13912706_1159513054120219_5837677591160993492_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_eui2=AeEsodv_L-nY9RP7NLAtlD9IQeFfhtLSKSRB4V-G0tIpJODBslpIO7PCpYCDYpurBz5QagiN4EjfVjC4Mot_mhpg&_nc_ohc=IZ-u4cbDKoMAX-5W8dj&_nc_ht=scontent.fbkk5-7.fna&oh=030c699b19f36bef2e7f0afa8dbeff88&oe=5EC9C43D"
        },
        {
            "id": 26,
            "name": "ฉัดนัย",
            "todo": "มีไข้",
            "no": "58.124",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/42044269_1995260383866061_8350547365622448128_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_eui2=AeHawQdFIYh-UsM-bYTACqs7X0IGrRsASK5fQgatGwBIrvf7l3uT9z1ICUkzgA69Qc0cGiAx0nccDqJlW4uwb72S&_nc_ohc=J1XpXH-vsGEAX_I-eax&_nc_ht=scontent.fbkk5-5.fna&oh=084f188bcb7bca36eefca6ece2d73319&oe=5ECB8ACE"
        },
        {
            "id": 27,
            "name": "ณัฐดนัย",
            "todo": "มีไข้",
            "no": "58.071",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/70391483_2938338206180297_8177709871517401088_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeFhiIsdQQaMTsqQ-AvqJQcSbtjm3h8zcJpu2ObeHzNwmgmRkMggxwInWolZk_eO_38ll_85_weTzRZohoZwipSE&_nc_ohc=4a-EOdr1yvcAX9aIBrx&_nc_ht=scontent.fbkk5-4.fna&oh=c878c9dd9ab844af6fe8f216cbf3b5e1&oe=5ECAABE7"
        },
        {
            "id": 28,
            "name": "ณภัทร",
            "todo": "มีไข้",
            "no": "58.114",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/72348933_2542522055794129_8295775958388965376_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeGw6F09m8Koxi3k_fFQM98LGwyqaGmZAagbDKpoaZkBqAp2vEvNmpHeJUvoAhPgnbwXmokwv4EN4tZPRKll7SA2&_nc_ohc=zrWUUNz98nAAX_7Zn5o&_nc_ht=scontent.fbkk5-3.fna&oh=4d044ad78ed3fcf40f00ffefcf40ea2e&oe=5EC88F88"
        },
        {
            "id": 29,
            "name": "ธงชัย",
            "todo": "มีไข้",
            "no": "58.086",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/68656690_2182116705251075_5885182648195743744_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_eui2=AeFuxqUqxQsxpxwEPNwAL5nhORVQNkN-Mj85FVA2Q34yP9PMZdrpmcuC-52JcyayRPHmxMzWQLtXawAGk7iQsjmk&_nc_ohc=u1WhxgrP0dMAX829BR3&_nc_ht=scontent.fbkk5-7.fna&oh=0f7c743b85baa960cc4879b7f9a937e5&oe=5ECC56C9"
        },
        {
            "id": 30,
            "name": " กิตติคุณ",
            "todo": "มีไข้",
            "no": "58.117",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.0-9/42408254_2065335836851944_6127313568401457152_o.jpg?_nc_cat=106&_nc_sid=174925&_nc_eui2=AeHZAlw2euaZHvXtYs8cX8zSG4chEXm-2xYbhyEReb7bFgwxPAD_o-nNosUPgNT59KQdYhQR0tcNq4pDS29ka6sv&_nc_ohc=h-mLwqBRjf0AX-dFP6u&_nc_ht=scontent.fbkk5-8.fna&oh=cd582c2f65f9edbaf610951818cf3ab9&oe=5ECBBA52"
        },
        {
            "id": 32,
            "name": "ปิติพงษ์",
            "todo": "มีน้ำมูก",
            "no": "58.033",
            "date": "24/04/63",
            "img": "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.0-9/74480500_2604899256215016_4584834733296320512_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeFjgLuh_nSHnwDF4XOoJLr3mydNYxSMOV2bJ01jFIw5XVJlGVpH5GrYN72UxrJ5zguFLXtjjKFtUZbKT6t3Aj-M&_nc_ohc=DSl5BW-3kmgAX-wpNyq&_nc_ht=scontent.fbkk5-1.fna&oh=882cf3318f063386fd2d0624d0fff5e4&oe=5EC9F36D"
        }
    ]
    

router.route('/covids')
    .get((req, res) => res.json(covids))
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
        res.json(covids[index])                   
    })
    .put((req, res) => {      
                        
        let id = req.params.covids_id
        let index = covids.findIndex(covid => (covid.id === +id))
        covids[index].name = req.body.name;
        covids[index].todo = req.body.todo;
        covids[index].no = req.body.no;
        covids[index].date = req.body.date;
        covids[index].img = req.body.img;          
        res.json({ message: 'Covid updated!' + req.params.covid_id });
    })
    .delete((req, res) => {                   
        let id = req.params.covid_id
        let index = covids.findIndex(covid => covid.id === +id)
        covids.splice(index, 1)
        res.json({ message: 'Covid deleted: ' + req.params.covid_id });
    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(process.env.PORT ,() => console.log("Server is running"));
