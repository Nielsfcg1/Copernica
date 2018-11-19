

// loading animation

// switch image

// loading animation + wait timer(http request, blue 3 px, 1 second or random)

// loopable

// remember selection

// mouse cursor

// click outside element





var appController = (function(){
    var elements = {
        avatar: '.selected_avatar',
        popover: '.popover',
        selectAvatar: '.avatar',
        shown: false,
    }

    var setupEventListeners = function()
    {    
        if(document.querySelector(elements.popover)){
            document.querySelector(elements.avatar).addEventListener('click', expandMenu);
        }

       document.querySelector(elements.selectAvatar).addEventListener('click', loadAnimation);
    }


    expandMenu = function()
    {   
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

    loadAnimation = function(el){
        console.log(el);
        switch(el){
            case '1':
            document.getElementById('1').classList.add("animate");
            console.log('added');
            break;
            case '2':
            document.getElementById('2').classList.add("animate");
            break;
            case '3':
            document.getElementById('3').classList.add("animate");
            break;
            case '4':
            document.getElementById('4').classList.add("animate");
            break;
            case '5':
            document.getElementById('5').classList.add("animate");
            break;
            case '6':
            document.getElementById('6').classList.add("animate");
            break;

        }
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