var clydeli = clydeli || {};
clydeli.Type = {};

// Background Image Type
clydeli.Type.bg_img = function(img_src, img_info, img_ratio, img_center) {
	this.src = img_src;
	this.info = img_info;
	this.ratio = img_ratio;
	this.center = img_center;
};
clydeli.Type.bg_img.prototype = {
	get_src : function(){ return this.src; },
	get_info: function(){ return this.info; },
	get_ratio : function(){ return this.ratio; },
	get_center : function(){ return this.center; }
};

// TagsInfo global Type
clydeli.Type.tags_info = function() {
	this.name_type_hash = {};
	this.type_color_hash = {};
	this.name_checked_hash = {};
	this.name_pid_hash = {};
};
clydeli.Type.tags_info.prototype = {
	insert_type : function(tag_type, tag_color, tags_list){
		for( var i=0; i<tags_list.length; ++i) {
			this.name_type_hash[tags_list[i]] = tag_type;
			this.name_checked_hash[tags_list[i]] = true;
			this.name_pid_hash[tags_list[i]] = [];
		}
		this.type_color_hash[tag_type] = tag_color;
	},
	insert_pid : function(name, pid){ this.name_pid_hash[name].push(pid); },
	get_pid_list : function(name){ return this.name_pid_hash[name]; },
	get_name_type_hash : function(){ return this.name_type_hash; },
	set_name_checked : function(type, name){
		switch(type){
			case true:
				this.name_checked_hash[name] = true;
				break;
			case false:
				this.name_checked_hash[name] = false;
				break;
			case 'toggle':
				this.name_checked_hash[name] = !this.name_checked_hash[name];
				break;
			case 'all':
				for(var key in this.name_checked_hash){
					if(this.name_checked_hash.hasOwnProperty(key)) { this.name_checked_hash[key] = true; }
				}
				break;
			case 'none':
				for(var key in this.name_checked_hash){
					if(this.name_checked_hash.hasOwnProperty(key)) { this.name_checked_hash[key] = false; }
				}
				break;
		}
	},
	get_name_checked : function(name){ return this.name_checked_hash[name]; },
	get_type : function(name){ return this.name_type_hash[name]; },
	get_color : function(type){ return this.type_color_hash[type]; }
};
