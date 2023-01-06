from django.urls import path
from . import views

urlpatterns = [
    path("",views.getRoutes, name="index"), 
    path("notes/",views.getNotes,name="get-all-notes"), 
    path("notes/create",views.createNote,name="create-note"),
    path("notes/<str:pk>/update",views.updateNote,name="update-note"),
    path("notes/<str:pk>/delete",views.deleteNote,name="delete-note"),
    path("notes/<str:pk>/",views.getNote,name="get-a-note")   
]
