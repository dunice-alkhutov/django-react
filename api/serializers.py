from rest_framework import serializers
from .models import Book, Board

class BookSerializer(serializers.ModelSerializer):

	class Meta:
		model = Book
		fields = ('title', 'author')


class BoardSerializer(serializers.ModelSerializer):

	class Meta:
		model = Board
		fields = ('title', 'description')


