'use strict';

module.exports = function countSameElements(collection) {
	let countSameLetters = [];
	collection.forEach( (item)=>{
		let site = countSameLetters.findIndex( (letterObj)=>{
			return letterObj.key === item[0];
		});
		if(site === -1){
			if(item.length !== 1){
				countSameLetters.push({key:item[0],count:parseInt(item[2])});
			}
			else
				countSameLetters.push({key:item,count:1});
		}
		else
			countSameLetters[site].count += 1;
	});
	return countSameLetters;
}
