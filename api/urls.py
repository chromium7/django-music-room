from django.urls import path

from .views import RoomView

urlpatterns = [
    path('list/', RoomView.as_view()),

]
