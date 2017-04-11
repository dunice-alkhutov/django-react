from rest_framework import generics

from .models import Book, Board
from .serializers import BookSerializer, BoardSerializer 

class BookList(generics.ListCreateAPIView):
	"""
	API endpoint for listing and creating Book objects
	"""
	queryset = Book.objects.all()
	serializer_class = BookSerializer


class BoardList(generics.ListCreateAPIView):
	"""
	API endpoint for listing and creating Board objects
	"""
	queryset = Board.objects.all()
	serializer_class = BoardSerializer