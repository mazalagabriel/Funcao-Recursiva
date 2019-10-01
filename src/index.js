/*


Função Recursiva - é uma função que 
invoca a si próprio

algoritmo para verificar se um número é PAR */

/*function par(x) {
  if (x % 2 == 0)
   return `O numero ${x} é par`;
  else
   return `O numero ${x} é impar`;
}
document.write(par(2));*/

function potencia(base, expoente){
  if(expoente == 0)
    return 1;
  else
  return base * potencia(base, expoente - 1);
}
document.write(potencia(2, 5));

