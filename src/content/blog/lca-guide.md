---
title: "Lowest Common Ancestor & Binary Lifting"
description: "Ağaç sorguları için LCA ve binary lifting notları."
pubDate: "Jun 27 2026"
heroImage: "/src/assets/blog-placeholder-1.jpg"
---

Bu yazıda ağaçlar üzerinde ata sorgularını ve iki düğümün en düşük ortak atasını
verimli bulmak için kullanılan binary lifting fikrini toparlıyoruz.

### Karmaşıklık Analizi
Sparse table yapısını kurmak $O(N \log N)$ zaman alır. Sonrasında her LCA sorgusu:
$$O(\log N)$$

### Temel İskelet
```cpp
#include <bits/stdc++.h>
using namespace std;

int n, up[200005][20];

void dfs(int v, int p) {
    up[v][0] = p;
    for (int i = 1; i < 20; ++i)
        up[v][i] = up[up[v][i-1]][i-1];
}
