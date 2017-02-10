$(document).ready(function(){
    //Mark encrypted posts and hide them
    $('.post').each(function(){
        text = $(this).text();
        if(text.search('PGP MESSAGE') != -1){
            $(this).addClass('pp nodisplay');
            $(this).html('<p>' + $.trim(text.replace('—–BEGIN PGP MESSAGE—–', '-----BEGIN PGP MESSAGE-----').replace('—–END PGP MESSAGE—–','-----END PGP MESSAGE-----')) + '</p><hr>');
        }
    });

    //Show body
    $('body').removeClass('invisible');

    //Used to update post text (p tag in a post)
    function updateP(p, post, result){
        p.html(result.data);
        post.removeClass('pp nodisplay');
        post.addClass('pd');
    }

    $('#showposts').click(function(){
        password = prompt();
        $('.post.pp').each(function(){
            post = $(this);
            p = post.find('p').first();
            options = {
                message: openpgp.message.readArmored(p.text()),
                password: password
            };
            openpgp.decrypt(options).then(updateP.bind(null, p, post));
        });
    })
});

