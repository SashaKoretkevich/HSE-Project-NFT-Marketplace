## Запуск маркетплейса с помощью Docker

1. Скачайте с Google Drive файл marketplace14transfer.tar по ссылке: <https://drive.google.com/drive/folders/1Lv7sW_-4DovdejO9KlFRD7jGHFHMrUQS?usp=sharing>
2. В терминале из директории, которая содержит файл marketplace14transfer.tar, запустите команду:
   ```docker load --input marketplace14transfer.tar```
  Файл появится в разделе Containers в приложении Docker Desktop.
3. В приложении Docker Desktop откройте терминал и введите команду
   ```docker run -p 3000:3000 marketplace14transfer```

