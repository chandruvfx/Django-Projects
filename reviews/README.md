# First Django Project - Reviews

## Used mod_msgi and Apache for deployment (Windows)

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
 ![image](https://github.com/user-attachments/assets/2dae5225-a5c7-452b-92b7-1dac2e2f03a5)
4. Goto C:\Apache24\conf\httpd.conf
   ```
    Listen 127.0.0.10:80

    WSGIPythonHome "D:\django_projects"
    WSGIPythonPath "D:\django_projects\reviews"
    LoadFile "C:/Python39/python39.dll"
    LoadModule wsgi_module "d:/django_projects/lib/site-packages/mod_wsgi/server/mod_wsgi.cp39-win_amd64.pyd"
   ```
5. Goto C:\Apache24\conf\extra\httpd-vhosts.conf
   ```
   <VirtualHost 127.0.0.10:80>
        ServerName local-web-reviews.com
        ServerAlias local-web-reviews.com
        ErrorLog "D:\django_projects\reviews\reviews.error.log"
        CustomLog "D:\django_projects\reviews\reviews.access.log" combined
    
        DocumentRoot "D:\django_projects\reviews"
        <Directory D:\django_projects\reviews>
            Require all granted
        </Directory>
    
        <Directory "D:\django_projects\reviews">
            <Files wsgi.py>
                Require all granted
            </Files>
        </Directory>
    
        Alias /static "D:\django_projects\reviews\central_statics"
        <Directory "D:\django_projects\reviews\central_statics">
            Require all granted
        </Directory>
    
        Alias /media D:\django_projects\reviews\images
        <Directory D:\django_projects\reviews\images>
            Require all granted
        </Directory>
    
        WSGIScriptAlias / "D:\django_projects\reviews\reviews\wsgi.py" 
    </VirtualHost>
   ```
6. Restart apache server
   ```
      httpd -k restart
   ```
   




