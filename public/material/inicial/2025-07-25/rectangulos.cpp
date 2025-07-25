#include <bits/stdc++.h>

using namespace std;

vector <vector<int>> dp;

int f(int a, int b){
  if(dp[a][b] != -1){
    return dp[a][b];
  }
  if(a == b){
    return 0;
  }

  int ans = 1e9;

  for(int x=1; x<=b-1; x++){
    // corte vertical
    // (a, x) y otro de (a, b-x)
    ans = min(ans, 1+f(a,x)+f(a,b-x));
  }
  for(int y=1; y<=a-1; y++){
    // corte horizontal
    // (y, b) y (a-y, b)
    ans = min(ans, 1+f(y,b)+f(a-y,b));
  }

  dp[a][b] = ans;
  return ans;
}

int main(){
  
  int a, b;
  cin >> a >> b;

  // dp es vector<vector<int>>
  dp.assign(a+1, vector<int>(b+1, -1));
  // vec.assign(tamaño, valor_inicial)
  // dp[a][b]
  
  cout << f(a,b) << '\n';

  return 0;
}
