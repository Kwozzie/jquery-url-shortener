/**
* jQuery Bit.Ly Shorten Url Plugin
* @author Uzbekjon
* @link http://jquery-howto.blogspot.com/2009/04/shorten-long-urls-with-jquery-bitly.html
* 
* @author Justin Swan
* @license Creative Commons Attribution-Share Alike 3.0 Australia Licence
* 
* @version 1.0.1
*
* @usage $(input field).shorten_url(long url)
* @return shortened url as value for input field.
*
*/

(function($){
    $.fn.shorten_url = function(url,options){
        // Extend our default options with those provided.
        var opts = $.extend($.fn.shorten_url.defaults, options);

        return this.each(function(){
            $this = $(this);

            // format url to request
            var daurl = "http://api.bit.ly/shorten?"
            +"version="+opts.version
            +"&longUrl="+url
            +"&login="+opts.login
            +"&apiKey="+opts.apiKey
            +"&history="+opts.history
            +"&format=json&callback=?";

            // Utilize the bit.ly API
            $.getJSON(daurl, function(data){
                // Make a good use of short URL
                $this.val(data.results[url].shortUrl);
            });
        });
    };

    $.fn.shorten_url.defaults = {
        version: '2.0.1',
        login: '', // your bit.ly account login
        apiKey: '', // your api key here
        history: '0'
    };

})(jQuery);
