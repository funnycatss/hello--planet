$('page-loaded').html( (new Date).toLocaleTimeString() );

$('form input[type="submit"]').click(sendForm);

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/134oriflame@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            comment: $('#comment').val()
        },
        dataType: "json"
    });
    .done(function(){
         $('form')[0].reset();
         $('#msg').html('Thank you!');
    })
    .fail(function(){
        $('#error').html('Sorry, there is an error!');
    });
}