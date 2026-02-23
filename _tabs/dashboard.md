---
layout: page
title: 私有云柜
icon: fas fa-server
order: 6
---

<style>
  .dash-iframe-wrap {
    width: 100%;
    height: calc(100vh - 250px);
    min-height: 420px;
    border-radius: 0.85rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #e9ecef);
    transition: box-shadow 0.3s ease;
  }
  .dash-iframe-wrap:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  .dash-iframe-wrap iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>

<div class="dash-iframe-wrap">
  <iframe
    src="http://10.89.49.34:5244"
    width="100%"
    height="100%"
    frameborder="0"
    allow="clipboard-write"
    loading="lazy"
    referrerpolicy="no-referrer"
  ></iframe>
</div>

> [!WARNING]
> **混合内容拦截提示：** 由于博客运行在 HTTPS 下，而本地 NAS 运行在 HTTP 下，浏览器默认会拦截此框架的加载。请在浏览器地址栏右侧点击盾牌图标，选择「允许加载不安全的脚本」即可正常访问。此 Dashboard 仅在校园局域网环境下可达。
