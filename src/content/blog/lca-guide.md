---
title: "Lowest Common Ancestor & Binary Lifting"
description: "Advanced tree techniques prepared for the national training camp."
pubDate: "Jun 27 2026"
heroImage: "/src/assets/blog-placeholder-1.jpg"
---

Welcome to the training materials. Today we are optimizing queries on trees.

### Complexity Analysis
Building the sparse table takes $O(N \log N)$ time, allowing each query to run in:
$$O(\log N)$$

### Core Implementation
```cpp
#include <bits/stdc++.h>
using namespace std;

int n, up[200005][20];

void dfs(int v, int p) {
    up[v][0] = p;
    for (int i = 1; i < 20; ++i)
        up[v][i] = up[up[v][i-1]][i-1];
}