#include <bits/stdc++.h>

using namespace std;
typedef long long ll;

int main(){
  int n;
  cin >> n;
  vector <ll> a(n);
  for(int i=0; i<n; i++){
    cin >> a[i];
  }

  vector <ll> f(n);
  f[0] = a[0];
  f[1] = max(a[0], a[1]);
  for(int i=2; i<n; i++){
    f[i] = max(f[i-1], f[i-2]+a[i]);
  }
  cout << f[n-1] << '\n';

  return 0;
}
