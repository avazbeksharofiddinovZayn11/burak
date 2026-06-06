# Q MITASK
def hasProperty(obj, prop):
    return prop in obj


print(hasProperty({"name": "BMW"}, "name"))  
print(hasProperty({"name": "BMW"}, "color"))  


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