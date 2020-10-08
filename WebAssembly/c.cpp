#include <iostream>
#include <ctime>

using namespace std;

int fib(int n)
{
    if (n < 2)
        return n;
    return fib(n - 1) + fib(n - 2);
}

int main()
{
    int t1, t2;
    t1 = clock();
    fib(40);
    t2 = clock();
    cout << t2 - t1 << "ms" << endl;
    return 0;
}