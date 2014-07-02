(function($) {
 // Hide DM's that are away and move DM's above Channels
  $.fn.updateDirectMessages = function(options) {
    var opts = $.extend({}, $.fn.updateDirectMessages.defaults, options),
        elms = this;

    elms.each(function(){
      if($(this).hasClass(opts.focusClass) && $(this).find('.unread_highlight').is(':hidden')){
        $(this).addClass('hidden').remove();
      }
    })

    $('#channels').insertAfter($('#direct_messages'))
  }

  $.fn.updateDirectMessages.defaults = { exclude : '', focusClass : 'away' };

})(jQuery)