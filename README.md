Godsend
===========

Godsend is a simple javascript library for either pre-loading or lazy-loading assets.

Usage
-----

**Arguments**

* `assetsObj` (required)
* `preload`   (optional.  defaults to `false`)
* `callback`  (optional)

**Examples**

* `assetsObj`:

```javascript
  var assets = {
    basi0g01: {
      src: "assets/basi0g01.png"
    },
    basi0g02: {
      src: "assets/basi0g02.png"
    },
    basi0g04: {
      src: "assets/basi0g04.png"
    },
    basi0g08: {
      src: "assets/basi0g08.png"
    },
    basi0g16: {
      src: "assets/basi0g16.png"
    }
  };
```

* lazy-loading (and using the callback to append):

```javascript
  var lazy = new Godsend( assets );

  $("#dosomething1").on("click", function() {
    lazy.loadAsset( "basi0g01" , function() {
      $("#content").append(lazy.assets.basi0g01);
    });
  });
```

* pre-loading (and using the callback to append all):

```javascript
  var preload = new Godsend( assets , true );
  preload.checkPreLoaded( function() {
    for (var asset in preload.assets) {
      $("#content").prepend(preload.assets[ asset ]);
    }
  });
```
