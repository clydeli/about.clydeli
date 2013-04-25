var clydeli = clydeli || {};
clydeli.Data = {};

// Current Background Image Number
clydeli.Data.BG_Num = 0;

// Background image information
clydeli.Data.BG_imgList = [
	//new clydeli.Type.bg_img('https://lh3.googleusercontent.com/-5y1dQeU3yYw/TjJ7aDf8aXI/AAAAAAAAKBE/wxGVszezlAc/s1440/P1010606.JPG', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5634698332240377633/5634701771340015986" >Shanghai, China  Aug. 2010 </a>', 3/4, 0.55),
	new clydeli.Type.bg_img('https://lh4.googleusercontent.com/-YypRixi8ON8/URSY_eZc_AI/AAAAAAAARso/2nJDYU1go3E/s1440/DSC_1516.jpg', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5842462795263836097/5842462832865377282" >San Francisco, US  Sep. 2012 </a>', 3/4, 0.5),
	new clydeli.Type.bg_img('https://lh5.googleusercontent.com/-zFqyF61Qv6s/TSk_1i5e9_I/AAAAAAAAIao/QFGK2_iM4Yw/s1440/20100731836.jpg', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5560041465274782513/5560045404099114994" >Tokyo, Japan  Jul. 2010 </a>', 3/4, 0.6),
	new clydeli.Type.bg_img('https://lh3.googleusercontent.com/-Tx8HuKsKgRE/SOJE5vsy8II/AAAAAAAACeE/bhkT8AGNAsc/s1440/20080824868.jpg', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5251833612796485585/5251835874315006082" >Alishan, Taiwan  Aug. 2008 </a>', 3/4, 0.65),
	new clydeli.Type.bg_img('https://lh4.googleusercontent.com/-g2m2CwCxBb0/TCyjVNdnKEI/AAAAAAAAGbs/mM3s5dm_V3o/s1440/20100630527.jpg', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5488941284228439281/5488941630644234306?authkey=CKiw89DP_vWYNg" >Google Taiwan  Jun. 2010 </a>', 0.75, 0.6),
	new clydeli.Type.bg_img('https://lh4.googleusercontent.com/-qAPXCuFQ4X4/TU1oHPLax4I/AAAAAAAAJMQ/eNsnuaawGOU/s1440/20100622507.jpg', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5570209861323780065/5570222787669968770" >HSNU, Taiwan  Jun. 2010 </a>', 3/4, 0.3),
	new clydeli.Type.bg_img('https://lh3.googleusercontent.com/-WKls_I1sTvI/SODl7NqSa7I/AAAAAAAACVU/lWIFgScJ0qU/s1440/20080813769.jpg', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5251446656504758577/5251449970956069810" >Bitoujiao, Taiwan  Aug. 2008 </a>', 3/4, 0.5),
	new clydeli.Type.bg_img('https://lh4.googleusercontent.com/-MWw7U58wmy4/UCnrIgVj6JI/AAAAAAAAPu8/klDwpEALN0A/s1440/P1130116.JPG', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5776405569811745793/5776406528431220882" >Taipei, Taiwan  Sep. 2012 </a>', 9/16, 0.5)
];

// Portfolio tags information
clydeli.Data.tagsInfo = new clydeli.Type.tags_info();
clydeli.Data.tagsInfo.insert_type('lang', 'LightBlue', ['C','C++','C#','Java','HTML','CSS','JS','RoR','verilog']);
clydeli.Data.tagsInfo.insert_type('field', 'LightCoral', ['web','architecture','UI','algorithm','game']);
clydeli.Data.tagsInfo.insert_type('type', 'Khaki', ['research','project','book','hackathon']);
clydeli.Data.tagsInfo.insert_type('genre', '#97CCB6', ['indie','CMU','NTU', 'Intel-NTU']);

// Portfolio data
clydeli.Data.Portfolio = [
{
	md5_pid: "8850e3fec7af7a71132b22d8e39b1fd8",
	title: "Sensor Data Visualization",
	header: "Sensor Data Visualization",
	status: { active: true, highlighted: false, content_img_offset: 0 },
	meta_expansion:
		[ { label: "Team Members", content: "Clyde Li, Yuan Ren, Zhipeng Li" },
			{ label: "Role", content: "Front-end Design/Implementation" } ],
	introduction: 'This is an ongoing project as part of the CMU Smart Communities.  It provides web front-end for realtime sensor data visualization.',
	tags: ["HTML", "CSS", "JS", "web", "project", "CMU"]
},
{
	md5_pid: "f1ff23928d9845eae9b3cd324c8bbfae",
	title: "CoCoDoJo",
	header: "CoCoDoJo",
	status: { active: false, date: "Apr. 2013", highlighted: false, content_img_offset: 0 },
	links :
		[ { label: "video", href: "http://www.youtube.com/watch?v=uPRzBykODRE&hd=1" },
			{ label: "website", href: "http://cocodojo.meteor.com/" } ],
	meta_expansion:
		[ { label: "Team Members", content: "Clyde Li, Dan Fortner, Lydian Lee, Sean Xiao, Sky Hu" },
			{ label: "Role", content: "Code Editor Front-end Design and Synchronization" } ],
	introduction: 'CoCoDoJo stands for Coding Collaboration DoJo.  This is five-player team outcome of the one-day hackathon "CMU­SV HTML5 Single Page App Hackathon" where CoCoDojo is awarded of both first-prize and most popular app.',
	tags: ["HTML", "CSS", "JS", "web", "hackathon"]
},
{
	md5_pid: "bdf4c539998cc14284400711b8d4dbc1",
	title: "DMI Hyperwall",
	header: "DMI Hyperwall",
	status: { active: false, date: "Jan. 2013", highlighted: false, content_img_offset: 0 },
	meta_expansion:
		[ { label: "Image Source", content: "<a href='https://plus.google.com/photos/117024013652739364944/albums/5808159325279907217?banner=pwa'>DMI Workshop 2012</a>" } ],
	links :
		[ { label: "CMU DMI", href: "http://www.cmu.edu/silicon-valley/dmi/index.html" },
			{ label: "news appearance", href: "http://abclocal.go.com/kgo/story?section=news/local/south_bay&id=8873344" },
			{ label: "NASA press release", href: "http://www.nasa.gov/centers/ames/news/releases/2012/M12-80.html"} ],
	images:
		[ "https://lh3.googleusercontent.com/-TlUtnLN0b4o/UJrYRgeX8KI/AAAAAAAA55A/SX5rWXR6VkM/s800/DSC_0489.JPG",
			"https://lh5.googleusercontent.com/-_Jw_8_vwOwQ/UJrYVBGLgZI/AAAAAAAA55o/YKsgdML1n1A/s800/DSC_0497.JPG",
			"https://lh6.googleusercontent.com/-jIOiFXnI3ow/UJrYYS2HjpI/AAAAAAAA56Y/U_c-hRIx6-4/s800/DSC_0506.JPG",
			"https://lh5.googleusercontent.com/-ymaz1hprziw/UJrYbxLbNtI/AAAAAAAA560/nT6_JT1CA90/s800/DSC_0512.JPG",
			"https://lh4.googleusercontent.com/-aoEVlwmsKr0/UJq6QbGnKFI/AAAAAAAA5kY/ynFgQw6QQQ0/s800/0016_5824_AA_0033.jpg",
			"https://lh3.googleusercontent.com/-aaSTBnTcBpE/UJq6P5SA6-I/AAAAAAAA5kQ/NM4UEln5kKg/s800/0017_5824_AA_0035.jpg" ],
	introduction: 'Hyperwall is part of the CMU Disaster Management Initiative (DMI) project.  It provides the web front-end to disaster responders on events in the community and the ability of making realtime communications.  In DMI Workshop 2012, I built a Hyperwall client utilizing localStorage and several HTML5 techniques and participated the design of underlying database schema, the outcome is highlighted in the interoperation demo.',
	tags: ["HTML", "CSS", "JS", "web", "project", "CMU"]
},
{
	md5_pid: "2a8e90b7926a3ab2118b067245ace764",
	title: "SHELV",
	header: "SHELV",
	status: { active: false, date: "Sep. 2012", highlighted: false, content_img_offset: 0 },
	links : [ { label: "website", href: "http://shelv.herokuapp.com/" } ],
	introduction: 'A one-week Ruby on Rails practice application as an initial assignment of my CMU foundation course.  The music library is powered by <a href="http://last.fm/">last.fm</a>.  Users can register at SHELV and add/manage music albums they own to showcase their album collection on the Internet.',
	tags: ["HTML", "CSS", "JS", "RoR", "web", "project", "CMU"]
},
{
	md5_pid: "dc95388b403a2ebd4a215dd165198938",
	title: "Method and System for Managing SQL-NoSQL Hybrid Database",
	header: "Method and System for Managing SQL-NoSQL Hybrid Database",
	status: { active: false, date: "Jun. 2012", highlighted: true, content_img_offset: 0 },
	meta_expansion:
		[ { label: "Authors", content: "Chen-Mou Cheng, An-Tai Li, and Song-Ming Wu" } ],
	introduction: 'Designed method and system for managing SQL-NoSQL Hybrid Database to benefit from both database systems. <b>(Taiwan R.O.C. Patent Pending)</b> By properly identifying and allocating different requests, the hybrid system has better overall system performance and compatibility.',
	tags: ["architecture", "research", "Intel-NTU"]
},
{
	md5_pid: "dc345b04b4cb85df04a5f78366201e73",
	title: "Google Chrome Extensions",
	header: "Google Chrome Extensions",
	status: { active: true, highlighted: false, content_img_offset: 0 },
	meta_expansion : [
		{ label: "Links", content: "<br>[<a href='https://chrome.google.com/webstore/detail/force-redraw-img-on-html5/dknhfjmchnkkioajjfplfghahjddedpb'>Force Redraw IMG on HTML5 Canvas</a>]<br>[<a href='https://chrome.google.com/webstore/detail/language-filter-for-your/kbbdopdpfkgjkcggfajenancnnecdbgk'>Language Filter for your Social Websites</a>]" } ],
	introduction: 'Some random Javascripts extensions (generally userscripts) wrote for use with Google Chrome. "Force Redraw IMG on HTML5 Canvas" redraws all IMG elements using HTML5 Canvas, forcing GPU to handle the work. "Language Filter for your Social Websites" helps filter contents of specified languages in your social websites stream.',
	tags: ["JS", "web", "indie"]
},
{
	md5_pid: "ae9b4038dd41f4d779579a34266eebd3",
	title: "Incremental image loading by accumulating differences",
	header: "Incremental image loading by accumulating differences",
	status: { active: true, highlighted: false, content_img_offset: 0 },
	meta_expansion : [
		{ label: "Source", content: "Source code for testing propose would be available when ready." } ],
	introduction: 'This independent research focus on finding an incremental algorithm/mechanism to let webpages load high resolution images little by little instead of download complete new image files.  HTML5 canvas is used as the main tool for manipulating images in this project.',
	tags: ["HTML", "JS", "web", "research", "indie"]
},
{
	md5_pid: "d64ed8a4d9795df5ec63a8a344672f7b",
	title: "tagSearch",
	header: "tagSearch - Search by Tags",
	status: { active: false, date: "Mar. 2012", highlighted: true, content_img_offset: -20 },
	links : [ { label: "website", href: "http://apps.clydeli.com/tagSearch" } ],
	introduction: 'Most search engines provide advanced search abilities by using specified operators, however, not every typical user makes use of it. Integrating the idea to the GUI level by transforming keywords to tags with colors make the concept more clear and adaptable. The new interface also provides a more intuitive experience of manipulating and modifying keywords especially for users on devices with touch screens.',
	tags: ["HTML", "CSS", "JS", "UI", "web", "project", "indie"]
},
{
	md5_pid: "797ab3a6d11c6b032067fc6405ba2d5b",
	title: "Minimal Register Usage Instruction Scheduling",
	header: "Minimal Register Usage Instruction Scheduling",
	status: { active: false, date: "Sep. 2010", highlighted: true, content_img_offset: -128 },
	meta_expansion:
		[ { label: "Research Members", content: "Chiang-Nan Lin, and An-Tai Li" },
			{ label: "Advisor", content: "Professor Chen-Mou Cheng, Ph.D." } ],
	introduction: 'Surveyed and developed a method to find optimal instruction schedule that used minimal number of registers. By combining backtracking search and constraint programming, we could find optimal solutions for basic blocks with up to about one-hundred and fifty instruction lines, approximately double instruction lines compared to prior research.',
	tags: ["C++", "algorithm", "research", "NTU"]
},
{
	md5_pid: "c416e2311cc1b57378f9cb33fccd6fd7",
	title: "Programming with Visual C# 2010 in 16 Lessons",
	header: "Programming with Visual C# 2010 in 16 Lessons",
	status: { active: false, date: "Apr. 2011", highlighted: false, content_img_offset: -10 },
	meta_expansion:
		[ { label: "Authors", content: "Chi-Lung Lee, and An-Tai Li" },
			{ label: "Chinese Title", content: "Visual C# 2010 程式設計16堂課" },
			{ label: "Publishing", content: "GOTOP Information Inc.(碁峰資訊) in April, 2011" },
			{ label: "ISBN", content: "9789862761816" } ],
	links : [ {label: "博客來", href: "http://www.books.com.tw/exep/prod/booksfile.php?item=0010504523" } ],
	introduction: 'A book to help beginners learn the lastest version of Microsoft Visual C# development package in 16 lessons. With rich console and windows examples, the book provides solid fundamentals of C# programming and complete project building experience. The book is written in Traditional Chinese.',
	tags: ["C#", "book", "indie"]
},
{
	md5_pid: "f1b56b11aed66ddafc399cee6c2823bc",
	title: "unofficial Google Images instant",
	header: "unofficial Google Images instant",
	status: { active: false, date: "Sep. 2010", highlighted: false, content_img_offset: 0 },
	links : [ { label: "website", href: "http://apps.clydeli.com/gi_instant" } ],
	introduction: 'A quick web application which is apparently inspired by Google Instant. Search results display on-the-fly when user input query strings. Google web search API is used.<br><br> update: Google has officially launched their beta test of Google Images Instant and Google Web Search API is also deprecated. So this site will not be updated in the future.',
	tags: ["HTML", "CSS", "JS", "web", "project", "indie"]
},
{
	md5_pid: "59bdf583926b496de784a510f0fb4391",
	title: "ARble Maze",
	header: "ARble Maze",
	status: { active: false, date: "Jan. 2010", highlighted: false, content_img_offset: 0 },
	meta_expansion:
		[ { label: "Team Members", content: "Ming-Lun Chou, An-Tai Li, Zhan-Rong Kuo" },
			{ label: "Role", content: "Toolkits Linking, System Integration and Stage Design" },
			{ label: "Course", content: "Network and Multimedia Lab" },
			{ label: "Instructor", content: "Professor Hung-Yu Wei, Ph.D." } ],
	images:
		[ "imgs/portf_WEFFKN_1.jpg", "imgs/portf_WEFFKN_2.jpg", "imgs/portf_WEFFKN_3.jpg" ],
	introduction: 'Developed augmented reality marble maze game written in Java. Users control the maze through webcam. Program is written in Java with NyARToolkit(Augmented Reality), JBox2D(Physics), JMonkey(3D Graphic) libraries.',
	tags: ["Java", "game", "UI", "project", "NTU"]
},
{
	md5_pid: "a716626e8e002267ba0c7b412bef8125",
	title: "CPU with Crypto Instructions",
	header: "CPU with Crypto Instructions",
	status: { active: false, date: "Dec. 2009", highlighted: false, content_img_offset: -16 },
	meta_expansion:
		[ { label: "Research Members", content: "Jakub Szefer, Ming-Shing Chen, and An-Tai Li" },
			{ label: "Advisor", content: "Professor Chen-Mou Cheng, Ph.D." } ],
	introduction: 'Designed and implemented a CPU in hardware description level with built-in special designed instructions for Crypto, targeting on AES/MPKC.',
	tags: ["verilog", "architecture", "research", "NTU"]
},
{
	md5_pid: "a4f0ffcd92c398dc539b67d433668c88",
	title: "Taipei Metro Pricing Query System",
	header: "Taipei Metro Pricing Query System",
	status: { active: false, date: "Jun. 2009", highlighted: false, content_img_offset: -20 },
	meta_expansion:
		[ { label: "Team Members", content: "Ping-Han Soh, An-Tai Li, and Jia-Xun Zheng" },
			{ label: "Role", content: "GUI Design and Programming" },
			{ label: "Course", content: "Embedded System Lab" },
			{ label: "Instructor", content: "Professor Sheng-De Wang, Ph.D." } ],
	links : [ {label: "album", href: "https://picasaweb.google.com/clyde1008li/20090626?feat=directlink" } ],
	images:
		[ "https://lh6.googleusercontent.com/-079Qj_NVWNI/SpFp8uZemjI/AAAAAAAAFU0/_y3V0FdYntw/s400/20090626006.jpg",
			"https://lh4.googleusercontent.com/-JaWXAT0i0qw/SpFqIDR6wPI/AAAAAAAAFVM/cdpdGljT7S8/s400/20090626012.jpg",
			"https://lh6.googleusercontent.com/-3tengWjBg4I/SpFqOm5aBKI/AAAAAAAAFVc/CcquYwzn37k/s400/DSC00391.JPG" ],
	introduction: 'Created Taipei Metro price information query system written in C (with QT4 library) and executed on PXA300, an embedded system with touch screen.',
	tags: ["C", "UI", "project", "NTU"]
},
{
	md5_pid: "f735b0bddc3060a74134bd83a21ed3d4",
	title: "Making Things Easy with Google",
	header: "Making Things Easy with Google",
	status: { active: false, date: "Nov. 2008", highlighted: true, content_img_offset: -20 },
	meta_expansion:
		[ { label: "Co-Authors", content: "Chi-Lung Lee, An-Tai Li" },
			{ label: "Chinese Title", content: "用Google輕鬆過生活" },
			{ label: "Publishing", content: "by GrandTech Information Co.(上奇資訊) in 11/2008" },
			{ label: "ISBN", content: "9789866587306" } ],
	links : [ {label: "博客來", href: "http://www.books.com.tw/exep/prod/booksfile.php?item=0010421376" } ],
	introduction: 'The book makes in-depth introductions of several web services provided by Google and their usage techniques. See how these Google products can help you and how you can benefit from them in daily life. The book is written in Traditional Chinese.',
	tags: ["book", "indie"]
} ];
