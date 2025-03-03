// 古诗数据库
const poemsDatabase = {
    // 山景相关诗句
    mountain: [
        {
            text: "会当凌绝顶，一览众山小",
            title: "望岳",
            author: "杜甫",
            dynasty: "唐",
            content: "岱宗夫如何？齐鲁青未了。\n造化钟神秀，阴阳割昏晓。\n荡胸生层云，决眦入归鸟。\n会当凌绝顶，一览众山小。"
        },
        {
            text: "山重水复疑无路，柳暗花明又一村",
            title: "游山西村",
            author: "陆游",
            dynasty: "宋",
            content: "莫笑农家腊酒浑，丰年留客足鸡豚。\n山重水复疑无路，柳暗花明又一村。\n箫鼓追随春社近，衣冠简朴古风存。\n从今若许闲乘月，拄杖无时夜叩门。"
        },
        {
            text: "远上寒山石径斜，白云生处有人家",
            title: "寻隐者不遇",
            author: "贾岛",
            dynasty: "唐",
            content: "松下问童子，言师采药去。\n只在此山中，云深不知处。"
        },
        {
            text: "横看成岭侧成峰，远近高低各不同",
            title: "题西林壁",
            author: "苏轼",
            dynasty: "宋",
            content: "横看成岭侧成峰，远近高低各不同。\n不识庐山真面目，只缘身在此山中。"
        },
        {
            text: "千山鸟飞绝，万径人踪灭",
            title: "江雪",
            author: "柳宗元",
            dynasty: "唐",
            content: "千山鸟飞绝，万径人踪灭。\n孤舟蓑笠翁，独钓寒江雪。"
        }
    ],
    
    // 水景相关诗句
    water: [
        {
            text: "水光潋滟晴方好，山色空蒙雨亦奇",
            title: "饮湖上初晴后雨",
            author: "苏轼",
            dynasty: "宋",
            content: "水光潋滟晴方好，山色空蒙雨亦奇。\n欲把西湖比西子，淡妆浓抹总相宜。"
        },
        {
            text: "江流天地外，山色有无中",
            title: "汉江临眺",
            author: "王维",
            dynasty: "唐",
            content: "楚塞三湘接，荆门九派通。\n江流天地外，山色有无中。\n郡邑浮前浦，波澜动远空。\n襄阳好风日，留醉与山翁。"
        },
        {
            text: "孤舟蓑笠翁，独钓寒江雪",
            title: "江雪",
            author: "柳宗元",
            dynasty: "唐",
            content: "千山鸟飞绝，万径人踪灭。\n孤舟蓑笠翁，独钓寒江雪。"
        },
        {
            text: "欲把西湖比西子，淡妆浓抹总相宜",
            title: "饮湖上初晴后雨",
            author: "苏轼",
            dynasty: "宋",
            content: "水光潋滟晴方好，山色空蒙雨亦奇。\n欲把西湖比西子，淡妆浓抹总相宜。"
        },
        {
            text: "桃花潭水深千尺，不及汪伦送我情",
            title: "赠汪伦",
            author: "李白",
            dynasty: "唐",
            content: "李白乘舟将欲行，忽闻岸上踏歌声。\n桃花潭水深千尺，不及汪伦送我情。"
        }
    ],
    
    // 云霞相关诗句
    cloud: [
        {
            text: "白云一片去悠悠，青枫浦上不胜愁",
            title: "望天门山",
            author: "李白",
            dynasty: "唐",
            content: "天门中断楚江开，碧水东流至此回。\n两岸青山相对出，孤帆一片日边来。"
        },
        {
            text: "黄河远上白云间，一片孤城万仞山",
            title: "凉州词",
            author: "王之涣",
            dynasty: "唐",
            content: "黄河远上白云间，一片孤城万仞山。\n羌笛何须怨杨柳，春风不度玉门关。"
        },
        {
            text: "云青青兮欲雨，水澹澹兮生烟",
            title: "思美人",
            author: "屈原",
            dynasty: "先秦",
            content: "思美人兮，揽涕而泣兮。\n媒绝路阻兮，言不可结而诒兮。\n蹇蹇之烦冤兮，陷滞而不发兮。\n申旦以舒中情兮，志沈菀而莫达兮。\n愁郁郁之无快兮，居戚戚而不可解兮。"
        },
        {
            text: "落霞与孤鹜齐飞，秋水共长天一色",
            title: "滕王阁序",
            author: "王勃",
            dynasty: "唐",
            content: "豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。"
        },
        {
            text: "大漠孤烟直，长河落日圆",
            title: "使至塞上",
            author: "王维",
            dynasty: "唐",
            content: "单车欲问边，属国过居延。\n征蓬出汉塞，归雁入胡天。\n大漠孤烟直，长河落日圆。\n萧关逢候骑，都护在燕然。"
        }
    ],
    
    // 日落/日出相关诗句
    sunset: [
        {
            text: "大漠孤烟直，长河落日圆",
            title: "使至塞上",
            author: "王维",
            dynasty: "唐",
            content: "单车欲问边，属国过居延。\n征蓬出汉塞，归雁入胡天。\n大漠孤烟直，长河落日圆。\n萧关逢候骑，都护在燕然。"
        },
        {
            text: "夕阳西下，断肠人在天涯",
            title: "天净沙·秋思",
            author: "马致远",
            dynasty: "元",
            content: "枯藤老树昏鸦，小桥流水人家，古道西风瘦马。\n夕阳西下，断肠人在天涯。"
        },
        {
            text: "日暮苍山远，天寒白屋贫",
            title: "逢雪宿芙蓉山主人",
            author: "刘长卿",
            dynasty: "唐",
            content: "日暮苍山远，天寒白屋贫。\n柴门闻犬吠，风雪夜归人。"
        },
        {
            text: "落日照大旗，马鸣风萧萧",
            title: "从军行",
            author: "杨炯",
            dynasty: "唐",
            content: "烽火照西京，心中自不平。\n牙璋辞凤阙，铁骑绕龙城。\n雪暗凋旗画，风多杂鼓声。\n宁为百夫长，胜作一书生。"
        },
        {
            text: "渭城朝雨浥轻尘，客舍青青柳色新",
            title: "送元二使安西",
            author: "王维",
            dynasty: "唐",
            content: "渭城朝雨浥轻尘，客舍青青柳色新。\n劝君更尽一杯酒，西出阳关无故人。"
        }
    ],
    
    // 森林/树木相关诗句
    forest: [
        {
            text: "空山新雨后，天气晚来秋",
            title: "山居秋暝",
            author: "王维",
            dynasty: "唐",
            content: "空山新雨后，天气晚来秋。\n明月松间照，清泉石上流。\n竹喧归浣女，莲动下渔舟。\n随意春芳歇，王孙自可留。"
        },
        {
            text: "月出惊山鸟，时鸣春涧中",
            title: "鸟鸣涧",
            author: "王维",
            dynasty: "唐",
            content: "人闲桂花落，夜静春山空。\n月出惊山鸟，时鸣春涧中。"
        },
        {
            text: "柴门闻犬吠，风雪夜归人",
            title: "逢雪宿芙蓉山主人",
            author: "刘长卿",
            dynasty: "唐",
            content: "日暮苍山远，天寒白屋贫。\n柴门闻犬吠，风雪夜归人。"
        },
        {
            text: "枯藤老树昏鸦，小桥流水人家",
            title: "天净沙·秋思",
            author: "马致远",
            dynasty: "元",
            content: "枯藤老树昏鸦，小桥流水人家，古道西风瘦马。\n夕阳西下，断肠人在天涯。"
        },
        {
            text: "竹外桃花三两枝，春江水暖鸭先知",
            title: "惠崇春江晚景",
            author: "苏轼",
            dynasty: "宋",
            content: "竹外桃花三两枝，春江水暖鸭先知。\n蒌蒿满地芦芽短，正是河豚欲上时。"
        }
    ],
    
    // 雪景相关诗句
    snow: [
        {
            text: "千山鸟飞绝，万径人踪灭",
            title: "江雪",
            author: "柳宗元",
            dynasty: "唐",
            content: "千山鸟飞绝，万径人踪灭。\n孤舟蓑笠翁，独钓寒江雪。"
        },
        {
            text: "柴门闻犬吠，风雪夜归人",
            title: "逢雪宿芙蓉山主人",
            author: "刘长卿",
            dynasty: "唐",
            content: "日暮苍山远，天寒白屋贫。\n柴门闻犬吠，风雪夜归人。"
        },
        {
            text: "忽如一夜春风来，千树万树梨花开",
            title: "白雪歌送武判官归京",
            author: "岑参",
            dynasty: "唐",
            content: "北风卷地白草折，胡天八月即飞雪。\n忽如一夜春风来，千树万树梨花开。\n散入珠帘湿罗幕，狐裘不暖锦衾薄。\n将军角弓不得控，都护铁衣冷难着。\n瀚海阑干百丈冰，愁云惨淡万里凝。\n中军置酒饮归客，胡琴琵琶与羌笛。\n纷纷暮雪下辕门，风掣红旗冻不翻。\n轮台东门送君去，去时雪满天山路。\n山回路转不见君，雪上空留马行处。"
        },
        {
            text: "窗含西岭千秋雪，门泊东吴万里船",
            title: "绝句",
            author: "杜甫",
            dynasty: "唐",
            content: "两个黄鹂鸣翠柳，一行白鹭上青天。\n窗含西岭千秋雪，门泊东吴万里船。"
        },
        {
            text: "白雪却嫌春色晚，故穿庭树作飞花",
            title: "春雪",
            author: "韩愈",
            dynasty: "唐",
            content: "新年都未有芳华，二月初惊见草芽。\n白雪却嫌春色晚，故穿庭树作飞花。"
        }
    ],
    
    // 花卉相关诗句
    flower: [
        {
            text: "春色满园关不住，一枝红杏出墙来",
            title: "游园不值",
            author: "叶绍翁",
            dynasty: "宋",
            content: "应怜屐齿印苍苔，小扣柴扉久不开。\n春色满园关不住，一枝红杏出墙来。"
        },
        {
            text: "接天莲叶无穷碧，映日荷花别样红",
            title: "晓出净慈寺送林子方",
            author: "杨万里",
            dynasty: "宋",
            content: "毕竟西湖六月中，风光不与四时同。\n接天莲叶无穷碧，映日荷花别样红。"
        },
        {
            text: "人面桃花相映红，白发谁家翁媪",
            title: "浣溪沙·游蕲水清泉寺",
            author: "苏轼",
            dynasty: "宋",
            content: "游蕲水清泉寺，寺临兰溪，溪水西流。\n山下兰芽短浸溪，松间沙路净无泥，潇潇暮雨子规啼。\n谁道人生无再少？门前流水尚能西！休将白发唱黄鸡。"
        },
        {
            text: "竹外桃花三两枝，春江水暖鸭先知",
            title: "惠崇春江晚景",
            author: "苏轼",
            dynasty: "宋",
            content: "竹外桃花三两枝，春江水暖鸭先知。\n蒌蒿满地芦芽短，正是河豚欲上时。"
        },
        {
            text: "黄四娘家花满蹊，千朵万朵压枝低",
            title: "清明",
            author: "杜牧",
            dynasty: "唐",
            content: "清明时节雨纷纷，路上行人欲断魂。\n借问酒家何处有，牧童遥指杏花村。"
        }
    ]
};

// 根据图片内容标签获取相关诗句
function getPoemsByTags(tags) {
    const result = [];
    const usedPoems = new Set(); // 用于避免重复诗句
    
    // 遍历每个标签，查找相关诗句
    for (const tag of tags) {
        if (poemsDatabase[tag]) {
            // 从该标签的诗句中随机选择
            const availablePoems = poemsDatabase[tag].filter(poem => !usedPoems.has(poem.text));
            if (availablePoems.length > 0) {
                const randomIndex = Math.floor(Math.random() * availablePoems.length);
                const selectedPoem = availablePoems[randomIndex];
                result.push(selectedPoem);
                usedPoems.add(selectedPoem.text);
                
                // 如果已经选择了3首诗，则停止
                if (result.length >= 3) break;
            }
        }
    }
    
    // 如果标签不足以找到3首诗，从所有类别中随机补充
    while (result.length < 3) {
        // 获取所有类别的键
        const allCategories = Object.keys(poemsDatabase);
        // 随机选择一个类别
        const randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
        // 从该类别中随机选择一首诗
        const categoryPoems = poemsDatabase[randomCategory];
        const availablePoems = categoryPoems.filter(poem => !usedPoems.has(poem.text));
        
        if (availablePoems.length > 0) {
            const randomIndex = Math.floor(Math.random() * availablePoems.length);
            const selectedPoem = availablePoems[randomIndex];
            result.push(selectedPoem);
            usedPoems.add(selectedPoem.text);
        }
    }
    
    return result;
} 