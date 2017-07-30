'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	let collectionC = countSameElements(collectionA)
	collectionC.forEach((item)=>{
		if(objectB.value.indexOf(item.key) !== -1)
			item.count-=getNum(item.count)
	})
	return collectionC	
}
function getNum(count){
	let num = parseInt(count/3)
	return num;
}
function countSameElements(collectionA){
	let collectionC =[];
	collectionA.forEach( (item)=>{
		let site = collectionC.findIndex( (letterObj)=>{
			return letterObj.key === item[0]
		})
		if( site === -1 )
			collectionC.push({key:item[0],count:getCountNum(item)})
		else
			collectionC[site].count+=getCountNum(item)
	})
	return collectionC
}

function getCountNum(item){
	let num = 1;
	if( item.length !== 1)
		num = parseInt(item.match(/[0-9]/));
	return num;
}
