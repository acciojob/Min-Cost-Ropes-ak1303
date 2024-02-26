function mincost(arr)
{ 
//write your code here
// return the min cost
  let sum=0;
	while(arr.length>1){
		arr.sort((a,b)=>a-b);
		let a = arr.shift();
		let b = arr.shift();
		sum+=a+b;
		arr.push(a+b);
	}
	return sum;
}

module.exports=mincost;
