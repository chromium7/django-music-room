from django.urls import path

from .views import RoomView, CreateRoomView

urlpatterns = [
    path('list/', RoomView.as_view()),
    path('create-room/', CreateRoomView.as_view()),
]
