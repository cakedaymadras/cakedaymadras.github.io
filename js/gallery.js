//
// 20170903
// Added Photoswipe
//
   
(function($) {
	$('.picture').each( function() {
        var $pic     = $(this),
            getItems = function() {
                var items = [];
                $pic.find('a').each(function() {
                    var $href   = $(this).attr('href'),
                        $size   = $(this).data('size').split('x'),
                        $width  = $size[0],
                        $height = $size[1],
                        $caption = $(this).data('caption');
     
                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height,
                        title : $caption
                    }
     
                    items.push(item);
                });
                return items;
            }
     
        var items = getItems();

        var $pswp = $('.pswp')[0];
        $pic.on('click', 'a', function(event) {
            $("body").addClass("galleryOpen");
            event.preventDefault();
            
            var $index = $(".galleryLink").index(this);
            var options = {
                index: $index,
                bgOpacity: 0.7,
                showHideOpacity: true
            }
             
            // Initialize PhotoSwipe
            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
            lightBox.listen("close", function() { $("body").removeClass("galleryOpen"); });
        });
    });
})(jQuery);