var express = require('express');
var router = express.Router();

var model = require('../models');  //put path const v = require("../sad/sdsds");
var Sequelize = require('sequelize'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



//https://blog.miguelgrinberg.com/post/easy-web-scraping-with-nodejs
/* 2018 Jan 06 Saturday KLSE Screener Web Scraping */
var request = require('request');
var cheerio = require('cheerio');

codes =[{
			name:"Annjoo",
			code:6556 
		},
		{
			name:"Lionind",
			code:4235
		},
		{
			name:"SSteel",
			code:5665
		},
		{
			name:"Masteel",
			code:5098
		}];

codes.forEach(function(key) {
	console.log(key);
  	var url = 'https://www.klsescreener.com/v2/stocks/view/' + key.code;


  	//console.log(url);
    request(url, function(err, resp, body) {
    	if (err) return console.log(err);
	        $ = cheerio.load(body);
	        //console.log(body);
	        $('h2#price').each(function(day) {
	        	console.log("--->"+key.name+", Current Price:"+$(this).text());
	            $(this).find('div').each(function() {
	            	console.log("--->2");
	            	/*console.log(pool + ',' + days[day] + ',' + $(this).text().trim().replace(/\s\s+/g, ','));
	                event = $(this).text().trim().replace(/\s\s+/g, ',').split(',');
	                //if (event.length >= 2 && (event[1].match(/open swim/i) || event[1].match(/family swim/i)))
	                    console.log(pool + ',' + days[day] + ',' + event[0] + ',' + event[1]);*/
	            });
	        });
    	});

});


var url2 = 'http://www.bursamalaysia.com/market/listed-companies/list-of-companies/main-market/'；

  	
  	bm_equities_prices_table
  	//console.log(url);
    request(url, function(err, resp, body) {
	        $ = cheerio.load(body);
	        //console.log(body);

	        $('#bm_equities_prices_table .bm_left').each(function(day) {
	        	console.log("--->"+key.name+", Current Price:"+$(this).text());
	            $(this).find('div').each(function() {
	            	console.log("--->2");
	            	/*console.log(pool + ',' + days[day] + ',' + $(this).text().trim().replace(/\s\s+/g, ','));
	                event = $(this).text().trim().replace(/\s\s+/g, ',').split(',');
	                //if (event.length >= 2 && (event[1].match(/open swim/i) || event[1].match(/family swim/i)))
	                    console.log(pool + ',' + days[day] + ',' + event[0] + ',' + event[1]);*/
	            });
	        });
	        	

    	});


module.exports = router;
