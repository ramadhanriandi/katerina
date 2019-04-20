// settingan
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;

// setting database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/katerina');

var User = require('./models/user');
var Paket = require('./models/paket');
var Barang = require('./models/barang');
var Langganan = require('./models/langganan');

// konfigurasi bodyParser
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

router.get('/', function(req, res) {
	res.json({ message:"halo" });
});

/* End point barang */
router.get('/barang', function(req, res) {
	Barang.find({}).populate('seller').exec(function(err, list_barang) {
		if (err) res.send(err);
		res.json(list_barang);
	});
});

router.post('/barang', function(req, res) {
	// var seller = User.findById(req.body.sellerid);
	Paket.findById(req.body.paketid, function(err, paket) {
		if (err) res.send(err);
		User.findById(req.body.sellerid, function(err, seller) {
			if (err) res.send(err);

			var barang = new Barang();
			barang.name = req.body.name;
			barang.desc = req.body.desc;
			barang.price = req.body.price;
			barang.seller = seller;
			barang.paket = paket;
			// console.log(barang);
			barang.save(function(err) {
				if (err) {
					req.send(err);
				}

				res.json({ message:"barang berhasil dimasukan" });
			});
		});
	});
});
/* End point barang */

/*End point paket*/
router.get('/paket', function(req, res) {
	Paket.find(function(err, daftar_paket) {
		if (err) {
			req.send(err);
		}

		res.json(daftar_paket);
	});
});

router.post('/paket', function(req, res) {
	var paket = new Paket();
	paket.name = req.body.name;
	paket.save(function(err) {
		if (err) {
			req.send(err);
		}

		res.json({ message:"paket berhasil dimasukan" });
	});
});
/*End point paket*/

/*End point langganan*/
router.get('/langganan', function(req, res) {
	Langganan.find({}).populate('seller').populate('days.pagi').populate('days.siang').populate('days.malam').exec(function(err, list_langganan) {
		if (err) res.send(err);
		res.json(list_langganan);
	});
});

router.post('/langganan', function(req, res) {
	User.findById(req.body.sellerid, function(err, seller) {
		if (err) res.send(err);

		var langganan = new Langganan();
		langganan.desc = req.body.desc;
		langganan.price = req.body.price;
		langganan.seller = seller;
		langganan.save(function(err) {
			if (err) {
				req.send(err);
			}

			res.json({ message:"langganan berhasil dimasukan" });
		});
	});
});

router.post('/langganan/:idLangganan', function(req, res) {
	Langganan.findById(req.params.idLangganan, function(err, langganan) {
		if (err) res.send(err);

		day = [];
		day.pagi = [];
		day.siang = [];
		day.malam = [];
		pagi = [];
		siang = [];
		malam = [];
		Barang.findById(req.body.barangid, function(err, barang) {
			var length = langganan.days.length;
			pagi.push(barang);
			siang.push(barang);
			siang.push(barang);
			malam.push(barang);
			langganan.days[length] = day;
			langganan.days[length].pagi = pagi;
			langganan.days[length].siang = siang;
			langganan.days[length].malam = malam;
			// console.log(langganan);
			langganan.save(function(err) {
				if (err) {
					req.send(err);
				}

				res.json({ message:"days langganan berhasil dimasukan" });
			});
		});

		// res.json({ message:"langganan berhasil dimasukan" });
	});
});
/*End point langganan*/

/*End point users*/
router.get('/users', function(req, res) {
	User.find(function(err, users) {
		if (err) {
			req.send(err);
		}

		res.json(users);
	});
});

router.post('/users', function(req, res) {
	var user = new User();
	user.name = req.body.name;
	user.distance = req.body.distance;
	user.save(function(err) {
		if (err) {
			req.send(err);
		}

		res.json({ message:"user berhasil dimasukan" });
	});
});
/*End point users*/

app.use('/api', router);

app.listen(port);
console.log("port run on " + port);
