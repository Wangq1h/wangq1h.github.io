---
layout: page
title: Gallery
icon: fas fa-images
order: 5
---
## 画廊

<div class="gallery-masonry">
  {% for image in site.data.gallery %}
    <div class="gallery-item">
      <img src="{{ image.url }}" alt="{{ image.alt }}">
      {% if image.caption %}
        <p>{{ image.caption }}</p>
      {% endif %}
    </div>
  {% endfor %}
</div>
