#include <bits/stdc++.h>

using namespace std;


int main()
{
    int n, a, b, c;
    cin>>n>>a>>b>>c;

    int max_cut = 0;

    for (int i = 0; i <= (n/a); i++) {
        for (int j = 0; j <= (n/b); j++)
        {
            int val = n - ((a*i) + (b*j));

            if (val % c == 0 && val > 0)
                max_cut = max(max_cut, i + j + (val/c));
        }
    }

    cout<<max_cut;
}