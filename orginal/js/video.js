
      // Load the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Replace the 'ytplayer' element with an <iframe> and
      // YouTube player after the API code downloads.
      var player;
      function onYouTubePlayerAPIReady() {
        player = new YT.Player('ytplayer', {
          height: '720',
          width: '1080',
          playerVars : {
                autoplay : 0
            },
          videoId: 'DNeYfUTA11s'
        });
      }

      $(window).scroll(function() {
        $("iframe").each( function() {
            if( $(window).scrollTop() > $(this).offset().top - 200 ) {
                $(this).css('opacity',1);
                player.playVideo();
            } else {
                $(this).css('opacity',0);
                player.stopVideo();
            }
        }); 
    });
