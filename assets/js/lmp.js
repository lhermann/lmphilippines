---
# Main JS File
---

/*
 * jQuery
 */
{% include_relative _vendor/jquery-3.4.0.min.js %}

/*
 * Featherlight lightbox
 */
{% include_relative _vendor/jquery.detect_swipe.js %}
{% include_relative _vendor/featherlight-1.7.13/release/featherlight.min.js %}
{% include_relative _vendor/featherlight-1.7.13/release/featherlight.gallery.min.js %}

/*
 * Lazysizes
 * Simple Lazyloading
 * This object must be defined before the lazysizes script.
 */
// window.lazySizesConfig = window.lazySizesConfig || {};
// window.lazySizesConfig.lazyClass = 'u-lazyload';
// window.lazySizesConfig.preloadClass = 'u-lazypreload';
// window.lazySizesConfig.loadingClass = 'u-lazyloading';
// window.lazySizesConfig.loadedClass = 'u-lazyloaded';

{% include_relative _vendor/lazysizes.min.js %}

/*
 * My own scripts
 */
{% include_relative _mobile-nav.js %}
{% include_relative _spambotscare.js %}
{% include_relative _custom.js %}
