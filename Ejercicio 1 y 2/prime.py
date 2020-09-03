
  
def print_first_N_primes(N): 
  
    i, j, flag = 0, 0, 0 

    for i in range(1, N + 1, 1): 
  
        if (i == 1 or i == 0): 
            continue 
  
        flag = 1 
  
        for j in range(2, ((i // 2) + 1), 1): 
            if (i % j == 0): 
                flag = 0 
                break 
  
        if (flag == 1): 
            print(i)
  
if __name__=='__main__': 
    
    print("Ingrese numero n: ")
    n = input()
    print_first_N_primes(n) 
  
