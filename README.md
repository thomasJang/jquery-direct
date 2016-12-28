# CDN
## production
```html
<script 
    src="https://cdn.rawgit.com/thomasJang/jquery-direct/master/dist/jquery-direct.min.js">
</script>
```

## development
```html
<script 
    src="https://rawgit.com/thomasJang/jquery-direct/master/dist/jquery-direct.min.js">
</script>
```

# clickAttr

```html
<div style="padding: 5px;" data-btn-wrap="">
    <h3>control</h3>
    <button class="btn btn-default" data-upload-btn="getUploadedFiles">getUploadedFiles</button>
    <button class="btn btn-default" data-upload-btn="removeFileAll">removeFileAll</button>
</div>
```

```js
$(function () {
    $('[data-btn-wrap]').clickAttr(this, "data-upload-btn", {
        "getUploadedFiles": function () {
            console.log("getUploadedFiles");
        },
        "removeFileAll": function () {
            console.log("removeFileAll");
        }
    });
});
```