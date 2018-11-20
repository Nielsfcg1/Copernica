//****DONE*** */

// loading animation
// style border seprately
// loading animation + wait timer(http request, blue 3 px, 1 second or random
// switch image
// loopable

//**** TO DO */

//highlight selected avatar

//insert Jquery and ajust code

// proper html semantics <ul> <li>

// mouse cursor

// click outside element

// delete obsolete code





appController = (function(){
    
    var newAvatar = 1;
    var elements = {
        avatar: '.selected_avatar',
        popover: '.popover',
        selectAvatar: '.avatar',
        selectBorder: '.border',
        animateBorder: 'border.animateBorder',
        shown: false,    
    };
    

    setupEventListeners = function()
    {    
        
        document.querySelector(elements.avatar).addEventListener('click', expandMenu);        
        
        document.querySelector(elements.selectBorder).addEventListener('click', loadAnimation);
        
        var whichAvatar = document.querySelectorAll(elements.selectBorder);
            for(var i = 0; i< whichAvatar.length; i++){
                whichAvatar[i].addEventListener('webkitAnimationEnd', hideMenu);
            };  
            
        document.addEventListener('click', function(event){
            if (event.target.closest('.avatar_elements') || event.target.closest('.top_avatar')){
                
                expandMenu();
            }else{
                hideMenu();

            }
        });  
    };


    expandMenu = function()
    { 
        
        if(elements.shown === false){
            document.querySelector(elements.popover).classList.add("animate");
            document.querySelector(elements.avatar).classList.add('selected');
            
            elements.shown = true;
        }else{
               // hideMenu();
                elements.shown = false;
            };
    };

    hideMenu = function() {
        document.querySelector(elements.popover).classList.remove('animate');
        document.querySelector(elements.avatar).classList.remove('selected');
        
        var selectedBorder = document.querySelectorAll(elements.selectBorder);
        for(var i = 0; i< selectedBorder.length; i++){
            selectedBorder[i].classList.remove('animateBorder');
        }; 
        elements.shown = false;
        changeAvatar();        
    };

    deleteSelection = function(){
        document.querySelector(elements.avatar).classList.remove('selected');
    }

    // el get passed from CSS div
    loadAnimation = function(el){
        console.log(el);
        switch(el){
            case '1':
            document.getElementById('border_1').classList.add("animateBorder");
            newAvatar = '1';
            deleteSelection();
            break;
            case '2':
            document.getElementById('border_2').classList.add("animateBorder");
            newAvatar = '2';
            deleteSelection();
            break;
            case '3':
            document.getElementById('border_3').classList.add("animateBorder");
            newAvatar = '3';
            deleteSelection();
            break;
            case '4':
            document.getElementById('border_4').classList.add("animateBorder");
            newAvatar = '4';
            deleteSelection();
            break;
            case '5':
            document.getElementById('border_5').classList.add("animateBorder");
            newAvatar = '5';
            deleteSelection();
            break;
            case '6':
            document.getElementById('border_6').classList.add("animateBorder");
            newAvatar = '6';
            deleteSelection();
            break;

        };
    };

    changeAvatar = function()
    {
        document.querySelector(elements.avatar).src='images/img' + newAvatar + '.png';

       var selectedBorder = document.querySelectorAll(elements.selectBorder);
        for(var i = 0; i< selectedBorder.length; i++){
            selectedBorder[i].classList.remove('selected');
        };
       // var chosenBorder = document.getElementById(elements.selectBorder);
        document.getElementById('border_' + newAvatar).classList.add("selected");
    };


    

return {
    init: function()
    {
        console.log('Application has started');
        setupEventListeners();
        changeAvatar();
    }
}


})();
appController.init();