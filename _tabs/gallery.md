---
layout: page
title: Gallery
icon: fas fa-images
order: 5
---
## 画廊

{% assign pinned_image = site.data.gallery | where: "pinned", true | first %}
{% if pinned_image %}
<div class="gallery-pinned">
  <img src="{{ pinned_image.url }}" alt="{{ pinned_image.alt }}">
  {% if pinned_image.caption %}
    <p>{{ pinned_image.caption }}</p>
  {% endif %}
</div>
{% endif %}

<div class="gallery-masonry">
  {% for image in site.data.gallery %}
    {% if image.pinned %}{% continue %}{% endif %}
    <div class="gallery-item">
      <img src="{{ image.url }}" alt="{{ image.alt }}">
      {% if image.caption %}
        <p>{{ image.caption }}</p>
      {% endif %}
    </div>
  {% endfor %}
</div>
