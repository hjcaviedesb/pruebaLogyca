def print_first_N_primes(n): 
  
    i, j, flag = 0, 0, 0

    primes = [] 

    for i in range(1, n + 1, 1): 
  
        if (i == 1 or i == 0): 
            continue 
  
        flag = 1 
  
        for j in range(2, ((i // 2) + 1), 1): 
            if (i % j == 0): 
                flag = 0 
                break 
  
        if (flag == 1): 
            primes.append(i)
        
    return primes


def printTwinPrime(n): 
      
    prime = [True for i in range(n + 2)] 
    p = 2
    pairs = []
      
    while (p * p <= n + 1): 
          
        if (prime[p] == True): 
              
            for i in range(p * 2, n + 2, p): 
                prime[i] = False
        p += 1
      
    for p in range(2, n-1): 
        if prime[p] and prime[p + 2]: 
            pairs.append([p,p+2]) 
    
    return pairs
  


