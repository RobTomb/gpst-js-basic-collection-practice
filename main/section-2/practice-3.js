'use strict';

module.exports = function countSameElements(collection) {
	let countSameLetter = [];
	collection.forEach( (item)=>{
		let site = countSameLetter.findIndex( (letterObj)=>{
			return letterObj.name === item[0];
		});
		if(site === -1)
			countSameLetter.push({name:item[0],summary:getNum(item)});
		else
			countSameLetter[site].summary += getNum(item);

	});
	return countSameLetter;
}
function getNum(item){
	let num = 1;
	if(item.length !== 1)
		num = parseInt(item.match(/[0-9]+/)[0]);
	return num;
}
