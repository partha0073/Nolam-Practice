var a = 0;

window.addEventListener('scroll', function() {
  var oTop = document.getElementById('counter').offsetTop - window.innerHeight;

  if (a === 0 && window.scrollY > oTop) {
    var counterValues = document.querySelectorAll('.counter-value');
    
    counterValues.forEach(function(counter) {
      var countTo = parseInt(counter.getAttribute('data-count'), 10);
      var countSymb = counter.getAttribute('data-perce');
      var startCount = parseInt(counter.textContent, 10);

      var duration = 7000;
      var startTime = null;

      function animateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;

        var currentCount = Math.floor((progress / duration) * countTo) + startCount;
        counter.textContent = currentCount;

        if (progress < duration) {
          requestAnimationFrame(animateCounter);
        } else {
          counter.textContent = `${countTo}${countSymb || '+'}`;
          // alert('finished');
        }
      }

      requestAnimationFrame(animateCounter);
    });

    a = 1;
  }
});
