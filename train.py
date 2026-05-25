# M task
def getSquareNumbers(arr):
    result = []

    for num in arr:
        obj = {
            "number": num,
            "square": num * num
        }

        result.append(obj)

    return result


print(getSquareNumbers([8, 5, 9, 3,]))


# L task

# def reverseSentence(text):
#     words = text.split()

#     reversed_words = []

#     for word in words:
#         reversed_words.append(word[::-1])

#     return " ".join(reversed_words)


# print(reverseSentence("we like coding!"))