#include <bits/stdc++.h>

using namespace std;

int main(){
  int n, W;
  cin >> n >> W;
  vector <int> w(n), v(n);
  for(int i=0; i<n; i++) cin >> w[i];
  for(int i=0; i<n; i++) cin >> v[i];
  vector <vector<int>> dp(n+1, vector<int>(W+1, -1));
  for(int p=0; p<=W; p++){
    dp[0][p] = 0;
  }
  for(int i=1; i<=n; i++){
    for(int p=0; p<=W; p++){
      dp[i][p] = dp[i-1][p];
      if(p-w[i-1] >= 0){
        dp[i][p] = max(dp[i][p], v[i-1]+dp[i-1][p-w[i-1]]);
      }
    }
  }
  cout << dp[n][W] << '\n';
}
