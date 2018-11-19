

// loading animation
// add spinner to each avatar
// appear when clicked

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
        
        switch(el){
            case '1':
            document.getElementById('1').classList.add("animate");
            loading = document.getElementById('1').getBoundingClientRect();
            console.log(loading);
            //console.log('y= ' + loading.top + 'x=' + loading.left);
            setLoading();
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

    setLoading = function(){
        document.querySelector('.spinner').style.left = (document.querySelector('.avatar_selection').style.right - loading.left) + 'px';
        document.querySelector('.spinner').style.top = loading.top + 'px';
        console.log(document.querySelector('.spinner').style.top);
        //ring.x = avatar_selection.x - loading.left 
        // ring.y = loading.top
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