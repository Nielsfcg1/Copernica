//****DONE*** */

// loading animation
// style border seprately
// loading animation + wait timer(http request, blue 3 px, 1 second or random

//**** TO DO */

// switch image

// loopable

// remember selection

// mouse cursor

// click outside element

// delete obsolete code





var appController = (function(){
    var elements = {
        avatar: '.selected_avatar',
        popover: '.popover',
        selectAvatar: '.avatar',
        selectBorder: '.border',
        animateBorder: 'border.animateBorder',
        shown: false,    
    }
    var newAvatar = 0;

    var setupEventListeners = function()
    {    
        if(document.querySelector(elements.popover)){
            document.querySelector(elements.avatar).addEventListener('click', expandMenu);
        }
        
        document.querySelector(elements.selectBorder).addEventListener('click', loadAnimation);
        
        var whichAvatar = document.querySelectorAll(elements.selectBorder);
            for(var i = 0; i< whichAvatar.length; i++){
                whichAvatar[i].addEventListener('webkitAnimationEnd', hideMenu);
            }        
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
        changeAvatar();
        document.querySelector(elements.popover).classList.remove ('animate');
        document.querySelector(elements.selectBorder).classList.remove('animateBorder');
        elements.shown = false;
        
        
    }

    // el get passed from CSS div
    loadAnimation = function(el){
        console.log(el);
        switch(el){
            case '1':
            document.getElementById('border_1').classList.add("animateBorder");
            newAvatar = '1';
            break;
            case '2':
            document.getElementById('border_2').classList.add("animateBorder");
            newAvatar = '2';
            break;
            case '3':
            document.getElementById('border_3').classList.add("animateBorder");
            newAvatar = '3';
            break;
            case '4':
            document.getElementById('border_4').classList.add("animateBorder");
            newAvatar = '4';
            break;
            case '5':
            document.getElementById('border_5').classList.add("animateBorder");
            newAvatar = '5';
            break;
            case '6':
            document.getElementById('border_6').classList.add("animateBorder");
            newAvatar = '6';
            break;

        }
    }

    changeAvatar = function()
    {
        document.querySelector(elements.avatar).src='images/img' + newAvatar + '.png';
        elements.avatar
        //whichAvatar[i]

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