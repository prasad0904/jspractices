console.log("connected");

var a = 1;
var b =2;
if(a+b>4){
	console. log(a+b);
}
else if(a+b<1){
console. log (a+b); 
}
else
console. log(a+b) ;

for (var num=0; num<11; num=num+2) {
	console. log (num) ;
}



var a=[1,2,3,4]
 a.forEach(item=> console.log(item));

 for (var item in a)
 console.log(item);


//loop

var num=0;

while(num<5){
	console.log(num);
	num++;
}

do{
	console.log(num);
	num++;

}while(num<5);



//let keyword


for(let sum=0; sum<5; sum++){
	 console.log(sum);

}
console.log(sum); //error sum is not defined 

//var keyword
  var sum=1
  console.log(sum);


  var obj = {
  	name:"faizan",
  	colour:"red",
  sing(){
  	console.log(`${this.name} is singing`);

  }
};
console.log(obj.name);
obj.sing();
console.log(obj["colour"]);



//array
var arr=[1,2,3,4,5]
 
 console.log(arr[3]);

 arr.push("prasad"); 

console.log("psd");
 console.log(arr);

 console.log(arr.pop());


 console.log (arr.splice(0,3));



 let psd=[1,2,3,4,5]
 psd.splice(1,3);
 console.log(psd);

  let kpl=[5,6,7,8]
  console.log(kpl.slice(1,3)); //8 is not incuded bcs its exclusive 

 	 	
  //function calling 

  function print(){
  	console.log("Hii im fine")

  }
print();



function add(a,b){
	return a + b;
}

console.log(add(5,7));




let animal={
	name:"dog",
	eat(a,b){
		console.log(this.name+ "is eating"+a +b)
	}
};
let human={
	name:'ravi'
};

animal.eat(5 ,"bones");
animal.eat.call(human,10,"chips");




function age_req(req_age){
	return function(age){
		return age>=req_age;
	};
};
console.log(age_req(18)(27));





