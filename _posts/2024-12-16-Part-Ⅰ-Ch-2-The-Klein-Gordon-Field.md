---
title: The Klein-Gordon Field
author: wangq1h
date: 2023-05-08 12:00:00+0800
categories: [Quantan Field Theory, Peskin's Book]
Tags: [Peskin, Klein-Gordon Field]
math: true
pin: true
---

# Part Ⅰ Ch 2 The Klein-Gordon Field

 量子场论是对场的量子化。是研究微观——Quantum-mechanical scale和高能——relativistic energies最好的工具。

## The necessity of the Field Viewpoint

* 在高能情况中，我们不能用粒子量子化的视角来看待和研究。因为质能方程其实就说明了单粒子是不存在的。
* 同时，我们如果对单粒子写Klein-Gordon方程，会得到负能量态，这说明一定条件下（高能），我们会得到正负粒子对。而对于多粒子态，即使能量不够，我们有时也会得到正负粒子对。
* Causality(因果性)：

考虑自由粒子传播的概率幅，也就是其时间演化算符：

$$
\begin{align}
U(t)=\bra{x}e^{iHt}\ket{x_0}
\end{align}
$$

其中，自由粒子的哈密顿量为$\frac{p^2}{2m}$。所以有：

$$
\begin{align}
U(t)=\bra{x}e^{i\frac{\vec{p}^2}{2m}t}\ket{x_0}\\
=\int \mathrm{d}^3p\bra{x}e^{i\frac{\vec{p}^2}{2m}t}\ket{p}\bra{p}\ket{x_0}\\
\end{align}
$$

这里使用了连续谱中的动量本征态的完备性。由于动量本征态在位置表象中投影为平面波，且自由粒子的哈密顿算符和动量算符相容，所以有：

$$
\begin{align}
\int \mathrm{d}^3pe^{i\frac{\vec{p}^2}{2m}t} \bra{x}\ket{p}\bra{p}\ket{x_0}\\
=\int\mathrm{d}^3p e^{i\frac{\vec{p}^2}{2m}t}\frac1{(2\pi)^3}e^{i(\vec{p}(\vec{x}-\vec{x_0}))}\\
=(\frac{m}{2\pi i t})^{\frac32}\exp\frac{i m (\vec{x}-\vec{x_0})^2}{2t}
\end{align}
$$

> 注意，书中采取的是"God-given Units"

但是这个几率幅是违反相对论的，由于：

$$
\begin{align}
\forall \vec{x},\lim_{t\rightarrow 0}\norm{U(t)}\rightarrow\infty
\end{align}
$$

即使采用相对论性的能量动量关系：$E=\sqrt{p^2+m^2}$。在甚高速条件下（outside the light cone），我们得到一个近似解：

$$
\begin{align}
U(t)\sim e^{-m\sqrt{x^2-t^2}}
\end{align}
$$

虽然会很小，但几率依然是非零的。所以一次量子化后的量子力学是非相的，自然也是反因果的。

## Elements of Classical Field Theory

学习qft需要从经典场论入手。

### Lagrangian Field Theory

所谓场，就是值随时空坐标连续变化的量，我们用$\phi=\phi(x,t)$来一般地表示一个场，它可以有各种内部的自由度（比如自旋，同位旋等），但我们不将这些自由度显式地写出。

由于拉式量是非相的，所以我们将拉式量表示为：

$$
\begin{align}
S=\int L \mathrm{d}t=\int \mathscr{L}d^4x
\end{align}
$$

在四维时空测度下，拉式量密度$\mathscr{L}$是洛伦兹协变的。类同拉格朗日量，其一般写成：

$$
\begin{align}
\mathscr{L}=\mathscr{L}(\phi,\partial_{\mu}\phi)
\end{align}
$$

最小作用量定理仍然 成立，因而我们有类似的推导：

$$
\begin{align}
\begin{align*}
0&=\delta S\\
&=\int\mathrm{d}^4x{\frac{\partial\mathscr{L}}{\partial \phi}\delta\phi+\frac{\partial\mathscr{L}}{\partial(\partial_{\mu}\phi)}\delta(\partial_{\mu}\phi) }\\
&=\int\mathrm{d}^4x{\frac{\partial\mathscr{L}}{\partial \phi}\delta\phi-\partial_{\mu}(\frac{\partial\mathscr{L}}{\partial(\partial_{\mu}\phi)})\delta\phi +\partial_{\mu}(\frac{\partial\mathscr{L}}{\partial(\partial_{\mu}\phi)}\delta\phi)}\\
\end{align*}
\end{align}
$$

这里使用了分部积分。我们最终推得：

$$
\begin{align}
\partial_{\mu}(\frac{\partial{\mathscr{L}}}{\partial(\partial_{\mu}\phi)})-\frac{\partial\mathscr{L}}{\partial\phi}=0
\end{align}
$$


### Hamiltonian Field Theory

“假装”空间坐标是离散的，我们构造场的动量：

$$
\begin{align}
p(\vec{x})=\frac{\partial L}{\partial\dot{\phi}(\vec{x})}\sim\frac{\partial }{\partial\dot{\phi}(\vec{x})}\sum_{\vec{y}}\mathscr{L}(\phi(\vec{y}),\dot{\phi(\vec{y})})\mathrm{d}^3y=\pi(\vec{x})\mathrm{d}^3x
\end{align}
$$

那么就有：

$$
\begin{align}
H=\sum_{\vec{x}}p(\vec{x})\dot{\phi}(\vec{x})-L=\int\mathrm{d}^3x[\pi(\vec{x})\dot{\phi}(\vec{x})-\mathscr{L}]=\int\mathrm{d}^3x\mathscr{H}
\end{align}
$$

考虑单一实函数标量场$\phi(x)$，其拉格朗日量密度，类似动能减势能项：

$$
\begin{align}
\mathscr{L}=\frac12(\partial_{\mu}\phi)^2-\frac12m^2\phi^2,\partial_{\mu}=\partial_t-\nabla
\end{align}
$$

代入$Euler-Lagrangian$，我们得到$Klein-Gordon~Equation$

$$
\begin{align}
(\frac{\partial^2}{\partial t^2}-\nabla^2+m^2)\phi=0~or~(\partial^{\mu}\partial_{\mu}+m^2)\phi=0
\end{align}
$$

其中$\partial^{\mu}\partial_{\mu}=\eta_{\mu\nu}\partial_{\mu}\partial_{\nu}$，这里采取Minkovski度规。同理哈密顿密度可以写为：

$$
\begin{align}
H=\int\mathrm{d}x^3\mathscr{H}=\int\mathrm{d}x^3[\frac12\pi^2+\frac12(\nabla\phi)^2+\frac12m^2\phi^2],\pi=\frac{\partial\mathscr{L}}{\partial\dot{\phi}(x)}=\dot{\phi}(x)
\end{align}
$$


## Noether's Theorem

**如果一个(经典场论的)系统具备某种连续对称性，并且当运动方程满足时，则该系统存在相应的守恒流(守恒律)。**

场的连续变换：

$$
\begin{align}
\phi(x)\longrightarrow\phi'(x)=\phi(x)+\alpha\Delta\phi(x),\alpha\rightarrow0
\end{align}
$$

$\Delta\phi(x)$被称为场的一种变换/变形。如果运动方程在这种变换下不变，则我们称这种操作为一种对称变换，系统具有对称性。

更一般的，我们可以使变化以一种"surface term"的形式呈现。surface term是指拉格朗日密度（Lagrangian density）中的一个四维散度项（4-divergence term），即形如$\partial^\mu J_\mu$的项，其中$J_\mu$是一个四维矢量。这样的项在作用量（action）中的贡献可以通过高斯定理（Gauss Theorem）转化为边界积分（boundary integral），即$S = \int_\Omega d^4x \partial^\mu J_\mu = \int_{\partial \Omega}d \sigma n^\mu J_\mu$，其中$n^\mu$是边界的法向量1。因此，这些项被称为surface term。如果边界条件合适，那么surface term在变分原理（variational principle）中不会影响欧拉-拉格朗日方程（Euler-Lagrange equation）的形式。但是，有时候surface term也有重要的物理意义，比如描述系统的不同相或者引力理论中的黑洞热力学。

在这种对称操作语境中，拉格朗日方程必须在拉式量的如下变换下不变：

$$
\begin{align}
\mathscr{L}(x)\longrightarrow\mathscr L(x)+\alpha\partial_{\mu}\mathscr{J}^{\mu}(x)
\end{align}
$$

和拉式量变化量比较：

$$
\begin{align}
\alpha\Delta\mathscr L(\phi,\partial_{\mu}\phi)=\frac{\partial\mathscr{L}}{\partial \phi}(\alpha\Delta\phi)+(\frac{\partial\mathscr L}{\partial(\partial_{\mu}\phi)})\partial_{\mu}(\alpha\Delta\phi)\\
=\alpha\partial_{\mu}(\frac{\partial\mathscr L}{\partial(\partial_{\mu}\phi)}\Delta\phi)+\alpha[\frac{\partial\mathscr{L}}{\partial \phi}-\partial_{\mu}\frac{\partial\mathscr L}{\partial(\partial_{\mu}\phi)}]\Delta\phi
\end{align}
$$

观察到第二项由Euler-Lagrangian保证为0，则类比起来：

$$
\begin{align}
\alpha\partial_{\mu}\mathscr J^{\mu}(x)=\alpha\partial_{\mu}(\frac{\partial\mathscr L}{\partial(\partial_{\mu}\phi)}\Delta\phi)\\
\alpha\partial_{\mu}j^{\mu}(x)=0,~j^{\mu}(x)=\frac{\partial\mathscr L}{\partial(\partial_{\mu}\phi)}\Delta\phi-\mathscr J^{\mu}\tag{*}
\end{align}
$$


> 需要注意的是，如果为多场体系，则第一项必须为场的同操作和

我们最终得到的是一个连续性方程，也就是说**任何连续对称的场都具有对应其对称性的连续性方程**。

下面看三个例子：

### Most trivial example

拉式量为$\mathscr L=\frac12(\partial_{\mu}\phi)^2$。显然其本身在下述变换下不变：

$$
\begin{align}
\phi\longrightarrow\phi+\alpha
\end{align}
$$

同时$j^{\mu}=\partial^{\mu}\phi$是对时间守恒的。

### Electromagnetic current density Conservation


$$
\begin{align}
\mathscr L=|\partial_{\mu|\phi}^2-m^2|\phi|^2
\end{align}
$$


此拉式量在另一种变换下不变：

$$
\begin{align}
\phi\longrightarrow e^{i\alpha}\phi
\end{align}
$$

考虑连续对称的无限小条件我们得到：

$$
\begin{align}
\alpha\Delta\phi=i\alpha\phi,\alpha\Delta\phi^*=-i\alpha\phi^*
\end{align}
$$

稍微推导一下流的表达式：

$$
\begin{align}
j^{\mu}(x)=\frac{\partial\mathscr L}{\partial(\partial_{\mu}\phi)}\Delta\phi-\mathscr J^{\mu}=\frac{\partial\mathscr L}{\partial(\partial_{\mu}\phi)}\Delta\phi\\
=\Delta\phi\frac{\partial}{\partial(\partial_{\mu}\phi)}[\partial_{\mu}\phi^*\partial_{\mu}\phi]=i[(\partial^{\mu}\phi^*)\phi-\phi^*(\partial^{\mu}\phi)]
\end{align}
$$

未来在这个拉式量上稍作修改，使其匹配电磁场。则我们算出的流就是电磁流，$j^0$即电荷，对应的连续性方程是电荷守恒定律。

### Energy-momentum tensor

变换为：

$$
\begin{align}
x^{\mu}\longrightarrow x^{\mu}-\alpha^{\mu}~or~\phi\longrightarrow\phi+a^{\mu}\partial_{\mu}\phi
\end{align}
$$

拉式量会做对称的变换：

$$
\begin{align}
\mathscr L\longrightarrow\mathscr L+a^{\nu}\partial_{\mu}(\delta^{\mu}_{~~\nu}\mathscr L)
\end{align}
$$

需要注意的是与第二个例子不同，$\mathscr J$不为零。按照(*)式计算，我们得到四个守恒流：

$$
\begin{align}
T^{\mu}_{~~~\nu}=\frac{\partial\mathscr L}{\partial(\partial_{\mu}\phi)}\partial_{\nu}\phi-\mathscr L\delta^{\mu}_{~~\nu}
\end{align}
$$

这被称为**能动张量**。值得注意的是其几个分量的物理意义：

$$
\begin{align}
T^{00}=\mathscr H,T^{0i}=-\pi\partial_i\phi
\end{align}
$$

这也是其名字的由来。

## The Klein-Gordon Field as Harmonic Oscillators

### The second quantization

我们首先应该回顾以下量子化的过程：

* 最早是从理论力学的泊松括号推广至对易关系，引入了正则对易关系(canonical commutation relations)，可称为“正则量子化”或者“第一次量子化”。

* 正则量子化的一个成果是薛定谔方程，常见形式为：

$$
\begin{align}
i\hbar\partial_t\psi=\hat{H}\psi,\hat{H}\psi=E\psi~for~sustained~state
\end{align}
$$


* 当然这个形式不是洛伦兹协变的，相对论条件下需要考虑相对论性的能量动量关系：

$$
\begin{align}
E^2=p^2+m^2
\end{align}
$$

  定性地考虑，能量联系时间演化，动量则联系空间平移，因而我们得到相对论性的薛定谔方程：

$$
\begin{align}
(\partial_t^2-\nabla^2+m^2)\psi=0
\end{align}
$$

  这就是Klein-Gordon方程，但是这里的$\psi$是波函数而非场。

* 一般而言，第二次量子化(The second quantization)是指将波函数变为算符(operator)。但是在peskin的书中，量子化的对象是经典的场而非波函数。

因此我们的量子化过程十分清楚：将波函数视为算符，在正则对易关系中求解量子力学的Klein-Gordon方程。

### Harmonic Oscillator

仿照第一次量子化的对易关系，我们定义场函数和动量密度满足：

$$
\begin{align}
[\phi(\vec{x}),\pi(\vec{y})]=i\delta^{(3)}(\vec{x}-\vec{y}),[\phi(\vec{x}),\phi(\vec{y})]=[\pi(\vec{x}),\pi(\vec{y})]=0
\end{align}
$$


> 这里采用的是薛定谔绘景，但正如读者所知道的，绘景不改变对易关系。

接下来我们进入动量表象：

$$
\begin{align}
\phi(\vec{x})=\bra{\vec{x}}\ket{\phi}=\int \mathrm{d}^3p\bra{\vec{x}}\ket{\vec{p}}\bra{\vec{p}}\ket{\phi}=\frac1{(2\pi)^{\frac32}}\int\mathrm{d}^3pe^{i\vec{p}\cdot\vec{x}}\phi(\vec{p})
\end{align}
$$


> 虽然这里的场应当算符化，但在初级阶段，我们仍可以用量子态的观点来考察。

那么考察动量表象下的Klein-Gordon方程，我们注意到动量算符已经退化为动量本征值：

$$
\begin{align}
(\partial_t^2+(|\vec{p|}^2+m^2)\phi_p=0
\end{align}
$$

我们显然得到了一个谐振子方程，其中$\omega^2=|\vec{p|}^2+m^2$。这个“谐振子”的哈密顿量为：

$$
\begin{align}
H_{SHO}=\frac12\hat{p}^2+\frac12\omega^2\hat{\phi}^2
\end{align}
$$

参考谐振子的代数解法，注意到我们应当根据不同的动量本征值确定不同的升降算符：

$$
\begin{align}
\phi(\mathbf{x})=\frac1{(2\pi)^{\frac32}}\int\mathrm{d}^3p\frac1{\sqrt{2\omega_{\mathbf{p}}}}(a_{\mathbf{p}}e^{i\mathbf{p}\cdot\mathbf{x}}+a_{\mathbf{p}}^{\dagger}e^{-i\mathbf{p}\cdot\mathbf{x}})\\
\pi(\mathbf{x})=\frac1{(2\pi)^{\frac32}}\int\mathrm{d}^3p\frac1{\sqrt{2\omega_{\mathbf{p}}}}(-i)(a_{\mathbf{p}}e^{i\mathbf{p}\cdot\mathbf{x}}-a_{\mathbf{p}}^{\dagger}e^{-i\mathbf{p}\cdot\mathbf{x}})
\end{align}
$$

这里的符号问题可以通过验证正则对易关系来确定：

$$
\begin{align}
[a_{\mathbf{p}},a^{\dagger}_{\mathbf{p'}}]=(2\pi)^3\delta^{(3)}(\mathbf{p}-\mathbf{p'})
\end{align}
$$

为了便于书写，我们略修改形式：

$$
\begin{align}
a_{\mathbf{p}}^{\dagger}e^{-i\mathbf{p}\cdot\mathbf{x}}=a_{\mathbf{p}}^{\dagger}e^{i(-\mathbf{p})\cdot\mathbf{x}}\stackrel{\cdot}{=}a_{-\mathbf{p}}^{\dagger}e^{i\mathbf{p}\cdot\mathbf{x}}\\
\phi(\mathbf{x}):=\frac1{(2\pi)^{\frac32}}\int\mathrm{d}^3p\frac1{\sqrt{2\omega_{\mathbf{p}}}}(a_{\mathbf{p}}+a_{-\mathbf{p}}^{\dagger})e^{i\mathbf{p}\cdot\mathbf{x}}\\
\pi(\mathbf{x}):=\frac1{(2\pi)^{\frac32}}\int\mathrm{d}^3p\frac1{\sqrt{2\omega_{\mathbf{p}}}}(-i)(a_{\mathbf{p}}-a_{-\mathbf{p}}^{\dagger})e^{i\mathbf{p}\cdot\mathbf{x}}
\end{align}
$$

接下来计算哈密顿量，我们采取定义式的方法，当然也可以通过与谐振子哈密顿量的类比：

$$
\begin{align}
H=\int\mathrm{d}x^3\mathscr{H}=\int\mathrm{d}x^3[\frac12\pi^2+\frac12(\nabla\phi)^2+\frac12m^2\phi^2]\\
=\int\mathrm{d}x^3\int\mathrm{d}\mathbf{p}[\frac12\pi_{\mathbf{p}}^2+\frac12(\mathbf{p}^2+m^2)\phi_{\mathbf{p}}^2]\\
=\int\mathrm{d}x^3\int\frac{\mathrm{d}p^3\mathrm{d}p'^3}{(2\pi)^6}e^{i(\mathbf{p}+\mathbf{p'})\cdot\mathbf{x}}{-\frac{\sqrt{\omega_{\mathbf{p}}\cdot\omega_{\mathbf{p'}}}}{4}(a_{\mathbf{p}}-a_{-\mathbf{p}}^{\dagger})(a_{\mathbf{p'}}-a_{-\mathbf{p'}}^{\dagger})\\+\frac{-\mathbf{p}\cdot\mathbf{p}+m^2}{4\sqrt{\omega_{\mathbf{p}}\omega_{\mathbf{p'}}}}(a_{\mathbf{p}}-a_{-\mathbf{p}}^{\dagger})(a_{\mathbf{p'}}-a_{-\mathbf{p'}}^{\dagger}) }\\
=\int\frac{\mathrm{d}^3p}{(2\pi)^3}\omega_{\mathbf{p}}(a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}+\frac12[a_{\mathbf{p}},a^{\dagger}_{\mathbf{p}}])
\end{align}
$$

> 这一步我实话实话没成功算出来，最后化简为$a_{-\mathbf{p}}a_{\mathbf{p}}-a_{\mathbf{p}}a_{\mathbf{p}}^{\dagger}+[a_{\mathbf{p}},a_{\mathbf{p}}^{\dagger}]+2a_{\mathbf{p}}^{\dagger}a_{\mathbf{p}}$

正如量子谐振子中的$\frac12\hbar\omega$一样，$\int\frac{\mathrm{d}^3p}{(2\pi)^3}\frac12\omega_{\mathbf{p}}[a_{\mathbf{p}},a^{\dagger}_{\mathbf{p}}]$正是在场的观点下的“零点能”——遍历所有动量模式下的基态能量。但更恐怖的是，这里的零点能应当正比于$\delta^{(3)}(0)$，一个无穷大的量。

接下来能谱的分析亦可以仿照量子谐振子的思路：基于物理的考量，我们认为基态/真空态$\ket{0}$是一个最小值，因而由下式确定：

$$
\begin{align}
a_{\mathbf{p}}\ket{0}=0\ket{0}=0
\end{align}
$$


> 这里我们已经不考虑那个无限大的“零点能”

其他的能量本征态则通过上升算符，或者让我们重新称呼为“产生算符”从基态中产生。依此，我们定义哈密顿的能谱，或者说粒子态：

$$
\begin{align}
\ket{\mathbf{p}}\propto a_{\mathbf{p}}^{\dagger}\ket{0}
\end{align}
$$

这里我们自然地定义基态满足归一化条件：$\bra{0}\ket{0}=1$。关于产生湮灭算符的一个很重要的性质是交换对称性(interchanged)。即算符的乘积对易，对应的是能量$\omega_{\mathbf{p}}$或者我们可以直接用$E_{\mathbf{p}}$，以及动量$\mathbf{p}$的和的对易。同理的，我们还可以知道我们目前的推导允许任意多个粒子占据同一个动量态。一言以蔽之，Klein-Gordon场的量子化理论满足玻色爱因斯坦统计(Bose-Einstein statistics)，因此可以描述玻色子。

接下来讨论归一化问题。首先证明常用的归一化方法：

$$
\begin{align}
\bra{\mathbf{p}}\ket{\mathbf{q}}=(2\pi)^3\delta(\mathbf{p}-\mathbf{q})
\end{align}
$$

是非洛伦兹协变的。简单推导一下delta函数的一个性质：

$$
\begin{align}
\delta(f(x)-f(x_0))=\frac1{2\pi}\int_{\infty}^{\infty}e^{i\omega (f(x)-f(x_0))}\mathrm{d}\omega\\
=\frac1{2\pi}\int_{\infty}^{\infty}e^{i\omega f'(x_0)(x-x_0)+O(x^2)}\mathrm{d}\omega,\omega\rightarrow f’(x_0)\omega\\
=\frac1{2\pi}\frac1{|f'(x_0)|}\int_{-\infty}^{\infty}e^{i\omega x}\mathrm{d}\omega=\frac1{|f'(x_0)|}\delta(x-x_0)
\end{align}
$$

我们就可以计算出

$$
\begin{align}
\delta(\mathbf{p}-\mathbf{q})=\delta(\mathbf{p}'-\mathbf{q}')\frac{\mathrm{d}\mathbf{p'}}{\mathrm{d}\mathbf{p}}
\end{align}
$$

考虑到洛伦兹变换：

$$
\begin{align}
\mathbf{P'}^{\mu}=\Lambda_\nu^{\mu}\mathbf{P}^{\nu}
\end{align}
$$

所以最终得到：

$$
\begin{align}
E_{\mathbf{p}}\delta(\mathbf{p}-\mathbf{q})=E_{\mathbf{p'}}\delta(\mathbf{p'}-\mathbf{q'})
\end{align}
$$

因此我们定义新的归一化系数，为：

$$
\begin{align}
\ket{\mathbf{p}}=\sqrt{2E_{\mathbf{p}}}a_{\mathbf{p}}^{\dagger}\ket{0}
\end{align}
$$


> 这里的2是基于洛伦兹协变出发的

最后，让我们回到我们最开始出发的目的：**使场升格为算符**。借由我们之前用产生湮灭算符重构的场$\phi(\mathbf{x})$，我们计算得到：

$$
\begin{align}
\phi(\mathbf{x})\ket{0}=\int\frac{\mathrm{d}^3p}{(2\pi)^3}\frac1{2E_{\mathbf{p}}}e^{-i\mathbf{p}\cdot\mathbf{x}}\ket{\mathbf{p}}
\end{align}
$$


> 注意真空态的定义。

也许这还不够直观，让我们回顾动量表象下的坐标算符：

$$
\begin{align}
\hat{X}\ket{\mathbf{x}}=x\ket{\mathbf{x}}=x\int\frac{\mathrm{d}^3p}{(2\pi)^3}\bra{\mathbf{p}}\ket{\mathbf{x}}\ket{\mathbf{p}}=x\int\frac{\mathrm{d}^3p}{(2\pi)^3}e^{-i\mathbf{p}\cdot\mathbf{x}}\ket{\mathbf{p}}\\
\bra{\mathbf{x_0}}\hat{X}\ket{\mathbf{p}}=x\int\frac{\mathrm{d}^3p}{(2\pi)^3}e^{i\mathbf{p}\cdot\mathbf{x}}(2\pi)^3\delta(\mathbf{p'}-\mathbf{p})=x_0e^{i\mathbf{p}\cdot\mathbf{x}}
\end{align}
$$

我们会发现，两者具有很好的对应，特别考虑到：

$$
\begin{align}
\bra{0}\phi(\mathbf{x})\ket{\mathbf{p}}=e^{i\mathbf{p}\cdot\mathbf{x}}
\end{align}
$$

**因此我们称场算符的效果是在$x$处产生了一个具有动量p和能量$E_p$的粒子** 。

## The Klein-Gordon Field in Space-Time

接下来，我们用x表示4-矢量，$\mathbf{x}$表示三维坐标矢量。

进入Heisenberg绘景：

$$
\begin{align}
\phi(x)=\phi(\mathbf{x},t)=e^{iHt}\phi(\mathbf{x})e^{-iHt}
\end{align}
$$

运用Heisenberg方程：

$$
\begin{align}
i\frac{\partial\hat{O}}{\partial t}=[\hat{O},H]
\end{align}
$$

我们得到：

$$
\begin{align}
i\frac{\partial\phi}{\partial t}=[\phi,H]\\
=[\phi,\int\mathrm{d}^3\mathbf{x}'(\frac12\pi^2(\mathbf{x}',t)+\frac12(\nabla\phi')^2+\frac12m^2\phi'^2)]\\
=\frac12\int\mathrm{d}^3\mathbf{x}'^3[\phi,\pi(x')^2]=\int\mathrm{d}^3\mathbf{x}'^3[\phi,\pi(x')]\pi(x')\\
=\int\mathrm{d}^3\mathbf{x}'^3i\delta^{(3)}(\mathbf{x}-\mathbf{x'})\pi(x')=i\pi(\mathbf{x},t)
\end{align}
$$

同理有：

$$
\begin{align}
i\frac{\partial\pi}{\partial t}=[\pi,H]\\
=[\pi,\int\mathrm{d}^3\mathbf{x}'(\frac12\pi^2(\mathbf{x}',t)+\frac12(\nabla\phi')^2+\frac12m^2\phi'^2)]\\
=\frac12\int\mathrm{d}^3\mathbf{x'}{[\pi,(\nabla{\phi'})^2]+[\pi,m^2\phi'^2]}\\
=-i(-\nabla^2+m^2)\phi(\mathbf{x},t)
\end{align}
$$


> 复杂的计算过程列于此：
> 
$$
>\begin{align}
> \frac12[\pi(\mathbf{x},t),(\nabla\phi(\mathbf{x'},t))^2]\\
> =[\pi(\mathbf{x},t),\nabla\phi(\mathbf{x'},t)]\nabla\phi(\mathbf{x'},t)\\
> =\nabla[\pi(\mathbf{x},t),\phi(\mathbf{x'},t)]\nabla\phi(\mathbf{x'},t)\\
> =\nabla(i\delta^{(3)}(\mathbf{x}-\mathbf{x'}))\nabla\phi(\mathbf{x'},t)\\
> =\nabla[i\delta^{(3)}(\mathbf{x}-\mathbf{x'})\nabla\phi(\mathbf{x'},t)]-i\delta^{(3)}(\mathbf{x}-\mathbf{x'})\nabla^2\phi(\mathbf{x'},t)\\
> \therefore\int\mathrm{d}^3\mathbf{x'}\frac12[\pi(\mathbf{x},t),(\nabla\phi(\mathbf{x'},t))^2]\\
> =-i\nabla^2\phi(\mathbf{x},t)+\int\mathrm{d}^3\mathbf{x'}\nabla[i\delta^{(3)}(\mathbf{x}-\mathbf{x'})\nabla\phi(\mathbf{x'},t)]\\
> =-i\nabla^2\phi(\mathbf{x},t)+\int\mathrm{d}^2\mathbf{x'}[i\delta^{(3)}(\mathbf{x}-\mathbf{x'})\nabla\phi(\mathbf{x'},t)]
>
>\end{align}
$$

> 由于第二项是经典“surface term”。合理选取积分曲面使得第二项为0.

结合起来，我们就得到：

$$
\begin{align}
\frac{\partial^2}{\partial t^2}\phi=(\nabla^2-m^2)\phi
\end{align}
$$

也就是K-G方程。

### Causality

研究因果性问题的方法是研究传播子的性质。时空坐标中的传播子为：

$$
\begin{align}
\bra{x}e^{-iH(x^0-y^0)}\ket{y}
\end{align}
$$

回顾之前对场算符的量子化$\phi(\mathbf{x})$，其作用到零态上时产生：

$$
\begin{align}
\phi(\mathbf{x})\ket{0}=\int\frac{\mathrm{d}^3\mathbf{p}}{(2\pi)^{\frac32}}\frac1{2E_\mathbf{p}}e^{-i\mathbf{p}\cdot \mathbf{x}}\ket{p}=\ket{\mathbf{x}}
\end{align}
$$

这可以认为是Heisenberg绘景中的态，则进入Shordinger绘景后我们得到：

$$
\begin{align}
\ket{x}=e^{-iHx^0}\ket{\mathbf{x}}=\phi(\mathbf{x})e^{-iHx^0}\ket{0}
\end{align}
$$

用这种方式将传播子展开得到：

$$
\begin{align}
D(x-y)=\bra{0}\phi(x)\phi(y)\ket{0},\phi(x)=e^{iHx^0}\phi(\mathbf{x})e^{-iH x^0}
\end{align}
$$

这里的算符变为了Heisenberg绘景中的算符，其在四维动量空间中的形式为：

$$
\begin{align}
\phi(x)=\int\frac{\mathrm{d}^3p}{(2\pi)^3}\frac1{\sqrt{2E_{\mathbf{p}}}}(a_{\mathbf{p}}e^{ip\cdot x}+a_{\mathbf{p}}^{\dagger}e^{-ip\cdot x}),p\cdot x=Ht-\mathbf{p}\mathbf{x}
\end{align}
$$

考虑到$a_{\mathbf{p}}\ket{0}=0$，我们有：

$$
\begin{align}
D(x-y)=\bra{0}\int\frac{\mathrm{d}^3p}{(2\pi)^3}\frac1{\sqrt{2E_{\mathbf{p}}}}(a_{\mathbf{p}}e^{-ip\cdot x}+a_{\mathbf{p}}^{\dagger}e^{ip\cdot x})\\\int\frac{\mathrm{d}^3q}{(2\pi)^3}\frac1{\sqrt{2E_{\mathbf{q}}}}(a_{\mathbf{q}}e^{-iq\cdot y}+a_{\mathbf{q}}^{\dagger}e^{iq\cdot y})\ket{0}\\
=\int\frac{\mathrm{d}^3p}{(2\pi)^3}\int\frac{\mathrm{d}^3q}{(2\pi)^3}\frac1{\sqrt{2E_{\mathbf{q}}2E_{\mathbf{p}}}}\\
(e^{-ip\cdot x- iq\cdot y}\bra{0}a_{\mathbf{p}}a_{\mathbf{q}}\ket{0}+e^{-ip\cdot x+iq\cdot y}\bra{0}a_{\mathbf{p}}a_{\mathbf{q}^{\dagger}}\ket{0}\\
e^{ip\cdot x-i q\cdot y}\bra{0}a_{\mathbf{p}}^{\dagger}a_{\mathbf{q}}\ket{0}+e^{ip\cdot x+iq\cdot y}\bra{0}a_{\mathbf{p}}^{\dagger} a_{\mathbf{q}}^{\dagger} \ket{0})
\end{align}
$$

由于：

$$
\begin{align}
\bra{0}a_{\mathbf{p}}a_{\mathbf{q}}\ket{0}=\bra{0}a_{\mathbf{p}}^{\dagger}a_{\mathbf{q}}\ket{0}=\bra{0}a_{\mathbf{p}}^{\dagger} a_{\mathbf{q}}^{\dagger} \ket{0}=0\\\bra{0}a_{\mathbf{p}}a_{\mathbf{q}^{\dagger}}\ket{0}=(2\pi)^3\delta^{(3)}(\mathbf{p}-\mathbf{q})
\end{align}
$$

所以计算出：

$$
\begin{align}
D(x-y)=\int\frac{\mathrm{d}^3p}{(2\pi)^3}\frac1{2E_{\mathbf{p}}}e^{-ip\cdot(x-y)},def~r=x-y
\end{align}
$$

考察因果律其实就是考察传播子的振幅。我们观察两种情形下的振幅：

#### Pure Time Direction

即：

$$
\begin{align}
p\cdot r=Ht=E_{\mathbf{p}}t
\end{align}
$$

推导：

$$
\begin{align}
D(x-y)=\int\frac{\mathrm{d}^3p}{(2\pi)^3}\frac1{2E_{\mathbf{p}}}e^{-iE_{\mathbf{p}}t}\\
=\int\frac{4\pi p^2\mathrm{d}p}{(2\pi)^3}\frac1{2E_{\mathbf{p}}}e^{-iE_{\mathbf{p}}t}
\end{align}
$$

利用$E_{\mathbf{p}}=\sqrt{p^2+m^2}$做积分换元，得到：

$$
\begin{align}
D(x-y)=\frac1{4\pi^2}\int_m^{\infty}dE\sqrt{E^2-m^2}e^{-iEt}\sim e^{-imt}
\end{align}
$$

我们得到了一个振荡的传播子。虽然这并没有显著违反因果律，但其实也不是一个“好”的结果。

#### Purely Spatial

即：

$$
\begin{align}
p\cdot r=-\mathbf{p}\cdot\mathbf{r}
\end{align}
$$

注意到与上文不同，我们没有相空间中的各向同性。所以类比球坐标系，我们得到：

$$
\begin{align}
D(x-y)=\frac1{2\pi^3}\int p^2\sin \theta\mathrm{d}p\mathrm{d}\theta\mathrm{d}\phi\frac1{2E_{\mathbf{p}}}e^{ipr\cos{\theta}}\\
=\frac{2\pi}{2\pi^3}\int p^2\mathrm{d}p\mathrm{d}(\cos{\theta})\frac1{2E_{\mathbf{p}}}e^{ipr\cos{\theta}}\\
=\frac{2\pi}{2\pi^3}\int p^2\mathrm{d}p\frac1{2E_{\mathbf{p}}}\frac{e^{ipr}-e^{-ipr}}{ipr}
\end{align}
$$

做一次$p\rightarrow-p$的变量替换，得到：

$$
\begin{align}
D(x-y)=\frac{-i}{2(2\pi)^2r}\int_{-\infty}^{\infty}\mathrm{d}p\frac{pe^{ipr}}{\sqrt{p^2+m^2}}
\end{align}
$$

看成一个广义积分，极点为$p=\pm im$。任意做一个围道积分，最终得到：

$$
\begin{align}
D(x-y)\sim e^{-mr}\neq0
\end{align}
$$
