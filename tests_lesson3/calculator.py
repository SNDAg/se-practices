class Calculator:
    def add(self, a: int, b: int):
        return a + b
    def sub(self, a: int, b: int):
        return a - b
    def mul(self, a: int, b: int):
        return a * b
    def div(self, a: int, b: int):
        return a / b

# if we don't want "self"
# @staticmethod
#     def sub(a: int, b: int):
#         return a - b