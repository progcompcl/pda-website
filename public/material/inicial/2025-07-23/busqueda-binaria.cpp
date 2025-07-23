#include <bits/stdc++.h>

using namespace std;

int main() {
  // Material complementario recomendado:
  // https://uchile.progcomp.cl/apunte/paradigmas_de_resolucion/busqueda_binaria/

  /*  Búsqueda Binaria
   *  l: inicio del espacio de búsqueda (int o long long)
   *  r: fin del espacio de búsqueda (int o long long)
   *  mid: centro del espacio de búsqueda (int o long long)
   *  Requiere que la condición sea "monótona": es falsa hasta cierto punto,
   *  después es siempre verdadera, o al revés.
   *  Busca el primer valor entre l y r que hace la propiedad verdadera.
   */


  // Encontrar primer valor donde la condición se cumple (función tipo FFFFVVV)
  while (l < r) {
    mid = (l + r) / 2; // se puede usar l+(r-l)/2 para evitar overflow por la suma
    if (/* condición es verdadera en mid */)
      r = mid;
    else
      l = mid + 1;
  }
  if (/* condición es falsa en l */)
    /* quejarse! la condición es falsa para todos los valores
    del espacio de búsqueda inicial */
  else
    /* l (que en este punto es igual a r) es el primer valor
    en el espacio donde se cumple la condición */


  // Encontrar último valor que es verdadero (función tipo VVVVVFFFF)
  while(l < r){
    mid = (l + r + 1)/2; // Techo de (l+r)/2
    if(/* condición verdadera en mid */)
      l = mid;
    else
      r = mid-1;
  }
  if (/* condición es falsa en l */)
    /* quejarse! la condición es falsa para todos los valores
    del espacio de búsqueda inicial */
  else
    /* l (que en este punto es igual a r) es el último valor
    en el espacio donde se cumple la condición */
}
