GoogleGadgetsEnvironmentStubs = function() {

  this.gadgets = {};

  this.gadgets.io = {
    //makeRequest: jasmine.createSpy('gadgets.io.makeRequest'),
    makeRequest: function(url,callback,params){},

    //I don't know what values those 'constants' actually have,
    //but for now it's not relevant for my tests - I'm only asserting that they appear
    //in request params in correct places.
    ContentType: {
      DOM: 'DOM'
    },

    MethodType: {
      GET: 'GET',
      POST: 'POST',
      PUT: 'PUT'
    },

    RequestParameters: {
      METHOD: 'METHOD',
      HEADERS: 'HEADERS',
      CONTENT_TYPE: 'CONTENT_TYPE',
      POST_DATA: 'POST_DATA'
    }
  };

  this.gadgets['window'] = {
    adjustHeight: function(){ }
  };

  this.gadgets.Prefs = function() {};
  this.gadgets.Prefs.prototype.getString = function(key) {
    if (key == 'project_id')
      return '2';
    else
      return key + '_value';
  };

  this.google = {};

  this.google.contentmatch = {};
  this.google.contentmatch.getContentMatches = function(){
    return [ {subject: "An email subject"} ];
  };

};
