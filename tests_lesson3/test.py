import unittest

class TestMath(unittest.TestCase):
    def test_plus(self):
        self.assertEqual(4, 2 + 2, "Expected 2 + 2 to equal 4")

if __name__ == '__main__':
    unittest.main()