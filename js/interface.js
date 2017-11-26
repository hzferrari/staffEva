var oInterface = {
	baseUrl: "localhost:8280/aa/",
	getAbilityIntegralsByPhone: function (phone){
		var _json = 0;
		var defer = $.Deferred();		//建立Deferred对象
		$.ajax({
	     	type:'post',
	     	url: this.baseUrl + "/getAbilityIntegralsByPhone.do",
	     	timeout: 5000,	//设置请求时间，超过该时间后，自动退出请求，单位(毫秒)。　
	     	async: true,	//true为异步
	     	headers:{
	     		
	     	},
	     	data: {
	     		phone: phone,
	     	},
	        success: function(json, status, xhr){
	        	console.info("getAbilityIntegralsByPhone success.");
	        	_json = $.parseJSON(json);	//处理返回的json
	        	_json.errorCode = xhr.getResponseHeader("ERRORCODE");

	            defer.resolve(_json);
	        },
	        error: function(xhr){
	        	try{
	        		console.log("ERRORCODE: "+xhr.getResponseHeader("ERRORCODE"));
		        	_json.errorCode = xhr.getResponseHeader("ERRORCODE");

		        	defer.resolve(_json);
	        	}catch(error){
	        		console.log("ajax xhr error");
	        	}
	        }
	    });
		//异步时使用defer对象返回值
		return defer;
	},
	getAbilityScoreChanges: function (phone,abilityId){
		var _json = 0;
		var defer = $.Deferred();		//建立Deferred对象
		$.ajax({
	     	type:'post',
	     	url: this.baseUrl + "/getAbilityScoreChanges.do",
	     	timeout: 5000,	//设置请求时间，超过该时间后，自动退出请求，单位(毫秒)。　
	     	async: true,	//true为异步
	     	headers:{
	     		
	     	},
	     	data: {
	     		phone: phone,
	     		abilityId: abilityId,
	     	},
	        success: function(json, status, xhr){
	        	console.info("getAbilityScoreChanges success.");
	        	_json = $.parseJSON(json);	//处理返回的json
	        	_json.errorCode = xhr.getResponseHeader("ERRORCODE");

	            defer.resolve(_json);
	        },
	        error: function(xhr){
	        	try{
	        		console.log("ERRORCODE: "+xhr.getResponseHeader("ERRORCODE"));
		        	_json.errorCode = xhr.getResponseHeader("ERRORCODE");

		        	defer.resolve(_json);
	        	}catch(error){
	        		console.log("ajax xhr error");
	        	}
	        }
	    });
		//异步时使用defer对象返回值
		return defer;
	},
	getHighestAbilityScore: function (abilityId){
		var _json = 0;
		var defer = $.Deferred();		//建立Deferred对象
		$.ajax({
	     	type:'post',
	     	url: this.baseUrl + "/getHighestAbilityScore.do",
	     	timeout: 5000,	//设置请求时间，超过该时间后，自动退出请求，单位(毫秒)。　
	     	async: true,	//true为异步
	     	headers:{
	     		
	     	},
	     	data: {
	     		abilityId: abilityId,
	     	},
	        success: function(json, status, xhr){
	        	console.info("getHighestAbilityScore success.");
	        	_json = $.parseJSON(json);	//处理返回的json
	        	_json.errorCode = xhr.getResponseHeader("ERRORCODE");

	            defer.resolve(_json);
	        },
	        error: function(xhr){
	        	try{
	        		console.log("ERRORCODE: "+xhr.getResponseHeader("ERRORCODE"));
		        	_json.errorCode = xhr.getResponseHeader("ERRORCODE");

		        	defer.resolve(_json);
	        	}catch(error){
	        		console.log("ajax xhr error");
	        	}
	        }
	    });
		//异步时使用defer对象返回值
		return defer;
	},
	addExamRecords: function (examRecordList){
		var _json = 0;
		var defer = $.Deferred();		//建立Deferred对象
		$.ajax({
	     	type:'post',
	     	url: this.baseUrl + "/addExamRecords.do",
	     	timeout: 5000,	//设置请求时间，超过该时间后，自动退出请求，单位(毫秒)。　
	     	async: true,	//true为异步
	     	headers:{
	     		
	     	},
	     	data: {
	     		examRecordList: examRecordList,
	     	},
	        success: function(json, status, xhr){
	        	console.info("addExamRecords success.");
	        	_json = $.parseJSON(json);	//处理返回的json
	        	_json.errorCode = xhr.getResponseHeader("ERRORCODE");

	            defer.resolve(_json);
	        },
	        error: function(xhr){
	        	try{
	        		console.log("ERRORCODE: "+xhr.getResponseHeader("ERRORCODE"));
		        	_json.errorCode = xhr.getResponseHeader("ERRORCODE");

		        	defer.resolve(_json);
	        	}catch(error){
	        		console.log("ajax xhr error");
	        	}
	        }
	    });
		//异步时使用defer对象返回值
		return defer;
	},
}