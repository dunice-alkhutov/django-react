from django.db import models

class Book(models.Model):
	title = models.CharField(max_length=200, unique=True)
	author = models.CharField(max_length=100)

class Board(models.Model):
	title = models.CharField(max_length=100)
	description = models.CharField(max_length=200, default='', blank=True)