'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
	let collectionC = [];
	collectionA.forEach((item)=>{
		if( collectionB.indexOf(item) !== -1 )
			collectionC.push(item);
	});

	return collectionC;
}
