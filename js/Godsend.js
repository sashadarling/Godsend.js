Godsend = function( assetsObj , preload , callback ) {
  this.assetsObj     = assetsObj;
  this.preload       = preload === true ? preload : false;
  this.isInitialized = false;
  this.fullyLoaded   = false;
  this._loadedAssets = 0;
  this.callback      = callback;
  this.assets        = {};
  if (!this.isInitialized) {
    this.init();
  }
};

Godsend.prototype = {

  init: function() {
    this.isInitialized = true;
    this.assetCount    = this._countAssets();
    try {

      if ( !this.assetsObj ) {
        throw new Error( "Missing assetsObj" );
      }

      if ( this.preload ) {
        this._preloadAssets();
      }

      if ( this.callback ) {
        this.callback();
      }

    } catch( err ) {
      console.log( "ERROR: " + err.message );
    }

  },

/**
* build src/element object
*/
_preloadAssets: function() {
  var self = this;

  try {
    for( var key in this.assetsObj ){
      this.loadAsset( key );
    }
  } catch( err ) {
    console.log( "ERROR: " + err.message );
  }
},

loadAsset: function( assetKey , callback ) {
  var self = this;

  try {
    var asset;
    var i        = this.assetsObj[ assetKey ];
    asset        = new Image();
    asset.onload = function(){
      self._loadedAssets++;
      if( self._loadedAssets === self.assetCount ){
        self.fullyLoaded = true;
      }
      self.assets[ assetKey ] = asset;
      if ( callback ) {
        callback();
      }
    };
    asset.src       = i.src;
    asset.className = assetKey;
  } catch( err ) {
    console.log( "ERROR: " + err.message );
  }
},

checkPreLoaded: function( callback ) {
  var self  = this;
  var check = setInterval(function() {
    if ( self.fullyLoaded === true ) {
      clearInterval( check );
      if ( callback ) {
        callback();
      }
      return true;
    }
    return false;
  }, 250);
},

_countAssets: function(){
  var count = 0;
  for( var key in this.assetsObj ){
    count++;
  }
  return count;
}

};
