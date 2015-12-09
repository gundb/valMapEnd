# val map end

It's basically `.map().val()` that tells you when it's done.

You can listen for two events:
- full object loaded
- full group iterated over

```javascript
function each(object) {
	console.log('Another object:', object);
}
function ended(collection) {
	console.log('Done mapping over:', collection);
}

gun.valMapEnd(each, ended)
```

> **Note:** valMapEnd doesn't have the performance benefits `.map()` itself does