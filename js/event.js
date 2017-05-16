function addEvent(element, type, func) {
    try {
        if (element != null && typeof element == 'object') {
            if (-[1, ]) {
                element.addEventListener(type, func);
            } else {
                element.attachEvent('on' + type, func);
            }
        } else {
            throw new Error('有问题啊，小伙子');
        }
    } catch (e) {
        alert(e.message);
    }
}