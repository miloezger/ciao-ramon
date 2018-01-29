// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



/*
* 01)
*
* HV Translations
* ©2018 by JRU (Hinderling Volkart)
*/

window.hv = window.hv || {};
(function(window, undefined) {

    var DEFAULTS = {
        selector: '.js-app',
        template: '<div class="js-bubble bubble"><div class="stage"><h1 class="fittext">$(text)</h1><p class="translation">$(text2)</p></div><div class="credits"><p class="author">$(name)</p></div></div>',
        elements: [],
        bubble: {
            selector: '.js-bubble'
        },
        animation: {
            class: 'is-animated',
            out: {
                wait: 150,
                duration: 500,
                class: 'animate-out'
            },
            in: {
                wait: 100,
                duration: 500,
                class: 'animate-in'
            }
        },
        colorNames: ['color-1','color-2','color-3','color-4','color-5','color-6','color-7','color-8','color-9','color-10']
    },
    lib = window.hv,
    $ = window.jQuery;

    function Bubbles(settings) {
        this.config = $.extend(true, {}, DEFAULTS, settings);
        return this;
    }

    lib.Bubbles = Bubbles;
    var fn = Bubbles.prototype;

    fn.init = function() {
        var self = this;
        this.counter = 0;
        this.elements = this.shuffle(this.config.elements);

        this.$display = $(this.config.selector);


        this.displayNext();
        $('.js-next').on('click', function() {
            self.displayNext();
        });

        $(window).keypress(function (e) {
            if (e.keyCode === 0 || e.keyCode === 32 || e.keyCode === 39) {
                e.preventDefault()
                self.displayNext();
            }
        });

        return this;
    };
    fn.setRandomColor = function($el) {
        // remove old color
        var classes = $el.attr('class').split(' '),
        classToRemove = '';

        for (var i = 0; i < classes.length; i++) {
            if (classes[i].startsWith('color-')) {
                classToRemove = classes[i];
            }
        }
        $el.removeClass(classToRemove);



        // new color
        var colors = this.config.colorNames,
        randColorClass = colors[Math.floor(colors.length * Math.random())];

        $el.addClass(randColorClass);
    };


    fn.displayNext = function() {
        var newEl = this.getNext();
        this.draw(newEl, true);
    };


    fn.draw = function(el, animation) {
        var self = this,
        newMarkup = this.templateEngine(this.config.template, el),
        $newEl = $(newMarkup);


        if (!animation) {
            this.$display.empty();
        } else {
            var $oldEl = this.$display.find(this.config.bubble.selector);

            $newEl.addClass(this.config.animation.class);

            this.setAnimateClass($oldEl, this.config.animation.out, function() {
                console.log(self.$display, $oldEl);
                $oldEl.remove();
                console.log('removed');
            });

            this.setAnimateClass($newEl, this.config.animation.in, function() {
                console.log('inserted');
            });
        }


        this.$display.append($newEl);
        this.setRandomColor($newEl);
    };

    fn.setAnimateClass = function($el, animation, cb) {
        var self = this;
        setTimeout(function() {
            $el.addClass(self.config.animation.class).addClass(animation.class);
            setTimeout(function() {
                $el.removeClass(animation.class).removeClass(self.config.animation.class);
                if (cb) cb();
            }, animation.duration);
        }, animation.wait);

    };
    fn.getNext = function() {
        return this.elements[this.counter++ % this.elements.length];
    };

    fn.templateEngine = function(tpl, data) {
        return tpl.replace(/\$\(([^\)]+)?\)/g, function($1, $2) {
            return data[$2] || '';
        });
    };

    fn.shuffle = function(array) {
        var currentIndex = array.length,
        temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

}(window));
