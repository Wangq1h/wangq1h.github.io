---
layout: page
title: Gallery
icon: fas fa-images
order: 5
---
{% assign gallery = site.data.gallery %}
{% assign featured = gallery.featured %}
{% assign total_images = 0 %}
{% for category in gallery.categories %}
  {% assign category_size = category.images | size %}
  {% assign total_images = total_images | plus: category_size %}
{% endfor %}

<div class="curated-gallery">
  <section class="gallery-hero">
    <div class="gallery-hero-frame">
      <img src="{{ featured.url }}" alt="{{ featured.alt }}" loading="eager" fetchpriority="high">
    </div>

    <div class="gallery-hero-copy">
      <p class="gallery-eyebrow">{{ gallery.meta.eyebrow }}</p>
      <h2 class="gallery-hero-title">{{ gallery.meta.title }}</h2>
      <p class="gallery-lede">{{ gallery.meta.description }}</p>

      <div class="gallery-stats" aria-label="Gallery stats">
        <div class="gallery-stat">
          <span>{{ total_images }}</span>
          <small>幅作品</small>
        </div>
      </div>
    </div>
  </section>

  <nav class="gallery-nav" aria-label="Gallery categories">
    {% for category in gallery.categories %}
      <a href="#{{ category.id }}" class="gallery-nav-chip">
        <span>0{{ forloop.index }}</span>
        <strong>{{ category.name }}</strong>
        <em>{{ category.images | size }} 幅</em>
      </a>
    {% endfor %}
  </nav>

  {% for category in gallery.categories %}
    <section class="gallery-block" id="{{ category.id }}">
      <div class="gallery-block-head">
        <div>
          <p class="gallery-block-index">0{{ forloop.index }}</p>
          <h3>{{ category.name }}</h3>
        </div>
        <p class="gallery-block-summary">{{ category.summary }}</p>
      </div>

      <div class="gallery-carousel-shell">
        <div class="gallery-carousel-track" data-gallery-carousel tabindex="0" aria-label="{{ category.name }}">
          {% for image in category.images %}
            <figure class="gallery-carousel-item">
              <img src="{{ image.url }}" alt="{{ image.alt }}" loading="lazy">
            </figure>
          {% endfor %}
        </div>
      </div>
    </section>
  {% endfor %}
</div>
