# L task


def reverseSentence(text):
    words = text.split()

    reversed_words = []

    for word in words:
        reversed_words.append(word[::-1])

    return " ".join(reversed_words)


print(reverseSentence("we like coding!"))