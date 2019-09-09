let idIndex = 2;

function DomElementWithId(element, type, innerHTML) {

    let _element = document.createElement(element ? element : 'div');

    _element.id = idIndex++;

    type ? _element.type = type : null;

    innerHTML ? _element.innerHTML = innerHTML : null;

    return {
        get $element() {
            return _element;
        },
        set $element(element) {
            let id = _element.id;
            _element = document.createElement(element);
            _element.id = id;
        },

        get $type() {
            return _element.type;
        },
        set $type(type) {
            _element.type = type;
        },

        get $innerHTML() {
            return _element.innerHTML;
        },
        set $innerHTML(innerHTML) {
            _element.innerHTML = innerHTML
        }
    };
};


function Post(comment) {
    
    let postBlock = new DomElementWithId('div');

    let replyInput = new DomElementWithId('input', 'text');

    let replySubmit = new DomElementWithId('button', null ,'Reply');

    let wall = new DomElementWithId('div');

    replySubmit.$element.onclick = function() {

        let reply = new DomElementWithId('h3', null, replyInput.$element.value);

        replyInput.$element.value = null;

        wall.$element.prepend(new Post(reply.$element).$element);

    };

    postBlock.$element.append(comment);
    postBlock.$element.append(replyInput.$element);
    postBlock.$element.append(replySubmit.$element);
    postBlock.$element.append(wall.$element);

    postBlock.$element.setAttribute('class', 'COLOR_'+getRandomInt(6))

    return postBlock;
};


function createPost() {

    let postInputField = document.getElementById(0);

    let post = new DomElementWithId('h2', null, postInputField.value);
    
    postInputField.value = null;

    document.getElementById(1).prepend(new Post(post.$element).$element);
};


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}