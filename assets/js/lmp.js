---
# Main JS File
---

{% include_relative vendor/jquery-3.3.1.slim.min.js %}

{% comment %}
    {% include_relative vendor/jquery.detect_swipe.js %}
    {% include_relative vendor/featherlight.min.js %}
    {% include_relative vendor/featherlight.gallery.min.js %}
{% endcomment %}

/*
 * Lazysizes config
 * This object must be defined before the lazysizes script.
 */
// window.lazySizesConfig = window.lazySizesConfig || {};
// window.lazySizesConfig.lazyClass = 'u-lazyload';
// window.lazySizesConfig.preloadClass = 'u-lazypreload';
// window.lazySizesConfig.loadingClass = 'u-lazyloading';
// window.lazySizesConfig.loadedClass = 'u-lazyloaded';

{% include_relative vendor/lazysizes.min.js %}

{% include_relative vendor/jquery.detect_swipe.js %}
{% include_relative vendor/featherlight.min.js %}
{% include_relative vendor/featherlight.gallery.min.js %}

{% include_relative _mobile-nav.js %}
{% include_relative _spambotscare.js %}

{% include_relative _custom.js %}
