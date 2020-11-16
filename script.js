//------- Navbar Toggler -------------------------------------------------------------------------------------------*/

const mobileToggle = document.getElementsByClassName('mobile-toggle')[0];
const navAppear = document.getElementsByClassName('nav')[0];

mobileToggle.addEventListener('click', () => {
    navAppear.classList.toggle('active')
})



//------- Navbar Shadow On Scroll -------------------------------------------------------------------------------------------*/

const navShadow = document.querySelector("navbar");
const landingPanel = document.querySelector("second-panel");

const landingPanelOptions = {}

const landingPanelScroller = new IntersectionObserver(function(
    entries, landingPanelScroller) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                navShadow.classList.add("nav-scrolled");
            } else {
                navShadow.classList.remove("nav-scrolled");
            }
        });
    }, 
    landingPanelOptions);

    landingPanelScroller.observe(landingPanel);


//------- Second Panel -------------------------------------------------------------------------------------------*/

    $.fn.upform = function() {
  var $this = $(this);
  var container = $this.find(".upform-main");

  $(document).ready(function() {
    $(container).find(".input-block").first().click();
  });

  $($this).find("form").submit(function() {
    return false;
  });

  $(container)
    .find(".input-block")
    .not(".input-block input")
    .on("click", function() {
    rescroll(this);
  });

  $(container).find(".input-block input").keypress(function(e) {
    if (e.which == 13) {
      if ($(this).hasClass("required") && $(this).val() == "") {
      } else moveNext(this);
    }
  });

  $(container).find('.input-block input[type="radio"]').change(function(e) {
    moveNext(this);
  });

  $(window).on("scroll", function() {
    $(container).find(".input-block").each(function() {
      var etop = $(this).offset().top;
      var diff = etop - $(window).scrollTop();

      if (diff > 100 && diff < 300) {
        reinitState(this);
      }
    });
  });

  function reinitState(e) {
    $(container).find(".input-block").removeClass("active");

    $(container).find(".input-block input").each(function() {
      $(this).blur();
    });
    $(e).addClass("active");
    /*$(e).find('input').focus();*/
  }

  function rescroll(e) {
    $(window).scrollTo($(e), 200, {
      offset: { left: 100, top: -200 },
      queue: false
    });
  }

  function reinit(e) {
    reinitState(e);
    rescroll(e);
  }

  function moveNext(e) {
    $(e).parent().parent().next().click();
  }

  function movePrev(e) {
    $(e).parent().parent().prev().click();
  }
};

$(".upform").upform();
$.fn.upform = function() {
  var $this = $(this);
  var container = $this.find(".upform-main");

  $(document).ready(function() {
    $(container).find(".input-block").first().click();
  });

  $($this).find("form").submit(function() {
    return false;
  });

  $(container)
    .find(".input-block")
    .not(".input-block input")
    .on("click", function() {
      rescroll(this);
    });

  $(container).find(".input-block input").keypress(function(e) {
    if (e.which == 13) {
      if ($(this).hasClass("required") && $(this).val() == "") {
      } else moveNext(this);
    }
  });

  $(container).find('.input-block input[type="radio"]').change(function(e) {
    moveNext(this);
  });

  $(window).on("scroll", function() {
    $(container).find(".input-block").each(function() {
      var etop = $(this).offset().top;
      var diff = etop - $(window).scrollTop();

      if (diff > 100 && diff < 300) {
        reinitState(this);
      }
    });
  });

  function reinitState(e) {
    $(container).find(".input-block").removeClass("active");

    $(container).find(".input-block input").each(function() {
      $(this).blur();
    });
    $(e).addClass("active");
    /*$(e).find('input').focus();*/
  }

  function rescroll(e) {
    $(window).scrollTo($(e), 200, {
      offset: { left: 100, top: -200 },
      queue: false
    });
  }

  function reinit(e) {
    reinitState(e);
    rescroll(e);
  }

  function moveNext(e) {
    $(e).parent().parent().next().click();
  }

  function movePrev(e) {
    $(e).parent().parent().prev().click();
  }
};

$(".upform").upform();



//------- Third Panel -------------------------------------------------------------------------------------------*/

var skewed = document.querySelector('.skewed');

window.addEventListener('scroll', function(){
  var value = -10 + window.scrollY/60;
  skewed.style.transform = "skewY("+ value +"deg)"
})