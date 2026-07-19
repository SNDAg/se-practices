class TestedClass:
    def __init__(self, fileReader):
        self._fileReader = fileReader
        
    def decorateFetchedList(self):
        input = self._fileReader.fetch()
        output = []
        for x in input:
            output.append('*' + str(x) + '*')
        return output