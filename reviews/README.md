# First Reviews Django Project

## Used mod_msgi and Apache for deployment

A Simple Review Project Developed inside django project with the purpose of achieving conect js, fetch, html, css

### Important Deployment settings 

Django:
______

settings.py
```
DEBUG = False
ALLOWED_HOSTS = ['127.0.0.10']
```
have to execute  ```python manage.py collectstatic```
---

Apache Server Side
__________________

1. Goto C:\Windows\System32\drivers\etc
2. Open ```hosts``` file
3. Add at the end of the section


