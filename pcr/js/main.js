var main = function(){
	var msg = function(msg){
		layui.use('layer', function(){
		  	layui.layer.msg(msg);
		});
	};
	var check_works = function(works){
		works_json.forEach(function(work) {
			if(!work.id || !work.boss_id || !work.hp ||!work.cfg){
				msg(work.id + "空数据!");
			}
			if(work.count > 30 || work.count < 0){
				msg(work.id + " 刀数异常! " + work.count);
			}
			if(work.cfg.indexOf('深') < 0 && (work.group_type == group_type.sy ||
			(typeof work.group_type == "object" && work.group_type.indexOf(group_type.sy) > -1))){
				msg(work.id + " 类型异常! " + work.group_type);
			}
			if(work.cfg.indexOf('深') > -1 && work.group_type != group_type.sy &&
				(typeof work.group_type == "object" && work.group_type.indexOf(group_type.sy) < 0)){
				msg(work.id + " 类型异常! " + work.group_type);
			}
		});
	};

	// 轴转换器
	var axis_obj_translater = function(){
		if(axis && axis.length > 0){
			axis.forEach(function(work) {
				var work_id = work["id"];
				var axis_text = work["text"];
				if(!work_id || !axis_text){
					return true;
				}
				var axis_array = axis_text.split(/[；;。.]/);
				if(axis_array && axis_array.length > 0){
					work_text_map[work_id] = [];
					axis_array.forEach(function(axis_work) {
						let work_item = axis_work.split(" ");
						work_text_map[work_id].push({
							"time" : work_item[0],
							"name" : work_item[1],
							"action" : work_item[2],
							"work" : work_item[3],
							"damage" : work_item[4],
							"axis" : work_item[5]
						});
					});
				}
			});
		};
	};

	var detall_work_text = function(obj){
		var work_row = $(obj).parent().parent();
		var work_id = work_row.attr("id");
		var work_round = work_row.find('td:eq(1)').text();
		var work_boss_id = work_row.find('td:eq(2)').text();
		var work_cfg = work_row.find('td:eq(4)').text();
		var work_hp = work_row.find('td:eq(5)').text();
		var text = "<h2>" + work_round + " " + work_boss_id +
			"</h2><br/>" + work_cfg + " " + work_hp;
		if(layui && work_text_map){
			if(typeof work_text_map[work_id] == "object"){//数组格式的数据以表格显示
				text += "<table id='works_table' class='layui-table'>";
				text += "<thead><tr><th>时间</th><th>人物</th><th>目押动作</th>" +
					"<th>行动</th><th>伤害</th><th>破甲轴</th></tr></thead><tbody>";
				work_text_map[work_id].forEach(function(item) {
					text += "<tr><td>" + item.time + "</td><td>" + item.name + "</td><td>" +
					item.action + "</td><td>" + item.work + "</td><td>" +
					item.damage + "</td><th>" + item.axis + "</th></tr>";
				});
				text += "</tbody></table>";
			}else if(typeof work_text_map[work_id] == "string"){
				text = work_text_map[work_id];
			}
			layui.use('layer', function(){
			  	layui.layer.open({
				  	title: work_id + "轴",
				  	area: '800px',
				  	content: text
				});
			});
		}
	};
	var detall_member = function(obj){};
	var modify = function(obj){};
	var remove = function(obj){};
	// 倒计时
	var countdown = function(){
		layui.use('util', function(){
			var now = new Date();
			var now_time = new Date(now.toLocaleDateString()).getTime();
			var end_time = now.getHours() >= 5 ? new Date(now_time + 29 * 60 * 60 * 1000 - 1).getTime() :
				new Date(now_time + 5 * 60 * 60 * 1000 - 1).getTime(); // 翌日5点
			var server_time = now.getTime();
			layui.util.countdown(end_time, server_time, function(date, server_time, timer){
			   	var str = date[0] + '天' + date[1] + '时' +  date[2] + '分' + date[3] + '秒';
				layui.$('#countdown').html('距离今天出刀结束还有：'+ str);
			});
		});
	};
	var init = function(){
		axis_obj_translater();
		check_works(works_json);
		works_json.forEach(function(work, i) {
			let round = work.id.indexOf('A') > -1 ? "一周目":"二周目";
			let name = work.boss_id;
			var tr_row = "<tr id='" + work.id + "'><td>" + (i+1) + "</td><td>" + round + "</td><td>" + name +
			"</td><td>" + work.id + "</td><td>" + work.cfg + "</td><td>"+
			work.hp / 1e4 + " W</td><td>" + work.count + "</td><td>" + work.creater +
			" " + work.checker + "</td><td>" + work.src + "</td>" +
			"<td><button type='button' onclick='main.detall_work_text(this);' class='layui-btn'>查看轴</button>" +
			"<button type='button' onclick='main.detall_member(this);' class='layui-btn layui-btn-normal'>查看成员</button>" +
			"<button type='button' onclick='main.modify(this);' class='layui-btn layui-btn-warm'>修改</button></td>";
			//"<button type='button' onclick='main.remove(this);' class='layui-btn layui-btn-danger'>删除</button></td>";
			$("#works_table tbody").append(tr_row);
		});
		countdown();
	};
	return {
		init : init,
		detall_work_text : detall_work_text,
		detall_member : detall_member,
		modify : modify,
		remove : remove
	};
}();