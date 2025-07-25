#include <bits/stdc++.h>

using namespace std;
typedef long long ll;

int main(){
  int n;
  cin >> n;

  //vector <vector <char>> grilla(n, vector<char>(n));
  vector <string> grilla(n);
  vector <vector <int>> dp(n, vector<int>(n, 0));


  for(int i=0; i<n; i++){
    cin >> grilla[i];
  }

  const int MOD = 1e9+7;

  dp[0][0] = 1;
  if(grilla[0][0] == '*') dp[0][0] = 0;
  for(int x=0; x<n; x++){
    for(int y=0; y<n; y++){
      if(x==0 and y==0) continue;
      if(grilla[x][y] == '*'){
        continue;
      }

      /*
      dp[x][y] += (x-1>=0 ? dp[x-1][y] : 0) +
                  (y-1 >= 0 ?dp[x][y-1] : 0);      
      */
      
      dp[x][y] = 0;
      if(x-1 >= 0){
        dp[x][y] += dp[x-1][y];
      }
      if(y-1 >= 0){
        dp[x][y] += dp[x][y-1];
      }
      dp[x][y] = dp[x][y] % MOD;
    }
  }
  cout << dp[n-1][n-1] << '\n';

  

  return 0;
}
