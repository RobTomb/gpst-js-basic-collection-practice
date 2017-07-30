'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	collectionA.forEach( (item)=>{
		if(objectB.value.indexOf(item.key) !== -1)
			item.count-=getNum(item.count)
	})
	return collectionA
}
function getNum(count){
	let num = parseInt(count/3);
	return num;
}
