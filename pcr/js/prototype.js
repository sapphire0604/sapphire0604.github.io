/* 数据结构区域 */
Array.prototype.replace = function(val1, val2) {
	for (let i = 0; i < this.length; i++) {
		if((this[i]).round == val1.round && (this[i]).boss_id == val1.boss_id && (this[i]).work_id == val1.work_id){// 等价
			this[i] = val2;
			break;
		}
	}
};
Array.prototype.insert = function(val1, val2) {
	let index = -1;
	for (let i = 0; i < this.length; i++) {
		if((this[i]).round == val1.round && (this[i]).boss_id == val1.boss_id && (this[i]).work_id == val1.work_id){// 等价
			index = i;
			break;
		}
	}
	if(index > -1){
		this.splice(index, 0, val2);
	}
};
Array.prototype.remove = function(val1) {
	let index = -1;
	for (let i = 0; i < this.length; i++) {
		if((this[i]).round == val1.round && (this[i]).boss_id == val1.boss_id && (this[i]).work_id == val1.work_id){// 等价
			index = i;
			break;
		}
	}
	if(index > -1){
		this.splice(index, 1);
	}
};