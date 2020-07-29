var boss_id_map = [];

var main = function(){
	var trim= function(str){
		if(str){
			return typeof str == "string" ? str.trim() : str;
		}else{
			return "";
		}
	};
	var msg = function(msg){
		layui.use('layer', function(){
		 	layui.layer.msg(msg);
		});
	};
	var check_works = function(works){
		works.forEach(function(work) {
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
				var work_id = work["work_id"];
				var axis_text = work["text"];
				if(!work_id || !axis_text){
					return true;
				}
				var axis_array = axis_text.split(/[；;。]/);
				if(axis_array && axis_array.length > 0){
					work_text_map[work_id] = [];
					axis_array.forEach(function(axis_work) {
						if(!axis_work){
							return true;
						}
						let work_item = axis_work.split(" ");
						work_text_map[work_id].push({
							"time" : trim(work_item[0]),
							"name" : trim(work_item[1]),
							"action" : trim(work_item[2]),
							"work" : trim(work_item[3]),
							"damage" :trim(work_item[4]),
							"axis" : trim(work_item[5])
						});
					});
				}
			});
		};
	};

	var src = function(obj){
		var work_row = $(obj).parent().parent();
		var work_id = work_row.attr("id");
		layui.use('layer', function(){
		 	layui.layer.open({
			 	title: work_id + "参考网址（BV号）",
			 	content: $(obj).attr('id').split(' ').join('<br/>')
			});
		});
	};

	var detall_work_text = function(obj){
		var work_row = $(obj).parent().parent();
		var work_id = work_row.attr("id");
		var work_round = work_row.find('td:eq(0)').text();
		var work_boss_id = work_row.find('td:eq(1)').text();
		var work_cfg = work_row.find('td:eq(3)').text();
		var work_hp = work_row.find('td:eq(4)').text();
		var text = "";
		if(layui && work_text_map){
			if(typeof work_text_map[work_id] == "object"){//数组格式的数据以表格显示
				text += "<table id='works_table' class='layui-table'>";
				text += "<thead><tr><th width='40'>时间</th><th>人物</th><th>目押动作</th>" +
					"<th>行动</th><th>伤害</th><th>破甲轴</th></tr></thead><tbody>";
				work_text_map[work_id].forEach(function(item) {
					text += "<tr><td>" + trim(item.time) + "</td><td>" + trim(item.name) + "</td><td>" +
					trim(item.action) + "</td><td>" + trim(item.work) + "</td><td>" +
					trim(item.damage) + "</td><th>" + trim(item.axis) + "</th></tr>";
				});
				text += "</tbody></table>";
			}else if(typeof work_text_map[work_id] == "string"){
				text = work_text_map[work_id];
			}
			layui.use('layer', function(){
			 	layui.layer.open({
				 	title: "<h2>" + work_id + " 轴 " + work_round + " " + work_boss_id +
			" " + work_cfg + " " + work_hp +  "</h2>",
				 	area: '800px',
				 	content: text
				});
			});
		}
	};
	var detall_member = function(obj){};
	// 倒计时
	var countdown = function(){
		layui.use('util', function(){
			var now = new Date();
			var now_time = new Date(now.toLocaleDateString()).getTime();
			var end_time = now.getHours() >= 5 ? new Date(now_time + 29 * 60 * 60 * 1000 - 1).getTime() :
				new Date(now_time + 5 * 60 * 60 * 1000 - 1).getTime(); // 翌日5点
			var server_time = now.getTime();
			layui.util.countdown(end_time, server_time, function(date, server_time, timer){
			  	var str = date[0] + '天' + date[1] + '时' + date[2] + '分' + date[3] + '秒';
				layui.$('#div_countdown').html('<i class="layui-icon layui-icon-time"></i>' + ' 距离今天出刀结束还有:'+ str);
			});
		});
	};

	var load_bosses = function(){
		if(boss_data && boss_data.length > 0){
			boss_data.forEach(function(boss) {
				boss_id_map[boss.id] = new Boss(boss.name, boss.id, boss.hp);
			});
		}
	};

	var get_boss_by_id = function(boss_id){
		return boss_id_map[boss_id];
	};

	var get_boss_id = function(round, boss_value){
		if(boss_value && boss_value > 0){
			return (round == 1 ? "A" : "B") + boss_value;
		}else{
			return "";
		}
	};

	var table = function(round, title, boss_value, _group_type){
		title = trim(title);
		round = round && round == 2 ? 2 : 1;
		boss_value = boss_value && boss_value > 0 ? boss_value : 0;
		_group_type = _group_type && _group_type < 4 ? _group_type : 4;

		let boss_id = get_boss_id(round, boss_value);
		let work_id, cfg_info;
		if(title != ""){
			["a","b","A","B"].forEach(function(key){
				if(title.indexOf(key) > -1){
					work_id = title;
				}
			});
		}
		if(!work_id){
			cfg_info = title;
		}
		$("#works_table tbody").html("");
		var vhtml = "";
		works_data.forEach(function(work) {
			let is_round_1 = work.boss_id.indexOf('A') > -1;
			let round_text = is_round_1 ? "一周目":"二周目";
			let boss = get_boss_by_id(work.boss_id);
			var tr_row = "<tr id='" + work.id + "'><td><div>" + round_text + "</div></td><td><div>" +
				boss.name + "</div></td><td><div>" + work.id + "</div></td><td><div>" + trim(work.cfg) + "</div></td><td><div>"+
				work.hp / 1e4 + " W<div></td><td><div>" + work.count + "</div></td><td><div>" + get_group_name(work.group_type) +
				"</div></td><td><div>" + trim(work.creater) + "</div></td><td><div>" + trim(work.checker) +
				"</div></td><td><button type='button' onclick='main.detall_work_text(this);' class='layui-btn'>查看轴</button><button id='" +
				trim(work.src) + "'type='button' onclick='main.src(this);' class='layui-btn layui-btn-warm'>来源</button></td>";
				//"<button type='button' onclick='main.detall_member(this);' class='layui-btn layui-btn-normal'>查看成员</button>" +
				//"<button type='button' onclick='main.remove(this);' class='layui-btn layui-btn-danger'>删除</button></td>";
			let is_show = true;
			is_show = round == 1 ? is_round_1 : !is_round_1;
			if(title != ""){
				if(is_show && !cfg_info && work_id && work.id.indexOf(work_id) < 0){
					is_show = false;
				}
				if(is_show && !work_id && cfg_info && work.cfg.indexOf(cfg_info) < 0){
					is_show = false;
				}
			}
			if(boss_id && boss_id.length > 0){
				if (boss_id != work.boss_id) {
					is_show = false;
				}
			}
			if(_group_type < 4){
				if(_group_type == 3){
					if(typeof work.group_type != "object" || work.group_type.indexOf(group_type.sy) < 0 || work.group_type.indexOf(group_type.hq) < 0){
						is_show = false;
					}
				}else if(_group_type != work.group_type){
					is_show = false;
				}
			}
			if(is_show){
				vhtml += tr_row;
			}
		});
		$("#works_table tbody").append(vhtml);
	};

	var render = function(){
		// 鼠标悬浮时的字体颜色改变
		$('body').on("mouseenter",".layui-table-body tr",function () {
		  $(this).siblings().find("div").css("color","#666");
		  $(this).find("div").css("color","#009688");
		})
		layui.use('form', function(){
		 	var form = layui.form;
		 	form.render();
			form.on('submit(form_query)', function(data){
				let query = JSON.parse(JSON.stringify(data.field));
				table(query.round, query.title, query.boss_value, query.group_type);
				return false;
			});
		});
	};

	var init = function(){
		load_bosses();
		axis_obj_translater();
		check_works(works_data);
		// round,title, boss_value, _group_type
		table(2);
		countdown();
		render();
	};

	return {
		init : init,
		detall_work_text : detall_work_text,
		detall_member : detall_member,
		src : src
	};
}();