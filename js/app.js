const url = 'https://api.nasa.gov/planetary/apod?api_key=L3tjK74SFIHWnUxJV42uRf1abUIxoxbB9ca7D9tL';

$(() => {
    console.log('hello')
    load();
})

function load(){
    $.ajax({
        url: url
    }).done(function(response){
        console.log(response);
        bg(response.hdurl, response.explanation, response.date);
        images(response);
    }).fail(function(error){
        console.log(error.status)
    })
}

let bg = (source, explanation, day) => {
    const sectionBg = $('section.welcome-section'),
          p1 = $('.welcome-about').find('p').eq(0),
          p2 = $('.welcome-about').find('p').last();
    sectionBg.css('background', `url('${source}')`).css('background-repeat', 'no-repeat').css('background-size', 'cover');
    p1.text(day);
    p2.text(explanation);
}

let images = source => {
    let img = $('img');
    img.attr('src', source)
}