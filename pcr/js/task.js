var task = function(){
	const tab_div_id = "task_tab";
	const tab_ul_id = "task_ul";
	const prefix_tab_li = "task_li_";
	const prefix_div = "task_div_";
	const prefix_table = "task_table_";
	const prefix_tbody = "task_tbody_";
	const prefix_pro_creater = "progress_creater_";
	const prefix_pro_checker = "progress_checker_";

	// 关联进度条
	var progress_tab = function(tab_count){
		for(let i = 1; i <= tab_count; i ++){
			var test_count = 0, check_count = 0;
		 	var td = $("#" + prefix_table + i + " tbody").find("tr").find("td:eq(7)");
		 	td.each(function(){
		 		if($(this).text() != ""){test_count ++}
		 		if($(this).next().text() != ""){check_count ++}}
		 	);
			$("#" + prefix_pro_creater + i).attr("lay-percent", test_count + "/" + td.length);
			var progress_check = parseInt(check_count / td.length * 100);
			$("#" + prefix_pro_checker + i).attr("lay-percent", progress_check + "%");
		}
	};

	var add_tab = function(tab_count){
		if(typeof tab_count != "number") return;
		let html_ul = "";
		let html_div = "";
		for(let i = 1; i <= tab_count; i ++){
			html_ul += " <li id=" + prefix_tab_li + i + ">第" + i + "天任务</li>";
			html_div += '<div id="' + prefix_div + i + '" class="layui-tab-item"><div class="layui-inline"><span class="layui-badge-dot layui-bg-orange"></span>&nbsp;摸轴进度'
				+ '<div class="layui-progress layui-progress-big"lay-showPercent="yes"><div id="' + prefix_pro_creater + i
				+ '"class="layui-progress-bar layui-bg-green"lay-percent="0%"></div></div><br/><span class="layui-badge-dot layui-bg-orange"></span>&nbsp;审查进度'
				+ '<div class="layui-progress layui-progress-big"lay-showPercent="yes"><div id="' + prefix_pro_checker + i
				+ '"class="layui-progress-bar layui-bg-blue"lay-percent="0%"></div></div><br/>'
				+ '<table id="'+ prefix_table + i + '"class="layui-table"lay-even lay-skin="nob"><colgroup><col width="60"><col width="60"><col width="180">'
				+ '<col width="75"><col width="300"><col width="90"><col width="90"><col width="90"><col width="90"><col width="90"></colgroup>'
				+ '<thead><tr><th><strong>目标</strong></th><th><strong>编号</strong></th><th><strong>作业基础模板</strong></th><th><strong>优先级</strong></th>'
				+ '<th><strong>说明</strong></th><th><strong>预排刀数</strong></th><th><strong>目标伤害</strong></th><th><strong>摸轴</strong></th><th><strong>审查</strong></th>'
				+ '<th><strong>实际伤害</strong></th></tr></thead><tbody id="' + prefix_tbody + i + '" class="layui-table-body"></tbody></table></div></div>';
		}
		$("#" + tab_ul_id).html(html_ul);
		$("#" + tab_div_id).html(html_div);
	};

	var add_task = function(day_number, work_id, priority, tips, count, act_hp){
		var work = data.get_work_by_id(work_id);
		if(!work){
			console.log(work_id);
			return;
		}
		var hp = typeof act_hp == "number" ? act_hp / 10000 + "w" :$.trim(act_hp);

		var html_tr = "<tr><td>" + $.trim(work.boss_id) + "</td><td>" + work.id + "</td><td>" + work.cfg + "</td><td>" + priority + "</td><td>" + tips +
			"</td><td> " + count + "</td><td>" + work.hp / 10000 + "w</td><td>" + work.creater + "</td><td>" + work.checker + "</td><td>" + hp + "</td></tr>";
		$('#' + prefix_tbody + day_number).append(html_tr);
	};

	var show = function(target){
		$("#" + prefix_tab_li + target).addClass('layui-this');
	 	$("#" + prefix_div + target).addClass('layui-show');
	};

	return {
		add_tab : add_tab,
		add_task : add_task,
		progress_tab : progress_tab,
		show : show
	}
}();