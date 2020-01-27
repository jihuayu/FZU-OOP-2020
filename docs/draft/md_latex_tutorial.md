# Markdown 和 Latex 教程

对于部分时候，我们发现自己不可避免地需要使用到数学公式，这篇文章将指导你如何使用一些基础 Markdown 的 Latex 语法

1. 关于数字的规则

```
$2$    $3.6$    ${2\over 5}$    $\sqrt{2}$    $\sqrt[3]{56}$
```

效果

$2\quad 3.6\quad {2\over 5}\quad \sqrt{2}\quad \sqrt[3]{56}$

2. 关于变量即基础的上下标规则

```
$x$    $y^2$    $a_1$    $\ ^3d$    $\ _2k$
```

$x\quad y^2\quad a_1\quad \ ^3d\quad \ _2k$

3. 关于较复杂的上下标规则

```
$10^23$    $10^{23}$    $a_1^2$    $a^2_1$
```

$10^23\quad 10^{23}\quad a_1^2\quad a^2_1$

4. 大括号

```
$
\begin{cases}
x=2+y
\\y=3
\end{cases}
$
```

$
\begin{cases}
x=2+y
\\y=3
\end{cases}
$

5. 矩阵

```cpp
$
\left(
\begin{matrix}
1&0
\\ 1&1
\end{matrix}
\right)
$
```

$
\left(
\begin{matrix}
1&0
\\ 1&1
\end{matrix}
\right)
$

6. 带省略号的矩阵

```
$
\left(
\begin{matrix}
1 & 1 & 1 & \cdots & 1
\\x_1 & x_2 & x_3 & \cdots & x_n
\\x_1^2 & x_2^2 & x_3^2 & \cdots & x_n^2
\\\vdots & \vdots & \vdots & \ddots & \vdots
\\x_1^n & x_2^n & x_3^n & \cdots & x_n^n
\end{matrix}
\right)
$
```

$
\left(
\begin{matrix}
1 & 1 & 1 & \cdots & 1
\\x_1 & x_2 & x_3 & \cdots & x_n
\\x_1^2 & x_2^2 & x_3^2 & \cdots & x_n^2
\\\vdots & \vdots & \vdots & \ddots & \vdots
\\x_1^n & x_2^n & x_3^n & \cdots & x_n^n
\end{matrix}
\right)
$

7. 数学重音符号

```
$\hat{a}$    $\vec{a}$    $\overline{a}$    $\underline{a}$
```

$\hat{a}\quad \vec{a}\quad \overline{a}\quad \underline{a}$

8. 数学记号

```
$\sum$    $\prod$    $\int$    $\infty$    $\nabla$
```

$\sum\quad \prod\quad \int\quad \infty\quad \nabla$

```
${ \text{d} \over \text{d}x }$     $\in$    $\not\in$    $\{\}$    $\emptyset$
```

${\text{d}\over\text{d}x}\quad \in\quad \not\in\quad \{\}\quad \emptyset$

```
$\subset$    $\subsetneqq$    $\supset$    $\supsetneqq$    $\pm$
```

$\subset\quad \subsetneqq\quad \supset\quad \supsetneqq\quad \pm$

```
$\bigcup$    $\bigcap$    $\times$    $\div$    $\neq$
```

$\bigcup\quad \bigcap\quad \times\quad \div\quad \neq$

```
$\leq$    $\geq$    $\equiv$    $\approx$    $\cdot$
```

$\leq\quad \geq \quad \equiv \quad \approx\quad \cdot$

```
$\because$    $\therefore$    $\forall$    $\exist$    $\circ$
```

$\because\quad \therefore\quad \forall\quad \exist\quad \circ$

```
$\sum_{i=1}^{n+1} i$    $\int\ln x\text dx$    $\lim_{x\to 0}{\sin x\over x}$
```

$\sum_{i=1}^{n+1} i\quad \int\ln x\text dx\quad \lim_{x\to 0}{\sin x\over x}$

```cpp
$\displaystyle \int_1^e\ln x\text dx=x\ln x|_1^e-\int_1^e x\text d\ln x=e-\int_1^e\text dx=e-(e-1)=1$
```


$\displaystyle \int_1^e\ln x\text dx=x\ln x|_1^e-\int_1^e x\text d\ln x=e-\int_1^e\text dx=e-(e-1)=1$