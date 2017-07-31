'use strict';

module.exports = function countSameElements(collection) {
	let countSameLetter = [];
	collection.forEach( (item)=>{
		let site = countSameLetter.findIndex( (letterObj)=>{
			return letterObj.key === item;
		});
		if( site === -1 )
			countSameLetter.push({key:item,count:1});
		else
			countSameLetter[site].count += 1;
	});
	return countSameLetter;
}
