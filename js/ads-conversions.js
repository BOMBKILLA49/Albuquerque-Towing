// Google Ads conversion tracking for account AW-18312198365 (EDZ Solutions).
// Each label is the part after the slash in "AW-18312198365/xxxxxxxx", from
// Google Ads → Goals → Conversions → the action → Tag setup → "Use Google tag".
// Empty labels are skipped.
(function () {
  var ACCOUNT = 'AW-18312198365';
  var LABELS = {
    phoneCall: 'yQuxCInPsZIdEN3x95tE', // "Click to call": tap on a tel: link
    contactForm: '',                   // contact form sent (successfully-sent.html loads)
  };

  function report(label) {
    if (!label || typeof gtag !== 'function') return;
    gtag('event', 'conversion', { send_to: ACCOUNT + '/' + label });
  }

  // Phone number taps anywhere on the site.
  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('a[href^="tel:"]');
    if (link) report(LABELS.phoneCall);
  });

  // Thank-you page shown after the contact form is sent.
  if (/successfully-sent\.html$/.test(location.pathname)) report(LABELS.contactForm);
})();
