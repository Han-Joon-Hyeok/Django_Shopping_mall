from django.db import models
from django.contrib.auth.models import(
    BaseUserManager, AbstractBaseUser, PermissionsMixin
)
# Create your models here.

class UserManager(BaseUserManager) :
    def create_user(self, user_id, username, address, email, phone_number, password=None):
        if not email :
            raise ValueError(_("이메일을 입력해주세요."))
        user = self.model(
            user_id = user_id,
            username = username,
            address = address,
            email = self.normalize_email(email),
            phone_number = phone_number,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, user_id, username, address, email, password, phone_number):

        user = self.create_user(
            user_id = user_id, 
            username = username,
            address = address,
            email = self.normalize_email(email),
            password = password,
            phone_number = phone_number,
        )
        user.is_superuser = True
        user.is_active = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    user_id             = models.CharField(max_length=20, unique=True)
    username            = models.CharField(max_length=10)
    password            = models.CharField(max_length=20)
    address             = models.CharField(max_length=40)
    phone_number        = models.CharField(max_length=20)
    email               = models.EmailField(max_length=30, unique=True)
    membership          = models.CharField(max_length=20, default="브론즈")
    registered_date     = models.DateTimeField(auto_now_add=True)
    is_superuser        = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'user_id'
    REQUIRED_FIELDS = ['username', 'address', 'email', 'phone_number']
    
    def __str__(self):
        return self.username
    
    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_superuser