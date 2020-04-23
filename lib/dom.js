function appendProperties(el, props) {
    var classes = props.classes;
    delete props.classes;

    if(classes) {
        el.className = classes.join(" ")
    }

    for (const key in props) {
        if (props.hasOwnProperty(key)) {
            const value = props[key];
            el.setAttribute(key, value);
        }
    }

    return el;
}

function element(elementName, props, children) {
    var el = document.createElement(elementName);
    (children || [] ).forEach(function(childElement){
        el.append(childElement)
    });
    return appendProperties(el, props || {});
}

