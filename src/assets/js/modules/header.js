export function header(){

    const header = document.querySelector('.j-header');
    const header_btn = document.querySelector('.j-header_btn');
    const header_link = document.querySelector('.j-header_link');

    header_btn.addEventListener('click',()=>{
        if(header.classList.contains('active')){
            header.classList.remove('active');
        }else{
            header.classList.add('active');
        }
    });


    $('a[href^="#"]').click(function(){
        if(header.classList.contains('active')){
            header.classList.remove('active');
        }else{
            header.classList.add('active');
        }
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

}