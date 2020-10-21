$.fn.extend({
    fullpage : function (config) {
        var colorArr = config.colorArray || [];
        var allStyle = {
            width : '100%',
            height : '100%',
        };

        var $w = $(this);
        var $section = $w.find('.section');
        var $slide = $section.find('.slide');
        var curWidth = $(window).outerWidth();
        var curHeight = $(window).outerHeight();
        var curIndex = 0;
        var newTop = 0;
        var newLeft = 0;
        var direction = '';
        var lock = true;

        $('html').
            add('body')
                .css({position : 'relative', overflow : 'hidden', margin : 0})
                    .add($w)
                        .add($section)
                            .css(allStyle);

        $w.
            css({position : 'absolute', left : 0, top : 0})
                .find('.section')
                    .each(function (index, ele) {
                        $(ele).css({backgroundColor : colorArr[index], position : 'relative', overflow : 'hidden'})
                            .find('.slide')
                                .wrapAll('<div class="slideWrapper"></div>')
                                    .css({width : curWidth -2, height : curHeight, float : 'left', border : '1px solid red'});
                    });
        
        $('.slideWrapper')
                    .each(function (index ,ele) {
                        $(ele).css({width : $(ele).find('.slide').length * curWidth , height : curHeight, position: 'absolute', top : 0, left : 0});
                    });

        $section.eq(0)
                    .addClass('active')
                        .end()
                            .find('.slideWrapper')
                                .each(function (index, ele) {
                                    $(ele).find('.slide').eq(0).addClass('innerActive');
                                });

        $(document).on('keydown', function (e) {
            
            if (e.which == 38 || e.which == 40) {
                if (e.which == 38 && curIndex != 0) {
                    direction = 'top';
                    config.onLeave && config.onLeave(curIndex, direction);
                    curIndex--;
                    newTop +=  curHeight;
                }

                if (e.which == 40 && curIndex != $section.length - 1) {
                    direction =  'bottom';
                    config.onLeave && config.onLeave(curIndex, direction);
                    curIndex++;
                    newTop -= curHeight;
                }

                $w.animate({
                    top : newTop,
                }, 700, 'swing', function () {
                    $section.eq(curIndex).addClass('active');
                    if (direction == 'top') {
                        $section.eq(curIndex + 1).removeClass('active');
                    };

                    if (direction == 'bottom') {
                        $section.eq(curIndex - 1).removeClass('active');
                    };

                    config.afterLoad && config.afterLoad(curIndex, direction);
                });
            };

            if (lock) {
                if (e.which == 37 || e.which == 39) {
                    lock = false;
                    direction = '';
                    var $sw = $('.active').find('.slideWrapper');
                    var $curShowDom = $sw.find('.innerActive');
    
                    if (e.which == 37 && $curShowDom.index() != 0) {
                        newLeft += curWidth;
                        direction = 'left';
                    };
    
                    if (e.which == 39 && $curShowDom.index() != $sw.find('.slide').length - 1) {
                        newLeft -= curWidth;
                        direction = 'right';
                    };
    
                    $sw.animate({
                        left : newLeft
                    }, 700, 'swing', function () {
                        
                        lock = true;
                        config.onLeave && config.onLeave($curShowDom.index(), direction);
                        if (direction == 'left') {
                            $curShowDom.removeClass('innerActive');
                            $curShowDom.prev().addClass('innerActive');
                            config.afterLoad && config.afterLoad($curShowDom.prev().index(), direction);
                        };
    
                        if (direction == 'right') {
                            $curShowDom.removeClass('innerActive');
                            $curShowDom.next().addClass('innerActive');
                            config.afterLoad && config.afterLoad($curShowDom.next().index(), direction);
                        };
                    });
                };
            };
        });
    }
});