from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, AccountSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Account

# Create your views here.
class AccountListCreate(generics.ListCreateAPIView):
    serializer_class = AccountSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Account.objects.filter(owner=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(owner=self.request.user)
        else:
            print(serializer.errors)


class AccountDelete(generics.DestroyAPIView): 
    serializer_class = AccountSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Account.objects.filter(owner=user)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

