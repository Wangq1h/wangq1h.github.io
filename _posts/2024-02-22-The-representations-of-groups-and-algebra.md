---
title: 群代数的表示论初步
author: wangq1h
date: 2024-2-22 19:51:00 +0800
categories: [Group Theory]
tags: [群论, 群表示论, 代数]
pin: false
math: true
mermaid: true
---
# The representations of groups and algebra
群的定义：
群是一种代数结构，其定义为：
> 群$\mathbf G$是一个具有四个要素$(G,\cdot,\mathbf I, \mathbf e)$的代数结构:
> * $G$是一个集合。
> * $\cdot$是$G\times G$上的一个二元运算，称为群乘法。其满足$G\times G\rightarrow G$，即对于任意的$a,b\in G$，有$a\cdot b\in G$。
> * $\mathbf I$是$G$上的一个一元运算，称为群逆运算。其满足$G\rightarrow G$，即对于任意的$a\in G$，有$\mathbf I(a)\in G$。
> * $\mathbf e$是$G$上的一个元素，称为群单位元。其满足$\mathbf e\in G$。
> 群乘法需要满足结合代数：
> 
$$
\begin{align}
\forall a,b,c\in G, (a\cdot b)\cdot c=a\cdot(b\cdot c)
\end{align}
$$

> 单位元和逆元满足：
> 
$$
\begin{align}
\forall a\in G, a\cdot\mathbf e=\mathbf e\cdot a=a
\end{align}
$$

> 
$$
\begin{align}
\forall a\in G, a\cdot\mathbf I(a)=\mathbf I(a)\cdot a=\mathbf e
\end{align}
$$

> 一般我们也把逆元简记为$a^{-1}$。同时简记单位元为$\mathbf 1$。

代数作为一种数学结构是环+模，而模moudule其实就是表示representation。

复数域等价于任何一种代数闭域，对于代数开域则未必。

首先在复数域上，首先定义一般线性群：
一般线性群(General Linear Group)定义为：
> 设$V$是一个$n$维向量空间，$GL(V)$是$V$上的可逆线性变换的集合。定义$GL(V)$上的运算为线性变换的复合，则$(GL(V),\circ)$是一个群，称为$V$的一般线性群。
> $\mathrm{GL}(V)\triangleq{f:V\tilde{\rightarrow}V}$即其所有的线性自同构。

从矩阵的角度也可以定义为：
> 建立一个数域$\kappa$，可以为$\mathbb R$或者$\mathbb C$。在这个数域上定义$n$阶可逆矩阵的集合为$GL(n,\kappa)$，定义矩阵的乘法为群乘法，则$(GL(n,\kappa),\cdot)$是一个群，称为$n$阶一般线性群。

群同态：

$$
\begin{align}
\rho:G\rightarrow \mathrm{GL}(V):\\
\rho(g_1g_2)=\rho(g_1)\rho(g_2),\forall g_1,g_2\in G
\end{align}
$$

如果我们找到了群G的这样的一个群同态，则我们称$(V,\rho)$是群G的一个表示。显然，表示由两个元素构成，$V$被称为表示空间。检验一个表示是否是群的表示，需要满足：
* $\forall g\in G,\rho(g)\in \mathrm{GL}(V)$
* $\forall g_1,g_2\in G,\rho(g_1g_2)=\rho(g_1)\rho(g_2)$
一个例子，单位表示：

$$
\begin{align}
\rho(g)\triangleq\mathbf 1,\forall g\in G
\end{align}
$$

群的阶与群元素的阶：$o(G)$指群元素的个数，$o(g):\forall g\in G,\exists m, \text{st}\quad g^m=1$。群元素的阶指生成的循环群的阶。对于有限群，显然有：

$$
\begin{align}
\rho(g)^m=\rho(g^m)=\rho(1)=1_V
\end{align}
$$

群表示还可以是如下的定义：
* $\rho:G\mapsto \mathrm{End}(V)$
* $\rho(1)=1_V$
群表示的本质是观察群在线性空间上的作用，因此我们这么定义：

$$
\begin{align}
G\times V\mapsto V\\
(g,v)\mapsto g\cdot v\triangleq\rho(g)v
\end{align}
$$

回顾：群G作用在集合S上的条件：

$$
\begin{align}
\forall s\in S,1\in G,1\cdot s=s\\
\forall g_1,g_2\in G,s\in S,(g_1g_2)\cdot s=g_1\cdot(g_2\cdot s)
\end{align}
$$

可以看出群作用是线性的：

$$
\begin{align}
g\cdot(k_1v_1+k_2v_2)=\rho(g)(k_1v_1+k_2v_2)=k_1\rho(g)v_1+k_2\rho(g)v_2\\
=k_1\rho(g)v_1+k_2\rho(g)v_2=k_1 g\cdot v_1+k_2 g\cdot v_2
\end{align}
$$

因此，如果我们找到了群G的一个表示$(V,\rho)$，则我们可以定义群G在V上的线性作用。反过来，如果我们定义了群G线性作用在$V$上（群作用在集合上的两点，加上线性性），则利用群表示的第二种定义，即可证明这是一种群表示。
如果$V$有一组基${e_i}$，则$\rho(g)$可以表示为一个矩阵：

$$
\begin{align}
\rho(g)(e_1,\cdots,e_n)=(e_1,\cdots,e_n)=(e_1,\cdots,e_n)R_g\\
\mid R_g\mid \neq 0,R_{g_1g_2}=R_{g_1}R_{g_2}
\end{align}
$$

**正则表示**：正则表示的表示空间是数域$\mathbb F$上以群G的阶$o(G)$为维数的线性空间/其基为群G。正则表示的表示空间$V$的基具有如下几种等价定义：
* ${s_1,s_2,\dots,s_m},m=o(G)$
* ${\rho(s)(\omega)},\omega\in G$，其中$\rho(s)$是正则表示
**群表示的同构**：如果两个表示$(V_1,\rho_1),(V_2,\rho_2)$，要求：
* 线性空间之间同构：$V_1\cong V_2$
* 定义线性空间之间的同构为$f$，则应有$\rho_2(g)f=f\rho_1(g)$。
**定理**:如果存在一个表示$(V,\rho)$。$\exists \omega\in V$ s.t. $V$的基可以是${\rho(g)\cdot\omega}$。那么这个表示与正则表示同构。
**置换表示**群G作用在以群G为基的表示空间上，即$V=\mathbb F^G$，即$V$的基为${e_g},g\in G$。这个表示称为置换表示。