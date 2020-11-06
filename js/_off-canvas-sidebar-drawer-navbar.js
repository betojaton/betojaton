/** SIDEBAR TOGGLE */

let isOpen = function(drawer) {
    return drawer.attr('data-open-drawer') == '1' || drawer.hasClass('open');
},
anyOpenDrawers = function () {
    let anyOpen = false;
    $('.navbar.fixed-top.off-canvas').each(function(){
        if (isOpen($(this)))
        {
            anyOpen = true;
            return false;
        }
    });
    
    return anyOpen;
},
openDrawer = function(drawer) {
    if (!isOpen(drawer))
    {
        if (!anyOpenDrawers())
        {
            let p = drawer.parent();
            if (p.hasClass('drawer-push') || p.hasClass('drawer-slide'))
                p.addClass('open');
            $('body').addClass('drawer-open');
        }
        
        drawer.addClass('open').attr('data-open-drawer', '1');
    }
}, 
closeDrawer = function(e, drawer) {
    if (typeof drawer === 'undefined')
    {
        drawer = $('.navbar.fixed-top.off-canvas.open');
        if (drawer.length === 0)
            drawer = $('.navbar.fixed-top.off-canvas[data-open-drawer="1"]');
    }
    
    let p = drawer.parent();
    drawer.removeClass('open');
    drawer.attr('data-open-drawer', '0');
    
    if (!anyOpenDrawers())
    {
        if (p.hasClass('drawer-push') || p.hasClass('drawer-slide'))
            p.removeClass('open');
        $('body').removeClass('drawer-open');
    }
    
},
getRightDrawer = function() {
    let d = $('.navbar.fixed-top.off-canvas.right-drawer');
    if (d.length === 0)
        d = $('.navbar.fixed-top.off-canvas[data-right-drawer="1"]');
    if (d.length === 0)
        d = null;
    return d;
},
getLeftDrawer = function() {
    let d = $('.navbar.fixed-top.off-canvas:not(.right-drawer)');
    if (d.length === 0)
        return null;
    
    let ld = null;
    d.each(function() {
        if (typeof d.attr('data-right-drawer') === 'undefined' || d.attr('data-right-drawer') == '0')
        {
            ld = d;
            return false;
        }
    });

    return ld;
},
toggleDrawer = function(drawer) {
    if (isOpen(drawer))
        closeDrawer(drawer);
    else
        openDrawer(drawer);
};

$(document).on('click touch', '[data-dismiss="drawer"]', {}, closeDrawer);

$(document).on('click touch', '[data-dismiss="left-drawer"]', {}, function(e) {
    closeDrawer(e, getLeftDrawer());
});

$(document).on('click touch', '[data-dismiss="right-drawer"]', {}, function(e) {
    closeDrawer(e, getRightDrawer());
});

$(document).on('click touch', '[data-open="drawer"]', {}, function() {
    openDrawer($('.navbar.fixed-top.off-canvas:not(.open)'));
});

$(document).on('click touch', '[data-open="left-drawer"]', {}, function() {
    openDrawer(getLeftDrawer());
});

$(document).on('click touch', '[data-open="right-drawer"]', {}, function() {
    openDrawer(getRightDrawer());
});

$(document).on('click touch', '[data-toggle="drawer"]', {}, function() {
    toggleDrawer($('.navbar.fixed-top.off-canvas'));
});

$(document).on('click touch', '[data-toggle="left-drawer"]', {}, function() {
    toggleDrawer(getLeftDrawer());
});

$(document).on('click touch', '[data-toggle="right-drawer"]', {}, function() {
    toggleDrawer(getRightDrawer());
});

swipeDetect($(document)[0], function(dir) {
    let leftDrawer = getLeftDrawer(),
    rightDrawer = getRightDrawer();
    
    if (dir === 'left')
    {
        // close left drawer
        if (leftDrawer.length > 0 && isOpen(leftDrawer))
        {
            closeDrawer(leftDrawer);
        }
        // open right drawer
        else if (rightDrawer.length > 0)
        {
            openDrawer(rightDrawer);
        }
    }
    else if (dir === 'right')
    {
        // close right drawer
        if (rightDrawer.length > 0 && isOpen(rightDrawer))
        {
            closeDrawer(rightDrawer);
        }
        // open left drawer
        else if (leftDrawer.length > 0)
        {
            openDrawer(leftDrawer);
        }
    }
});