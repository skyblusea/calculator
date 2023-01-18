require('./style.css');

var $key = function (key) { return (document.querySelector("kbd[data-key='" + key + "'], kbd[data-alt='" + key + "']")); };
var codeToElement = {
    'Delete': $key('\u2716'),
	'Escape': $key('\u2716'),
    'Backspace': $key('\u25C0'),
    'Slash': $key('\u00F7'),
	'Minus': $key('\u2212'),
	'NumpadMultiply': $key('\u00D7'),
	'KeyX': $key('\u00D7'),
	'Minus': $key('\u2212'),
	'Enter': $key('='),
	'Space': $key('=')
};



window.addEventListener('keydown', function (e) {
    console.log(e);
    var el = codeToElement[e.code] || $key(e.key.toLowerCase());
    if (el) {
        el.classList.add('pressed');
        e.preventDefault();
        return el
    }      
});
window.addEventListener('keyup', function (e) {
    var el = codeToElement[e.code] || $key(e.key.toLowerCase());
    if (el) {
        el.classList.remove('pressed');
        e.preventDefault();
    }
});