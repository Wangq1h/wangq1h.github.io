---
title: 物理学中的群论
author: wangq1h
date: 2024-12-18 22:09:00 +0800
categories: [Group Theory]
tags: [群论]
pin: true
math: true
mermaid: true
---
## Introduction

Symmetries are ubiguitous in nature.

Symmetry $\Leftrightarrow$ Invariance under some transformations. Group Theoy is about the structure of these transformations. A set of operations form a group. Symmetric operations of atoms, molecules and crystals are combinations of reflections, rotations and translations. The combinations of reflections and rotations are called Point Group. The all three are called Space Group. The coordinate transformations in 3D flat space is charactrized by Euler parameters $(\alpha,\beta,\gamma)$，which are continuous.

How is symmetry used?

For example, in static electric field, energy density $U=\frac12\sum_{i,j}\epsilon_{ij}E_iE_j$，so:

$$
\epsilon_{ij}=\frac{\partial^2U}{\partial E_i\partial E_j}
$$

The tensor $\epsilon_{ij}$ has a symmetry as it is a symmetric tensor. Easy to see that the system has 6 degrees of freedom. Assuming the system has a square symmery, in other words, $C_4$ symmetry, which means the energy density is invariant under:

$$
\mathbf E=(E_x,E_y,E_z)\rightarrow \mathbf E'=(-E_y,E_x,E_z)
$$

for arbitrary $\mathbf E$. Computation leads to that electric permittivity:

$$
\epsilon=\begin{pmatrix}
\epsilon_{xx}&0&0\\0&\epsilon_{yy}&0\\0&0&\epsilon_{zz}
\end{pmatrix}
$$

### Notation

* Reflection: $\sigma$
* Rotation: $C_n$ for rotation by $\frac{2\pi}n$
* Translation: $t_x$ for length x period in x direction
* Doing nothing: Identity transformation $\Leftrightarrow$ Identity $e$, i.e. $\sigma\cdot\sigma=\sigma^2=\sigma\cdot e=e\cdot\sigma=e$。
* Multiplication: Operation $b$ follows operation $a$ is noted as $b\cdot a$

## Basics of Group Theory

### Group definition

Group:

* For any (ordered) pair of elements $a$, $b$ $\in G$, their product $a\cdot b$ is defined and $a\cdot b\in G$.
* The operation is associative. $\forall a,b,c\in G, (a\cdot b)\cdot c=a\cdot(b\cdot c)$.
* There exists an identity element $e$. Unique
* All elements have their inverse elements in the group. $\forall a\in G, a^{-1}\in G$. Unique

The order of group is the number of elements in the group.

In Abelian group, $\forall a, b \in G ,a\cdot b=b\cdot a$.

### Simple examples

$C_n$: Cyclic group of order $n$, describing $\frac{2\pi}n $ rotations in some axis.

$$
C_n=\{C_n,C_n^2\dots C_n^n=e\}
$$

$C_{2h}$: symmetry of molecular $C_2H_4$, consisting the transformations of rotation by $\pi$ and inversion:

$$
C_{2h}=\{e,C_2,\sigma,I\}\quad I=C_2\sigma=\sigma C_2
$$

$D_3$: Dihedral group, describing the symmetry of an equilateral triangle:

$$
D_3=\{e,c_3,C_3^{-1}=C_3^2,\sigma_1,\sigma_2,\sigma_3\}
$$

Here is the multiplication table of the Dihedral group:

|              | $e$        | $C_3$      | $C_3^{-1}$ | $\sigma_1$ | $\sigma_2$ | $\sigma_3$ |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| $e$        | $e$        | $C_3$      | $C_3^{-1}$ | $\sigma_1$ | $\sigma_2$ | $\sigma_3$ |
| $C_3$      | $C_3$      | $C_3^{-1}$ | $e$        | $\sigma_3$ | $\sigma_1$ | $\sigma_2$ |
| $C_3^{-1}$ | $C_3^{-1}$ | $e$        | $C_3$      | $\sigma_2$ | $\sigma_3$ | $\sigma_1$ |
| $\sigma_1$ |              | $\sigma_2$ | $\sigma_3$ | $e$        |              |              |
| $\sigma_2$ |              | $\sigma_3$ | $\sigma_1$ |              | $e$        |              |
| $\sigma_3$ |              | $\sigma_1$ | $\sigma_2$ |              |              | $e$        |

In this table we can find that the first $3\times3$ submatrix is closed to $C_3$, and it is actually the subgroup $C_3=\{e,C_3,C_3^{-1}\}$. Also,

there is also 2 subgroup of inversion $H_i=\{e,\sigma_i\}$.

### Rearrangement theorem

Also, we find that all elements appear once in every column and row. This is the Rearrangement Theorem.

> For $G\in\{g_1,g_2\dots g_r\},\forall g\in G$, the set of products $\{g_1 g,g_2g\dots g_r g\}$ reproduces $G$ in a new order.

Proof:

> * Obviously, $g_i g=g_k\in G$
> * If $\exists g_i'=g_i,g_i'g=g_k$, then $g_i'=g_kg^{-1}=g_i$. So $g_i$ is unique.

Verification of **group homorphism**:

* $\forall g\in G, \rho(g)\in G'$
* $\forall g_1,g_2\in G, \rho(g_1)\rho(g_2)\in G'$

While **isomorphism** requires 1 to 1 mapping. For example, in $D_3$, if $e'=\{e,C_3,C_3^{-1}\},C_2=\{\sigma_1,\sigma_2,\sigma_3\}$(Here is not about group but just elements), this is a homorphism.

### Cosets, invariant subgroups

The definition of coset:

> if $H$ is a subgroup of $G$, and $g_2\in G, \notin H$, then $Hg_2\notin H,\in G$. This is called ***right*** coset.

Cosets can be viewed as a classification of $G$, which means:

$$
G=\sum_i H g_i,\forall g_i\notin H,\in G
$$

If the number of $g_i$ is $m$, and the order of $H$ and $G$ are $h$ and $m$ respectively, it is easily to see that $r=hm$. Because they are all integers, $G$ does not cantain any subgroup other than $e$ and $G$ itself if $r$ is a prime number.

In general, left coset is not equal to right coset $gH\neq Hg$. However, if $a=g_jbg_j^{-1}$, we call $a$ is conjugate to $b$ $a\sim b$. If $a\sim b, b\sim c$, then $a\sim c$.

If $H=\{h_1,h_2,h_3\dots\}$ is a subgroup of $G$, so $gHg^{-1}$ is also a group. Proof:

> $$
> h_1h_2=h_3\in H, gh_1g^{-1}gh_2g^{-1}=gh_3g^{-1}\in gHg^{-1}
> $$

If $\forall g\in G,gHg^{-1}=H$, Then $H$ is an invariant subgroup. In this case, the left coset of $H$ equals to the rigth coset.

### Factor (Quotient) group

If $N$ is an invariant subgroup of $G$, then $G$ can be decomposited as the combination of cosets of $N$:

$$
G = Ng_1+Ng_2+\dots
$$

Proof:

> First we should prove the summation of cosets forms a group.
>
> $$
> \forall n_l,n_m\in N,g_i,g_j\in G,(n_lg_i)(n_mg_j)=n_l(g_in_mg_i^{-1})g_ig_j\\
> $$
> $$
> \because g_iNg_i^{-1}=N,\therefore n_l(g_in_mg_i^{-1})g_ig_j=n_ln_mg_ig_j=n_kg_\sigma\in Ng_\sigma
> $$
>
> Because $Ng_i\neq Ng_j$. Q.E.D.

This can be concluded as $(Ng_i)(Ng_j)=Ng_ig_j$. Viewing the $N$ as the identitiy element, this is called Factor Group $G/N$.

Define mapping $f:G\to G/N$ as $f(g_i)=Ng_i$. Obviously, $N$ is the kernel of $f$. So a new theorem tells that if $K$ is the kernel of homomorphism mapping $f:G\to G'$, $K$ is the invariant subgroup of $G$. Proof:

> Firstly, prove $K$ is a group.
>
> $$
> \forall h_1,h_2\in K. f(h_1h_2)=f(h_1)f(h_2)=e'e'=e',\therefore h_1h_2\in K
> $$
>
> Secondly, prove $K$ is invariant
>
> $$
> f(ghg^{-1})=f(g)f(h)f(g^{-1})=f(g)f(h)[f(g)]^{-1}=f(h)
> $$

Define $\bar f:G/N\to G'$ as $bar f(Kg_i)=f'(g_i)$. $N$ is the kernel and $G/N\cong G'$ with an isomorphism mapping.

Direct product group:

## Symmetric Group

### Symmetric group

The notation of permutation group:

$$
\pi=\begin{pmatrix}
1&2&\dots&n\\p_1&p_2&\dots&p_n
\end{pmatrix}
$$

which means $1\to p_1,2\to p_2$ and so on. The multiplication of permutation group is:

$$
\begin{align}
  \pi_1\pi_2&=\begin{pmatrix}
1&2&\dots&n\\q_1&q_2&\dots&q_n
\end{pmatrix}\begin{pmatrix}
1&2&\dots&n\\p_1&p_2&\dots&p_n
\end{pmatrix}\\
&=\begin{pmatrix}
p_1&p_2&\dots&p_n\\q_{p_1}&q_{p_2}&\dots&q_{p_n}
\end{pmatrix}\begin{pmatrix}
1&2&\dots&n\\p_1&p_2&\dots&p_n
\end{pmatrix}
=\begin{pmatrix}
1&2&\dots&n\\q_{p_1}&q_{p_2}&\dots&q_{p_n}
\end{pmatrix}
\end{align}
$$

This multiplication obeys associativity. Easily to see $S_3\cong D_3$.

### Alternating group

Define cycle as $\alpha = (a_1,a_2,\dots a_n)$, where $a_1\to a_2\to\dots\to a_n\to a_1$. Any permutation can be viewed as a product of cycles.

Define transposition as $(i,j)$ which means $i\to j$ and $j\to i$. Any cycle can be decomposited as several transpositions. The inverse of transposition is itself. And the decomposition is not unique. However, the number of transpositions is determined whether even or odd.

Proof:

> Consider an alternating function:
>
> $$
> f(x_1,\dots,x_n)=\prod_{1\le i\le j\le n}(x_i-x_j)
> $$
>
> We can prove:
>
> $$
> (i,j)f(x_1,\dots x_n)=-f(x_1,\dots x_n)
> $$
>
> Then odd number of transpositions will change signs and even number will not. As a permutation has an exact influence on alternating function, so the parity of decompostions can be fixed.

From this property the permutations can be classified into two classes: even and odd. Obviously, the order of $S_n$ is $n!$, and $1/2 n!$ for any even or odd permutations. All even permutations forms a group and this is called Alternating group $A_n$, which is an invariant subgroup of $S_n$.

Proof

> $$
> \forall \alpha \in A_n,\forall \beta \in S_n\to \beta\alpha\beta^{-1}\in A_n
> $$
>
> This is because $\beta\beta^{-1}$ has even parity.

So the permutation group can be generally expressed as:

$$
S_n=A_n+A_n(1,2)
$$

### Cayley's Theorem

Every group $G$ of order $n$ is isomorphic to a subgroup of $S_n$. The number of groups of order $n$ which are not isomorphic to each other is finite.

Proof:

$$
\begin{align}
  G &= \{a_1,a_2,
\dots a_n\}\\
b\in G&\to bG\text{ covers all elements in $G$}\\
\pi_b&=\begin{pmatrix}
a_1&\dots&a_n\\
ba_1&\dots&ba_n\\
\end{pmatrix}\quad\pi_c=\begin{pmatrix}
a_1&\dots&a_n\\
ca_1&\dots&ca_n\\
\end{pmatrix}\\
\pi_{cb} &= \begin{pmatrix}
a_1&\dots&a_n\\
cba_1&\dots&cba_n\\
\end{pmatrix}
=\begin{pmatrix}
ba_1&\dots&ba_n\\
cba_1&\dots&cba_n\\
\end{pmatrix}\begin{pmatrix}
a_1&\dots&a_n\\
ba_1&\dots&ba_n\\
\end{pmatrix}=\pi_c\pi_b
\end{align}
$$

## Vector Space

### Symplectic Group

## Group Representation

### Irreducible representations

To be a rep. of $G$, exists a $d\times d$ matrix group $D$:

$$
\begin{align}
  g&\to D(g)\\g_1g_2&\to D(g_1)D(g_2)=D(g_1g_2)
\end{align}
$$

All elements can be mapped to unit matrix, called unit rep. If all matrix are different, called faithful rep.

A representation U(G) on V is irreducible if there is no non-trivial invariant subspace in V with respect to U(G). Otherwise, the representation is reducible. In the latter case, if the orthogonal complement of the invariant subspace is also invariant with respect to L(G), then the representation is said to be fully reducible or decomposable.

### Schur's lemmas

For group $G$, there exists 2 irreducible reps. on 2 different vector space $D^{(1)},D^{(2)}$。If there exists a transformation $M$ between $V_1$ and $V_2$, makes:

$$
MD^{(1)}(g)=D^{(2)}(g)M
$$

Then either $M=0$ or $M$ is isomorphism.

> Proof:
>
> If there exists a subspace $N$ in $V_1$ makes $M\vec v=0\forall v\in N$. Then, for any $\vec v\in N$,
>
> $$
> MD^{(1)}(g)\vec v=D^{(2)}(g)M\vec v=0
> $$
>
> Therefore, $D^{(1)}(g)\vec v\in N$.

For an $d_\alpha\times d_\beta$ arbitrary matrix $B$, $M=\sum_g D^{(\alpha)}(g^{-1})BD^{(\beta)}(g)$, then:

$$
\begin{aligned}\forall g^{\prime}\in G^{0},D^{(\alpha)}(g^{\prime})M&=\sum_{g}D^{(\alpha)}(g^{\prime})D^{(\alpha)}(g^{-1})BD^{(\beta)}(g)\\&=\sum_{g}D^{(\alpha)}(g^{\prime}g^{-1})BD^{(\beta)}(g)\end{aligned}
$$

Then using Rearrangement theorem

$$
\begin{aligned}g^{\prime\prime}\in G,g^{\prime}g^{-1}&=g^{\prime\prime-1}\\\to D^{(\alpha)}(g^{\prime})M&=\sum_{g^{\prime\prime}}D^{(\alpha)}(g^{\prime\prime-1})BD^{(\beta)}(g^{\prime\prime}g^{\prime})\\
&=\sum_{g^{\prime\prime}}D^{(\alpha)}(g^{\prime\prime-1})BD^{(\beta)}(g^{\prime\prime})D^{(\beta)}(g')\\&=MD^{(\beta)}(g')
\end{aligned}
$$

Then if $\alpha\neq\beta$, we will have $M=0$. Chose $B_{ik}=1$ and zero for else elements. then:

$$
\sum_{g}D_{ji}^{(\alpha)}(g^{-1})D_{ke}^{(\beta)}(g)=0
$$

This is called Schur's lemma 1. If $\alpha=\beta$，$M=cE$. Then we can get:

$$
\sum_{g}D_{ji}^{(\alpha)}(g^{-1})D_{kl}^{(\alpha)}(g)=c{\delta_{jl}}
$$

Set $j=l$:

$$
\begin{align}
  &\sum_{j=1}^{d_\alpha}\sum_{g}D_{kj}^{(\alpha)}(g)D_{ji}^{(\alpha)}(g^{-1})\\=&\sum_{g}\sum_{j=1}^{d_\alpha}D_{kj}^{(\alpha)}(g)D_{ji}^{(\alpha)}(g^{-1})\\=&\sum_{g}D^{(\alpha)}_{ki}(gg^{-1})=r\delta_{ki}=c d_\alpha\\&\therefore c=\frac r{d\alpha}\delta_{ik }
\end{align}
$$

> Orthonormality of irreducible rep.
>
> $$
> \sum_gD_{ij}^{(\alpha)}(g)D_{kl}^{(\beta)}(g)=\frac r{d_\alpha}\delta_{ik}\delta_{jl}\delta_{\alpha\beta}
> $$
>
> $r$ is the order of group.

### Characters

For a representation $D$ of group $G$, the characters are defined:

$$
\chi(g)=\mathrm{tr}(D(g))
$$

If $D$ and $D'$ are equivalent $TDT^{-1}=D'$, then:

$$
\mathrm{tr}(D')=\mathrm{tr}(D)
$$

Elements in the same conjugate classs have the same $\chi$.

Orthonomality of the characters: In Shur's lemma2, set $i=j,k=l$:

$$
\sum_{g}D_{ii}^{(\alpha)}(g^{-1})D_{kk}^{(\alpha)}(g)=\frac r{d\alpha}\delta_{ik }{\delta_{ik}}
$$

Then calculating the trace gives:

$$
\sum_{g}\chi^{(\alpha)*}(g)\chi^{(\beta)}(g)=r\delta_{\alpha\beta}
$$

Suppose a rep. $D$ is block diagonalized into different irreducible rep. $D^{(\alpha)}$ with the deneracy $q_\alpha$,

$$
q_{\beta}=\frac{1}{r}\sum_{i=1}^{\infty}r_{i}\chi(C_{i})\chi^{(\beta)*}(C_{i})=\frac1r\sum_g\chi(g)\chi^{(\beta)*}(g)
$$

### Regular representation

The regular rep. of a group is defined by:

$$
[D^{(k)}(g)]_{ij}=\delta(g_{i}gg_{j}^{-1})\\\delta(g)=\begin{cases}1&(g=e)\\0&(g\neq e)\end{cases}
$$

This is an $r$ dimensional rep. The character of regular rep.:

$$
x^{(R)}(g)=\sum_{i=1}^{r}\delta(g_{i}gg_{i}^{-1})=\begin{cases}r(g=e)\\0(g\neq e)\end{cases}
$$

Notice that regular rep. is reducible.

$$
q_{\alpha}=\frac1r\sum_g\chi(g)\chi^{(\alpha)*}(g)=\chi^{(\alpha)*}(e)=d_\alpha
$$

Set $g=e$, then $\chi^{(R)}(e)=r=\sum_\alpha d_\alpha^2$. If $g\neq e$, then $\sum_\alpha d_\alpha \chi ^{(\alpha)}(g)=0$.

### Orthonomality of irreducible characters

For any conjuagate class $C_i$, define the class operator of a formally summation:

$$
\mathbb C_i=\sum_{a\in C_i}a
$$

Because $\forall g\in G, gag^{-1}\in C_i$, thus $\forall g\in G,[g,\mathbb C_i]=0$. Following this we can derive:

* $[\mathbb C_i,\mathbb C_j]=0$
* The product of class operators can be expressed as the linear composition of class operators.

> Proof:
>
> $$
> \begin{aligned}
> \sum_{a=1}^{r}g_{a}g_{l}^{(i)}g_{a}^{-1}& =\sum_{a=1}^{r}\left(g_{a}g_{b}\right)g_{e}^{(i)}\left(g_{a}g_{b}\right)^{-1} \\
> {}& =\sum_{a=1}^{r}g_{a}\left(g_{b}g_{e}^{(i)}g_{b}^{-1}\right)g_{a}^{-1} \\
> &=\sum_{a=1}^{r}g_{a}g_{l'}^{(i)}g_{a}^{-1}.
> \end{aligned}\\
> \therefore \sum_{a=1}^{r}g_{a}C_{i}g_{a}^{-1}=r_i\sum_{a=1}^{r}g_{a}g_{l}^{(i)}g_{a}^{-1},\because g\mathbb C_i g^{-1}=\mathbb C_i\\
> \therefore \mathbb C_i=\frac{r_i}r\sum_{a=1}^{r}g_{a}g_{l}^{(i)}g_{a}^{-1}
> $$
>
> Because $[g,\mathbb C_i\mathbb C_j]=0$, thus $\mathbb C_i\mathbb C_j=\sum_kC_{ij}^k\mathbb C_k $. Additionally,
>
> * $C_{ij}^k=C_{ji}^k$.
> * Set $$\mathbb C_1=\{e\}$, $C_{ij}^{1}=\begin{cases}r_{i}&(C_{j}=C_{i^{\prime}})\\ 0&(C_{j}\neq C_{i^{\prime}}).\end{cases}$$ where $C_i'=Inverse(C_i)$

It's time to prove the orthonomality of irreducible characters:

$$
\sum_{\alpha=1}^{r_{i}}\chi^{(\alpha)*}(C_{i})\chi^{(\alpha)}(C_{j}) = \delta_{ij}\frac{r}{r_{i}} .
$$

### Clebsch-Gordon coefficients

Consider 2 reps. of group $G$, and 2 arbitrary basis of vector space. The action of $g$ on the vector space can be expressed as:

$$
\hat g (\vec a_j)=\sum_i^{d_A}\hat a_i D^{(A)}_{ij}(g)
$$

A new rep. can be produced by the direct product of rep.

$$
\begin{aligned}\hat{g}(\vec a_{j}\vec b_{l})&\equiv\hat{g}a_{j}\cdot\hat{g}b_{l}\\&=\sum_{i}\sum_{k}\vec a_i\vec b_k D_{ij}^{(A)}(g)D_{kl}^{(B)}(g)\end{aligned}
$$

which is written as $D^{(A\times B)}(g)$. Also, $\chi^{(A\times B)}(g)=\chi^{(B)}(g)\chi^{(B)}(g)$. Obviously, direct product rep. is reducible.

$$
D^{(A)}\times D^{(B)}=\sum_{c}q_{c}D^{(c)}\\q_{c}=\frac{1}{r}\sum_{g}\chi^{(A\times B)}(g)\chi^{(c)*}(g)
$$

The c-g coefficients are determined:

$$
v_{m}^{(c,p)}=\sum_{i,1}a_{i}b_{l}<A,i;B,l|C,p,m>
$$

$p$ distinguish different irreps.

## Applications of Finite Groups

### Examples of irreducible representations

In ablian group, each element can form a conjugate class. So the number of conjugate class is the order of group.  The number of irreducible rep. of an ablian group is also the order, with each irreducible rep. a 1-dim rep.

### Point groups

Point group is combination of the following operations:

* identity transformation
* $C(\phi)$ rotation by $\phi$, when $\phi=2\pi/n$, so called $C_n$
* $I$ space inversion
* $\sigma$ reflection
  * $\sigma_h$: reflection in terms of a plane perpendicula to the principal axis
  * $\sigma_v$: reflection in terms of a plane induding the principal axis
* Rotary reflection $S(\phi)=C(\phi)\sigma_h=C(\pi+\phi)I$

### Vibration of moleculars

Considering a molecule composed of $N$ atoms, each oscillates around a static position. The hamiltonian can be written:

$$
E=\frac{1}{2}\sum_{i,j}m_{ij}\dot{u}_{i}\dot{u}_{j}+\frac{1}{2}\sum_{i,j}k_{ij}u_{i}u_{j}+O(u^{3})
$$

Under a certain linear superposition of $u_i$, the energy can be diagnolized:

$$
E=\frac{1}{2}\sum_{\alpha,a}\dot{Q}_{\alpha\alpha}^{2}+\frac{1}{2}\sum_{a}\omega_a^{2}\sum_{\alpha}Q_{a\alpha}^{2}
$$

$a$ is the number of modes and $\alpha$ is the normal coordinates index. $\sum_{a\alpha}=3N$. Considering operations of a point group $G$ makes a molecule invariant. For a certain $a$, $Q_{a\alpha}$ gives a irreducible rep. Because characters are independent of basis, choosing ordinary coordinates $u_i$. Under this basis:

* Identity transformation: $\chi(e)=3N$
* Rotation: for each atom, $\chi(C(\phi))=1+2\cos\phi$. Because only diagonal components contribute to the character, so we should only focus on these components. In other words, we chould find the invariant atoms as they are the rotation axises. Labeld as $N_c$, the whole character is $\chi=N_c(1+2\cos\phi)$.
* Reflection: label the number of atoms on the reflection plane is $N_\sigma$, then $\chi(\sigma)=N_\sigma$
* Space inversion: label the number of atoms at the origin $N_I\in\{0,1\}$, $\chi(I)=-3N_I$
* Rotary reflection: the difference between the rotation and rotary reflection is: $$D(S(\phi))=\begin{pmatrix}\cos\phi&\sin\phi&0\\ -\sin\phi&\cos\phi&0\\ 0&0&-1\end{pmatrix}\quad D(C(\phi))=\begin{pmatrix}\cos\phi&\sin\phi&0\\ -\sin\phi&\cos\phi&0\\ 0&0&1\end{pmatrix}$$. So $\chi(S(\phi))=N_s(2\cos\phi-1)$. $N_s$ is the number of atoms at the origin.

## Quantum Mechanics and Group Theory

### Linear operators and Hamiltonian

Linear operators which are commutative with $\hat H$ form a group, which is called the symmetry group of $\hat H$. This is because $AHA^\dagger=H$ is guranteened by $[A,H]=0$. Consider a set of degenerate states $\psi_a$ with $d$ deneracy, $\hat A$ can act on this vector space as a group element:

$$
\hat A\psi_a=\sum_{b=1}^dD_{ba}(A)\psi_b
$$

In fact $D_{ba}(A)=\bra{\psi_b}\hat A\ket{\psi_a}$.

### 2D infinite potential well

## Lie Groups

### Classical Lie Groups

### Infinitesimal changes

In 3d rotation $\mathrm{SO}(3)$, elements near the identity $O=1+M$. Because $O^TO=1$,

$$
(1+M^T)(1+M)=1
$$

Ignore $M^TM$ term, $M^T+M=0$. D.O.F is 3.

$$
M=\begin{pmatrix}0&t^3&-t^2\\-t^2&0&t^1\\t^2&-t^3&0\end{pmatrix}=\sum_{i=1}^3X_it^i
$$

Any element of $\mathrm{SO(3)}$ continuously connected to the identity is described by $\exp[\sum_{i=1}^3t^iX_i]$

### Lie algebra and Lie group

$G_0$ connected to $e$, the connected component of $g$ is $C(g)=g G_0$. $G_0$ is invariant subgroup of $G$, making a decomposition of $G$.

Lie algebra and Lie group are not one-to-one mapping.

> For a $d$ dimensional Lie algebra, corresponding Lie group $G$ of $d$ dimensional simply connected components are unique, called Universal Covering Group.

The group different from UG is formed by imposing constraints on simply connected space, which means based on the invariant subgroup of UG. Assuming $D$ is the subgroup of UG, then $\frac{UG}D$ is a new Lie group isomorphic to UG. If $D$ has more than 1 elements, then the quotient group will be multi-connected.

## Rotation in 3 dimensional space

### SO(3)

Any rotation in $E^3$ is described by a rotation around one axis:

> $$
> \det (R-1)=\det (R^T-1)=\det (R^{-1}-1)\\
> =\det (R^{-1})\det(1-R)=\det(1-R)=-\det (R-1)
> $$
>
> Therefore, $\det (R-1)=0$. Then there exists a non-trivial vector $\mathbf u$ satisfying $(R-1)\mathbf u=0$. The line $t\mathbf u$ is unchanged under rotation. If there exists more than 1 independent vectors which are unchanged, $R=1$. Otherwise, $R$ is unique.


To describe the rotation, we need the axis and the angle. The axis is a unit vector $\mathbf n$ and the angle is $\theta$, which means the rotation has 3 d.o.f. 
In another view of point, the parameter space of SO(3) is $S^3$, which is the inside and surface of 3d sphere of radius $\pi$. 
The surface is the set of identical rotations. The inside is the set of rotations with different angles. This tells that:

$\mathrm{SO}(3)$ is a **compact but not simply connected** group. 

#### Structure of SO(3)
Any 3d rotation can be decomposed into 3 rotations around 3 different axis. This is called Euler's theorem. The rotation can be written as:

$$
\begin{align}
  R_{\alpha}(\mathbf e_1)=\begin{pmatrix}1&0&0\\0&\cos\alpha&-\sin\alpha\\0&\sin\alpha&\cos\alpha\end{pmatrix}\\
R_{\beta}(\mathbf e_2)=\begin{pmatrix}\cos\beta&0&\sin\beta\\0&1&0\\-\sin\beta&0&\cos\beta\end{pmatrix}\\
R_{\gamma}(\mathbf e_3)=\begin{pmatrix}\cos\gamma&-\sin\gamma&0\\\sin\gamma&\cos\gamma&0\\0&0&1\end{pmatrix}
\end{align}
$$

When rotating at an infinitesimal angle, the rotation matrix can be written as:

$$
\begin{align}
  R_{\alpha}(\mathbf e_1)=\exp[-i\alpha J_1]\approx 1-i\alpha J_1\\
  \therefore J_1=\begin{pmatrix}0&0&0\\0&0&-i\\0&i&0\end{pmatrix}
\end{align}
$$

Doing the same for $J_2,J_3$, we can get:

$$
\begin{align}
  J_1=\begin{pmatrix}0&0&0\\0&0&-i\\0&i&0\end{pmatrix}\\
  J_2=\begin{pmatrix}0&0&i\\0&0&0\\-i&0&0\end{pmatrix}\\
  J_3=\begin{pmatrix}0&-i&0\\i&0&0\\0&0&0\end{pmatrix}
\end{align}
$$

These are the generators of SO(3). The commutation relation is:

$$
[J_i,J_j]=i\varepsilon_{ijk}J_k
$$

The general rep. of SO(3) is:

$$
D(\mathbf n,\theta)=D[R_\alpha(\mathbf e_3)R_\beta(\mathbf e_2)R_\gamma(\mathbf e_3)]=D(\mathbf e_3,\alpha)D(\mathbf e_2,\beta)D(\mathbf e_3,\gamma)
$$

From the commutation relationship we can get many properties of the rotation group. For more details, see the my notes on [my homepage](https://wangq1h.github.io/posts/%E6%9D%8E%E7%BE%A4%E5%92%8C%E6%9D%8E%E4%BB%A3%E6%95%B0/).

To find the rep. of the Lie algebra, we can use the basis $|j,m\rangle$ which is the eigenstate of $J^2$ and $J_3$. Introducing the 
raising and lowering operators:

$$
J_{\pm}=J_1\pm iJ_2
$$

The commutation relation is:

$$
[J_3,J_{\pm}]=\pm J_{\pm},[J_{+},J_{-}]=2J_3
$$

Assuming the action of $J_{\pm}$ on $\ket m$ is:

$$
J_{\pm}\ket m=N_m^{(\pm)}\ket{m\pm1}
$$

Then we can get:

$$
\bra{m}J_+\ket{m-1}=\bra{m-1}J_-\ket m^*\Rightarrow N_m^{(-)*}=N_{m-1}^{(+)}
$$

Choosing $N_m^{(-)}=N_m$, $N_{m-1}^{(+)}=N_{m}^*$.

$$
\begin{align}
  \because \bra{j-k}J_+J_-\ket{j-k}&=|N_{j-k}|^2\\
  \bra{j-k}([J_+,J_-]+J_-J_+)\ket{j-k}&=|N_{j-k}|^2\\
  2(j-k)+|N_{j-k+1}|^2&=|N_{j-k}|^2\\
  \therefore |N_{j-k}|^2-|N_{j-k+1}|^2&=2(j-k)
\end{align}
$$

From the constraint $m\le j$, $N_{j+1}=0$. Summing up the equation from $m$ to $j+1$, we can get:

$$
|N_{m-1}|^2=\sum_{k=0}^{j-m+1}2(j-k)=(j-m+2)(j+m-1)
$$

which gives:

$$
|N_m|=\sqrt{(j+m)(j-m+1)}
$$

Because we expect the basis is finite. A lower bound of $m$ is $j-l$, which means $N_{j-l}=0$. This gives $j=\frac l 2$. The dimension of the rep. is $2j+1=l+1$.
Each $j$ specifies an ireps. The matrix element of $j$ reps is:

$$
\begin{align}
  (J_+)_{m+1,m}&=\sqrt{(j-m)(j+m+1)}\\
  (J_-)_{m-1,m}&=\sqrt{(j+m)(j-m+1)}\\
  (J_3)_{m,m}&=m
\end{align}
$$

Others are zero. The matrix of $J_1,J_2$ can be obtained by $J_{\pm}$ and $J_3$. When $j=\frac 1 2$, the matrix is:

$$
J_1 = \left[\begin{matrix}0 & \frac 1 2\\\frac 1 2 & 0\end{matrix}\right]
J_2 = \left[\begin{matrix}0 & - \frac 1 2 i\\\frac 1 2 i & 0\end{matrix}\right]
J_3 = \left[\begin{matrix}\frac 1 2 & 0\\0 & -\frac 1 2\end{matrix}\right]

$$

when $j=1$, the matrix is:

$$
J_1 = \left[\begin{matrix}0 & \frac{\sqrt{2}}2 & 0\\\frac{\sqrt{2}}2 & 0 & \frac{\sqrt{2}}2\\0 & \frac{\sqrt{2}}2 & 0\end{matrix}\right]
J_2 = \left[\begin{matrix}0 & - \frac{\sqrt{2}}2 i & 0\\\frac{\sqrt{2}}2 i & 0 & - \frac{\sqrt{2}}2 i\\0 & \frac{\sqrt{2}}2 i & 0\end{matrix}\right]
J_3 = \left[\begin{matrix}1 & 0 & 0\\0 & 0 & 0\\0 & 0 & -1\end{matrix}\right]
$$

It is easy to see that the matrix is unitary equaivelent to the matrix discussed in the beginning of the structure of SO(3), which means they are all irreps. of the Lie algebra we talked here, which is $\mathfrak{so}(3)$ or $\mathfrak{su}(2)$ [^1]. More specifically, the algebra is $\mathfrak{so}(3)$ as the dimension of the rep. is three.

>Because $x,y,z$ and $\ket{1,0},\ket{1,1},\ket{1,-1}$ are all complete basis of a 3d space. They are unitary equivalent. However, this is a mathematical property without physical meanings. We are not saying that the 3d rotation always has an eigenvalue of $j=1$.
{: .prompt-warning}

> However, we can see that a vector like $\hat{\mathbf x}$ has an eigenvalue of $j=1$ when transformed under rotation. In Quantum Field Theory, particles are classified into scalars, spinors and vectors. This truth tells that a vector particle has an intrinsic angular momentum of $j=1$, which is just the spin. 
{: .prompt-tip }

[^1]: This conclusion comes from [wiki](https://en.wikipedia.org/wiki/Angular_momentum_operator).

when $j=2$, the matrix is:

$$
J_1 = \left[\begin{matrix}0 & 1 & 0 & 0 & 0\\1 & 0 & \frac{\sqrt{6}}2 & 0 & 0\\0 & \frac{\sqrt{6}}2 & 0 & \frac{\sqrt{6}}2 & 0\\0 & 0 & \frac{\sqrt{6}}2 & 0 & 1\\0 & 0 & 0 & 1 & 0\end{matrix}\right]
J_2 = \left[\begin{matrix}0 & - 1 i & 0 & 0 & 0\\1 i & 0 & - \frac{\sqrt{6}}2 i & 0 & 0\\0 & \frac{\sqrt{6}}2 i & 0 & - \frac{\sqrt{6}}2 i & 0\\0 & 0 & \frac{\sqrt{6}}2 i & 0 & - 1 i\\0 & 0 & 0 & 1 i & 0\end{matrix}\right]
J_3 = \left[\begin{matrix}2.0 & 0 & 0 & 0 & 0\\0 & 1 & 0 & 0 & 0\\0 & 0 & 0 & 0 & 0\\0 & 0 & 0 & -1 & 0\\0 & 0 & 0 & 0 & -2.0\end{matrix}\right]
$$

Here I gave a python script which can generate the matrix of $J_1,J_2,J_3$ for any $j$.
```python
import numpy as np
import sympy as sp

def transition(i,f):
    if i-f==1:
        j_plus = np.sqrt((j-f)*(j+f+1))
    else:
        j_plus = 0
    if i-f==-1:
        j_minus = np.sqrt((j+f)*(j-f+1))
    else:
        j_minus = 0
    if i==f:
        j_3 = f
    else:
        j_3 = 0
    return j_plus,j_minus,j_3
    

def generate_j1_j2(J_plus, J_minus):
    J1 = 0.5 * (J_plus + J_minus)
    J2 = -0.5j * (J_plus - J_minus)
    return J1, J2

def matrix_to_latex(matrix, name):
    sympy_matrix = sp.Matrix(matrix)
    return f"{name} = " + sp.latex(sympy_matrix)

# 示例：生成 j=1/2 的矩阵
j = 2
basis = np.arange(j, -j-1, -1)
dim = int(2*j+1)
print("基底：", basis)
J_plus = np.zeros((dim, dim), dtype=complex)
J_minus = np.zeros((dim, dim), dtype=complex)
J_3 = np.zeros((dim, dim), dtype=complex)
for i in range(dim):
    for f in range(dim):
        J_plus[i, f], J_minus[i, f], J_3[i, f] = transition(basis[i], basis[f])
J1, J2 = generate_j1_j2(J_plus, J_minus)

print("J_+:\n", J_plus)
print("J_-:\n", J_minus)
print("J_3:\n", J_3)
print("J1:\n", J1)
print("J2:\n", J2)

# 输出 LaTeX 形式
print(matrix_to_latex(J1, "J_1"))
print(matrix_to_latex(J2, "J_2"))
print(matrix_to_latex(J_3, "J_3"))
```
### Direct product reps.
The strategy to find the Celebsch-Gordon coefficients is:
1. Find out the state with $J_{max}=j_1+j_2$ and $m_{max}=j_1+j_2$. This is the highest state, $\ket{j_1+j_2,j_1+j_2}=\ket{j_1,j_1}\otimes\ket{j_2,j_2}$.
2. From the highest state, using lowering operators to find out all states with $J=J_{max}$ and $m_j=m_{max},m_{max}-1,\dots,-m_{max}$.
3. Considering the $J=J_{max}-1$ states, its highest weight is $m_{max}-1$, which means the state is the linear superpostion of $\ket{j_1,j_1-1}\otimes\ket{j_2,j_2}$ and $\ket{j_1,j_1}\otimes\ket{j_2,j_2-1}$. Using the orthogonality of $\ket{j,m-1}$ and $\ket{j-1,m-1}$, we can get the coefficients.
4. Repeat the process 2 to find all states with $J=J_{max}-1$ and $m_{max}-1,m_{max}-2,\dots,-m_{max}+1$.
5. Repeat the process 3 to find the coefficients of $J=J_{max}-2$ states. 

The procedure can be repeated until $J=\mid j_1-j_2\mid$. The coefficients can be found by the orthogonality of the states. Finally, there are $(2j_1+1)(2j_2+1)$ states in the direct product rep. of $j_1$ and $j_2$. And like the [note](https://wangq1h.github.io/posts/%E6%9D%8E%E7%BE%A4%E5%92%8C%E6%9D%8E%E4%BB%A3%E6%95%B0/), the direct product rep. is reducible, which refers to the addition of the angular momentum.

> The representation of rotation on rank-2 tensor in Cartesian coordinates is reducible. Considering the tensor is the direct product of two 3d vector $T_{ij}=u_i\otimes v_j$. The transformation of the tensor is: $R_{ij}T_{ij}=R_iu_i\otimes R_j v_j$. If we care the reps. of rotation on this space, it is easily to confirm the reps. is direct product of rep. on $u_i$ and $v_j$. The irreps. of $u_i$ and $v_j$ are both $j-1$ reps. as we talked before. So the whole reps is $D^{j=1}\otimes D^{j=1}=D^{j=2}\oplus D^{j=1}\oplus D^{j=0}$. This why sakurai said *'The trouble with a Cartesian tensor like (3.455) is that it is reducible, that is, it can be decomposed into objects that transform differently under rotations.'* in p.233.
{: .prompt-tip }
### The relationship between SO(3) and SU(2)
Considering the $j-\frac 1 2$ reps. The matrix is actually the pauli matrix $\sigma_i$. The relationship between $J_i$ and $\sigma_i$ is:

$$
J_i=\frac 1 2\sigma_i
$$

Because $e^{\frac i2\alpha\sigma_i}=\sigma_0\cos\frac\alpha 2+i\sigma_i\sin\frac\alpha 2$, the general rep. is:

$$
\begin{align}
  D(\mathbf n,\theta)&=e^{-i\frac\alpha 2\sigma_3}e^{-i\frac\beta 2\sigma_2}e^{-i\frac\gamma 2\sigma_3}\\
&=(\sigma_0\cos\frac\alpha 2+i\sigma_3\sin\frac\alpha 2)(\sigma_0\cos\frac\beta 2+i\sigma_2\sin\frac\beta 2)(\sigma_0\cos\frac\gamma 2+i\sigma_3\sin\frac\gamma 2)\\
&=\begin{pmatrix}
  \cos\frac{\beta}{2}e^{-\frac{i}{2}(\alpha+\gamma)}&-\sin\frac{\beta}{2}e^{-\frac{i}{2}(\alpha-\gamma)}\\
  \sin\frac{\beta}{2}e^{\frac{i}{2}(\alpha-\gamma)}&\cos\frac{\beta}{2}e^{\frac{i}{2}(\alpha+\gamma)}
\end{pmatrix}
\end{align}
$$

If taking $\alpha=2\pi,\beta=0,\gamma=0$, we can get:

$$
D(\mathbf z,2\pi)=\begin{pmatrix}
  -1&0\\0&1
\end{pmatrix}\neq \mathbf 1
$$

However if taking $\alpha=4\pi,\beta=0,\gamma=0$, the result is $\mathbf 1$. This tells $j-\frac 1 2$ reps. are not appropriate for SO(3). 
Just like the $2\pi$ rotation, any rotation $0\leq\phi<2\pi$ has 2 reps. in $j-\frac 1 2$ reps., $D(R)$ and $-D(R)$. This is because the $2\pi$ rotation is not the identity. The $4\pi$ rotation is the identity. This tells that the $j-\frac 1 2$ reps. are not appropriate for SO(3). 

In fact, the Lie algebra we talked above is shared by SO(3) and SU(2). However, the $j-\frac 1 2$ reps. with $0\leq\alpha<4\pi,0\leq\beta<2\pi,0\leq\gamma<\pi$ is the reps. of SU(2). The relationship between SO(3) and SU(2) is:

$$
\mathrm{SO}(3)=\frac{\mathrm{SU}(2)}{\mathbb Z_2}
$$

### Haar measure
In the previous section about rep. we focused on the finite group. However, Lie group is infinite as a continuous group. First we revisit the 
orthonormality of irreps. Of course, the summation should be replaced by the integration. Focusing on 3d rotation, the volume element of parameter space is: $\mathrm d\omega=\mathrm d\alpha\sin\beta\mathrm d\beta\mathrm d\gamma$. This is called Haar measure. Calculating the volumn of parameter space of SO(3) and SU(2) gives:

$$
\begin{align}
  \Omega(\mathrm{SO}(3))&=\int_0^{2\pi}\mathrm d\alpha\int_0^\pi\sin\beta\mathrm d\beta\int_0^{2\pi}\mathrm d\gamma=8\pi^2\\
  \Omega(\mathrm{SU}(2))&=\int_0^{4\pi}\mathrm d\alpha\int_0^\pi\sin\beta\mathrm d\beta\int_0^{2\pi}\mathrm d\gamma=16\pi^2
\end{align}
$$

Then the orthonormality of irreps. is:

$$
\int\mathrm d\omega D^{(J)*}_{ml}(\omega)D^{(J')}_{m'l'}(\omega)=\frac{\Omega}{2J+1}\delta_{JJ'}\delta_{mm'}\delta_{ll'}
$$

The character of the rep. is:

$$
\chi^{(J)}(\omega)=\sum_{m}D^{(J)}_{mm}(\omega)
$$

The orthonormality of characters is:

$$
\int\mathrm d\omega\chi^{(J)*}(\omega)\chi^{(J')}(\omega)=\Omega\delta_{JJ'}
$$

### Angular momentum in Quantum Mechanics
The commutation relation of angular momentum is:

$$
[L_i,L_j]=i\hbar\varepsilon_{ijk}L_k
$$

Then $\frac{L_i}\hbar$ forms the Lie algebra of SO(3). The eigenfunction of $L^2$ is:

$$
Y_{lm}(\theta,\phi)=\varepsilon\sqrt{\frac{2l+1}{4\pi}\frac{(l-\mid m\mid)!}{(l+\mid m\mid)!}}P_l^m(\cos\theta)e^{im\phi}
$$

$\varepsilon=(-1)^m$ if $m\ge 0$ and $\varepsilon=1$ if $m<0$. This is also the eigenfunction of $L_z$. The eigenvalue of $L^2$ is $l(l+1)\hbar^2$ and the eigenvalue of $L_z$ is $m\hbar$. They all should be integers.

Spin operator also satisfies the commutation relation of angular momentum. However, the spin is quantized as $s=\frac n 2$. The eigenvalue of $S^2$ is $s(s+1)\hbar^2$ and the eigenvalue of $S_z$ is $m\hbar$. Spin obeys the same rule as angular momentum but has nothing to do with the rotation of the particle.

### Wigner-Eckart Formula

Given operator $O$, wavefunction $\psi$, wavefunctions is transformed as $O\psi$. Rotate the system by $U(\theta)=\exp(-\frac i\hbar\theta \hat J)$.

$$
U(\theta)\psi'=U(\theta)O U^{-1}(\theta)U(\theta)\psi\\
$$

Define $O'=U(\theta)O U^{-1}(\theta)$. For infinitesimal rotation:

$$
O'\simeq O-\frac i\hbar [\theta \hat J,O]
$$

Begin classification discussion:

* If $O$ is a scalar operator, which is unchanged under space rotation. $[\hat J,O]=0$.
* If $O=V$ is a vector operator, It should transform like $\mathbf r'=R\mathbf r=\mathbf r+\delta\theta\times \mathbf r$. Compared to the rotation under the notation of $J$, $[J_i,V_j]=i\hbar \varepsilon_{ijk}V_k$. $[\theta\cdot\hat J,V]=-i\hbar \vec\theta\times \vec V$

The commuatation relation implies that if we construct a new basis:

$$
\begin{cases}
  V_1&=-\frac1{\sqrt 2}(V_x+iV_y)\\
  V_0&=V_z\\
  V_{-1}&=\frac1{\sqrt 2}(V_x-iV_y)
\end{cases}
$$

The commuatation relation with lowering and raising operators is:

$$
\begin{align}
  [J_{\pm},V_q]&=\hbar\sqrt{(1\mp q)(2\pm q)}V_{q\pm1}\\
  [J_3,V_q]&=\hbar qV_q
\end{align}
$$

Revisit the $j-1$ irreps. of $\mathfrak{so}(3)$ previously discussed. The commutation relation under the new basis is:

$$
[J_i,V_q]=\sum_{m=-1}^1\bra{1,m}J_i\ket{1,q}V_m
$$

Which is just the $j-1$ irreps. of $\mathfrak{so}(3)$. Define the irreducible tensor operator $T^{(k)}_q$ as:

$$
[J_i,T^{(k)}_q]=\sum_{m=-k}^k\bra{k,m}J_i\ket{k,q}T^{(k)}_m=D^{(k)}(J_i)_{qm}T^{(k)}_m
$$

Because $e^ABe^{-A}=e^{Ad(A)}B$, the transformation of $T^{(k)}_q$ is:

$$
U(\theta)T^{(k)}_qU^{-1}(\theta)=D^{(k)}(U(\theta))_{qm}T^{(k)}_m
$$

Direct product of two irreducible tensor operators behave the same as the direct product of irreps. :

$$
S_r^{(p)}T_q^{(k)}=\sum_{s=|p-k|}^{p+k}\braket{r+q;s\mid r,p;q,k}U_{r+q}^{(s)}
$$

Back to the basis of $D^{(j)}$, which is $\ket{j,j_z;\alpha}$. $T_q^{(k)}\ket{j,j_z;\alpha}$ transforms like $D^{(k)}\otimes D^{(j)}$, which means we can also decompose the direct product of two irreps. into irreps. of $\mathfrak{so}(3)$.

$$
T_q^{(k)}\ket{j,j_z;\alpha}=\sum_{j'=|j-k|}^{j+k}\braket{q+j_z;j'\mid q,k;j_z,j}\ket{j',q+j_z;\beta}
$$

When calculating the matrix element of $T_q^{(k)}$:

$$
\bra{J,J_z;\alpha}T_q^{(k)}\ket{j,j_z;\beta}=\sum_{j'=|j-k|}^{j+k}\braket{q+j_z;j'\mid q,k;j_z,j}\braket{J,J_z;\alpha\mid j',q+j_z;\beta}
$$

Look into the second term:

$$
\begin{align}
  \braket{J,J_z;\alpha\mid j',q+j_z;\beta}&=\delta_{Jj'}\delta_{J_z,q+j_z}\braket{J,J_z;\alpha\mid J,J_z;\beta}\\
  &=N_{J_z-1}\bra{J,J_z;\alpha}J_+\ket{J,J_z-1;\beta}\\
  &=\braket{J,J_z-1;\alpha\mid J,J_z-1;\beta}
\end{align}
$$

This means the matrix element is independent of $j_z$ and $q$. Name it as the reduced matrix element $\bra{J,\alpha}\mid T^{(k)}\mid\ket{j,\beta}$. The Wigner-Eckart formula is:

$$
\begin{align}
  \bra{J,J_z;\alpha}T_q^{(k)}\ket{j,j_z;\beta}&=\sum_{j'=|j-k|}^{j+k}\braket{q+j_z;j'\mid q,k;j_z,j}\braket{J,J_z;\alpha\mid j',q+j_z;\beta}\\
  &=\sum_{j'=|j-k|}^{j+k}\braket{q+j_z;j'\mid q,k;j_z,j}\delta_{Jj'}\delta_{J_z,q+j_z}\bra{J,\alpha}\mid T^{(k)}\mid\ket{j,\beta}\\
  &=\braket{J_z;J\mid q,k;j_z,j}\bra{J,\alpha}\mid T^{(k)}\mid\ket{j,\beta}
\end{align}
$$
## Lie Algebra

### General features
The Lie Group is generally the exponential mapping of the Lie algebra. The Lie algebra is the tangent space of the Lie group at the identity. 

**Infinite numbers of elements in Lie group are determined by finite dimensional Lie algebras.**

If W is the Lie algbra of Lie group G, K is the subspace of W which satisfies $\forall X,Y\in K,[X,Y]\in K$, then K is the **subalgebra** of W. The subalgebra is called the **ideal** of W if $\forall X\in W,Y\in K,[X,Y]\in K$. If the Lie group of K is H. H is an invariant subgroup of G. 

If another Lie algebra L satisfies $\forall X\in K,\forall Y\in L,[X,Y]=0$. Easy to see $X+Y$ is also a Lie algebra. **The direct sum of two Lie algebras is the Lie algebra of the direct product of two Lie groups.**

If $\forall X,Y\in W,[X,Y]=0$, then W is called the **abelian Lie algebra**. The corrsponding Lie group is abelian too.

**Abelian ideal**: A subset S commutes with all elements of W. 
> Proof: first prove it is a subalgebra:
> 
> $\forall X,Y\in S;A,B\in W$, the jacobi identity is:
>
> $$
> [A,[X,Y]]+[X,[Y,A]]+[Y,[A,X]]=0
> $$
>
> From the definition, $[A,[X,Y]]=0$. Therefore $[X,Y]\in S$. Then prove it is an ideal, still from the jacobi identity.
>
> $$
> [A,[B,X]]=-[[B,X],A]-[X,[A,B]]=0
> $$
>
> Therefore $[B,X]\in S$.
{: .prompt-tip}

In group theory, S is the center of W. Then comes the important definitions:
* **Semi-simple Lie algebra**: The Lie algebra has no abelian ideal.
* **Simple Lie algebra**: The Lie algebra has no non-trivial ideal.
In general, semi-simple Lie algebra is the direct sum of simple Lie algebras.
#### Cartan metric and Killing form
The structure constants of Lie algebra is defined as:

$$
[X_i,X_j]=f_{ij}^{\quad k}X_k
$$

From the Jacobi identity, we can get:

$$
f_{ij}^{\quad m}f_{mk}^{\quad n}+f_{jk}^{\quad m}f_{mi}^{\quad n}+f_{ki}^{\quad m}f_{mj}^{\quad n}=0
$$

The Cartan metric is defined as:

$$
g_{ij}=f_{in}^{\quad m}f_{jm}^{\quad n}
$$

We can see that:
* Cartan metric is symmetric.
* For Abelian Lie algebra, $g_{ij}=0$.
* For Lie algebra $W=\{X_i\}$, its ideal K is charactrized by index $a$, then the metric satisfies $g_{ai}=f_{an}^{\quad m}f_{im}^{\quad n}=f_{an}^{\quad c}f_{ic}^{\quad n}=f_{ab}^{\quad c}f_{ic}^{\quad b}$. If Ideal is abelian, then $\det g=0$.
Then, the semi-simple Lie algebra is the Lie algebra whose Cartan metric is non-singular.

The Cartan metric introduces the **Killing form**:

$$
\begin{align}
A=a^i X_i&\quad B=b^iX_i\\
(A,B)&=g_{ij}a^ib^j \quad g_{ij}=(X_i,X_j)
\end{align}
$$

Killing form actually introduces the inner product of Lie algebra. 

Define $f_{ijk}=f_{ij}^{\quad l}g_{lk}$. It can be proved that it is a symmetry tensor. 
Because $(A,[B,C])=(a^iX_i,f_{jk}^{\quad l}b^jc^kX_l)=a^ib^jc^kf_{jki}$. Then $(A,[B,C])=(B,[C,A])=(C,[A,B])$. The Killing form is invariant under the adjoint transformation.
It's time to prove **the semi-simple Lie algebra is the direct sum of simple Lie algebras**. 
> Proof:
> Assume semi-simple Lie algebra W includes ideal K. Define the $K^{\perp}$ as the set of $A\in W$ which satisfies $(A,K)=0$. 
> Then $\forall X,Y\in K^{\perp},\forall Z\in K,(Z,[X,Y])=(X,[Y,Z])=0$. Therefore $[X,Y]\in K^{\perp}$. Then $K^{\perp}$ is an subalgebra of W. If 
> $K$ is reducible, then goes back to the step1. Otherwise, $K$ is simple. Difine the index of $W,K$ and the remaining part as $i,a,\alpha$. 
> Because $K$ is simple, $\det g_{ab}\neq0$. Name the inverse as $g^{ab}$. Using the Gram-Schmidt orthogonalization, we can get the basis of the remaining 
> spaces, actually is the basis of $K^{\perp}$:
>
> $$
> \tilde X_\alpha=X_\alpha-(X_\alpha,X_a)X_bg^{ab}
> $$
>
> It means $W=K^{\perp}\cup K$. $\forall A\in K^{\perp}, C\in W$, therefore $\forall B\in K, (B,[C,A])=(C,[A,B])=(A,[B,C])=0$. 
> Because $K$ is an ideal, $[B,C]\in K$. It implieds $[C,A]\in K^{\perp}$, which means $K^{\perp}$ is an ideal. And $[A,B]$ is perpendicular to 
> the whole space, which means $[A,B]=0$. Therefore we proved that $W=K\oplus K^{\perp}$. If $K^{\perp}$ is reducible, then repeat the process.
{: .prompt-tip}

From the exponential mapping relationship between Lie group and Lie algebra, we can get the structure of Lie group.
If a Lie algebra of connected Lie group is semi-simple, then the Lie group is semi-simple. 
Semi-simple Lie group is a direct product of simple Lie groups
#### Representations of Lie algebra
The n dim rep. of the element A in Lie algebra $\rho(A)$ satisfies:

$$
[\rho(X_i),\rho(X_j)]=\rho([X_i,X_j])=f_{ij}^{\quad k}\rho(X_k)
$$

This also gives the corresponding representation of Lie group $D(g)=\exp[\sum_i\theta_i\rho(X_i)]$. 
Introduce the adjoint representation $\rho(X_i)^k_{\quad j}=f_{ij}^{\quad k}$. The commutation relation of adjoint representation is:

$$
[\rho(X_i),\rho(X_j)]^l_{\quad n}=f_{ij}^{\quad k}\rho(X_k)^l_{\quad n}
$$

Under this rep., the Killing form and Cartan metric are:

$$
\begin{align}
  (X_i,X_j)&=g_{ij}=\mathrm{Tr}(\rho(X_i)\rho(X_j))\\
  (A,B)&=\mathrm{Tr}(\rho(A)\rho(B))
\end{align}
$$

The adjoint rep. is a faithful rep. of semi-simple Lie algebra, as the center of the Lie algebra is zero. 
For Abelian Lie algebra, the adjoint rep. maps $\mathrm{ad}(X)=0$.

With $\rho(X_i)=\mathrm{ad}(X_i)$, the corresponding Lie group rep. is $D(g)=\exp[\sum_i\theta_i\mathrm{ad}(X_i)]=\mathrm{Ad}(G)$. 
This is the adjoint rep. of Lie group. 

### Compact group and its Lie algebra
Some important compact and connected Lie groups are:
* $U(n)$: The unitary group. The Lie algebra is $\mathfrak{u}(n)$, satisfies $X^\dagger=-X$.
* $SU(n)$: The special unitary group. The Lie algebra is $\mathfrak{su}(n)$, satisfies $\mathrm{Tr}(X)=0$ and $X^\dagger=-X$.
* $SO(n)$: The special orthogonal group. The Lie algebra is $\mathfrak{so}(n)$, satisfies $X^T=-X$, $\mathrm{Tr}(X)=0$ and real.
* $Sp(n)$: The symplectic group. The Lie algebra is $\mathfrak{sp}(n)$, satisfies $X^\dagger=-X$ and $J X^TJ^{-1}=X$.
Review the adjoint reps. of these Lie algebras. Because the adjoint rep. is real, the minus sign will emerge under transpose.

$$
\begin{align}
  \mathrm{ad}(X_i)^k_{\quad j}&=-\mathrm{ad}(X_i)^j_{\quad k}\\
  \to f_{ij}^{\quad k}&=-f_{ji}^{\quad k}
\end{align}
$$

This tells that the structure constants of compact Lie algebra are **antisymmetric**. As we all know $U(n)=U(1)\times SU(n)$, 
$SU(n)$, $SO(n)$ and $Sp(n)$ are all simple Lie algebras. 

Take a new basis where $\hat X_i=-iX_i$. Under this basis, the commutation relation stays the same, but $f_{ij}^{\quad k}=-if_{ij}^{\quad k}$. But 
the Cartan metric and Killing form are:

$$
\begin{align}
  \hat g_{ij}&=-g_{ij}\\
  (A,B)=(\hat a,\hat b)&=\hat g_{ij}\hat a^i\hat b^j\quad \hat a^i=i a^i
\end{align}
$$

Picking up all basis commuting with each other as $\hat H_a$, this is called Cartan subalgebra. The dimension of Cartan subalgebra is the rank of Lie algebra, 
independent of the basis. The remaining basis is called the root basis $E_\alpha$, which satisfies:

$$
[H_a,E_\alpha]=\alpha_aE_\alpha
$$

This can be proved by matrix theory:
> Proof:
> Because $H_a$ commutes with each other, they can be diagonalized simultaneously. The eigenvalue of $H_a$ is $v_\alpha$ with eigenvalue $\alpha_a$. 
> Define $\hat E_\alpha=v_\alpha^i\hat X_i$. 
>
> $$
> \begin{align}
> \mathrm{ad}(\hat H_a)^i_{\quad j}v_\alpha^j\hat X_i&=\alpha_a v_\alpha^i\hat X_i\\
> f_{aj}^{\quad i}v_\alpha^j\hat X_i&=\alpha_a\hat E_\alpha\\
> [\hat H_a,\hat X_j]v_\alpha^j&=\alpha_a\hat E_\alpha\\
> [\hat H_a,\hat E_\alpha]&=\alpha_a\hat E_\alpha\\
> \end{align}
> $$
{: .prompt-tip}

The vector $\alpha$ is called the root of the Lie algebra. $-\alpha$ is also the root while $E_\alpha^\dagger=E_{-\alpha}$. 

Usually we choose the normalization eigenvectors $(v_\beta,v_\alpha)=\delta_{\alpha+\beta,0}$. Can prove that $[\hat E_\alpha,\hat E_{-\alpha}]=\alpha^a\hat H_a$. 
Generally:

$$
[\hat E_\alpha,\hat E_\beta]=N_{\alpha,\beta}\hat E_{\alpha+\beta}
$$

Define $g_{ab}=\mathrm{Tr}(\hat H_a\hat H_b)$, then $N_{\alpha,\beta}=\frac{2(\alpha,\beta)}{g_{\alpha,\alpha}}$. The root basis is orthogonal to each other.
The whole Lie algebra is charaterized by the root system $\{\hat H_a,\hat E_\alpha, \hat E_{-\alpha}\}$. 
### Roots
From the commutation relation of root basis, $N_{\alpha,\beta}=-N_{\beta,\alpha}=-N_{-\alpha,-\beta}^*$. 
Using Jocobi identity, we can get:

$$
[\hat E_\alpha,[\hat E_\beta,\hat E_{-\alpha-\beta}]]+[\hat E_{-\alpha-\beta},[\hat E_\alpha,\hat E_\beta]]+[\hat E_\beta,[\hat E_{-\alpha-\beta},\hat E_\alpha]]=0
$$
                                                                                                                                
Recursively, we can get: $N_{\beta,-\alpha-\beta}\alpha^a\hat H_a-N_{\alpha,\beta}(\alpha^a+\beta^a)\hat H_a+N_{-\alpha-\beta,\alpha}\beta^a\hat H_a=0$. 
Because $\hat H_a$ is linear independent, we can get the relation between $\alpha$ and $\beta$:

$$
N_{\alpha,\beta}=N_{\beta,-\alpha-\beta}=N_{-\alpha-\beta,\alpha}
$$

Reuse the Jacobi identity:

$$
\begin{align}
  [\hat E_\alpha,[\hat E_{-\alpha},\hat E_\beta]]+[\hat E_\beta,[\hat E_\alpha,\hat E_{-\alpha}]]+[\hat E_{-\alpha},[\hat E_\beta,\hat E_\alpha]]&=0\\
  N_{\alpha,-\alpha-\beta}N_{-\alpha,\beta}+N_{-\alpha,\alpha+\beta}N_{\beta,\alpha}&=\alpha^a\beta^ag_{ab}
\end{align}
$$

Using the relation derived previously, we can get:

$$
|N_{\alpha,\beta-\alpha}|^2-|N_{\alpha,\beta}|^2=(\alpha,\beta)
$$

From $[E_\alpha,E_\beta]=N_{\alpha,\beta}E_{\alpha+\beta}$, $\vec \beta+n\vec \alpha$ should also be the root. But root should be finite, so there is a maximum $n$.
Assuming $N_{\alpha,\beta+n\alpha}=0$. In the same way, we can get: $N_{-\alpha,\beta-m\alpha=0}$. From the norm relation:

$$
\begin{align}
  \mid N_{\alpha,\beta+n\alpha}\mid^2&=0\\
  \mid N_{\alpha,\beta+(n-1)\alpha}\mid^2&=(\alpha,\beta+n\alpha)\\
  \mid N_{\alpha,\beta+(n-2)\alpha}\mid^2&=(\alpha,\beta+n\alpha)+(\alpha,\beta+(n-1)\alpha)=2(\alpha,\beta)+(2n-1)(\alpha,\alpha)\\
  \vdots\\
  \mid N_{\alpha,\beta+k\alpha}\mid^2&=(n-k)[(\alpha,\beta)+\frac12(n+k-1)(\alpha,\alpha)]\\
  \vdots\\
  \mid N_{\alpha,\beta-(m+1)\alpha}\mid^2&=(n+m+1)[(\alpha,\beta)+\frac12(n-m)(\alpha,\alpha)]=0
\end{align}
$$

Therefore:

$$
2\frac{(\alpha,\beta)}{(\alpha,\alpha)}=m-n
$$

Put back to the forth equation, we can get:

$$
\mid N_{\alpha,\beta+k\alpha}\mid^2=\frac12(n-k)(m+k+1)(\alpha,\alpha)
$$

From the second above equation, we know that $2\frac{(\alpha,\beta)}{(\alpha,\alpha)}$ and $2\frac{(\beta,\alpha)}{(\beta,\beta)}$ are both integers. Name them as $n_1$ and $n_2$. 
Then we can get:

$$
\begin{align}
  \cos^2\theta_{\alpha\beta}&=\frac{(\alpha,\beta)^2}{(\alpha,\alpha)(\beta,\beta)}=\frac14n_1n_2\\
  \frac{(\beta,\beta)}{(\alpha,\alpha)}&=\frac{n_2}{n_1}
\end{align}
$$

Because $\cos^2\theta_{\alpha\beta}\leq 1$, we can get $n_1n_2$ can only be $0,1,2,3,4$. List below:

|$n_1n_2$|$\theta_{\alpha\beta}$|
|---|---|
|0|$\frac\pi 2$|
|1|$\frac\pi 3,\frac{2\pi}3$|
|2|$\frac\pi 4,\frac{3\pi}4$|
|3|$\frac\pi 6,\frac{5\pi}6$|
|4|$0,\frac\pi 2$|

While $\vec \alpha,\vec\beta$ are roots, $\beta'=\beta-2\frac{(\alpha,\beta)}{(\alpha,\alpha)}\alpha$ is also a root. This is called the **Weyl reflection**.

>**Root system of SO(3) or SU(2)**
>
>The root space of SO(3) is 1 dimension. Under Weyl reflection, the root is reversed. 
{: .prompt-tip}

Roots can be classified into positive or negative roots:
* Positive roots: $\alpha_i$ is positive if $(\alpha_i,\alpha_i)>0$. The first nonzero component is positive.
* Negative roots: $\alpha_i$ is negative if $(\alpha_i,\alpha_i)<0$. The first nonzero component is negative.

If the first nonzero component of $\alpha-\beta$ is positive, then we define $\alpha>\beta$. 

#### Simple roots
$r$ smallest positive roots which are linearly independent and give basis of the root space. The root space can be expressed as:

$$
\{\vec\alpha^{(1)},\vec\alpha^{(2)},\dots,\vec\alpha^{(r)}\}
$$

If $\vec\alpha$ and $\vec\beta$ are simple roots, then $\vec\alpha-\vec\beta$ is not a root. This is because simple roots can not be expressed as the summation of positive roots. So, for simple roots, $m=0$ in $2\frac{(\alpha,\beta)}{(\alpha,\alpha)}=m-n$. Therefore, $2\frac{(\alpha,\beta)}{(\alpha,\alpha)}<0$. 
* For simpole roots $\vec\alpha$ and $\vec\beta$, $90^\circ<\theta_{\alpha\beta}<270^\circ$.
* $\vec\beta+vec\alpha,\vec\beta+2\vec\alpha,\dots,\vec\beta+n\vec\alpha$ are all positive roots.
* Arbitrary root can be expressed in terms of $r$ simple roots $\vec\alpha=\pm\sum_{i=1}^rn_i\vec\alpha^{(i)}$.
#### Dynkin diagrams
Simple roots characterize a compact simple Lie algebra. The Dynkin diagram is a graph which represents the structure of simple roots. 
* Simple root $\leftrightarrow \circ$
* $120^\circ$ between two simple roots $\leftrightarrow$ connected by a line.
* $135^\circ$ between two simple roots $\leftrightarrow$ connected by two parallel lines.
* $150^\circ$ between two simple roots $\leftrightarrow$ connected by three parallel lines.
* $90^\circ$ between two simple roots $\leftrightarrow$ connected by no line.

> Dynkin diagram of Lie algebra with rank 2:
>
> ![1735026910787](/assets/img/posts/群论image/1735026910787.png)
{: .prompt-tip}

The $r\times r$ Cartan matrix is defined as $c_{ij}=\frac{2(\alpha_i,\alpha_j)}{(\alpha_j,\alpha_j)}$. The diagonal elements are all 2. 

> Cartan metric of Lie algebra with rank 2:
>
> $$
>\begin{align}
  \mathrm{SU}(3):\begin{pmatrix}
    2&-1\\-1&2
  \end{pmatrix}\quad \mathrm{SO}(5):\begin{pmatrix}
    2&-2\\-2&2\end{pmatrix}\quad \mathrm{G}_2:\begin{pmatrix}
  2&-3\\-1&2
\end{pmatrix}
\end{align}
> $$
> 
{: .prompt-tip}


### Weights
To find the irrep. of simple Lie algebra, for example, 
the irreps. of $\tilde{SO}(3)$ for $j=0,\frac12 ,1$. 
Its basis $J_3$ belongs $\hat H_a$ and $J_{\pm}$ belongs to $\hat E_{\pm\alpha}$. 
The state vector is defined by: 

$$
\ket{\bm \mu,D}
$$

Where $\mathbf \mu$ is the weight of the irrep. with dimension of the rank $r$. ex. In SO(3), the dimension of the weight is 1, and is actually the eigenvalue of $J_3$. Generally,

$$
\begin{align}
  \hat H_a\ket{\bm \mu,D}&=\mu_a\ket{\bm \mu,D}\\
  \bm \mu&=(\mu_1,\mu_2,\dots,\mu_r)
\end{align}
$$

For adjoint rep., the weight is the root. 

$\hat E_{\pm\alpha}$ acts like a lowering or raising operator. From the commutation relation disscussed in section2, we can get:

$$
\begin{align}
  \hat H_a\hat E_{\pm\alpha}\ket{\bm \mu,D}&=[\hat H_a,\hat E_{\pm\alpha}]\ket{\bm \mu,D}+\hat E_{\pm\alpha}\hat H_a\ket{\bm \mu,D}\\
  &=(\mu_a\pm\alpha_a)\hat E_{\pm\alpha}\ket{\bm \mu,D}\\
  \to \hat E_{\pm\alpha}\ket{\bm \mu,D}&=N_{\pm\alpha,\mu}\ket{\bm \mu\pm\alpha,D}
\end{align}
$$

The properties of $N_{\pm\alpha,\mu}$ are:
* $\mid N_{-\alpha,\mu}\mid^2-\mid N_{\alpha,\mu}\mid^2=(\alpha,\mu)$
* $N_{-\alpha,\mu}=N_{\alpha,\mu-\alpha}^*$
This agrees with the root properties discussed before.

The same mathematical structure compared with roots leads to the same results of the weights:
* If we set $\hat E_\alpha\ket{\bm \mu+p\bm\alpha,D}=0=\hat E_{-\alpha}\ket{\bm\mu-q\bm\alpha}$, then $2\frac{(\alpha,\mu)}{(\alpha,\alpha)}=q-p$.
* $\mu'=mu-2\frac{(\alpha,\mu)}{(\alpha,\alpha)}\alpha$ is also a weight.
* $\mid N_{\alpha,\mu+k\alpha}\mid^2=\frac12(p-k)(q+k+1)(\alpha,\alpha)$
* Weights can be classified into positive or negative weights.

State with the highest weight is uniquely determined for an irrep. D.
> Proof:
> Assume there are two states $\ket{\bm\mu,D}$ and $\ket{\bm\mu,D}'$ with the highest weight. Then $\ket{\bm\mu,D}'=c\hat E_{\alpha_1}\hat E_{\alpha_2}\dots\hat E_{\alpha_l}\ket{\bm\mu,D}$, with $\sum_{i=1}^l\alpha_i=0$. If there is a $\alpha_i$ which is positive, then $\hat E_{\alpha_i}\ket{\bm\mu,D}=0$. If there is a $\alpha_i$ which is negative, then $\hat E_{\alpha_i}\ket{\bm\mu,D}$ is a state with lower weight. Therefore, $\ket{\bm\mu,D}'=c\ket{\bm\mu,D}$.
{: .prompt-tip}

The irrep. of simple Lie algebra is determined by fundamental weights $\bm\mu^{(i)}$ or so-called Dynkin index:

$$
\mu:[q^1,q^2,\dots,q^r]\quad \mu^{(i)}:[0,0,\dots,1,\dots,0]
$$

Then with roots $2\frac{(\alpha_i,\mu^{(j)})}{(\alpha_i,\alpha_i)}=\delta_{ij}$, we can get the weight of the irrep. The fundamental rep. is the rep. with basis of fundamental weights. For example, the rep. $\rho^{(i)}$ is the rep. with basis of $\ket{\bm\mu^{(i)},D}$.

The direct product rep. of $\rho^{(a)}(\hat X)$ and $\rho^{(b)}(\hat X)$ has basis $\ket{\bm\mu^{(a)},D}\otimes\ket{\bm\mu^{(b)},D'}$. The action of Lie algebra $\hat X$ on this basis is:

$$
\begin{align}
  \hat X\ket{\bm\mu^{(a)},D}\otimes\ket{\bm\mu^{(b)},D'}&=\hat X\ket{\bm\mu^{(a)},D}\otimes\ket{\bm\mu^{(b)},D'}+\ket{\bm\mu^{(a)},D}\otimes\hat X\ket{\bm\mu^{(b)},D'}\\
  [\rho^{a\times b}(\hat X)]_{ik,jl}&=[\rho^{(a)}(\hat X)]_{ij}\delta_{kl}+\delta_{ij}[\rho^{(b)}(\hat X)]_{kl}\\
  \hat H_c\ket{\bm\mu^{(a)},D}\otimes\ket{\bm\mu^{(b)},D'}&=(\mu^{(a)}_c+\mu^{(b)}_c)\ket{\bm\mu^{(a)},D}\otimes\ket{\bm\mu^{(b)},D'}
\end{align}
$$
## SU(3) Group
### The Gell-Mann matrices
SU(3) group is the group of unitary 3x3 matrices with determinant 1. The general form of SU(3) matrix is:

$$
U=\exp[i\frac{J_a}{2}t^a]
$$

where $J_a$ is the generator of SU(3) group. The Gell-Mann matrices are the generators of SU(3) group. The Gell-Mann matrices are:

$$
\begin{align}
  \lambda_1&=\begin{pmatrix}
    0&1&0\\1&0&0\\0&0&0
  \end{pmatrix}\quad \lambda_2=\begin{pmatrix}
    0&-i&0\\i&0&0\\0&0&0
  \end{pmatrix}\quad \lambda_3=\begin{pmatrix}
    1&0&0\\0&-1&0\\0&0&0
  \end{pmatrix}\\
  \lambda_4&=\begin{pmatrix}
    0&0&1\\0&0&0\\1&0&0
  \end{pmatrix}\quad \lambda_5=\begin{pmatrix}
    0&0&-i\\0&0&0\\i&0&0
  \end{pmatrix}\quad \lambda_6=\begin{pmatrix}
    0&0&0\\0&0&1\\0&1&0
  \end{pmatrix}\\
  \lambda_7&=\begin{pmatrix}
    0&0&0\\0&0&-i\\0&i&0
  \end{pmatrix}\quad \lambda_8=\frac{1}{\sqrt 3}\begin{pmatrix}
    1&0&0\\0&1&0\\0&0&-2
  \end{pmatrix}
\end{align}
$$

From previous discussion, $2\frac{(\alpha_i,\mu)}{(\alpha_i,\alpha_i)}=q^i$.

The properties of Gell-Mann matrices are:
* $\mathrm{tr}(\lambda_i)=0$
* Define $T^a=\frac12\lambda^a$, the normalization is $\mathrm{tr}(T^aT^b)=\frac12\delta_{ab}$
* The commutation relation is $[T^a,T^b]=if^{abc}T^c$, where f_{abc} is:

|$abc$|$f_{abc}$|
|---|---|
|123|1|
|147|$\frac12$|
|156|$-\frac12$|
|246|$\frac12$|
|257|$\frac12$|
|345|$\frac12$|
|367|$-\frac12$|
|458|$\frac{\sqrt 2}2$|
|678|$\frac{\sqrt 2}2$|

Under this matrix rep., 
the cartan subalgebra of SU(3) is $H_1=T_3,H_2=T_8$. The root space of SU(3) is 2 dimension. 
Simply choose the eigenvector as $(1,0,0),(0,1,0),(0,0,1)$, the corresponding state vector $\mu$ is computed by the corresponding eigenvalue of $H_1,H_2$, which is $\ket{\frac12,\frac1{2\sqrt3}},\ket{-\frac12,\frac1{2\sqrt3}},\ket{0,-\frac1{\sqrt3}}$.

Considering the adjoint rep., $(\mathrm{ad}H_1)^i_{\quad j}=if_{3j}^{\quad i}$, $(\mathrm{ad}H_2)^i_{\quad j}=if_{8j}^{\quad i}$. This is a 8-dimensional rep. Compute the eigenvalues and eigenvectors as well:

|Eigenvalue/Root|Eigenvector $v_\alpha$|
|---|---|
|$\pm\alpha^{(4)}=(0,0)$|$\mathbf 0$|
|$\pm\alpha^{(3)}=(\pm1,0)$|$(1,\pm i,0,0,0,0,0,0)/\sqrt 6$|
|$\pm\alpha^{(2)}=(\frac12,\pm\frac{\sqrt 3}2)$|$(0,0,0,1,\pm i,0,0,0)/\sqrt 6$|
|$\mp\alpha^{(1)}=(\mp\frac12,\pm\frac{\sqrt 3}2)$|$(0,0,0,0,0,1,\pm i,0)/\sqrt 6$|

The lower and raising operators are defined by $E_\alpha=\alpha^{(i)}X_i$, which is:

$$
\begin{align}
  E_{\pm\alpha^{(3)}}&=\frac1{\sqrt 6}(T_1\pm iT_2)\\
  E_{\pm\alpha^{(2)}}&=\frac1{\sqrt 6}(T_4\pm iT_5)\\
  E_{\mp\alpha^{(1)}}&=\frac1{\sqrt 6}(T_6\pm iT_7)
\end{align}
$$

The number of positive roots is 3, which is $0<\alpha^{(1)}<\alpha^{(2)}<\alpha^{(3)}$. Because $\alpha^{(1)}+\alpha^{(2)}=\alpha^{(3)}$, there are only 2 simple roots. The highest root is $\alpha^{(3)}$. The weight of the irrep. is $\mu=[q^1,q^2]$, which is determined by:

$$
q^i=2\frac{(\alpha^{(i)},\mu)}{(\alpha^{(i)},\alpha^{(i)})}
$$

It is easy to prove the conclusion given before: the cartan matrix is $\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$. This also gives the Dynkin index of the adjoint rep. is $[1,1]$ (or $[2,-1]$). The transformation is given by:

<!-- ![1735612947971](/assets/img/posts/群论image/1735612947971.png) -->

<!-- The fundamental rep. is defined by the Dynkin index $[1,0]$ and $[0,1]$, while the corresponding state vectors are $(\frac12,-\frac1{2\sqrt 3})$ and $(\frac12,\frac1{2\sqrt 3})$. They are all 3 dim rep. with the sets of weight: $[0,1],[1,-1],[-1,0]$ and $[1,0],[0,-1],[-1,1]$. The relation between the two rep. is that they are conjugate to each other. Because $-T_a^*$ also satisfy the commutation relation of SU(3) group. 
They are called $\mathbf 3^*$ and $\mathbf 3$ rep.. Namely, the adjoint rep. is self-conjugate. -->

The ireps. of SU(3) group are classified by the Dynkin index:
![1735753032194](/assets/img/posts/群论image/1735753032194.png)
### Higher dimensional representations
Any reps. of SU(3) group can be constructed by the fundamental rep. and its conjugate. Define the state vector of two fundamental rep. as:

$$
\begin{align}
  [0,1]:\ket{\frac12,\frac1{2\sqrt{3}}}=\ket{{}_1},\ket{-\frac12,\frac1{2\sqrt{3}}}=\ket{{}_2},\ket{0,-\frac1{\sqrt{3}}}=\ket{{}_3}\\
  [1,0]:\ket{-\frac12,-\frac1{2\sqrt{3}}}=\ket{{}^1},\ket{\frac12,-\frac1{2\sqrt{3}}}=\ket{{}^2},\ket{0,\frac1{\sqrt{3}}}=\ket{{}^3}
\end{align}
$$

The operators act on the state vectors are:

$$
\hat U\ket{{}_i}=\ket{{}_j}U^j_i,\quad \hat U\ket{{}^i}=\ket{{}^j}U_j^{i*}
$$

For direct product state, write them as:

$$
\ket{{}^{i_1}}\ket{{}^{i_2}}\dots\ket{{}^{i_n}}\ket{{}_{j_1}}\ket{{}_{j_2}}\dots\ket{{}_{j_m}}=\ket{{}^{i_1i_2\dots i_n}_{j_1j_2\dots j_m}}
$$

Focusing on the direct product state $\ket{{}_i}\ket{{}^j}$, the transformation is:

$$
\hat U\ket{{}_i}\ket{{}^j}=\ket{{}_k}\ket{{}^l}U^k_iU_l^{j*}
$$

If $i=j$, regarding that $\hat U$ is unitary as they belong to SU(3) group, we can get:

$$
\hat U\ket{{}_i}\ket{{}^i}=\ket{{}_i}\ket{{}^i}
$$

which means the direct product state is invariant under the transformation. This is the identity rep. of SU(3) group. Then turn to the symmetric and antisymmetric pairs:

$$
\begin{align}
  \ket{{}_{(i,j)}}&=\frac{\ket{{}_i}\ket{{}_j}+\ket{{}_j}\ket{{}_i}}{\sqrt2}\\
  \ket{{}_{[i,j]}}&=\frac{\ket{{}_i}\ket{{}_j}-\ket{{}_j}\ket{{}_i}}{\sqrt2}
\end{align}
$$

The D.O.E. of symmetric pair is 6 and the D.O.E. of antisymmetric pair is 3. The eigenvalues of them are all $\mu^{(i)}+\mu^{(j)}$. 
It actually gives $\mathbf 3\otimes\mathbf 3=\mathbf 6\oplus\mathbf 3^*$. The complex conjugate cases are $\mathbf 3^*\otimes\mathbf 3^*=\mathbf 6^*\oplus\mathbf 3$. Considering $\ket{{}^i_j}$, the diagonal components are identity rep. as $i=j$. The D.O.E. of the remaining part is 8, which is just the adjoint rep.. This composition is $\mathbf 3^*\otimes\mathbf 3=\mathbf 8\oplus\mathbf 1$.
### Tensors and Young tableaux
Considering the physical quantities respecting SU(3) group, the tensor is defined as:

$$
\ket{V}=\ket{{}_{i_1i_2\dots i_n}^{j_1j_2\dots j_m}}V_{i_1i_2\dots i_n}^{j_1j_2\dots j_m}
$$

The SU(3) transformation U acts on the tensor as:

$$
\hat U\ket V=\ket{{}_{k_1k_2\dots k_n}^{l_1l_2\dots l_m}}U^{l_1}_{j_1}U^{l_2}_{j_2}\dots U^{* i_1}_{k_1}U^{* i_2}_{k_2}\dots V_{i_1i_2\dots i_n}^{j_1j_2\dots j_m}=\ket{UV}
$$

Generally, we can decompose the tensor into symmetric and antisymmetric parts or diagonal and off-diagonal parts:

$$
\begin{align}
  V^{ij}&=V^{(ij)}+V^{[ij]}\\
  V^{(ij)}&=\frac{V^{ij}+V^{ji}}{2}\to [0,2]=\mathbf 6\\
  V^{[ij]}&=\frac{V^{ij}-V^{ji}}{2}\to [1,0]=\mathbf 3^*\\
  V^j_i&=[V^j_i-\frac13\delta^j_i(V^k_k)]+\frac13\delta^j_i(V^k_k)\\
  &V^j_i-\frac13\delta^j_i(V^k_k)\to [1,1]=\mathbf 8\\
  &\frac13\delta^j_i(V^k_k)\to [0,0]=\mathbf 1
\end{align}
$$

It can be proved that the Levi-Civita tensor is invariant under the SU(3) transformation. It can act on the tensor to lower index:

$$
T^{[i,j]k}=\epsilon^{ijl}T^k_l
$$

We can use it to convert any tensor into $T^{[r_1,s_1],[r_2,s_2],\dots,[r_n,s_n]j_1j_2\dots j_m}$ for a tensor in $[n,m]$ weight.
Young tableaux is a way to classify the tensor. The Young tableau follows the rule:
* All $s,r,j$ are positive integers while lower than 3.
* $r_1\leq r_2\leq\dots\leq r_m\leq j_1\leq j_2\leq\dots\leq j_m$
* $r_1<s_i$ for all $i$

From the Young tableau, we can obtain the dimension of the tensor from the Dynkin index $[n,m]$.

$$
D(n,m)=B(n,m)-B(n-1,m-1)=\frac{(n+1)(m+1)(n+m+2)}2
$$
### Decomposition of direct products of representations
To decompose the direct product of reps. A and B. 
* Name the upper index as 'a' and lower index as 'b'. If rep. of A has 3 upper indices and 2 lower indices, then it has 3 'a' and 2 'b'.
* Write 'a' in all the boxes of the first row of B and write 'b' in all the boxes of the second row of B.
* Pick a box 'a' one by one from the right and add it to each row of A. Repeat this process for all the boxes 'a' in B.
* Pick a box 'b' one by one from the right and add it to each row of A. Count # of 'a' from the right to the left and also count # of 'b' in the same way. The latter has not to be larger than the former. Count # of 'a' from the top to the bottom and also count # of 'b' in the same way. The latter has not to be larger than the former.
### Symmetry of elementary particles
Hadrons are made of quarks, which have $u,d,s,c,b,t$ flavors. $(u,d,s)$ satisfy the basis of $\mathbf 3$, and $(\bar u,\bar d, \bar s)$ satisfy the basis of $\mathbf 3^*$. 

The mesons fit the representation of $\mathbf 3\times\mathbf 3^*=\mathbf 8+\mathbf 1$. The baryons fit the representation of $\mathbf 3\times\mathbf 3\times\mathbf 3=\mathbf{10}+\mathbf 8+\mathbf 8+\mathbf 1$. The $\mathbf 10$ rep. is called decuplet, while the $\mathbf 8$ rep. is called octet. The $\mathbf 1$ rep. is called singlet.