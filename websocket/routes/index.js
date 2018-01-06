//https://blog.miguelgrinberg.com/post/easy-web-scraping-with-nodejs
/* 2018 Jan 06 Saturday KLSE Screener Web Scraping */

var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var model = require('../models'); 
var Sequelize = require('sequelize'); 
var url = require('url');
var fs=require('fs');

	
fs.writeFileSync('output.txt','/* Stocks Alert */',function(err){
  if(err)
    console.error(err);

});

/* GET home page. */
router.get('/index', function(req, res, next) {
  //main();
});

//function main(callback){


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

	var context = {};
	var promises=[];

	codes.forEach(function(key) {
		console.log(key);
	  	var link = 'https://www.klsescreener.com/v2/stocks/view/' + key.code;


	  	//console.log(link);
	    request(link, function(err, resp, body) {
	    	if (err) return console.log(err);
		        $ = cheerio.load(body);
		        //console.log(body);
		        $('h2#price').each(function(err,data) {
		        	console.log("--->"+key.name+", Current Price:"+$(this).text());
		        	var priceDiff = $('span#priceDiff').text();
		        	priceDiff  =priceDiff.split(" ");
		        	var priceDiff_new = priceDiff[0];
		        	var percentage_new = priceDiff[1];
		        	percentage_new=percentage_new.replace(/[()]/g,'');
		        	console.log("pricediff:"+priceDiff_new);
		        	console.log("percentage:"+percentage_new);
		        	
		        	context.name = key.name;
		        	context.code = key.code;
		        	context.priceDiff_new = priceDiff_new;
		        	context.percentage_new = percentage_new;
		        
		         	percentage_new =percentage_new.split("%")[0];
		         	percentage_new = parseFloat(percentage_new);
		         	console.log("--percentage_new:"+percentage_new);


		         	//if condition, then only write to output.....RESULT!!! whether to buy stock or not~~!!!
		        	if(percentage_new<0)
						promises.push(_writeIntoFile(context));
					
		        });
	    	});

	});


/*	Promise.all(promises)
	.then(function () {
		callback(null,"");
	})
	.catch(function (err) {
		callback(err);
	});*/



/*context.name = "1";
context.code = "2";
context.priceDiff_new = "3";
context.percentage_new = "4";
array.push(context);
console.log(context);
*/
	function _writeIntoFile(context) {
		return new Promise(function (success, reject) {
			var content = "\n"+JSON.stringify(context);
			fs.appendFileSync('output.txt',content,function(err,data){
			  	if(err) return reject(err);
			   	success(context);
			});
		});
	}





/*var link2 = 'http://www.malaysiastock.biz/Listed-Companies.aspx?type=C&value=CONSTRUCTION';
var url_components = url.parse(link2, true);
var stock_category = url_components.query.value.toLowerCase();
stock_category = stock_category.charAt(0).toUpperCase() + stock_category.slice(1);
console.log("category:"+stock_category);

    request(link2, function(err, resp, body) {
	  // $ = cheerio.load('<table id="bm_left" class="1234"><tr><td class="bm_left"><h3><a href="/market/listed-companies/list-of-companies/plc-profile.html?securityCode=5250">7-ELEVEN MALAYSIA HOLDINGS BERHAD</a></h3></td></tr></table>');
	   $ = cheerio.load(body);
		        $('#companyInfo h3 a[href*=securityCode]').each(function(err,data) {
		        	
		        	var $this = $(this);
					var get_url =$this.attr('href');
					var url_components = url.parse(get_url, true);
					var stock_code = url_components.query.securityCode;
					var stock_name =$this.text().split(" ")[0];

					//get company name
					var link3 = 'http://www.malaysiastock.biz/Corporate-Infomation.aspx?securityCode='+stock_code;
					request(link3, function(err, resp, body) {
						$ = cheerio.load(body);
 						$corparateName = $('.sideControl label[id*=lbCorporateName]');
 						 	var $this = $(this);
 						 	//console.log("1:"+$corparateName.text());
 						 	var stock_fullname=$corparateName.text();
 							console.log(stock_code+" "+stock_name+" "+stock_fullname); //remove after spaces eg: YTL (4677)  -> YTL



 							//check whether code exist first
 							//insert into db
					});
				
					
		        	
		        });
    	});
*/
module.exports = router;
