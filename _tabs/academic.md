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
      <p class="paper-authors"><i class="fas fa-users fa-fw"></i> {{ paper.authors }}</p>
      <p class="paper-journal"><i class="fas fa-journal-whills fa-fw"></i> {{ paper.journal }}</p>
      <a href="{{ paper.url }}" target="_blank" class="paper-link"><i class="fas fa-file-pdf"></i>下载 PDF</a>
      {% if paper.abstract %}
      <div class="abstract-wrapper" id="abstract-{{ forloop.index }}">
        <p class="abstract-text"><strong>Abstract: </strong>{{ paper.abstract }}</p>
        <div class="abstract-fade"></div>
      </div>
      <button class="abstract-toggle" onclick="toggleAbstract({{ forloop.index }}, this)">
        展开摘要 <i class="fas fa-chevron-down"></i>
      </button>
      {% endif %}
    </div>
  {% endfor %}
</div>

<script>
function toggleAbstract(index, btn) {
  var wrapper = document.getElementById('abstract-' + index);
  var isExpanded = wrapper.classList.contains('expanded');
  wrapper.classList.toggle('expanded');
  btn.classList.toggle('expanded');
  btn.innerHTML = isExpanded
    ? '展开摘要 <i class="fas fa-chevron-down"></i>'
    : '收起摘要 <i class="fas fa-chevron-down"></i>';
}
</script>
