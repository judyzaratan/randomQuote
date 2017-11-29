$(document).ready(function() {

  $("#generateQuote").click(randomQuote);

  function randomQuote() {
    console.log('function ran');

    $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      }
    }).done(loadj);
  };
  randomQuote();

  function loadj(data) {
    var encodeStr = "";
    $(".quote").text(data.quoteText);
    data.quoteAuthor ? data.quoteAuthor : "Anonymous";
    authorText = " - " + data.quoteAuthor
    $(".author").text(authorText);

    encodeQuote = encodeURI("\'" + data.quoteText + "\'");
    encodeAuthor = encodeURI(authorText)
    $(".twitter-share-button").attr("href",
      "https://twitter.com/intent/tweet?text=" + encodeQuote + encodeAuthor)
  };
});
