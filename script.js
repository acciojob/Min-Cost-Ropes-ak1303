function mincost(arr)
{ 
//write your code here
// return the min cost
  let sum=0;
	while(arr.length>1){
		let [minIndex1,minIndex2]=arr.reduce((acc,val,idx)=> val<acc[0]?[idx,acc[0]]:(val<acc[1]?[acc[0],idx]:acc),[0,1]);
		let currSum=arr[minIndex1]+arr[minIndex2]
		sum+=currSum;
		arr.splice(minIndex1,1,currSum);
		arr.splice(minIndex2,1);
	}
	return sum;
}

module.exports=mincost;
