'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
	let collectionC = [];
	collectionA.forEach( (item)=>{
		if(objectB.value.indexOf(item) !== -1 )
			collectionC.push(item)
	});
	return collectionC;
}
