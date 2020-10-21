var pageEngine = {
    init : function (selector, colorArray) {
        this.$w = $(selector);
        this.colorArray = colorArray;
        this.sildeFlag = false;
        return this;
    },

    addSection : function (className) {
        this.slideFlag = false;
        this.$section = $('<div class="section"></div>');
        this.$section.addClass(className);
        this.$section.appendTo(this.$w);
        return this;
    },

    addSlide : function (className) {
        this.slideFlag = true;
        this.$slide = $('<div class="slide"></div>');
        this.$slide.addClass(className).css('position', 'relative');
        this.$slide.appendTo(this.$section);
        return this;
    },

    addComponent : function (config) {
        switch (config.type) {
            case 'base' : var component = componentFactory(config); break;
            case 'super' : var component = componentSuper(config); break;
        };

        this.slideFlag ? this.$slide.append(component) : this.$section.append(component);
        return this;
    },

    bindEvent : function () {
        this.$w.find('.section')
            .on('_leave', function () {
                $(this).find('.component').trigger('cpLeave');
            })
                .on('_load', function () {
                    $(this).find('.component').trigger('cpLoad');
                });
        return this;
    },

    load : function () {
        this.$w.fullpage({
            colorArray : this.colorArray,
            onLeave : function (index, direction) {
                $('.section').eq(index).trigger('_leave');
            },
            afterLoad : function (index, direction) {
                $('.section').eq(index).trigger('_load');
            },
        });
        this.$w.find('.section').eq(0).trigger('_load');
        return this;
    },
};