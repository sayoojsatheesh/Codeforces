#include <bits/stdc++.h>

using namespace std;


int main()
{
    int n, a, b, c;
    cin>>n>>a>>b>>c;

    vector<vector<int>> dp;
    dp.push_back({0,0,0});

    for (int i = 1; i<=n; i++) {
        dp.push_back({0,0,0});

        if (i > a)
            dp[i][0] = dp[i-a][0] + 1
    }
}