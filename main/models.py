from django.db import models


class Group(models.Model):
    STATUS_EDIT = 'edit'
    STATUS_DELETE = 'delete'

    STATUS_CHOICES = (
        (STATUS_EDIT, 'Edit'),
        (STATUS_DELETE, 'Delete'),
    )
    name = models.CharField(
        "Name of the Group",
        max_length=100,
        unique=True,
    )
    description = models.TextField(
        "Description",
    )
    actions = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default=STATUS_EDIT,
    )

    class Meta:
        verbose_name = 'Group'
        verbose_name_plural = 'List of Groups'

    def __str__(self):
        return f'{self.name} : {self.description}'


class User(models.Model):
    STATUS_EDIT = 'edit'
    STATUS_DELETE = 'delete'

    STATUS_CHOICES = (
        (STATUS_EDIT, 'Edit User'),
        (STATUS_DELETE, 'Delete User'),
    )
    username = models.CharField(
        "User nickname",
        max_length=100,
        unique=True,
    )
    email = models.EmailField(
        max_length=25,
        unique=True,
    )
    created = models.DateTimeField(
        auto_now=True,
    )
    group = models.ForeignKey(
        Group,
        verbose_name="Group",
        on_delete=models.CASCADE,
        null=True,
    )
    actions = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default=STATUS_EDIT,
    )

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'list of Users'

    def __str__(self):
        return f'{self.username}: {self.email}'