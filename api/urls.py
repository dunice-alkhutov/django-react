from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.BookList.as_view(), name='book-list'),
	url(r'^get_boards/$', views.BoardList.as_view(), name='book-list'),
]
