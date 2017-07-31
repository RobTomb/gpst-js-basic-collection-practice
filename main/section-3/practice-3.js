'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	let collectionC = countSameElements(collectionA);
	collectionC.forEach( (item)=>{
		if( objectB.value.indexOf(item.key) !== -1)
			item.count -= getMom(item.count);
	})
	return collectionC;
}

function getMom(count){
	let num = parseInt(count/3);
	return num;
}

function countSameElements(collectionA){
	let collectionC=[];
	collectionA.forEach( (item)=>{
		let site = collectionC.findIndex( (letterObj)=>{
			return letterObj.key === item;
		});
		if( site === -1 )
			collectionC.push({key:item,count:1});
		else
			collectionC[site].count += 1;
	});
	return collectionC;
}
