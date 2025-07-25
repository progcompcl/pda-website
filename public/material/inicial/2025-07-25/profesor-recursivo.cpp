#include <bits/stdc++.h>

using namespace std;
typedef long long ll;

vector <ll> a;
vector <ll> dp;

// Dynamic Programming
// Memoización
ll f(int i){
  if(dp[i] != -1){
    return dp[i];
  }
  if(i == 0){
    return a[0];
  }
  else if(i == 1){
    return max(a[0], a[1]);
  }

  ll ret = max(f(i-1), f(i-2)+a[i]);
  dp[i] = ret;
  return ret;
}

int main(){
  int n;
  cin >> n;
  a.resize(n);
  dp.assign(n, -1);
  // dp[x] = -1 significa que aún no calculamos f(x)
  for(int i=0; i<n; i++){
    cin >> a[i];
  }
  cout << f(n-1) << '\n';
}
