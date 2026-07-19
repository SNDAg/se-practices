import unittest
from unittest.mock import Mock
from tests_lesson3.TestedClass import TestedClass 

class Tester(unittest.TestCase):
    def test_decorateFetchedList(self):
        # הגדרת המוק
        mock = Mock()
        def return_my_list():
            return [1, 2, 3]
        mock.fetch = Mock(side_effect=return_my_list)
        
        # הרצת הטסט
        testedObject = TestedClass(mock)
        decoratedList = testedObject.decorateFetchedList()
        
        # בדיקת התוצאה
        self.assertTrue('*1*' in decoratedList)

if __name__ == '__main__':
    unittest.main()

