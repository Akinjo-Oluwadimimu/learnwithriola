// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "How do you say Hello in chinese?",
    answer: "你好",
    options: [
      "对不起",
      "你好",
      "好",
      "没关系"
    ]
  },
    {
    numb: 2,
    question: "What is the pinyin for the character 你?",
    answer: "Nǐ",
    options: [
      "Nī",
      "Ní",
      "Nǐ",
      "Nì"
    ]
  },
    {
    numb: 3,
    question: "What do you say when you're sorry?",
    answer: "对不起",
    options: [
      "对不起",
      "没关系",
      "你好",
      "您好"
    ]
  },
    {
    numb: 4,
    question: "What does 没关系 mean?",
    answer: "All of the above",
    options: [
      "It doesn't matter",
      "That's OK",
      "All of the above",
      "None of the above"
    ]
  },
    {
    numb: 5,
    question: "Which of the following is true?",
    answer: "您 is the polite form for 'you'",
    options: [
      "你们 is the polite form for 'you'",
      "您 is the polite form for 'you'",
      "您 is the plural form for 'you'",
      "None of the above"
    ]
  },
 {
    numb: 6,
    question: "What does 谢谢 你 mean?",
    answer: "Thank you",
    options: [
      "You're welcome",
      "Hello",
      "Good bye",
      "Thank you"
    ]
  },
    {
    numb: 7,
    question: "Which of the following means 'you're welcome'?",
    answer: "不客气",
    options: [
      "谢谢",
      "不客气",
      "没关系",
      "再见"
    ]
  },
    {
    numb: 8,
    question: "What is the pinyin for '再见'",
    answer: "zàijiàn",
    options: [
      "zàijiàn",
      "zǎijián",
      "zàijiān",
      "zāijiàn"
    ]
  },
    {
    numb: 9,
    question: "How do you respond to 谢谢?",
    answer: "不客气",
    options: [
      "你好",
      "谢谢",
      "不客气",
      "再见"
    ]
  },
    {
    numb: 10,
    question: "Which of the following is false?",
    answer: "再见 means thank you",
    options: [
      "Xièxie is the pinyin for '谢谢'",
      "Hello in Chinese means 你好",
      "不 means no",
      "再见 means thank you"
    ]
  },
	{
	numb: 11,
    question: "Translate '你叫什么名字'?",
    answer: "What is your name?",
    options: [
      "Are you a teacher?",
      "Are you chinese?",
      "What is your name?",
      "What is your occupation?"
    ]
  },
    {
    numb: 12,
    question: "What is the pinyin for the character 我?",
    answer: "Wǒ",
    options: [
      "Wō",
      "Wó",
      "Wǒ",
      "Wò"
    ]
  },
    {
    numb: 13,
    question: "How do you say 'I am Chinese'?",
    answer: "我是中国人",
    options: [
      "我是中国人",
      "我是老师",
      "我是美国人",
      "我是学生"
    ]
  },
    {
    numb: 14,
    question: "What does 叫 mean?",
    answer: "All of the above",
    options: [
      "To call",
      "To be called",
      "All of the above",
      "None of the above"
    ]
  },
    {
    numb: 15,
    question: "Which of the following is true?",
    answer: "老师 means teacher",
    options: [
      "学生 means teacher",
      "美国 means teacher",
      "老师 means teacher",
      "None of the above"
    ]
  },
 {
    numb: 16,
    question: "What does 她 mean?",
    answer: "She / her",
    options: [
      "She / her",
      "He / him",
      "Good bye",
      "Who / whom"
    ]
  },
    {
    numb: 17,
    question: "Which of the following means 'what about you'?",
    answer: "你呢?",
    options: [
      "谁的?",
      "你呢?",
      "汉语?",
      "同学?"
    ]
  },
    {
    numb: 18,
    question: "What is the pinyin for '朋友'",
    answer: "péngyou",
    options: [
      "pěngyou",
      "péngyou",
      "tóngxué",
      "tòngxuě"
    ]
  },
    {
    numb: 19,
    question: "How can you respond to 他是谁?",
    answer: "他是我的老师",
    options: [
      "你是他的老师",
      "他是我的老师",
      "我是他的老师",
      "她是我的老师"
    ]
  },
    {
    numb: 20,
    question: "Which of the following is false?",
    answer: "呢 means which",
    options: [
      "哪 means which",
      "呢 means which",
      "他 is a pronoun",
      "再见 means Good bye"
    ]
  },
{
    numb: 21,
    question: "How do you say 'daughter' in chinese?",
    answer: "女儿",
    options: [
      "女儿",
      "儿子",
      "家",
      "今年"
    ]
  },
    {
    numb: 22,
    question: "What is the pinyin for the character 岁?",
    answer: "Suì",
    options: [
      "Suī",
      "Suí",
      "suǐ",
      "Suì"
    ]
  },
    {
    numb: 23,
    question: "What does '他今年四岁了' mean?",
    answer: "He is four years old",
    options: [
      "There are four people in his family",
      "How old is he?",
      "He is four years old",
      "She is four years old"
    ]
  },
    {
    numb: 24,
    question: "What does 大 mean?",
    answer: "(of age) old",
    options: [
      "year",
      "family",
      "(of age) old",
      "None of the above"
    ]
  },
    {
    numb: 25,
    question: "Which of the following is true?",
    answer: "今年 means this year",
    options: [
      "今年 means this year",
      "谢谢 means hello",
      "有 means this year",
      "None of the above"
    ]
  },
 {
    numb: 26,
    question: "Translate '你会说汉语吗?' ",
    answer: "Can you speak Chinese?",
    options: [
      "Is Chinese food delicious?",
      "I can not speak Chinese",
      "Can you speak Chinese?",
      "Thank you"
    ]
  },
    {
    numb: 27,
    question: "Which of the following means 'Chinese food'?",
    answer: "中国菜",
    options: [
      "中国人",
      "中国菜",
      "吃饭",
      "好吃"
    ]
  },
    {
    numb: 28,
    question: "What is the pinyin for '妈妈'",
    answer: "māma",
    options: [
      "māma",
      "mámā",
      "máma",
      "màma"
    ]
  },
    {
    numb: 29,
    question: "How do you say 'Is Chinese food delicious？'",
    answer: "中国菜好吃吗？",
    options: [
      "你会做中国菜吗？",
      "中国菜很好吃",
      "不客气",
      "中国菜好吃吗？"
    ]
  },
    {
    numb: 30,
    question: "What does '这个字怎么写？' mean?",
    answer: "How do you write this character?",
    options: [
      "How do you read this character?",
      "Is this a chinese character?",
      "How do you write this character?",
      "Do you know how to write this character?"
    ]
  },
	{
	numb: 31,
    question: "Translate '今天几号'?",
    answer: "What's the date today?",
    options: [
      "What's the date today?",
      "Is today Friday?",
      "What is your time?",
      "What is your occupation?"
    ]
  },
    {
    numb: 32,
    question: "What is the pinyin for the character 请?",
    answer: "Qǐng",
    options: [
      "Qīng",
      "Yuē",
      "Qǐng",
      "Yuè"
    ]
  },
    {
    numb: 33,
    question: "How do you say 'What day is it today'?",
    answer: "今天星期几？",
    options: [
      "今天星期几？",
      "昨天是几月几号？",
      "明天是几月几号？",
      "今天是星期三"
    ]
  },
    {
    numb: 34,
    question: "What does 问 mean?",
    answer: "All of the above",
    options: [
      "To ask",
      "To inquire",
      "All of the above",
      "None of the above"
    ]
  },
    {
    numb: 35,
    question: "Which of the following is true?",
    answer: "昨天 means yesterday",
    options: [
      "明天 means yesterday",
      "昨天 means yesterday",
      "昨天 means tomorrow",
      "None of the above"
    ]
  },
 {
    numb: 36,
    question: "What does 喝 mean?",
    answer: "to drink",
    options: [
      "tea",
      "rice",
      "to want",
      "to drink"
    ]
  },
    {
    numb: 37,
    question: "Which of the following means 'I want to buy a cup'?",
    answer: "我想买一个杯子",
    options: [
      "我想买一个杯子",
      "她想吃米饭",
      "我想喝茶",
      "我想去商店"
    ]
  },
    {
    numb: 38,
    question: "What is the pinyin for '吃'",
    answer: "chī",
    options: [
      "chā",
      "hē",
      "chī",
      "hé"
    ]
  },
    {
    numb: 39,
    question: "How can you respond to 你想吃什么?",
    answer: "我想吃米饭",
    options: [
      "我想吃米饭",
      "我想喝米饭",
      "他想吃米饭",
      "她是我的老师"
    ]
  },
    {
    numb: 40,
    question: "Which of the following is false?",
    answer: "上午 means afternoon",
    options: [
      "商店 means store",
      "下午 means afternoon",
      "上午 means afternoon",
      "买 means to buy"
    ]
  },
{
    numb: 41,
    question: "How do you say 'cat' in chinese?",
    answer: "猫",
    options: [
      "猫",
      "在",
      "狗",
      "小"
    ]
  },
    {
    numb: 42,
    question: "What is the pinyin for the character 在?",
    answer: "Zài",
    options: [
      "Zhǔ",
      "zhù",
      "Zái",
      "Zài"
    ]
  },
    {
    numb: 43,
    question: "How do you say 'I work in a school'?",
    answer: "我在学校工作",
    options: [
      "我在医院工作",
      "我想去学校",
      "我在学校工作",
      "我在商店工作"
    ]
  },
    {
    numb: 44,
    question: "What does 下面 mean?",
    answer: "None of the above",
    options: [
      "Above",
      "Beside",
      "All of the above",
      "None of the above"
    ]
  },
    {
    numb: 45,
    question: "Which of the following is true?",
    answer: "医生在医院工作",
    options: [
      "医生在医院工作",
      "小狗 means kitty",
      "椅子 means hospital",
      "None of the above"
    ]
  },
 {
    numb: 46,
    question: "What does 桌子 mean?",
    answer: "All of the above",
    options: [
      "Table",
      "Desk",
      "All of the above",
      "Chair"
    ]
  },
    {
    numb: 47,
    question: "Which of the following means 'you and I'?",
    answer: "你和我",
    options: [
      "你和我",
      "我能",
      "你能",
      "你我坐"
    ]
  },
    {
    numb: 48,
    question: "What is the pinyin for '没有'",
    answer: "méiyǒu",
    options: [
      "méiyóu",
      "měiyǒu",
      "mēiyòu",
      "méiyǒu"
    ]
  },
    {
    numb: 49,
    question: "How can you respond to 我能坐这儿吗?",
    answer: "请坐",
    options: [
      "请坐",
      "谢谢",
      "不客气",
      "桌子上"
    ]
  },
    {
    numb: 50,
    question: "Which of the following is true?",
    answer: "前面 means front",
    options: [
      "前面 means front",
      "前面 means back",
      "上面 means down",
      "下面 means up"
    ]
  },
	{
	numb: 51,
    question: "Translate '现在几点'?",
    answer: "What is the time?",
    options: [
      "What day is it?",
      "Are you chinese?",
      "What is your name?",
      "What is the time?"
    ]
  },
    {
    numb: 52,
    question: "What is the pinyin for the character 时候?",
    answer: "shíhou",
    options: [
      "shìhòu",
      "shǐhou",
      "shíhòu",
      "shíhou"
    ]
  },
    {
    numb: 53,
    question: "What is 'to live / to stay' in Chinese?",
    answer: "住",
    options: [
      "前",
      "回",
      "住",
      "会"
    ]
  },
    {
    numb: 54,
    question: "What does 回 mean?",
    answer: "To return",
    options: [
      "To return",
      "Can",
      "All of the above",
      "None of the above"
    ]
  },
    {
    numb: 55,
    question: "Which of the following is true?",
    answer: "电影 is diànyǐng",
    options: [
      "电影 is diànyíng",
      "电影 is diáyǐng",
      "电影 is diànyǐng",
      "None of the above"
    ]
  },
 {
    numb: 56,
    question: "What does 热 mean?",
    answer: "Hot",
    options: [
      "Cold",
      "Weather",
      "Rain",
      "Hot"
    ]
  },
    {
    numb: 57,
    question: "Which of the following means 'will it rain today'?",
    answer: "今天会下雨吗?",
    options: [
      "今天会下雨吗?",
      "今天会下雨",
      "今天很冷",
      "今天冷吗？?"
    ]
  },
    {
    numb: 58,
    question: "What is the pinyin for '水果'",
    answer: "shuǐguǒ",
    options: [
      "shēntǐ",
      "shuǐguǒ",
      "shuíguó",
      "shěnti"
    ]
  },
    {
    numb: 59,
    question: "How can you respond to 今天天气怎么样?",
    answer: "太冷了",
    options: [
      "太冷了",
      "他不会来",
      "我身体不太好",
      "她是我的老师"
    ]
  },
    {
    numb: 60,
    question: "Which of the following is false?",
    answer: "雨 means snow",
    options: [
      "雨 means snow",
      "小姐 means miss",
      "雨 is a rain",
      "再见 means Good bye"
    ]
  },
{
    numb: 61,
    question: "How do you say 'study' in chinese?",
    answer: "学习",
    options: [
      "学校",
      "学习",
      "下雨",
      "今年"
    ]
  },
    {
    numb: 62,
    question: "What is the pinyin for the character 给?",
    answer: "Gěi",
    options: [
      "Gēi",
      "Géi",
      "Gěi",
      "Gèi"
    ]
  },
    {
    numb: 63,
    question: "What does '我喜欢看电影' mean?",
    answer: "I like seeing movies",
    options: [
      "I like watching TV",
      "I don't like seeing movies",
      "I like seeing movies",
      "None of the above"
    ]
  },
    {
    numb: 64,
    question: "What does 喜欢 mean?",
    answer: "To like",
    options: [
      "To like",
      "To have",
      "(of age) old",
      "None of the above"
    ]
  },
    {
    numb: 65,
    question: "Which of the following is true?",
    answer: "今年 means this year",
    options: [
      "今年 means this year",
      "谢谢 means hello",
      "电视 means movie",
      "None of the above"
    ]
  },
 {
    numb: 66,
    question: "Translate '你买什么了?' ",
    answer: "What did you buy?",
    options: [
      "Where did you go to?",
      "What did you buy?",
      "What are you doing?",
      "Thank you"
    ]
  },
    {
    numb: 67,
    question: "Which of the following means 'Apples'?",
    answer: "苹果",
    options: [
      "好吃",
      "水果",
      "吃饭",
      "苹果"
    ]
  },
    {
    numb: 68,
    question: "What is the pinyin for '车'",
    answer: "chē",
    options: [
      "chē",
      "ché",
      "chě",
      "chè"
    ]
  },
    {
    numb: 69,
    question: "How do you say 'When will he return？'",
    answer: "他什么时候能回来？",
    options: [
      "你会做中国菜吗？",
      "中国菜很好吃",
      "他什么时候能回来？",
      "中国菜好吃吗？"
    ]
  },
    {
    numb: 70,
    question: "What does '开车？' mean?",
    answer: "To drive a car",
    options: [
      "To drive a car",
      "To return home",
      "To buy a car",
      "None of the above"
    ]
  },
	{
	numb: 71,
    question: "Translate '很高兴认识你'?",
    answer: "Nice to meet you",
    options: [
      "I came here by plane",
      "Is today Friday?",
      "What is your time?",
      "Nice to meet you"
    ]
  },
    {
    numb: 72,
    question: "What is the pinyin for the character 听?",
    answer: "Tīng",
    options: [
      "Tīng",
      "Nián",
      "Tǐng",
      "Tìng"
    ]
  },
    {
    numb: 73,
    question: "What is the character for the pinyin 'huí'?",
    answer: "回",
    options: [
      "会",
      "好",
      "回",
      "来"
    ]
  },
    {
    numb: 74,
    question: "What does 饭店 mean?",
    answer: "Restaurant",
    options: [
      "Restaurant",
      "Store",
      "All of the above",
      "None of the above"
    ]
  },
    {
    numb: 75,
    question: "Which of the following is true?",
    answer: "None of the above",
    options: [
      "明天 means yesterday",
      "下午 means yesterday",
      "昨天 means tomorrow",
      "None of the above"
    ]
  },
];