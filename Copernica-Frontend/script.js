

// loading animation
// style border seprately

// switch image

// loading animation + wait timer(http request, blue 3 px, 1 second or random)

// loopable

// remember selection

// mouse cursor

// click outside element





var appController = (function(){
    var loading, elements = {
        avatar: '.selected_avatar',
        popover: '.popover',
        selectAvatar: '.avatar',
        selectBorder: '.border',
        shown: false,
    
    }

    var setupEventListeners = function()
    {    
        if(document.querySelector(elements.popover)){
            document.querySelector(elements.avatar).addEventListener('click', expandMenu);
        }
        
       document.querySelector(elements.selectBorder).addEventListener('click', loadAnimation);
       
       
        
    }


    expandMenu = function()
    {   
        if(elements.shown === false){
            document.querySelector(elements.popover).classList.add("animate");
            // andere class
            elements.shown = true;
        }else{
                hideMenu();
                elements.shown = false;
            }
    }

    hideMenu = function() {
        document.querySelector(elements.popover).classList.remove ('animate');
        //is een andere class geworden
    }
    // el get passed from CSS div
    loadAnimation = function(el){
        switch(el){
            case '1':
            document.getElementById('border_1').classList.add("animateBorder");
            break;
            case '2':
            document.getElementById('border_2').classList.add("animateBorder");
            break;
            case '3':
            document.getElementById('border_3').classList.add("animateBorder");
            break;
            case '4':
            document.getElementById('border_4').classList.add("animateBorder");
            break;
            case '5':
            document.getElementById('border_5').classList.add("animateBorder");
            break;
            case '6':
            document.getElementById('border_6').classList.add("animateBorder");
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