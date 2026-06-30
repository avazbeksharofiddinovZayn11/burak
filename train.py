# Z MITASK  
def numbers(arr):
    total = 0

    for num in arr:
        if num % 2 == 0:
            total += num

    return total


arr = [2, 3, 4, 6, ]
print(numbers(arr))
# 
# Y MITASK  
# def findintersection (one1, two2):
#     result = []

#     for son in one1:
#         if son in two2:
#             result.append(son)

#     return result
# print(findintersection([1, 3, 2, "olma", "behi"], [3, "olma"]))
# 
# X MITASK 
# def countModel(obj, key):
#     count = 0

#     for k, v in obj.items():
#         if k == key:
#             count += 1

        
#         if isinstance(v, dict):
#             count += countModel(v, key)

#     return count



# data = {
#     "model": "mers",
#     "s": {
#         "model": "bmw",
#         "x": {
#             "model": "audi"
#         }
#     },
    
# }

# print(countModel(data, "model"))


# W MITASK 
# def sonArray(arr, size):
#     result = []

#     for i in range(0, len(arr), size):
#         result.append(arr[i:i + size])

#     return result

# print(sonArray([8, 9, 56, 44, 1, 3, 33,], 2))



# V MITASK
# def coutChars(text):
#     result = {}
    
#     for char in text:
#         result[char] = result.get(char,0) + 1

#     return result
# print(coutChars("professional"))


# T MITASK
# def mergeSortedArrays(arr1, arr2):
#     return sorted(arr1 + arr2)

# print(mergeSortedArrays([0, 4, 7, 3], [9, 2, 6]))
# 
# 
# 
# S MITASK
# def missingNumber(nums):
#     n = len(nums)

#     expected_sum = n * (n + 1) 
#     actual_sum = sum(nums)

#     missing = expected_sum - actual_sum

#     return missing


# print(missingNumber([1, 3, 4, 0]))



# R TASK 
# def calculate(expression):
#     num1, operator, num2 = expression.split()

#     num1 = int(num1)
#     num2 = int(num2)

#     if operator == "+":
#         return num1 + num2
# print(calculate("12 + 11"))

# 
# 
# Q MITASK
# def hasProperty(obj, prop):
#     return prop in obj


# print(hasProperty({"name": "BMW"}, "name"))  
# print(hasProperty({"name": "BMW"}, "color"))  


# P MITASK
# def objectToArray(obj):
#     result = []

#     for key, value in obj.items():
#         result.append([key, value])

#     return result
# print(objectToArray({"a": 13, "b": 9}))


# O MITASK
# def calculateSumOfNumbers(arr):
#     total = 0

#     for item in arr:
#         if type(item) == int or type(item) == float:
#             total += item

#     return total


# print(calculateSumOfNumbers([13, "4", {"son": 13}, True, 24]))



# Project Standands:
# Logging Standands:
# Naming Standands;
    # Funtion, method, veriable => Camel
    # class => PASCAL
    # folder => KEBAB
    # css => SNAKE
# - Error handling 
# API
# REST API
# GRAPHQL API

#  Traditional FD => SSR => EJS
# Modern FD       => SPA => REACT
# request join
# self destroy




# N MITASK
# def palindromCheck(word, sayt):
#     reversed_word = ""

#     for i in range(len(word) - 1, -1, -1):
#         reversed_word += word[i]

#     return word == reversed_word

# print(palindromCheck("dad", "mom"))





# M task
# def getSquareNumbers(arr):
#     result = []

#     for num in arr:
#         obj = {
#             "number": num,
#             "square": num * num
#         }

#         result.append(obj)

#     return result


# print(getSquareNumbers([8, 5, 9, 3,]))


# L task

# def reverseSentence(text):
#     words = text.split()

#     reversed_words = []

#     for word in words:
#         reversed_words.append(word[::-1])

#     return " ".join(reversed_words)


# print(reverseSentence("we like coding!"))