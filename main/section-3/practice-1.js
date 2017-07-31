'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	collectionA.forEach( (item)=>{
		if(objectB.value.indexOf(item.key) !== -1)
			item.count -= 1;
	});
	return collectionA;
}
