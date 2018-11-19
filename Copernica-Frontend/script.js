
// click event






// switch image

// loading animation + wait timer(http request, blue 3 px, 1 second or random)

// loopable

// remember selection

// animating popup menu

// mouse cursor





var appController = (function(){
    var elements = {
        avatar: '.selected_avatar',
        popover: '.popover',
        shown: false,
    }

    var setupEventListeners = function()
    {    console.log('setup');
        if(document.querySelector(elements.popover)){
            document.querySelector(elements.avatar).addEventListener('click', expandMenu);
        }
    }


    expandMenu = function()
    {   console.log('expandMenu');
    if(elements.shown === false){
        document.querySelector(elements.popover).classList.add("animate");
        elements.shown = true;
        }else{
                hideMenu();
                elements.shown = false;
            }
    }

    hideMenu = function() {
        document.querySelector(elements.popover).classList.remove ('animate');
    }

return {
    init: function()
    {
        console.log('Application has started');
     setupEventListeners();
    }
}


})();
appController.init();