from django.urls import path , include
from . import views

app_name = 'account'

urlpatterns=[
    path('logout/', views.logoutview, name='logout'),

    path('dustbindata/', views.baseview, name='basemap'),

    path('register/', views.registerview, name='register'),

    path('complain/', views.complains, name = 'complain'),

    path('', views.logged, name='login')
]
