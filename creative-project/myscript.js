
var Submission= function (name,url){
	this.name = name;
	this.rating = 0;
	this.url = url;
}
var a = new Submission("Leonardo DiCaprio", "temp");
var b = new Submission("Scissors", "yolo");

var AllSubmissions = [a,b];

	addSub = function(){
	var name = document.getElementById("name-box").value;
	var url = document.getElementById("url-box").value;
	var sub = new Submission(name,url);
	AllSubmissions[AllSubmissions.length] = sub;
	for(i=0; i<AllSubmissions.length; i++)
		{
			console.log(AllSubmissions[i].name);
		}

}

function switchIt(x)
{
	if(x == 1)
	{
	var temp = document.getElementById("slide-title");
	temp.innerHTML = "Snow";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "57";
	temp1.style.backgroundColor = "yellow";
	}
	if(x == 2)
	{
	var temp = document.getElementById("slide-title");
	temp.innerHTML = "Leonardo DiCaprio";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "23";
	temp1.style.backgroundColor = "red";
	}
	if(x == 3)
	{
	var temp = document.getElementById("slide-title");
	temp.innerHTML = "Waffles";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "99";
	temp1.style.backgroundColor = "green";
	}
	if(x == 0)
{
	var minNumber = 1; // The minimum number you want
   	var maxNumber = 20; // The maximum number you want
   	var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
	if(randomnumber == 1)
	{
	var temp = document.getElementById("slide-title");
	temp.innerHTML = "Pizza";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "100";
	temp1.style.backgroundColor = "green";
	
	document.getElementById("imageOne").src="http://nebula.wsimg.com/6f2db64af78a9f2a338985524acc7669?AccessKeyId=0E852AD7261B4A32D299&disposition=0&alloworigin=1";
	}
	if(randomnumber == 2)
	{
	var temp = document.getElementById("slide-title");
	temp.innerHTML = "Parks and Rec";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "87";
	temp1.style.backgroundColor = "green";

	document.getElementById("imageOne").src="http://bustedhalo.com/wp/wp-content/uploads/2015/02/2013_0808_Parks_and_Rec_Show_KeyArt_1920x1080_0.jpg";

	}
	if(randomnumber == 3)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "Scissors";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "62";
	temp1.style.backgroundColor = "yellow";

document.getElementById("imageOne").src="http://ecx.images-amazon.com/images/I/71AgdoNhdML._SL1500_.jpg";


	}
	if(randomnumber == 4)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "Waffles";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "99";
	temp1.style.backgroundColor = "green";
document.getElementById("imageOne").src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg";

	}
	if(randomnumber == 5)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "Legend of Zelda";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "94";
	temp1.style.backgroundColor = "green";
document.getElementById("imageOne").src="http://cdn1.sciencefiction.com/wp-content/uploads/2015/02/legend-of-zelda.jpg";

	}
	if(randomnumber == 6)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "Nickelback";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "1";
	temp1.style.backgroundColor = "red";
document.getElementById("imageOne").src="https://i.ytimg.com/vi/g9uAtMmqT2A/maxresdefault.jpg";

	}
	if(randomnumber == 7)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "Pop Tarts";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "73";
	temp1.style.backgroundColor = "green";
document.getElementById("imageOne").src="http://tucsonkettlebell.com/wp-content/uploads/2013/09/pop-tarts.jpg";

	}
	if(randomnumber == 8)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "The Queen of England";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "32";
	temp1.style.backgroundColor = "red";

document.getElementById("imageOne").src="https://aotearoaawiderperspective.files.wordpress.com/2013/12/queen.png?w=660&h=330&crop=1";
	}
	if(randomnumber == 9)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "Krispy Kreme";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "85";
	temp1.style.backgroundColor = "green";
document.getElementById("imageOne").src="http://www.coolberryyogurt.com/images/donutlg.jpeg";

	}
	if(randomnumber == 10)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "Raisin Bran";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "33";
	temp1.style.backgroundColor = "yellow";

document.getElementById("imageOne").src="http://ecx.images-amazon.com/images/I/91XqbY2tLIL._SL1500_.jpg";
	}
	if(randomnumber == 11)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "Vegetables";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "12";
	temp1.style.backgroundColor = "red";
document.getElementById("imageOne").src="http://preachersinstitute.com/wp-content/uploads/2014/12/Vegetables.jpg";

	}
	if(randomnumber == 12)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "Laser Tag";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "91";
	temp1.style.backgroundColor = "green";

document.getElementById("imageOne").src="http://ncworkcompjournal.gelmanmedia.com/wp-content/uploads/sites/8/2015/09/laser-tag.jpg";
	}
	if(randomnumber == 13)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "America";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "100";
	temp1.style.backgroundColor = "green";

document.getElementById("imageOne").src="http://www.hardlyserious.com/wp-content/uploads/2015/08/grunge_bless_america___precut_png_stock_by_somadjinn-d727784.png";
	}
	if(randomnumber == 14)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "Rocks";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "48";
	temp1.style.backgroundColor = "yellow";

document.getElementById("imageOne").src="http://www.visityuma.com/art/quartz.jpg";
	}
	if(randomnumber == 15)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "WalMart";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "58";
	temp1.style.backgroundColor = "yellow";
document.getElementById("imageOne").src="http://s3.amazonaws.com/liberalamerica/wp-content/uploads/2015/09/Walmart-Shrinkage.jpg.jpg";

	}
	if(randomnumber == 16)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "Nicolas Cage";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "0";
	temp1.style.backgroundColor = "red";
document.getElementById("imageOne").src="http://3.bp.blogspot.com/-6kBvV0jqRVM/UP_3-HpYWBI/AAAAAAAAC-s/IdJggS-dKn0/s1600/NicCageasprincessLeilaFamRosetton.jpg";

	}
	if(randomnumber == 17)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "Cersei Lannister";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "34";
	temp1.style.backgroundColor = "yellow";

document.getElementById("imageOne").src="http://fullhdpictures.com/wp-content/uploads/2015/10/Game-of-Thrones-Cersei-Lannister.jpg";
	}
	if(randomnumber == 18)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "The Color Blue";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "71";
	temp1.style.backgroundColor = "green";

document.getElementById("imageOne").src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/2000px-Solid_blue.svg.png";
	}
	if(randomnumber == 19)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "2013 Tessla Model S";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "97";
	temp1.style.backgroundColor = "green";
document.getElementById("imageOne").src="http://www.jdpower.com/sites/default/files/legacy_files/pictures/jdpower/85f35a960a0a006501016505c24a9a51.jpg";

	}
	if(randomnumber == 20)
	{
var temp = document.getElementById("slide-title");
	temp.innerHTML = "Aslan";

	var temp1 = document.getElementById("slide-rating");
	temp1.innerHTML = "88";
	temp1.style.backgroundColor = "green";
document.getElementById("imageOne").src="http://wallpapercave.com/wp/6oYx7Ic.jpg";

	}
}
}