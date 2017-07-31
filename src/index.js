function injectTheScrollTopBtn() {
  var btn = document.createElement('button');
  btn.className = 'chrome-ex__scroll-top';
  document.body.appendChild(btn);

  btn.addEventListener('click', scrollToTop.bind(this, 600));
}

function scrollToTop(scrollDuration) {
  var scrollHeight = window.scrollY,
      scrollStep = Math.PI / ( scrollDuration / 15 ),
      cosParameter = scrollHeight / 2;

  var scrollCount = 0,
      scrollMargin,
      scrollInterval = setInterval(function() {
        if (window.scrollY != 0) {
            scrollCount = scrollCount + 1;  
            scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
            window.scrollTo(0, (scrollHeight - scrollMargin));
        } else clearInterval(scrollInterval); 
      }, 15);
}

function shouldBtnAppear(btn) {
  if (!btn) return false

  return window.scrollY > 200 ? true : false;
}

function setBtnVisibility() {
  var btn = document.querySelector('.chrome-ex__scroll-top')
  if (shouldBtnAppear(btn)) {
    if (btn.className.split(' ').indexOf('appear') < 0) {
      btn.className += ' appear'
    }
  } else {
    btn.className = 'chrome-ex__scroll-top';
  }
}

document.addEventListener('scroll', setBtnVisibility)

function init() {
  injectTheScrollTopBtn()
  console.log('injecting ...')
}



init()