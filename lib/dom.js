function appendProperties(el, props) {
    var classes = props.classes;
    var style = props.style;
    delete props.classes;
    delete props.style;


    if(classes) {
        el.className = classes.join(" ")
    }

    if(style) {
        for (const key in style) {
            if (style.hasOwnProperty(key)) {
                const value = style[key];
                el.style[key] = value;
            }
        }
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

