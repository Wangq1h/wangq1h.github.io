---
layout: page
title: 画廊
icon: fas fa-images
order: 5
---
## 画廊

<div class="gallery">
  {% for image in site.data.gallery %}
    <div class="gallery-item">
      <img src="{{ image.url }}" alt="{{ image.alt }}">
      <p>{{ image.caption }}</p>
    </div>
  {% endfor %}
</div>
