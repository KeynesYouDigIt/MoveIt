
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    var $streetStr = $('#street').val();
    var $cityStr = $('#city').val();

    document.getElementById('derp').innerHTML = $streetStr +', '+ $cityStr;

    var goog_call = '<img class="bgimg" ' +
    'src="http://maps.googleapis.com/maps/api' +
    '/streetview?size=600x300&location='+ $streetStr + ', ' + $cityStr + '\">';

    console.log(goog_call);
    $body.append(goog_call);


    var nyt_key = 'dee9407d33134c76a605df660574d694'

    // Built by LucyBot. www.lucybot.com
    var nyt_url = "https://api.nytimes.com/svc/semantic/v2/geocodes/query.json";
    nyt_url += '?' + $.param({
      'api-key': "dee9407d33134c76a605df660574d694",
      'name': $cityStr
    });
    console.log(nyt_url);
    // $.getJSON(nyt_url, function(data) {
    //     console.log(data)
    // });

    $.ajax({
      url: nyt_url,
      method: 'GET',
      dataType: "JSON",
      jsonp: false
    }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
        console.log('ya dun got the errrr');
        throw err;
    });

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
