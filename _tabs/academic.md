---
layout: page
title: publication
icon: fas fa-book
order: 6
---
## 学术文章

<div class="academic-articles">
  {% for paper in site.data.academic %}
    <div class="academic-article-item">
      <h2>{{ paper.title }}</h2>
      <p>{{ paper.authors }}</p>
      <p>{{ paper.journal }}</p>
      <a href="{{ paper.url }}" target="_blank">下载 PDF</a>
      <p>{{ paper.abstract }}</p>
    </div>
  {% endfor %}
</div>
