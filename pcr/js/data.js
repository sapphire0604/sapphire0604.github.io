var boss_data = [
	{"name" : "飞龙", "id" : "A1", "hp" : 600e4},
	{"name" : "狮鹫", "id" : "A2", "hp" : 800e4},
	{"name" : "黑猪", "id" : "A3", "hp" : 1000e4},
	{"name" : "独角兽", "id" : "A4", "hp" : 1200e4},
	{"name" : "螃蟹", "id" : "A5", "hp" : 1000e4},
	{"name" : "狂暴螃蟹", "id" : "A6", "hp" : 1000e4},
	{"name" : "飞龙", "id" : "B1", "hp" : 600e4},
	{"name" : "狮鹫", "id" : "B2", "hp" : 800e4},
	{"name" : "黑猪", "id" : "B3", "hp" : 1000e4},
	{"name" : "独角兽", "id" : "B4", "hp" : 1200e4},
	{"name" : "螃蟹", "id" : "B5", "hp" : 100e4},
	{"name" : "狂暴螃蟹", "id" : "B6", "hp" : 1000e4}
];

// 作业类型
var group_type = {
	sy: 0, hq:1, dd:2
};

// 规范轴模板
// 时间 人物 目押动作 行动 伤害 破甲轴
var axis = [
	{"work_id" : "a0", "text" : "112 yls 连点 ub 12000 狼吼，忍虚弱；107 狗 普攻后 ub 18000 狼吼，忍虚弱；100 狼 劈砍后 ub 13000 狼吼；056 忍，yls 连点 ub 27000 狼ub，忍ub；053 狗 狼吼后 ub 41000 狼ub，狼吼，忍ub；050 玲奈 加攻后 ub 63000 狼ub，狼吼，忍ub；046 yls 连点 ub 42000 狼ub，狼吼，忍ub；037 狼，狗 狼吼后 ub 13000，35000 狼ub，狼吼；035 yls 连点 ub 36000 狼ub，狼吼；027 忍 连点 ub；020 yls，狗 狼吼后 ub 42000，40000 狼ub，狼吼，忍ub；015 狼 连点 ub 15000 狼ub，狼吼，忍ub；014 玲奈 加攻后 ub 63000 狼ub，狼吼，忍ub；012 yls 连点 ub 42000 狼ub，狼吼，忍ub；002 忍，yls，狗 狼吼后 ub 35000 狼ub，狼吼；"},
	{"work_id" : "a3", "text" : "105 狼 强力斩击后 ub 12000；103 猫拳 重击后 ub 22000；058 病娇 连点 ub 32000；056 忍 连点 ub 5000；050 爆弓 加攻后 ub 63000；045 狼、猫拳 狼普攻后bossub之前 ub 16000、29000；032 病娇 连点 ub 25000；026 忍 连点 ub	 5000；024 狼 普攻后 ub 11000；021 猫拳 狼吼后 ub 28000；014 暴击弓 加攻后 ub 63000；004 狼 吼叫后 ub 16485；001 猫拳病娇 连点 ub 23000、28000"},
	{"work_id" : "b0", "text" : "1:03 狼、狗、猫拳 连点 ub 12000、27000、22000 狼吼；0:52 狗 狼吼后 ub 42000 狼吼; ub 42000；0:47 妈、深、猫拳 换T、卡毒 ub 9000、26000 狼吼；0:45 狼 连点 ub 21000 狼吼；0:32 狗 深月红圈后 ub 36000 狼吼 狼ub 深月红圈；0:26 狼 普攻后 ub 15000；0:22 妈 加速后 ub。0:21 猫拳 深月红圈后 ub 27000 狼吼；0:14 狗 正中突后 ub 34000 狼吼、深月红圈;0:02 狼、狗、猫拳、深月 连点 ub 42000"},
	{"work_id" : "b2", "text" : "1:03 狼、狗 连点 ub 23000、41000 狼ub，狼吼，深月红圈；053-050 妈 加速后连点 ub；052-050 玲奈 加攻后 ub 67000 狼ub，狼吼，深月红圈；051-050 狗 正中突后 ub 42000（没有046） 狼ub，狼吼，深月红圈；0:47 深 卡毒 ub 9000 狼吼；0:41 狼 吼叫后 ub 11000 狼吼；0:36 狗 连点 ub 43000（没有033） 狼ub，狼吼，深月红圈；0:21 狼 深月红圈后连点 ub 23000 狼吼，深月红圈；0:18 妈，狗，玲奈 加速后 ub 43000，67000 狼ub，狼吼，深月红圈；0:17 玲奈 加攻后 ub 67000 狼ub，狼吼，深月红圈；0:16 深月 卡毒 ub 11000  狼ub，狼吼，深月红圈；0:02 狼、狗 连点 ub 25000，43000 狼ub，狼吼，深月红圈；"},
	{"work_id" : "b3", "text" : "112 yls 连点 ub 12000 狼吼，忍虚弱；107 狗 普攻后 ub 18000 狼吼，忍虚弱；100 狼 劈砍后 ub 13000 狼吼；056 忍，yls 连点 ub 27000 狼ub，忍ub；053 狗 狼吼后 ub 41000 狼ub，狼吼，忍ub；050 玲奈 加攻后 ub 63000 狼ub，狼吼，忍ub；046 yls 连点 ub 42000 狼ub，狼吼，忍ub；037 狼，狗 狼吼后 ub 13000，35000 狼ub，狼吼；035 yls 连点 ub 36000 狼ub，狼吼；027 忍 连点 ub；020 yls，狗 狼吼后 ub 42000，40000 狼ub，狼吼，忍ub；015 狼 连点 ub 15000 狼ub，狼吼，忍ub；014 玲奈 加攻后 ub 63000 狼ub，狼吼，忍ub；012 yls 连点 ub 42000 狼ub，狼吼，忍ub；002 忍，yls，狗 狼吼后 ub 35000 狼ub，狼吼；"},
	{"work_id" : "b4", "text" : "130 开启auto;040 关闭auto;034 狗 狼吼叫后 ub 3.1w;034 开启auto;014 狼 狂点 ub 2.6w;005 关闭auto;002 狗，栞，充电宝 狼吼后 ub 可能没吼"},
	{"work_id" : "c0", "text" : "106 狗，yls 普攻后 UB 4w，2.6w 狼吼，深月红圈;101 狼，猫拳 劈砍后 UB 2.6w，2.9w;051 狗，深月，yls 深月阵到后 UB 4w，1w，4w;046 猫拳 重击后 ub 2.7w;033 狼，狗，yls 深月红圈后 ub 2.6w，4w，4w;026 猫拳 连点 ub 2.7w;016 狗，深月，亚莉莎 深月阵到后 UB 4w，1w，4w;011 狼 劈砍后 ub 2.6w;001 猫拳，狗，yls 连点 ub;"},
	{"work_id" : "c1", "text" : "058 狼 UB后 暂停auto；052 黑骑 破甲后 UB；052-048 充电宝 狼吼后普攻后 UB 9909；048 充电宝 ub后 开启auto；023 狗 UB后 暂停auto；018 黑骑 破甲后 UB；014-012 充电宝 狼吼后 UB 9909；012 充电宝 ub后 开启auto"},
	{"work_id" : "c2", "text" : "112 亚莉莎 连点 UB 12576;106 狗 普攻10097后 UB 40428;101 狼 连点 UB 26441；058 亚莉莎 连点 UB 32721;051 狗 深月阵到后 UB 40428;049 暴击弓 BUFF后 UB 67318;047 亚莉莎 连点 UB 42538;045 深月 卡掉诅咒 UB 11036;041 狼 普攻后 UB 8902;035 亚莉莎，狗 深月阵到后 UB 42538，40832;017 狼，亚莉莎，狗 深月阵到后 UB 26441，42538，40428;014 暴击弓 buff后 UB 67318;010 深月 卡掉诅咒 UB 11036;001 亚莉莎 连点 UB;"},
	{"work_id" : "c3", "text" : "106 狗 平A后 ub 4w 满破；100 狼，猫剑 劈砍后 ub 1.2w，3w；050 玲奈，狗 加攻后 ub 6.3w，4w；045 深月 卡诅咒 ub ；034 狼，狗，猫剑 深月红圈后 ub 2.4w，4w，3w；017 狗 双破甲后 ub 4w；014 玲奈 加攻后 ub 6.3w；011 深月 卡诅咒 ub；001 狼，狗，猫剑 深月红圈后 ub 2.4w，4w，3w；"},
	{"work_id" : "d1", "text" : "1:13 狼 a之后 ub 14836 狼吼，黑骑；1:07 tp弓 三箭射出 ub 16988 满破；1:04 狗拳 正中突破后 40400 满破；0:59 狼 平a后 ub 26706；0:52 咲恋 黑骑破甲后 ub 10017（有浮动）；0:47 黑骑 卡奶 ；0:46 狼 斩击后 ub 26706满破；0:43 狗 40400 满破；0:35 tp弓 箭命中 22335 狼ub，狼吼；0:29 狼 斩击后 ub 26706 满破；0:21 狗 黑骑破甲后 ub 23764  黑骑 狼ub；0:15 黑骑卡奶；0:14 狼 斩击后 ub 26705 满破；0:01狗 咲恋  tp弓 ub 40400 10070 27683 满破；"},
	{"work_id" : "e3", "text" : "130 开启auto；107-105 yly  ub 18000 黑猫、妹法减甲；107-105 狗 连点 ub 15000；055 关闭auto；049 妹法 卡掉普攻后摇 ub；044 xcw 妹法减甲后 ub 50000 黑猫、妹法减甲；044 开启auto；043 黑猫、yly 技能后 ub 8000，19000；044-040 狗 连点 ub 15000；035 关闭auto；026 yly 如果残血连点 ub；021 yly、狗 yly非残血 ub 19000、15000 黑猫、妹法减甲；015 妹法 技能后 ub；010 xcw 加攻后 ub 50000 黑猫、妹法减甲；010 开启auto；003 yly、狗 连点 ub 8000、13000；"},
	{"work_id" : "f6", "text" : "1:05 yly，狗 连点 ub 1.8w，1.5w；0:49 妹法 普攻后 ub；0:48 狗 正中突后 ub 1.5w；0:45 黑猫，xcw，yly 妹法破甲后连点 ub 8k，5.2w，1.9w；0:33 狗 普攻后 ub 1.3w；0:28 yly 连点 ub 9k；0:19 妹法 普攻后 ub；0:12 黑猫，xcw，狗 连点 ub 8k，5.2w，1.5w；0:08 yly 连点 ub 1.1w"},
	{"work_id" : "A0", "text" : "108 狗 平a后 ub 27403 狼吼、深月圈;102 狼 平a后 ub 17958 狼吼、深月圈;052 狗 平a后 ub 41379 狼吼、深月圈、狼ub;051 暴击弓 加攻后 ub 64254 狼吼、深月圈、狼ub;047 妈、深月 换t、卡诅咒 ub 11943;037 狼、狗 深月圈亮 ub 19021、43520 狼吼、深月圈、狼ub;021 妈 无 ub;019 狼、狗 斩击后 ub 28722、43520 狼吼、深月圈、狼ub;017 暴击弓 加攻后 ub 67822 狼吼、深月圈、狼ub;015 深月 卡掉小技能 ub 11943 狼吼、深月圈、狼ub;001 狼、狗 平a后 ub 17958、41379 狼吼、深月圈、狼ub;"},
	{"work_id" : "A2", "text" : "1:08 狗 普攻后 ub 24000 狼吼、深月红圈；1:02 狼、猫拳 狼劈砍后 ub 16000 35000 狼吼；0:52 狗 深月红圈后 ub 42000 狼ub、狼吼、深月红圈；0:51 猫拳 普攻后 ub 26000 狼ub、狼吼、深月红圈；0；0:47 深、妈 诅咒抬手时 卡毒、换T 11000、2800*3 狼ub、深月红圈；0:43 狼 劈砍后 ub 7000 狼吼；0:37 狗 深月红圈后 ub 41000 狼ub、狼吼、深月红圈；0:33 猫拳 重击后 ub 30000 狼ub、狼吼、深月红圈；0:24 妈 连点 ub 0:21 狼、狗 深月红圈后 ub 17000、41000 狼ub、狼吼、深月红圈；0:15 猫拳、深月 普攻后 ub 28000、11000 狼ub、深月红圈;0:03 狼、狗、猫拳 连点 ub 16000、27000、39000 狼ub、狼吼、深月红圈；"},
	{"work_id" : "C5", "text" : "112 yls 连点 ub 1.2w；103 狗 正中突后 ub 3.6w；101 狼 连点 ub 2.3w；101 纯 连点 ub；058 yls 连点 ub 3w；050 狗 深月红圈后 ub 4w；047 yls 连点 ub 4.3w；046 深月 卡毒 ub 1w；032 狼，狗，yls，黑骑 深月红圈后 ub 2.3w，4w，4.3w；016 yls 连点 ub 3.8w；013 狗 普攻后 ub 3.6w；009 狼，黑骑，深月 连点 ub 2.3w；002 狗 连点 ub 1.5w；"},
	{"work_id" : "D4", "text" : "112 yls 连点 ub 1.2w；110 狗 连点 ub 1.8w；108 狼 连点 ub 1.1w；059 yls 连点 ub 3.3w；059 望 连点 ub；056 妈 连点 ub；055 狗 破甲后 ub 3.4w；051 狼 劈砍后 ub 2.1w；049 yls 连点 ub 3.7w；040 狗 破甲后 ub 3.3w；037 yls 连点 ub 3.2w；033 狼 普攻后 ub 1.9w；030 望 连点 ub；027 妈 连点 ub；025 狗 破甲后 ub 3.5w；024 yls 连点 ub 3.7w；017 yls 连点 ub 3.7w；014 狼 普攻后 ub 1.2w；010 狗 冲拳后 ub 3.3w；004 yls 连点 ub 3.3w；"},
	{"work_id" : "F2", "text" : "1:03 狼、暴击弓、栞 按顺序 ub 13909、62100、15456 狼ub、狼吼、深月红圈；0:58 黄骑 充能数字出现后 ub；0:54 深月 立直后 ub 5016 狼吼、狼ub；0:49 栞 连点 ub 11601 狼ub、深月红圈；0:42 狼、暴击弓 狼三闪后 ub 13909、62100 狼吼、狼ub；0:30 栞 连点 ub 小于28105 狼ub、狼吼、深月红圈；0:26 暴击弓 连点 ub 小于38324 狼ub、深月红圈；0:23 黄骑 充能数字出现后 ub；0:10 狼、深月、栞、暴击弓 顺序 ub 13909、10819、62100、31184 狼ub、狼吼、深月红圈；"},
	{}
];

// 备用轴映射
var work_text_map = {
	"a4" : "<h2>一周目 一王 龙</h2><br/>狗5狼5猫拳5忍3傻4 102w<br/>1:12 连点亚里沙放UB<br/>1:07 狗拳UB，等出一拳后，不用连点<br/>0:58 忍开UB，连点狼开UB，连点日和猫拳开UB，连点亚里沙开UB<br/>0:52 狗开UB（卡破甲轴，够就开）<br/>0:46 亚里沙自充完开UB<br/>0:36 狼开UB<br/>0:32 狂点忍开UB，连点日和猫拳开UB，连点狗开UB，连点亚里沙开UB<br/>0:14 连点狼开UB，连点狗开UB，连点亚里沙开UB<br/>0:05 连点忍开UB，连点日和猫拳开UB<br/>0:03 亚里沙自充开UB（另外可考虑最后一秒等狼吼后开UB，比较极限）<br/>",
	"a5" : [
		{"time" : "1:07", "name" : "狗", "action" : "普攻后", "work" : "ub", "damage" : "27123", "axis" : "狼吼"},
		{"time" : "1:00", "name" : "狼", "action" : "普攻后", "work" : "ub", "damage" : "13412", "axis" : ""},
		{"time" : "0:59", "name" : "忍,猫拳", "action" : "连点", "work" : "ub", "damage" : "27123,12312", "axis" : "狼ub 狼吼"},
		{"time" : "0:52", "name" : "暴,狗", "action" : "加攻后", "work" : "ub", "damage" : "57435,42326", "axis" : "狼ub 狼吼 忍ub"},
		{"time" : "0:36", "name" : "狼,狗", "action" : "狼吼后", "work" : "ub", "damage" : "21543,45231", "axis" : "狼吼"},
		{"time" : "0:32", "name" : "忍,猫拳", "action" : "连点", "work" : "ub", "damage" : "", "axis" : ""},
		{"time" : "0:19", "name" : "暴", "action" : "加攻后", "work" : "ub", "damage" : "57435", "axis" : ""},
		{"time" : "0:14", "name" : "狼", "action" : "", "work" : "ub", "damage" : "12312", "axis" : ""},
		{"time" : "0:05", "name" : "忍", "action" : "", "work" : "ub", "damage" : "12312", "axis" : ""},
		{"time" : "0:01", "name" : "狗,猫拳", "action" : "正中突破后", "work" : "ub", "damage" : "", "axis" : ""},
	],
	"c0" : "一周目 三王 猪<br/>狗5狼5深4傻4暴4 110W<br/>1:07 亚里沙开UB（卡深月破甲）<br/>1:06 狗连点开UB（卡深月破甲）<br/>0:50 狼开UB，狂点亚里沙，狗，暴击弓，深月开UB<br/>0:32 狗开UB<br/>0:31 亚里沙开UB （都是深月破甲后有就开）<br/>0:16 狼开UB，狂点狗，亚里沙，暴击弓，深月开UB<br/>0:02 亚里沙开UB，同时狗开UB（狗可以等卡好正中拳突破后再开UB，不过时间极限）<br/>",
	"d0" : "一周目 四王 马<br/>狗5狼5深4傻4栞5 110w<br/>1:03 狼开UB，狂点狗、栞、亚里沙开UB<br/>0:50 深月开UB<br/>0:49 亚里沙开UB<br/>0:47 狗开UB<br/>0:31 狼开UB，随即狂点亚里沙、栞开UB<br/>0:30 狗开UB<br/>0:15 深月开UB，亚里沙开UB<br/>0:10 狗开UB<br/>0:04 狼开UB，亚里沙随即开UB，栞也随即开UB<br/>",
	"e4" : "一周目 五王 蟹<br/>毛4仓5伊5黑5妹5 78W<br/>1:09 yly开UB<br/>0:53 妹法开UB，随即毛二力开UB，随即YLY开UB<br/>0:48 XCW开UB，狂点凯露开UB<br/>0:34 yly开UB<br/>0:22 妹法开UB<br/>0:18 毛二力开UB<br/>0:12 凯露开UB，yly开UB<br/>0:01 狂点XCW开UB",
	"e5" : "一周目 五王 蟹<br/>姐4仓5伊5黑5妹5 66W<br/>1:07 yly开UB<br/>0:49 妹法开UB（以下时间接的短，应该是有就开）<br/>0:48 姐姐开UB<br/>0:47 yly开UB，凯露开UB，xcw开UB<br/>0:29 yly开UB<br/>0:15 妹法开UB<br/>0:12 姐姐开UB，凯露开UB<br/>0:08 XCW开UB<br/>0:03 yly开UB",
	"A3" : "二周目 一王 龙<br/>狗5狼5妈4深4傻4 110w<br/>1:13 亚里沙UB<br/>1:08 狗UB<br/>1:03 狼UB<br/>1:00 亚里沙UB<br/>0:53 深月UB、狗UB<br/>0:48 亚里沙UB<br/>0:46 妈UB<br/>0:44 狼UB<br/>0:36 亚里沙UB、狗UB<br/>0:26 狼UB<br/>0:20 亚里沙UB<br/>0:19 深月UB<br/>0:18 妈UB、狗UB<br/>0:14 亚里沙UB<br/>0:03 狼UB<br/>0:01 狂点狗UB、亚里沙UB",
	"B0" : "二周目 二王 鸟<br/>纯4狗5狼4傻4栞5 118w<br/>1:12 亚里沙UB<br/>1:05 狼UB、狗UB、栞UB<br/>0:58 亚里沙UB<br/>0:45 狼UB、狗UB、栞UB、亚里沙UB <br/>0:33 亚里沙UB<br/>0:24 狼UB、狗UB、栞UB<br/>0:17 亚里沙UB<br/>0:01 狼UB、狗UB、亚里沙UB、栞UB",
	"C1" : "二周目 三王 猪<br/>布4狗5狼5妈4深4 80w<br/>1:02 狼UB、狗UB<br/>0:55 深月UB<br/>0:47 布丁UB<br/>0:45 妈UB、狗UB<br/>0:44 狼UB<br/>0:28 狗UB<br/>0:24 狼UB<br/>0:19 深月UB<br/>0:13 布丁UB<br/>0:05 狼UB<br/>0:03 妈UB<br/>0:02 狗UB",
	"D1" : "二周目 四王 马<br/>纯5狗5狼5猫拳5猫剑5 100w<br/>1:06 狼UB、狗UB、猫拳UB<br/>1:02 猫剑UB<br/>0:58 黑骑UB<br/>0:49 猫拳UB、狗UB、<br/>0:47 狼UB<br/>0:41 猫剑UB<br/>0:32 狗UB<br/>0:31 黑骑UB<br/>0:30 猫拳UB<br/>0:27 狼UB<br/>0:17 狗UB<br/>0:16 猫剑UB、猫拳UB<br/>0:06 狼UB",
	"E4" : "二周目 五王 蟹<br/>圣2仓5伊5黑5妹5 54w<br/>1:07 YLYUB<br/>0:51 YLYUB<br/>0:45 妹法UB、凯露UB、XCWUB<br/>0:36 YLYUB<br/>0:29 圣母UB<br/>0:20 YLYUB<br/>0:14 妹法UB<br/>0:11 凯露UB<br/>0:10 XCWUB<br/>0:07 YLYUB",
	"F3" : "二周目 五王 狂暴蟹<br/>咲5仓5伊5黑5妹5巨蟹座狂暴法刀 50w<br/>1:14 ylyUB<br/>1:02 ylyUB<br/>0:56 充电宝UB<br/>0:52 妹法UB<br/>0:44 ylyUB、xcwUB<br/>0:43 凯露UB<br/>0:30 ylyUB、充电宝UB<br/>0:21 妹法UB<br/>0:16 ylyUB<br/>0:10 凯露UB<br/>0:09 xcwUB<br/>0:07 ylyUB<br/>0:04 充电宝UB",
	"" : ""
};
//作业数据
var works_data = [
// ID BOSSID 平均伤害 作业配置 作业类型 作业数量 参考来源 摸轴人员 审查人员 组合作业ID
//一周目一王
{"id" : "a0", "boss_id" : "A1", "hp" : 115e4, "cfg" : "狗5狼5忍3傻4暴4", "group_type" : group_type.dd, "count" : 30, "src" : "私服轴 BV1oi4y1g7kD BV1gi4y13747", "creater" : "草莓", "checker" : "李维", "cp_id" : [""]},
{"id" : "a3", "boss_id" : "A1", "hp" : 98e4, "cfg" : "狼5猫拳4病4忍3暴4", "group_type" : group_type.dd, "count" : 30, "src" : "", "creater" : "李维特安", "checker" : "少放辣椒", "cp_id" : [""]},
{"id" : "a4", "boss_id" : "A1", "hp" : 102e4, "cfg" : "狗5狼5猫拳5忍3傻4", "group_type" : group_type.dd, "count" : 30, "src" : "私服轴 BV1oi4y1g7kD BV1gi4y13747", "creater" : "私服轴", "checker" : "参考轴", "cp_id" : []},
{"id" : "a5", "boss_id" : "A1", "hp" : 100e4, "cfg" : "狗5狼5猫拳5忍3暴4", "group_type" : group_type.dd, "count" : 30, "src" : "cv6894681", "creater" : "小火慢炖_", "checker" : "", "cp_id" : []},
//二周目一王
{"id" : "A3", "boss_id" : "B1", "hp" : 110e4, "cfg" : "狗5狼5妈4深4傻4", "group_type" : group_type.sy, "count" : 4, "src" : "私服轴 BV1Vs411j7Ut", "creater" : "私服轴", "checker" : "参考轴"},
{"id" : "A0", "boss_id" : "B1", "hp" : 107e4, "cfg" : "狗5狼5妈4深4暴4", "group_type" : group_type.sy, "count" : 30, "src" : "BV1ck4y1m7JD", "creater" : "大花裤衩", "checker" : "草莓"},
{"id" : "A1", "boss_id" : "B1", "hp" : 110e4, "cfg" : "纯4狗5狼4咲5栞5", "group_type" : group_type.hq, "count" : 30, "src" : "BV1T5411a7NB", "creater" : "", "checker" : ""},//TODO
{"id" : "A2", "boss_id" : "B1", "hp" : 100e4, "cfg" : "狗5狼5猫拳5妈4深4", "group_type" : group_type.sy, "count" : 11, "src" : "BV1ik4y1q7vB", "creater" : "头头猫丶", "checker" : "参考轴"},
//一周目二王
{"id" : "b0", "boss_id" : "A2", "hp" : 115e4, "cfg" : "狗5狼5猫拳5妈4深4", "group_type" : group_type.sy, "count" : 4, "src" : "cv6894681", "creater" : "小火慢炖_", "checker" : "参考轴"},
{"id" : "b2", "boss_id" : "A2", "hp" : 120e4, "cfg" : "狗5狼4妈4深4暴4", "group_type" : group_type.sy, "count" : 30, "src" : "cv6894681", "creater" : "草莓", "checker" : "李维特安", "cp_id" : [""]},
{"id" : "b3", "boss_id" : "A2", "hp" : 111e4, "cfg" : "狗5狼5忍3傻4暴4", "group_type" : group_type.dd, "count" : 30, "src" : "", "creater" : "草莓", "checker" : "英普洛"},
{"id" : "b4", "boss_id" : "A2", "hp" : 118e4, "cfg" : "狗5狼5咲5黑猫5栞5", "group_type" : group_type.dd, "count" : 30, "src" : "", "creater" : "草莓", "checker" : ""},
//二周目二王
{"id" : "B0", "boss_id" : "B2", "hp" : 120e4, "cfg" : "纯4狗5狼4傻4栞5", "group_type" : group_type.hq, "count" : 23, "src" : "私服轴 BV1Ls411j7DC", "creater" : "私服轴", "checker" : "参考轴", "cp_id" : ""},
{"id" : "B1", "boss_id" : "B2", "hp" : 112e4, "cfg" : "纯4狗5狼4咲5栞5", "group_type" : group_type.hq, "count" : 30, "src" : "BV1ck4y1m7JD", "creater" : "", "checker" : ""},// TODO
//一周目三王
{"id" : "c0", "boss_id" : "A3", "hp" : 121e4, "cfg" : "狗5狼5猫拳5深5傻4", "group_type" : group_type.sy, "count" : 30, "src" : "BV1wi4y1G74n", "creater" : "小火慢炖_", "checker" : "草莓"},
{"id" : "c1", "boss_id" : "A3", "hp" : 112e4, "cfg" : "纯5狗5狼5咲5栞5", "group_type" : group_type.hq, "count" : 30, "src" : "", "creater" : "少放辣椒", "checker" : ""},
{"id" : "c2", "boss_id" : "A3", "hp" : 122e4, "cfg" : "狗5狼5深5傻4暴5", "group_type" : group_type.sy, "count" : 30, "src" : "BV1ck4y1m7JD", "creater" : "少放辣椒", "checker" : ""},
{"id" : "c3", "boss_id" : "A3", "hp" : 113e4, "cfg" : "狗5狼5猫剑4深5暴5", "group_type" : group_type.sy, "count" : 30, "src" : "", "creater" : "英普洛", "checker" : "司瑛士"},
//二周目三王
{"id" : "C0", "boss_id" : "B3", "hp" : 95e4, "cfg" : "纯4狗5狼5深4栞5", "group_type" : [group_type.sy, group_type.hq], "count" : 30, "src" : "BV1ck4y1m7JD", "creater" : "", "checker" : "", "cp_id" : ["D5"]},// TODO
{"id" : "C4", "boss_id" : "B3", "hp" : 78e4, "cfg" : "纯4狗5狼5妈4深4", "group_type" : [group_type.sy, group_type.hq], "count" : 30, "src" : "BV1ck4y1m7JD", "creater" : "", "checker" : "", "cp_id" : ["D5"]},// TODO
{"id" : "C5", "boss_id" : "B3", "hp" : 95e4, "cfg" : "纯4狗5狼5深4傻4", "group_type" : [group_type.sy, group_type.hq], "count" : 30, "src" : "", "creater" : "大花裤衩", "checker" : "草莓"},
{"id" : "C6", "boss_id" : "B3", "hp" : 72e4, "cfg" : "布4狗5狼5猫剑4深4", "group_type" : group_type.sy, "count" : 30, "src" : "BV1ck4y1m7JD", "creater" : "", "checker" : ""},// TODO
//一周目四王
{"id" : "d0", "boss_id" : "A4", "hp" : 110e4, "cfg" : "狗5狼5深4傻4栞5", "group_type" : group_type.sy, "count" : 30, "src" : "私服轴", "creater" : "私服轴", "checker" : "参考轴"},
{"id" : "d1", "boss_id" : "A4", "hp" : 111e4, "cfg" : "纯4狗5狼4咲5栞5", "group_type" : group_type.hq, "count" : 30, "src" : "BV1T5411a7NB", "creater" : "HelloWorld", "checker" : "草莓"},
//二周目四王
{"id" : "D0", "boss_id" : "B4", "hp" : 106e4, "cfg" : "狗5望5狼5病4深4", "group_type" : group_type.sy, "count" : 30, "src" : "BV1ck4y1m7JD", "creater" : "", "checker" : ""},// TODO
{"id" : "D2", "boss_id" : "B4", "hp" : 101e4, "cfg" : "狗5望5狼5妈4深4", "group_type" : group_type.sy, "count" : 30, "src" : "BV1ck4y1m7JD", "creater" : "", "checker" : ""},// TODO
{"id" : "D1", "boss_id" : "B4", "hp" : 100e4, "cfg" : "纯5狗5狼5猫剑5猫拳5", "group_type" : group_type.hq, "count" : 5, "src" : "私服轴", "creater" : "私服轴", "checker" : "参考轴"},
{"id" : "D3", "boss_id" : "B4", "hp" : 95e4, "cfg" : "空5狗5狼4妈4深4", "group_type" : group_type.sy, "count" : 30, "src" : "BV1ck4y1m7JD", "creater" : "", "checker" : ""},// TODO
{"id" : "D4", "boss_id" : "B4", "hp" : 98e4, "cfg" : "狗5望5狼4妈4傻4", "group_type" : group_type.dd, "count" : 30, "src" : "BV1qs41177oB", "creater" : "ttsp", "checker" : "草莓"},
//一周目五王
{"id" : "e0", "boss_id" : "A5", "hp" : 98e4, "cfg" : "狗5狼5猫剑4深4栞5", "group_type" : group_type.sy, "count" : 30, "src" : "自动刀95W", "creater" : "", "checker" : ""},
{"id" : "e3", "boss_id" : "A5", "hp" : 90e4, "cfg" : "狗5仓5伊5黑5妹5", "group_type" : group_type.dd, "count" : 23, "src" : "BV1ck4y1m7JD", "creater" : "李维特安", "checker" : "草莓"},
{"id" : "e4", "boss_id" : "A5", "hp" : 77e4, "cfg" : "毛4仓5伊5黑5妹5", "group_type" : group_type.dd, "count" : 30, "src" : "BV1Ps41177Te", "creater" : "仙后座凯西奥佩娅", "checker" : "参考轴"},
{"id" : "e5", "boss_id" : "A5", "hp" : 66e4, "cfg" : "姐4仓5伊5黑5妹5", "group_type" : group_type.dd, "count" : 30, "src" : "私服轴", "creater" : "私服轴", "checker" : ""},
//二周目五王
{"id" : "E0", "boss_id" : "B5", "hp" : 57e4, "cfg" : "纯4狗5狼5深4栞5/熊锤2", "group_type" : group_type.sy, "count" : 30, "src" : "BV1ck4y1m7JD", "creater" : "", "checker" : "", "cp_id" : ["D5"]},// TODO
{"id" : "E3", "boss_id" : "B5", "hp" : 54e4, "cfg" : "圣2仓5伊5黑5妹5", "group_type" : group_type.dd, "count" : 30, "src" : "私服轴", "creater" : "私服轴", "checker" : "参考轴"},
{"id" : "E4", "boss_id" : "B5", "hp" : 54e4, "cfg" : "狐5仓5伊5黑5妹5", "group_type" : group_type.dd, "count" : 30, "src" : "BV1ck4y1m7JD", "creater" : "", "checker" : ""},// TODO
{"id" : "E5", "boss_id" : "B5", "hp" : 51e4, "cfg" : "黄5仓5伊5黑5妹5", "group_type" : group_type.dd, "count" : 30},
{"id" : "E6", "boss_id" : "B5", "hp" : 52e4, "cfg" : "猫剑5仓5伊5黑5妹5", "group_type" : group_type.dd, "count" : 30, "src" : "BV1Ks411L7Eh", "creater" : "", "checker" : ""},// TODO
//一周目五王狂暴1:05 yly ub接狗拳ub
{"id" : "f6", "boss_id" : "A6", "hp" : 90e4, "cfg" : "狗5仓5伊5黑5妹5", "group_type" : group_type.dd, "count" : 30, "src" : "BV12T4y1j734", "creater" : "草莓味の狸猫", "checker" : ""},
//二周目五王狂暴
{"id" : "F2", "boss_id" : "B6", "hp" : 64e4, "cfg" : "狼5黄5深4暴5栞5", "group_type" : group_type.sy, "count" : 30, "src" : "BV1ck4y1m7JD", "creater" : "", "checker" : "", "cp_id" : []},// TODO
{"id" : "F3", "boss_id" : "B6", "hp" : 54e4, "cfg" : "咲5仓5伊5黑5妹5", "group_type" : group_type.dd, "count" : 30, "src" : "私服轴", "creater" : "私服轴", "checker" : "参考轴"},
{"id" : "F4", "boss_id" : "B6", "hp" : 56e4, "cfg" : "猫剑5仓5伊5黑5妹5", "group_type" : group_type.dd, "count" : 10, "src" : "BV1ck4y1m7JD", "creater" : "", "checker" : ""}// TODO
];

function Boss (name, id, hp) {
	this.name = name
	this.id = id
	this.hp = hp
	this.lap = id && id.indexOf('A') > -1 ? "一周目":"二周目"
	this.title = this.lap + this.name + this.id;
}
// Boss原型
Boss.prototype = {
	constructor : Boss,
	sayhello : function() {
		if (this.id) {
			console.info("[BOSS] 正在排刀" + this.title + "!");
		}else {
			console.error(this);
		}
	}
}
function Work(id, boss_id, hp, cfg, group_type, count, cp_id) {
	this.status = !id ? false: true;
	//是否启用作业，默认不启用
	this.id = id
	this.boss_id = boss_id, this.hp = hp ? hp: 0;
	this.cfg = cfg;
	this.group_type = group_type;
	this.count = count && count >= 0 && count < 30 ? count: 30;
	this.cp_id = cp_id;
}
// Work原型
// 默认对于每一个boss，都有至少四份缺省作业（深月、黑骑、弟弟、法）。缺省的作业伤害为0
Work.prototype = {
	// id标识 boss标识 平均伤害 描述 刀型类型 最大出刀数
	constructor : Work,
	sayhello:function() {
		if (this.id && this.boss_id) {
			if(RS){
				let boss = RS.get_boss_by_id(this.boss_id);
				if(boss){
					console.info("[WORK] 我是" + boss.title + "作业" + this.id + this.cfg);
				}
			}else{
				console.info("[WORK] 我是 boss : " + this.boss_id + " work : " + this.id + " " + this.cfg);
			}
		}
		else {
			console.error(this);
		}
	}
}

// 作业通俗名称
function get_group_name(_group_type){
	if(typeof _group_type == "object" &&_group_type.indexOf(group_type.sy) > -1 && _group_type.indexOf(group_type.hq) > -1){
		return "三破甲刀";
	}
	switch(_group_type) {
		case 0 : return "深月刀";
		case 1 : return "黑骑刀";
		case 2 : return "弟弟刀";
		default :
		return "错误类型";
	}
}
/*



 */