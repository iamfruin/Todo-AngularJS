@echo Installing Chocolatey...
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin
@echo Finished installing Node
@echo Installing NodeJS...
cinst nodejs.install
@echo Finished installing NodeJS
@echo Installing MongoDB...
cinst mongodb
@echo Finished installing MongoDB
@echo Installing npm packages
install_npm_modules
@echo Finished npm node packages