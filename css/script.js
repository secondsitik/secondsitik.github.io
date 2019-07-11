// Fcontent slider
const text_block = document.querySelector('#text'),
    arrowl = document.querySelector('#left_fcontent'),
    arrowr = document.querySelector('#right_fcontent'),
    pages = document.querySelector('#pages'),
    texts = ['It was always a pleasure<br>doing bussiness with them.<br>I love the quality of work.', 'text 2<br>text 2<br>text 2', 'text 3<br>text 3<br>text 3', 'text 4<br>text 4<br>text 4', 'text 5<br>text 5<br>text 5', 'text 6<br>text 6<br>text 6', 'text 7<br>text 7<br>text 7', 'text 8<br>text 8<br>text 8', 'text 9<br>text 9<br>text 9', 'text 10<br>text 10<br>text 10'],
    textsp = ['1/10', '2/10','3/10', '4/10', '5/10', '6/10', '7/10' , '8/10' , '9/10', '10/10'];
    let i=0;
    
    text_block.innerHTML = texts[0];
    pages.innerHTML = textsp[0];
    
    arrowr.addEventListener('click', function() {
        i++;
        if(i==10){i=0;}
        text_block.innerHTML = texts[i];
        pages.innerHTML = textsp[i];
    });
    arrowl.addEventListener('click', function() {
        if(i==0){i=10;}
        i--;
        text_block.innerHTML = texts[i];
        pages.innerHTML = textsp[i];
    });
// Main slider
const main_arrowl = document.querySelector('#mainarrowl'),
    main_arrowr = document.querySelector('#mainarrowr'),
    main_textsh1 = ['THE BEST SERVICES','text 2', 'text 3', 'text 4'];
    main_textsp = ['We provide the best services in the world We provide the best services in the world We provide the best services in the world', 'text 2', 'text 3', 'text 4'],
    main_h1 = document.querySelector('#main_h1'),
    main_p = document.querySelector('#main_p');
let j = 0;

    main_h1.innerHTML = main_textsh1[0];
    main_p.innerHTML = main_textsp[0];
    
    main_arrowr.addEventListener('click', function() {
        i++;
        if(i==4){i=0;}
        main_h1.innerHTML = main_textsh1[i];
        main_p.innerHTML = main_textsp[i];
    });
    main_arrowl.addEventListener('click', function() {
        if(i==0){i=4;}
        i--;
        main_h1.innerHTML = main_textsh1[i];
        main_p.innerHTML = main_textsp[i];
    });

