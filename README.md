Godsend.js
===========

Godsend.js is a simple javascript library for either pre-loading or lazy-loading assets.

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
    image1 : {
      src: "assets/image1.png"
    },
    image2 : {
      src: "assets/image2.png"
    },
    image3 : {
      src: "assets/image3.png"
    },
    image4 : {
      src: "assets/image4.png"
    },
    image5 : {
      src :  "assets/image5.png"
    }
  };
```

* lazy-loading (and using the callback to append):

```javascript
  var lazy = new Godsend( assets );

  $("#dosomething1").on("click", function() {
    lazy.loadAsset( "image1" , function() {
      $("#content").append(lazy.assets.image1);
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
