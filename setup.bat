@echo Installing Chocolatey...
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin
@echo Finished installing Node
@echo Installing NodeJS...
cinst nodejs.install
@echo Finished installing NodeJS
@echo Installing npm packages
npm install restify
npm install connect
@echo Finished npm node packages